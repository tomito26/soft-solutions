import { absoluteUrl, servicePagesSeo, siteConfig } from "@/lib/seo";
import { contactDetails, homeFaqs } from "@/lib/constants";

// Served at /llms.txt — a curated, machine-readable map of the site for LLMs
// and AI answer engines (the emerging llms.txt convention). Generated from the
// same SEO config as the rest of the site so it can't drift.
export const dynamic = "force-static";

export function GET() {
  const services = Object.entries(servicePagesSeo)
    .map(
      ([path, s]) => `- [${s.name}](${absoluteUrl(path)}): ${s.description}`
    )
    .join("\n");

  const faqs = homeFaqs
    .map((f) => `### ${f.question}\n${f.answer}`)
    .join("\n\n");

  const body = `# ${siteConfig.name}

> ${siteConfig.description}

Soft Solutions Technologies is a Nairobi-based IT company providing software development, cloud services, cyber security, and networking solutions for businesses across Kenya.

## Services

${services}

## Key pages

- [Home](${siteConfig.url}/): Company overview and full range of IT services.
- [About](${absoluteUrl("/about")}): Team, mission, values, and how we work.
- [Contact](${absoluteUrl("/contact-us")}): Get in touch to discuss a project.

## Contact

- Email: ${contactDetails.email.value}
- Location: ${contactDetails.office.value}
- Hours: ${contactDetails.hours.value}

## FAQ

${faqs}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
