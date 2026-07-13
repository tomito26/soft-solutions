export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

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