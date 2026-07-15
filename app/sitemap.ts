import type { MetadataRoute } from "next";
import { absoluteUrl, servicePagesSeo, type ServiceRoute } from "@/lib/seo";
import { getPublishedSlugs } from "@/lib/content";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];
type Entry = { path: string; changeFrequency: ChangeFrequency; priority: number };

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Service routes are derived from the SEO config, and content routes from the
  // MDX files on disk, so the sitemap can't drift from the site.
  const servicePaths = Object.keys(servicePagesSeo) as ServiceRoute[];
  const blogSlugs = getPublishedSlugs("blog");
  const caseStudySlugs = getPublishedSlugs("case-studies");

  const entries: Entry[] = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact-us", changeFrequency: "yearly", priority: 0.6 },
    ...servicePaths.map((path) => ({
      path,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
    { path: "/case-studies", changeFrequency: "monthly", priority: 0.7 },
    ...blogSlugs.map((slug) => ({
      path: `/blog/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...caseStudySlugs.map((slug) => ({
      path: `/case-studies/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];

  return entries.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
