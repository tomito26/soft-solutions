import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicePageContent } from "@/types/types";

/** Full-bleed service-page hero mirroring the home hero (navy gradient over photo). */
const ServiceHero = ({ hero }: { hero: ServicePageContent["hero"] }) => {
  return (
    <section className="relative flex h-[60vh] min-h-[440px] w-full items-center">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* navy gradient keeps the photo readable while grounding the copy */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
      <div className="container-x relative z-10 w-full">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs md:text-sm uppercase font-bold tracking-[0.18em] text-gold">
            {hero.eyebrow}
          </p>
          <h1 className="text-3xl md:text-6xl font-bold text-white">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-sm md:text-lg text-white/80">
            {hero.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact-us">
              <Button size="lg" variant="gold">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <p className="mt-8 flex items-center gap-1 text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 stroke-white/70" />
            <span className="text-white">{hero.breadcrumb}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
