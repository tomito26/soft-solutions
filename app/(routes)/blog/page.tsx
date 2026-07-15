import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import { buildMetadata, FEED_TITLE } from "@/lib/seo";
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
    <PostList
      posts={posts}
      eyebrow="Insights"
      title="Insights & Guides"
      subtitle="Advice and analysis on building, securing, and scaling technology for businesses across Kenya."
    />
  );
};

export default BlogPage;
