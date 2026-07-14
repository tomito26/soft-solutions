import type { Metadata } from "next";
import ContactUs from "@/components/contact/contact-us";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Soft Solutions Technologies in Westlands, Nairobi. Questions, ideas, or a project in mind? Our team replies within one business day.",
  path: "/contact-us",
});

export default function ContactUsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact-us" },
        ])}
      />
      <ContactUs />
    </>
  );
}
