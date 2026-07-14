import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/home/lib/ui/section-header";
import type { FaqItem } from "@/types/types";

type FaqSectionProps = {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

/**
 * Visible, accessible FAQ list. Uses native <details>/<summary> so the answer
 * text is always in the DOM (crawlable and citable by answer engines) with no
 * client JS. Pair with the FAQPage JSON-LD from `lib/seo.ts` on the same page.
 */
const FaqSection = ({
  items,
  eyebrow = "FAQ",
  title = "Frequently asked questions",
  subtitle,
}: FaqSectionProps) => {
  if (!items?.length) return null;

  return (
    <section className="section bg-mist">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mx-auto mt-10 max-w-3xl divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
        {items.map((item) => (
          <details key={item.question} className="group px-6 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-navy md:text-lg [&::-webkit-details-marker]:hidden">
              {item.question}
              <ChevronDown className="h-5 w-5 shrink-0 text-brand-slate transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm text-brand-slate md:text-base">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
