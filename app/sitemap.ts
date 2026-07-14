import type { MetadataRoute } from "next";
import { absoluteUrl, servicePagesSeo } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Service routes are derived from the SEO config so the sitemap can't drift
  // from the navigation.
  const servicePaths = Object.keys(servicePagesSeo);

  const entries: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact-us", changeFrequency: "yearly", priority: 0.6 },
    ...servicePaths.map((path) => ({
      path,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];

  return entries.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
