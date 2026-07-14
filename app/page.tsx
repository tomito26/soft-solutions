import Home from "@/components/home/home";
import JsonLd from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/seo";
import { homeFaqs } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <JsonLd data={faqSchema(homeFaqs)} />
      <Home />
    </div>
  );
}
