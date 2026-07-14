export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

// A sub-link inside a nav dropdown (e.g. the Services menu).
export interface NavSubLink {
  title: string;
  link: string;
  icon: LucideIcon;
  description: string;
}

// A top-level nav entry: either a direct link or a dropdown with sub-links.
export interface NavLink {
  title: string;
  link?: string;
  subLink?: NavSubLink[];
}

// A single question/answer pair for a FAQ section (drives FAQPage JSON-LD).
export interface FaqItem {
  question: string;
  answer: string;
}

// The four service routes — the single source of truth for service page keys
// (SEO copy, FAQs, sitemap). Keeping this as one union lets the compiler catch
// a missing or misspelled route across the config.
export type ServiceRoute =
  | "/software-development"
  | "/cloud-services"
  | "/cyber-security"
  | "/networking";

// One alternating image/text row on a service page.
export interface ServiceFeature {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

// Full content model for a single service page (see lib/constants.ts).
export interface ServicePageContent {
  hero: {
    image: string;
    imageAlt: string;
    eyebrow: string;
    title: string;
    breadcrumb: string;
    intro: string;
  };
  features: ServiceFeature[];
  included: {
    eyebrow: string;
    title: string;
    subtitle?: string;
    items: ServiceType[];
  };
  cta: {
    title: string;
    subtitle: string;
  };
}