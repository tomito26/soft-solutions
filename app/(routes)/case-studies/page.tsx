import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import PostList from "@/components/blog/post-list";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description:
    "See how Soft Solutions Technologies has helped businesses across Kenya build software, migrate to the cloud, secure their systems, and modernise their networks.",
  path: "/case-studies",
});

const CaseStudiesPage = () => {
  const posts = getAllPosts("case-studies");
  return (
    <PostList
      posts={posts}
      eyebrow="Case Studies"
      title="Client Success Stories"
      subtitle="Real projects, real outcomes — a look at the results we've delivered for organisations across Kenya."
      emptyMessage="Case studies are coming soon — get in touch to discuss your project."
    />
  );
};

export default CaseStudiesPage;
