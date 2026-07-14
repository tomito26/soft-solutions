import {
  our_partners,
  our_services,
  metrics,
  sectionHeaders,
  services,
  testimonials,
  why_choose_us,
} from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import ServiceCard from "./lib/ui/service-card";
import Testimonial from "./lib/ui/testimonial";
import WhyChooseUsCard from "./lib/ui/why-choose-us-card";
import SectionHeader from "./lib/ui/section-header";
import Reveal from "./lib/ui/reveal";
import Stat from "./lib/ui/stat";
import CtaBand from "./lib/ui/cta-band";

const Home = () => {
  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="relative flex h-[86vh] min-h-[560px] w-full items-center">
        <Image
          className="object-cover object-center"
          src="/assets/home-hero.jpg"
          fill
          priority
          sizes="100vw"
          alt="Team collaborating in a modern office"
        />
        {/* navy gradient keeps the photo readable while grounding the copy */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
        <div className="container-x relative z-10 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Empowering Your Business with Cutting-Edge IT Solutions
            </h1>
            <p className="mt-6 max-w-xl text-sm md:text-lg text-white/80">
              We deliver innovative, reliable technology solutions tailored to
              your needs — from expert software development to secure, scalable
              infrastructure.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/contact-us">
                <Button size="lg" variant="gold">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#capabilities">
                <Button size="lg" variant="heroOutline">
                  Explore Services
                </Button>
              </Link>
            </div>
            <p className="mt-10 text-xs md:text-sm uppercase tracking-[0.15em] text-white/60">
              Trusted by Safaricom, Cisco &amp; leading enterprises
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Capabilities (icon grid) ---------- */}
      <section id="capabilities" className="section">
        <SectionHeader
          eyebrow={sectionHeaders.capabilities.eyebrow}
          title={sectionHeaders.capabilities.title}
          subtitle={sectionHeaders.capabilities.subtitle}
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 60} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Who we are ---------- */}
      <section className="bg-navy container-x py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-last md:order-first">
            <div className="relative h-[280px] w-full overflow-hidden rounded-2xl md:h-[420px] md:w-[90%]">
              <Image
                src="/assets/businesswoman-engaging-planning-session-with-realtor-contractor.jpg"
                alt="Consultants in a planning session"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -top-8 -right-2 hidden h-[200px] w-[280px] overflow-hidden rounded-2xl border-4 border-navy shadow-xl md:block">
              <Image
                src="/assets/three-happy-businesspeople-using-gadgets-office.jpg"
                alt="Team using devices in the office"
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal>
            <p className="mb-3 text-xs md:text-sm uppercase font-bold tracking-[0.18em] text-gold">
              Who we are
            </p>
            <h2 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold text-white">
              Highly Tailored IT Design, Management &amp; Support Services
            </h2>
            <p className="mb-4 text-sm md:text-base text-white/80">
              We specialize in delivering comprehensive IT solutions tailored to
              your business needs. Whether you&apos;re streamlining operations
              with custom software, building a responsive web presence, or
              securely managing your data in the cloud, our team of experts is
              here to help.
            </p>
            <p className="mb-8 text-sm md:text-base text-white/80">
              With years of experience and a passion for innovation, we bring
              your vision to life through technology.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold text-gold hover:gap-3 transition-all"
            >
              More about us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- What we offer (service pages) ---------- */}
      <section className="section">
        <SectionHeader
          eyebrow={sectionHeaders.offer.eyebrow}
          title={sectionHeaders.offer.title}
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {our_services.map((service, i) => (
            <Reveal key={service.id} delay={i * 60} className="h-full">
              <Link href={service.link} className="group block h-full">
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-royal/40 hover:shadow-lg">
                  <div className="relative mx-auto mb-4 h-16 w-16">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="mb-2 text-base md:text-lg font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-slate">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center justify-center gap-1 text-sm font-semibold text-royal">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
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

      {/* ---------- Why choose us ---------- */}
      <section className="flex w-full flex-col md:flex-row">
        <div className="relative h-[320px] w-full shrink-0 md:h-auto md:w-1/2">
          <Image
            src="/assets/medium-shot-colleagues-working-office.jpg"
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Team discussing performance"
          />
        </div>
        <div className="w-full px-4 py-16 md:w-1/2 md:py-24 md:pl-12 lg:pr-[80px] xl:pr-[100px] 2xl:pr-[160px]">
          <SectionHeader
            eyebrow={sectionHeaders.why.eyebrow}
            title={sectionHeaders.why.title}
            subtitle={sectionHeaders.why.subtitle}
            align="left"
          />
          <div className="mt-10">
            {why_choose_us.map((item, i) => (
              <Reveal key={item.id} delay={i * 60}>
                <WhyChooseUsCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="section bg-mist">
        <SectionHeader
          eyebrow={sectionHeaders.testimonials.eyebrow}
          title={sectionHeaders.testimonials.title}
        />
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimony, i) => (
            <Reveal key={testimony.id} delay={i * 80} className="h-full">
              <Testimonial testimony={testimony} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Partners ---------- */}
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

export default Home;
