import { ContactUsForm } from "@/components/forms/contact-us-form";
import Reveal from "@/components/home/lib/ui/reveal";
import { contactDetails, contactHero } from "@/lib/constants";
import { ChevronRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const details = [
  { icon: Phone, ...contactDetails.phone },
  { icon: Mail, ...contactDetails.email },
  { icon: MapPin, ...contactDetails.office },
  { icon: Clock, ...contactDetails.hours },
];

const ContactUs = () => {
  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="relative flex h-[52vh] min-h-[360px] w-full items-center">
        <Image
          src={contactHero.image}
          alt={contactHero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        <div className="container-x relative z-10 w-full">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs md:text-sm uppercase font-bold tracking-[0.18em] text-gold">
              {contactHero.eyebrow}
            </p>
            <h1 className="text-3xl md:text-6xl font-bold text-white">
              {contactHero.title}
            </h1>
            <p className="mt-5 max-w-xl text-sm md:text-lg text-white/80">
              {contactHero.intro}
            </p>
            <p className="mt-8 flex items-center gap-1 text-sm text-white/70">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 stroke-white/70" />
              <span className="text-white">{contactHero.breadcrumb}</span>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Contact rail + form ---------- */}
      <section className="section flex flex-col gap-12 md:flex-row md:gap-20">
        <Reveal className="flex-1">
          <p className="mb-3 text-xs md:text-sm uppercase font-bold tracking-[0.18em] text-gold">
            Need any help?
          </p>
          <h2 className="mb-4 text-2xl md:text-4xl font-bold text-navy">
            Let&apos;s start a conversation
          </h2>
          <p className="mb-10 max-w-md text-sm md:text-base text-brand-slate">
            Whether you&apos;re curious about our services, have a project in
            mind, or just want to say hello, our team is ready to assist.
          </p>

          <ul className="space-y-6">
            {details.map((item) => (
              <li key={item.label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5">
                  <item.icon className="h-5 w-5 stroke-navy" />
                </span>
                <div>
                  <p className="font-semibold text-navy">{item.label}</p>
                  {"href" in item && item.href ? (
                    <a
                      href={item.href}
                      className="text-brand-slate transition-colors hover:text-royal"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-brand-slate">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-2 text-sm font-medium text-navy">
            <span className="h-2 w-2 rounded-full bg-success" />
            {contactDetails.replyNote}
          </p>
        </Reveal>

        <Reveal className="flex-1">
          <div className="rounded-2xl border border-line bg-white p-6 shadow-sm md:p-8">
            <ContactUsForm />
          </div>
        </Reveal>
      </section>

      {/* ---------- Map ---------- */}
      <section className="container-x pb-20 md:pb-28">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-line shadow-sm">
            <iframe
              title="Soft Solutions Technologies office location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                contactDetails.mapQuery
              )}&z=13&output=embed`}
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default ContactUs;
