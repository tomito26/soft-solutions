import type { Metadata } from "next";
import { getAllPosts, postPath } from "@/lib/content";
import { buildMetadata, collectionPageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/json-ld";
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
    <>
      <JsonLd
        data={collectionPageSchema({
          name: "Client Success Stories",
          description:
            "Real projects, real outcomes — a look at the results we've delivered for organisations across Kenya.",
          path: "/case-studies",
          items: posts.map((post) => ({
            name: post.frontmatter.title,
            path: postPath(post),
          })),
        })}
      />
      <PostList
        posts={posts}
        eyebrow="Case Studies"
        title="Client Success Stories"
        subtitle="Real projects, real outcomes — a look at the results we've delivered for organisations across Kenya."
        emptyMessage="Case studies are coming soon — get in touch to discuss your project."
      />
    </>
  );
};

export default CaseStudiesPage;
