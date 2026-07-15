import { getPostBySlug, getPublishedSlugs } from "@/lib/content";
import { ogContentType, ogImage, ogSize } from "@/lib/og-image";

export const alt = "Soft Solutions Technologies — Case Study";
export const size = ogSize;
export const contentType = ogContentType;

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedSlugs("case-studies").map((slug) => ({ slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug("case-studies", params.slug);
  const title = post?.frontmatter.title ?? "Case Study";
  return ogImage(title, "Soft Solutions Technologies · Case Study");
}
