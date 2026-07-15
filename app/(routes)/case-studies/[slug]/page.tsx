import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "@/components/blog/article-layout";
import JsonLd from "@/components/seo/json-ld";
import {
  getPostBySlug,
  getPublishedSlugs,
  isHiddenDraft,
  postPath,
} from "@/lib/content";
import {
  absoluteUrl,
  articleSchema,
  breadcrumbSchema,
  buildMetadata,
} from "@/lib/seo";

const TYPE = "case-studies" as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedSlugs(TYPE).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(TYPE, params.slug);
  if (!post) return {};
  const { frontmatter } = post;
  return buildMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    path: postPath(post),
    keywords: frontmatter.keywords,
    type: "article",
    publishedTime: frontmatter.date,
    modifiedTime: frontmatter.updated,
    authors: frontmatter.author ? [frontmatter.author] : undefined,
    tags: frontmatter.tags,
  });
}

const CaseStudyPage = ({ params }: { params: { slug: string } }) => {
  const post = getPostBySlug(TYPE, params.slug);
  if (!post || isHiddenDraft(post)) notFound();

  const { frontmatter } = post;
  const url = absoluteUrl(postPath(post));

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: frontmatter.title,
          description: frontmatter.description,
          url,
          image: frontmatter.coverImage
            ? absoluteUrl(frontmatter.coverImage)
            : undefined,
          datePublished: frontmatter.date,
          dateModified: frontmatter.updated,
          authorName: frontmatter.author,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: frontmatter.title, path: postPath(post) },
        ])}
      />
      <ArticleLayout
        post={post}
        backHref="/case-studies"
        backLabel="All case studies"
      />
    </>
  );
};

export default CaseStudyPage;
