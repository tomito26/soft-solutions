import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

/**
 * Filesystem-backed content layer for the blog + case-study MDX files under
 * `/content`. Everything is read at build time (Server Components / static
 * generation), so there is no runtime cost and no backend — consistent with the
 * "content lives in the repo" convention used by `lib/constants.ts`.
 */

export type ContentType = "blog" | "case-studies";

/** URL segment for a content type (matches the route folder + this key). */
export const CONTENT_BASE_PATH: Record<ContentType, string> = {
  blog: "/blog",
  "case-studies": "/case-studies",
};

/** A single measurable outcome shown on a case study. */
export interface PostResult {
  label: string;
  value: string;
}

/** Parsed frontmatter. Shared shape; case-study-only fields are optional. */
export interface PostFrontmatter {
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD). Drives ordering + schema `datePublished`. */
  date: string;
  updated?: string;
  author?: string;
  tags?: string[];
  coverImage?: string;
  coverAlt?: string;
  keywords?: string[];
  draft?: boolean;
  // Case-study-specific
  client?: string;
  industry?: string;
  services?: string[];
  results?: PostResult[];
}

export interface Post {
  slug: string;
  type: ContentType;
  frontmatter: PostFrontmatter;
  /** Raw MDX body (frontmatter stripped), compiled by <MDXRemote />. */
  content: string;
  /** Human-readable estimate, e.g. "4 min read". */
  readingTime: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");
const isProd = process.env.NODE_ENV === "production";

function typeDir(type: ContentType): string {
  return path.join(CONTENT_DIR, type);
}

/** All slugs for a content type (filenames without the `.mdx` extension). */
export function getAllSlugs(type: ContentType): string[] {
  const dir = typeDir(type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/** Parse a single post, or `null` if the file doesn't exist. */
export function getPostBySlug(type: ContentType, slug: string): Post | null {
  const filePath = path.join(typeDir(type), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = validateFrontmatter(data, `${type}/${slug}.mdx`);

  return {
    slug,
    type,
    frontmatter,
    content,
    readingTime: readingTime(content).text,
  };
}

/**
 * Narrows raw parsed frontmatter to `PostFrontmatter`, failing the build with a
 * clear message when a required field is missing or `date` is unparseable — so
 * broken content surfaces at build time instead of silently rendering
 * "Invalid Date" in the page, cards, and RSS feed.
 */
function validateFrontmatter(
  data: Record<string, unknown>,
  source: string
): PostFrontmatter {
  for (const key of ["title", "description", "date"] as const) {
    if (!data[key]) {
      throw new Error(
        `Invalid frontmatter in content/${source}: missing required "${key}".`
      );
    }
  }
  if (Number.isNaN(new Date(data.date as string).getTime())) {
    throw new Error(
      `Invalid frontmatter in content/${source}: "date" (${String(
        data.date
      )}) is not a valid date. Use an ISO date like "2026-07-15".`
    );
  }
  return data as unknown as PostFrontmatter;
}

/**
 * All published posts for a content type, newest first. Drafts are hidden in
 * production builds but visible in `next dev` for previewing.
 */
export function getAllPosts(type: ContentType): Post[] {
  return getAllSlugs(type)
    .map((slug) => getPostBySlug(type, slug))
    .filter((post): post is Post => post !== null)
    .filter((post) => !(isProd && post.frontmatter.draft))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

/**
 * Slugs that should be publicly built — like `getAllSlugs`, but with drafts
 * removed in production. Use this for `generateStaticParams`, OG-image params,
 * and the sitemap so drafts never ship as reachable, indexable pages. (The
 * listing and RSS feed already hide drafts via `getAllPosts`.)
 */
export function getPublishedSlugs(type: ContentType): string[] {
  return getAllPosts(type).map((post) => post.slug);
}

/** True for a `draft` post being viewed in a production build. */
export function isHiddenDraft(post: Post): boolean {
  return isProd && Boolean(post.frontmatter.draft);
}

/** Site-relative URL for a post, e.g. "/blog/my-slug". */
export function postPath(post: Pick<Post, "type" | "slug">): string {
  return `${CONTENT_BASE_PATH[post.type]}/${post.slug}`;
}

/** Format an ISO date for display, e.g. "15 July 2026". */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
