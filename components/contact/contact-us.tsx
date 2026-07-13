import { ContactUsForm } from "@/components/forms/contact-us-form";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="section flex gap-12 md:gap-20 md:flex-row flex-col">
      <div className="flex-1">
        <p className="text-xs md:text-sm uppercase font-bold tracking-[0.18em] text-gold mb-3">
          Need any help?
        </p>
        <h1 className="text-navy text-3xl md:text-5xl font-bold mb-4">
          Get in touch with us
        </h1>
        <p className="text-brand-slate mb-10 max-w-md">
          Got questions, ideas, or feedback? Whether you&apos;re curious about
          our services, have a project in mind, or just want to say hello, our
          team is ready to assist.
        </p>

        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5">
              <Phone className="h-5 w-5 stroke-navy" />
            </span>
            <div>
              <p className="font-semibold text-navy">Main Support Line</p>
              <a
                href="tel:+254712070289"
                className="text-brand-slate hover:text-royal"
              >
                +254 712 070 289
              </a>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5">
              <Mail className="h-5 w-5 stroke-navy" />
            </span>
            <div>
              <p className="font-semibold text-navy">General Enquiries</p>
              <a
                href="mailto:info@softsolutions.com"
                className="text-brand-slate hover:text-royal"
              >
                info@softsolutions.com
              </a>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5">
              <MapPin className="h-5 w-5 stroke-navy" />
            </span>
            <div>
              <p className="font-semibold text-navy">Office</p>
              <p className="text-brand-slate">Nairobi, Kenya</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex-1 rounded-2xl border border-line bg-white p-6 md:p-8 shadow-sm">
        <ContactUsForm />
      </div>
    </section>
  );
};

export default ContactUs;
