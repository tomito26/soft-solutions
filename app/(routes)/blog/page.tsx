import type { Metadata } from "next";
import { getAllPosts, postPath } from "@/lib/content";
import { buildMetadata, collectionPageSchema, FEED_TITLE } from "@/lib/seo";
import JsonLd from "@/components/seo/json-ld";
import PostList from "@/components/blog/post-list";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description:
    "Practical guides and expert perspectives on software development, cloud, cyber security, and networking — from the Soft Solutions Technologies team in Nairobi, Kenya.",
  path: "/blog",
  feed: { title: FEED_TITLE },
});

const BlogPage = () => {
  const posts = getAllPosts("blog");
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          name: "Insights & Guides",
          description:
            "Advice and analysis on building, securing, and scaling technology for businesses across Kenya.",
          path: "/blog",
          items: posts.map((post) => ({
            name: post.frontmatter.title,
            path: postPath(post),
          })),
        })}
      />
      <PostList
        posts={posts}
        eyebrow="Insights"
        title="Insights & Guides"
        subtitle="Advice and analysis on building, securing, and scaling technology for businesses across Kenya."
      />
    </>
  );
};

export default BlogPage;
