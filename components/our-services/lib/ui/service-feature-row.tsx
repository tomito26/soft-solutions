import Image from "next/image";
import { cn } from "@/lib/utils";
import { ServiceFeature } from "@/types/types";
import Reveal from "@/components/home/lib/ui/reveal";

/** One alternating image/text row. `reverse` flips image to the right on desktop. */
const ServiceFeatureRow = ({
  feature,
  reverse = false,
}: {
  feature: ServiceFeature;
  reverse?: boolean;
}) => {
  return (
    <Reveal
      className={cn(
        "flex flex-col-reverse items-center gap-6 md:gap-12",
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      <div className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-2xl shadow-lg md:h-[328px] md:w-[500px]">
        <Image
          src={feature.image}
          alt={feature.imageAlt}
          fill
          sizes="(min-width: 768px) 500px, 100vw"
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="mb-4 text-2xl md:text-4xl lg:text-5xl font-bold text-navy">
          {feature.title}
        </h2>
        <p className="text-sm md:text-base text-brand-slate">
          {feature.description}
        </p>
      </div>
    </Reveal>
  );
};

export default ServiceFeatureRow;
