import type { Metadata } from "next";
import { contactDetails } from "@/lib/constants";
import type { FaqItem, ServiceRoute } from "@/types/types";

export type { ServiceRoute };

/**
 * Single source of truth for site-wide SEO/metadata values.
 * The production URL is read from NEXT_PUBLIC_SITE_URL so it can be overridden
 * per deploy; the fallback is the live domain.
 */
export const siteConfig = {
  // Production domain. Overridable per-deploy via NEXT_PUBLIC_SITE_URL.
  // No trailing slash — paths are joined with `new URL(path, url)`.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://softsolutions.co.ke",
  name: "Soft Solutions Technologies",
  shortName: "Soft Solutions",
  description:
    "Soft Solutions Technologies is a Nairobi-based IT company delivering software development, cloud, cyber security, and networking solutions tailored to your business.",
  locale: "en_KE",
  logo: "/assets/1.png",
  // Representative photo for LocalBusiness `image` (Google prefers a real
  // photo, ≥1200px wide, over the logo). Distinct from `logo` on purpose.
  image: "/assets/home-hero.jpg",
  keywords: [
    "IT solutions Kenya",
    "software development Nairobi",
    "cyber security Kenya",
    "cloud services Nairobi",
    "networking solutions Kenya",
    "IT company Nairobi",
    "Soft Solutions Technologies",
  ],
} as const;

/** Absolute URL for a site-relative path. */
export const absoluteUrl = (path: string) =>
  new URL(path, siteConfig.url).toString();

/** RSS feed of blog posts, served by `app/feed.xml/route.ts`. */
export const FEED_PATH = "/feed.xml";
export const FEED_TITLE = `${siteConfig.name} — Insights`;

type BuildMetadataArgs = {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/about". Drives the canonical + OG url. */
  path: string;
  keywords?: string[];
  /** "article" emits article Open Graph tags (blog posts, case studies). */
  type?: "website" | "article";
  /** ISO date — article only. */
  publishedTime?: string;
  /** ISO date — article only. */
  modifiedTime?: string;
  /** Author names — article only. */
  authors?: string[];
  /** Topic tags — article only. */
  tags?: string[];
  /** When set, advertises the RSS feed for autodiscovery (e.g. blog listing). */
  feed?: { title: string };
};

/**
 * Builds a consistent Next `Metadata` object for a page: canonical URL plus
 * Open Graph and Twitter tags. The root layout supplies the title template and
 * shared defaults, so pages only pass their unique values. The per-page
 * `opengraph-image.tsx` route supplies the share image automatically, so no
 * image is set here.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  tags,
  feed,
}: BuildMetadataArgs): Metadata {
  const openGraph: Metadata["openGraph"] =
    type === "article"
      ? {
          type: "article",
          url: path,
          siteName: siteConfig.name,
          title,
          description,
          locale: siteConfig.locale,
          publishedTime,
          modifiedTime,
          authors,
          tags,
        }
      : {
          type: "website",
          url: path,
          siteName: siteConfig.name,
          title,
          description,
          locale: siteConfig.locale,
        };

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
      ...(feed
        ? {
            types: {
              "application/rss+xml": [{ url: FEED_PATH, title: feed.title }],
            },
          }
        : {}),
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/**
 * Per-service SEO copy, keyed by route. Titles are written for local search
 * intent (service + location); descriptions reuse each page's hero intro.
 * The keys drive the sitemap so it can't drift from the nav.
 */
export const servicePagesSeo = {
  "/software-development": {
    name: "Software Development",
    serviceType: "Software Development",
    title: "Software Development Services in Nairobi, Kenya",
    description:
      "Custom software, web, and mobile solutions engineered around your business — from first idea to ongoing support. Built by Soft Solutions Technologies in Nairobi.",
  },
  "/cloud-services": {
    name: "Cloud Services",
    serviceType: "Cloud Computing Services",
    title: "Cloud Services & Migration in Nairobi, Kenya",
    description:
      "Scalable, secure cloud solutions — from infrastructure and migration to backup, security, and fully managed operations — for businesses across Kenya.",
  },
  "/cyber-security": {
    name: "Cyber Security",
    serviceType: "Cyber Security Services",
    title: "Cyber Security Services in Nairobi, Kenya",
    description:
      "Advanced protection that safeguards your business from data breaches, ransomware, and evolving cyber threats — across every layer of your infrastructure.",
  },
  "/networking": {
    name: "Networking",
    serviceType: "Network Infrastructure Services",
    title: "Networking & IT Infrastructure in Nairobi, Kenya",
    description:
      "Secure, efficient networks designed, deployed, and maintained to keep your business connected and running at full speed — enterprise networking across Kenya.",
  },
} as const satisfies Record<
  ServiceRoute,
  { name: string; serviceType: string; title: string; description: string }
>;

// ---------------------------------------------------------------------------
// Structured data (Schema.org JSON-LD) builders. Each returns a plain object
// that is rendered by <JsonLd />.
// ---------------------------------------------------------------------------

const ORGANIZATION_ID = `${siteConfig.url}/#organization`;

/** Organization / LocalBusiness schema — rendered site-wide from the layout. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.image),
    description: siteConfig.description,
    email: contactDetails.email.value,
    telephone: contactDetails.phone.value,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Westlands",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi",
      addressCountry: "KE",
    },
    areaServed: { "@type": "Country", name: "Kenya" },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactDetails.phone.value,
      email: contactDetails.email.value,
      contactType: "customer service",
      areaServed: "KE",
      availableLanguage: ["English"],
    },
    // TODO(client): add social profile URLs to `sameAs` once the footer links
    // point to real accounts.
  };
}

/** WebSite schema — rendered site-wide from the layout. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
  };
}

/** Metadata for a service page, built from its `servicePagesSeo` entry. */
export function serviceMetadata(route: ServiceRoute): Metadata {
  const service = servicePagesSeo[route];
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: route,
  });
}

/** BreadcrumbList (Home › <service>) for a service page. */
export function serviceBreadcrumb(route: ServiceRoute) {
  return breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: servicePagesSeo[route].name, path: route },
  ]);
}

/** Service schema for an individual service page. */
export function serviceSchema(route: ServiceRoute) {
  const service = servicePagesSeo[route];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    url: absoluteUrl(route),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "Kenya" },
  };
}

/** FAQPage schema — feeds answer engines direct question/answer pairs. */
export function faqSchema(items?: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (items ?? []).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * BlogPosting schema for a blog post or case study. Feeds Google's article rich
 * results and gives answer engines authorship/recency signals. Author defaults
 * to the organization when no person is named.
 */
export function articleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    ...(image ? { image } : {}),
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: authorName
      ? { "@type": "Person", name: authorName }
      : { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
  };
}

/** BreadcrumbList schema from an ordered list of crumbs. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
