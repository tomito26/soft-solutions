import type { Metadata } from "next";
import About from "@/components/about/about";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us — Nairobi, Kenya",
  description:
    "Meet Soft Solutions Technologies — a Nairobi-based team of IT professionals delivering software, cloud, cyber security, and networking solutions that help businesses thrive.",
  path: "/about",
});

const Aboutpage = () => {
  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <About />
    </div>
  );
};

export default Aboutpage;
