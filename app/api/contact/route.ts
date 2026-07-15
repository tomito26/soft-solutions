import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ContactFormSchema } from "@/lib/contact-schema";

// This route needs the Node.js runtime (nodemailer uses Node's net/tls),
// and must never be statically cached.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
// SMTP handshakes to the cPanel mail host can be slow; give the function more
// headroom than Vercel's 10s default so a slow-but-working send can complete
// (and so our own nodemailer timeouts below fire first with a precise error).
export const maxDuration = 60;

const CONTACT_TO = process.env.CONTACT_TO;

function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  // Logged at error level so it surfaces in Vercel's (error-filtered) runtime logs.
  console.error("[contact] SMTP env presence:", {
    host: host || "MISSING",
    port,
    user: user || "MISSING",
    pass: pass ? "set" : "MISSING",
    from: process.env.SMTP_FROM || "MISSING",
    to: process.env.CONTACT_TO || "MISSING",
  });

  if (!host || !user || !pass) {
    throw new Error(
      "Missing SMTP configuration. Set SMTP_HOST, SMTP_USER and SMTP_PASS."
    );
  }

  // On some shared cPanel hosts the mail service presents a certificate for the
  // server's own hostname (e.g. rbx107.truehost.cloud) rather than the mail
  // subdomain. SMTP_SERVERNAME lets TLS validate against that name so we keep
  // full certificate verification instead of disabling it.
  const servername = process.env.SMTP_SERVERNAME;

  return nodemailer.createTransport({
    host,
    port,
    // 465 = implicit TLS; anything else (e.g. 587) upgrades via STARTTLS.
    secure: port === 465,
    auth: { user, pass },
    // Fail fast with a specific error (ETIMEDOUT/ECONNECTION) instead of hanging
    // until Vercel kills the function with an opaque 504.
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
    ...(servername ? { tls: { servername } } : {}),
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = ContactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 422 }
    );
  }

  const { name, email, message } = parsed.data;

  try {
    const transport = getTransport();

    await transport.sendMail({
      // The From must be an address we're authorised to send as (the SMTP
      // account); the visitor's address goes in Reply-To so replies reach them.
      from: `"Soft Solutions Website" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: `"${name}" <${email}>`,
      subject: `New contact enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#0f172a">
          <h2 style="margin:0 0 16px">New contact enquiry</h2>
          <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0 0 16px"><strong>Email:</strong>
            <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
          </p>
          <p style="margin:0 0 4px"><strong>Message:</strong></p>
          <p style="margin:0;white-space:pre-wrap">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    // Log the nodemailer error's structured fields so the real cause (timeout,
    // connection refused, auth, etc.) is visible in Vercel's runtime logs.
    const err = error as { code?: string; command?: string; response?: string; message?: string };
    console.error("Failed to send contact email:", {
      code: err.code,
      command: err.command,
      response: err.response,
      message: err.message,
    });
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
