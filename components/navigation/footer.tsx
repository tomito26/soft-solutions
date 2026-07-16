import { links } from "@/lib/constants";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const socials = [
  { label: "Soft Solutions on Facebook", href: "#", Icon: Facebook },
  { label: "Soft Solutions on Instagram", href: "#", Icon: Instagram },
  { label: "Soft Solutions on LinkedIn", href: "#", Icon: Linkedin },
  { label: "Soft Solutions on Twitter", href: "#", Icon: Twitter },
];

const headingClass =
  "relative inline-block text-sm font-semibold uppercase tracking-wide text-white mb-4 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-10 after:bg-gold after:content-['']";
const linkClass =
  "inline-block text-base text-white/80 hover:text-gold transition-colors";

const Footer = () => {
  const serviceLinks =
    links.find((link) => link.subLink && link.subLink.length > 0)?.subLink ?? [];

  return (
    <footer className="bg-royal px-4 md:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <div className="col-span-4">
          <h2 className="text-2xl font-bold text-white mb-3">
            Soft Solutions Technologies
          </h2>
          <p className="text-base mb-3 text-white/60">
            It is an IT solutions company specializing in system design, web and
            app development, cloud storage, and various other IT services.
          </p>
          <p className="text-base text-white/60">Nairobi, Kenya</p>
        </div>
        <div className="col-span-3">
          <h2 className={headingClass}>Important Links</h2>
          <ul className="space-y-2">
            {links.map(
              (link) =>
                link.link && (
                  <li key={link.title}>
                    <Link className={linkClass} href={link.link}>
                      {link.title}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
        <div className="col-span-2">
          <h2 className={headingClass}>Our Services</h2>
          <ul className="space-y-2">
            {serviceLinks.map((link, index) => (
              <li key={index}>
                <Link className={linkClass} href={link.link}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-3">
          <div className="flex items-center gap-3">
            <Phone className="h-6 w-6 stroke-white shrink-0" />
            <div>
              <h2 className="text-base font-bold text-white">
                Main Support Line
              </h2>
              <a
                href="tel:0741842133"
                className="text-base text-white/80 hover:text-gold transition-colors"
              >
                0741842133
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <Mail className="h-6 w-6 stroke-white shrink-0" />
            <div>
              <h2 className="text-base font-bold text-white">
                General Enquiries
              </h2>
              <a
                href="mailto:info@softsolutions.co.ke"
                className="text-base text-white/80 hover:text-gold transition-colors"
              >
                info@softsolutions.co.ke
              </a>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            {socials.map(({ label, href, Icon }) => (
              <Link key={label} href={href} aria-label={label}>
                <div className="w-10 h-10 border border-white/40 hover:bg-gold hover:border-gold transition-colors cursor-pointer rounded-full flex justify-center items-center group">
                  <Icon className="stroke-white group-hover:stroke-royal h-4 w-4 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8">
        <p className="text-base text-white/60">
          Copyright © {new Date().getFullYear()} Soft Solutions Technologies® |
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
