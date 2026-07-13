import {
  aboutHero,
  metrics,
  our_partners,
  philosophies,
  process,
  sectionHeaders,
  values,
} from "@/lib/constants";
import { ArrowRight, ChevronRight, CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import CtaBand from "../home/lib/ui/cta-band";
import Reveal from "../home/lib/ui/reveal";
import SectionHeader from "../home/lib/ui/section-header";
import Stat from "../home/lib/ui/stat";

const About = () => {
  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="relative flex h-[70vh] min-h-[440px] w-full items-center">
        <Image
          src="/assets/professionals-explaining-corporate-software-details.jpg"
          alt="Colleagues discussing corporate software"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        <div className="container-x relative z-10 w-full">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs md:text-sm uppercase font-bold tracking-[0.18em] text-gold">
              {aboutHero.eyebrow}
            </p>
            <h1 className="text-3xl md:text-6xl font-bold text-white">
              {aboutHero.title}
            </h1>
            <p className="mt-6 max-w-xl text-sm md:text-lg text-white/80">
              {aboutHero.subtitle}
            </p>
            <p className="mt-8 flex items-center gap-1 text-sm font-medium text-white/70">
              <Link href="/" className="transition-colors hover:text-gold">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">About</span>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Who we are ---------- */}
      <section className="section">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-last md:order-first">
            <div className="relative h-[280px] w-full overflow-hidden rounded-2xl md:h-[420px]">
              <Image
                src="/assets/people-office-work-day (1).jpg"
                alt="The Soft Solutions team collaborating in the office"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal>
            <p className="mb-3 text-xs md:text-sm uppercase font-bold tracking-[0.18em] text-gold">
              Who we are
            </p>
            <h2 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold text-navy">
              Empowering Businesses Through Innovative Solutions
            </h2>
            <p className="mb-4 text-sm md:text-base text-brand-slate">
              We are a dynamic team of IT professionals committed to delivering
              innovative technology solutions that empower businesses to thrive
              in a fast-paced digital world.
            </p>
            <p className="mb-8 text-sm md:text-base text-brand-slate">
              With expertise spanning system design, web and app development,
              cloud storage, software development, IT consulting, data
              management, cyber security, and networking, we provide end-to-end
              IT services tailored to the unique needs of our clients.
            </p>
            <Link href="/contact-us">
              <Button size="lg" variant="gold">
                Work with us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- Philosophies (Mission / Vision / Commitment) ---------- */}
      <section className="section bg-mist">
        <SectionHeader
          eyebrow={sectionHeaders.philosophies.eyebrow}
          title={sectionHeaders.philosophies.title}
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {philosophies.map((philosophy, i) => (
            <Reveal key={philosophy.title} delay={i * 60} className="h-full">
              <div className="flex h-full flex-col items-center rounded-2xl border border-line bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold">
                  <philosophy.icon className="h-7 w-7 stroke-navy" />
                </div>
                <h3 className="mb-3 text-lg md:text-xl font-bold text-navy">
                  {philosophy.title}
                </h3>
                <p className="text-sm md:text-base text-brand-slate">
                  {philosophy.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Metrics band ---------- */}
      <section className="relative flex w-full items-center justify-center">
        <Image
          src="/assets/people-office.jpg"
          fill
          alt=""
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="container-x relative z-10 flex w-full flex-col items-center justify-between gap-12 py-20 md:flex-row md:py-24">
          {metrics.map((metric) => (
            <Stat
              key={metric.id}
              icon={<metric.icon className="stroke-gold h-9 w-9 shrink-0" />}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
            />
          ))}
        </div>
      </section>

      {/* ---------- Values ---------- */}
      <section className="section">
        <SectionHeader
          eyebrow={sectionHeaders.values.eyebrow}
          title={sectionHeaders.values.title}
          subtitle={sectionHeaders.values.subtitle}
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 60} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CircleCheck className="mb-4 h-8 w-8 stroke-royal" />
                <h3 className="mb-2 text-lg font-bold text-navy">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-brand-slate">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Our approach (process) ---------- */}
      <section className="section bg-mist">
        <SectionHeader
          eyebrow={sectionHeaders.approach.eyebrow}
          title={sectionHeaders.approach.title}
          subtitle={sectionHeaders.approach.subtitle}
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 60} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                    <item.icon className="h-6 w-6 stroke-gold" />
                  </div>
                  <span className="text-3xl font-bold text-line">
                    {item.step}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-navy">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-brand-slate">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Partners / trust strip ---------- */}
      <section className="section">
        <SectionHeader
          eyebrow={sectionHeaders.partners.eyebrow}
          title={sectionHeaders.partners.title}
        />
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {our_partners.map((partner) => (
            <div
              key={partner.id}
              className="relative h-[60px] w-[180px] opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={partner.logo}
                alt={partner.partner}
                fill
                sizes="180px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <CtaBand />
    </div>
  );
};

export default About;
