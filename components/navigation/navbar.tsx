"use client";

import { links } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const servicesLink = links.find((l) => l.subLink);
const serviceItems = servicesLink?.subLink ?? [];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false); // desktop hover
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);

  const isActive = (link: string) => pathname === link;
  const isServicesActive = serviceItems.some((s) => s.link === pathname);

  // shadow once scrolled
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile drawer is open
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // close the drawer on route change
  React.useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // close the drawer on Escape
  React.useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const underline =
    "border-b-2 border-transparent pb-1 text-base font-medium text-navy transition-colors hover:border-gold";

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow",
        scrolled && "shadow-md"
      )}
    >
      <div className="container-x flex h-20 md:h-[88px] items-center justify-between">
        {/* Logo → home */}
        <Link href="/" aria-label="Soft Solutions Technologies — home">
          <span className="relative block h-[44px] w-[150px] md:h-[52px] md:w-[176px]">
            <Image
              src="/assets/soft-solutions.svg"
              fill
              sizes="176px"
              alt="Soft Solutions Technologies logo"
              className="object-contain object-left"
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ title, link, subLink }) =>
            link ? (
              <li key={title}>
                <Link
                  href={link}
                  className={cn(underline, isActive(link) && "border-gold")}
                >
                  {title}
                </Link>
              </li>
            ) : (
              subLink && (
                <li
                  key={title}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((o) => !o)}
                    className={cn(
                      underline,
                      "inline-flex items-center gap-1.5",
                      isServicesActive && "border-gold"
                    )}
                  >
                    {title}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {/* pt-3 keeps a hover bridge between trigger and panel */}
                  <div
                    className={cn(
                      "absolute left-0 top-full pt-3 transition-opacity",
                      servicesOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    )}
                  >
                    <ul className="w-56 overflow-hidden rounded-xl border border-line bg-white py-2 shadow-lg">
                      {subLink.map((item) =>
                        item.link ? (
                          <li key={item.title}>
                            <Link
                              href={item.link}
                              className={cn(
                                "flex items-center border-l-2 border-transparent px-4 py-2.5 text-sm text-navy transition-colors hover:border-gold hover:bg-mist hover:text-royal",
                                isActive(item.link) &&
                                  "border-gold bg-mist font-semibold text-royal"
                              )}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </div>
                </li>
              )
            )
          )}
          <li>
            <Link href="/contact-us">
              <Button variant="primary" className="shrink-0">
                Contact Us
              </Button>
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-6 w-6 text-navy" />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-navy/40 animate-in fade-in"
            onClick={() => setMobileOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute right-0 top-0 flex h-screen w-[85%] max-w-sm flex-col bg-white shadow-xl animate-in slide-in-from-right duration-300"
          >
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-line px-6">
              <span className="relative block h-[40px] w-[150px]">
                <Image
                  src="/assets/soft-solutions.svg"
                  fill
                  sizes="150px"
                  alt="Soft Solutions Technologies logo"
                  className="object-contain object-left"
                />
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-6 w-6 text-navy" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6">
              {links.map(({ title, link, subLink }) =>
                link ? (
                  <Link
                    key={title}
                    href={link}
                    className={cn(
                      "border-b border-line py-3 text-lg font-medium text-navy",
                      isActive(link) && "text-royal"
                    )}
                  >
                    {title}
                  </Link>
                ) : (
                  subLink && (
                    <div key={title} className="border-b border-line">
                      <button
                        type="button"
                        aria-expanded={mobileServicesOpen}
                        onClick={() => setMobileServicesOpen((o) => !o)}
                        className={cn(
                          "flex w-full items-center justify-between py-3 text-lg font-medium text-navy",
                          isServicesActive && "text-royal"
                        )}
                      >
                        {title}
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform duration-200",
                            mobileServicesOpen && "rotate-180"
                          )}
                        />
                      </button>
                      {mobileServicesOpen && (
                        <ul className="pb-3 pl-4">
                          {subLink.map((item) =>
                            item.link ? (
                              <li key={item.title}>
                                <Link
                                  href={item.link}
                                  className={cn(
                                    "block py-2.5 text-base text-brand-slate",
                                    isActive(item.link) &&
                                      "font-semibold text-royal"
                                  )}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ) : null
                          )}
                        </ul>
                      )}
                    </div>
                  )
                )
              )}
            </nav>

            <div className="shrink-0 border-t border-line px-6 py-6">
              <Link href="/contact-us">
                <Button variant="gold" size="lg" className="w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
