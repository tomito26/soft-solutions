import { ServicePageContent } from "@/types/types";
import SectionHeader from "@/components/home/lib/ui/section-header";
import Reveal from "@/components/home/lib/ui/reveal";
import ServiceCard from "@/components/home/lib/ui/service-card";

/** Scannable "What's included" capability grid on a light band, for pacing variety. */
const ServiceIncluded = ({
  included,
}: {
  included: ServicePageContent["included"];
}) => {
  return (
    <section className="section bg-mist">
      <SectionHeader
        eyebrow={included.eyebrow}
        title={included.title}
        subtitle={included.subtitle}
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {included.items.map((item, i) => (
          <Reveal key={item.id} delay={i * 60} className="h-full">
            <ServiceCard service={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ServiceIncluded;
