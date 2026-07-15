import { getPostBySlug, getPublishedSlugs } from "@/lib/content";
import { ogContentType, ogImage, ogSize } from "@/lib/og-image";

export const alt = "Soft Solutions Technologies — Insights";
export const size = ogSize;
export const contentType = ogContentType;

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedSlugs("blog").map((slug) => ({ slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug("blog", params.slug);
  const title = post?.frontmatter.title ?? "Insights";
  return ogImage(title, "Soft Solutions Technologies · Insights");
}
