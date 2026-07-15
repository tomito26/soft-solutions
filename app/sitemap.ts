import type { MetadataRoute } from "next";
import { absoluteUrl, servicePagesSeo, type ServiceRoute } from "@/lib/seo";
import { getAllPosts, type Post } from "@/lib/content";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];
type Entry = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  lastModified: Date;
};

// Stable real date for pages whose content isn't tracked per-file (home, about,
// contact, service pages). Bump this when their copy is meaningfully revised —
// it's a truthful signal, unlike a moving build timestamp.
const SITE_LAST_MODIFIED = new Date("2026-07-15");

/** Most recent published date across a set of posts, or the site default. */
function newestDate(posts: Post[]): Date {
  if (posts.length === 0) return SITE_LAST_MODIFIED;
  return new Date(posts[0].frontmatter.updated ?? posts[0].frontmatter.date);
}

/** `updated` (if set) or `date` for a post, as a Date. */
function postDate(post: Post): Date {
  return new Date(post.frontmatter.updated ?? post.frontmatter.date);
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Service routes are derived from the SEO config, and content routes from the
  // MDX files on disk, so the sitemap can't drift from the site. Post dates come
  // from frontmatter so `lastmod` reflects real content changes, not the build.
  const servicePaths = Object.keys(servicePagesSeo) as ServiceRoute[];
  const blogPosts = getAllPosts("blog"); // newest first
  const caseStudyPosts = getAllPosts("case-studies");

  const entries: Entry[] = [
    {
      path: "/",
      changeFrequency: "monthly",
      priority: 1,
      lastModified: SITE_LAST_MODIFIED,
    },
    {
      path: "/about",
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: SITE_LAST_MODIFIED,
    },
    {
      path: "/contact-us",
      changeFrequency: "yearly",
      priority: 0.6,
      lastModified: SITE_LAST_MODIFIED,
    },
    ...servicePaths.map((path) => ({
      path,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      lastModified: SITE_LAST_MODIFIED,
    })),
    // Listing pages track the newest item they contain.
    {
      path: "/blog",
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: newestDate(blogPosts),
    },
    {
      path: "/case-studies",
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: newestDate(caseStudyPosts),
    },
    ...blogPosts.map((post) => ({
      path: `/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      lastModified: postDate(post),
    })),
    ...caseStudyPosts.map((post) => ({
      path: `/case-studies/${post.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
      lastModified: postDate(post),
    })),
  ];

  return entries.map(({ path, changeFrequency, priority, lastModified }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
