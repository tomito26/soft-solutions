import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ContactFormSchema } from "@/lib/contact-schema";

// This route needs the Node.js runtime (nodemailer uses Node's net/tls),
// and must never be statically cached.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CONTACT_TO = process.env.CONTACT_TO;

function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

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
    console.error("Failed to send contact email:", error);
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
