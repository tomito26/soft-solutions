import React from "react";
import { softwareDevelopmentPage as page, serviceFaqs } from "@/lib/constants";
import ServiceHero from "@/components/our-services/lib/ui/service-hero";
import ServiceFeatureRow from "@/components/our-services/lib/ui/service-feature-row";
import ServiceIncluded from "@/components/our-services/lib/ui/service-included";
import CtaBand from "@/components/home/lib/ui/cta-band";
import FaqSection from "@/components/faq/faq-section";

const SoftwareDevelopment = () => {
  return (
    <div>
      <ServiceHero hero={page.hero} />
      <section className="section">
        <div className="space-y-20 md:space-y-28">
          {page.features.map((feature, i) => (
            <ServiceFeatureRow
              key={feature.title}
              feature={feature}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </section>
      <ServiceIncluded included={page.included} />
      <FaqSection items={serviceFaqs["/software-development"]} />
      <CtaBand title={page.cta.title} subtitle={page.cta.subtitle} />
    </div>
  );
};

export default SoftwareDevelopment;
