import SectionHeader from "@/components/home/lib/ui/section-header";
import PostCard from "./post-card";
import type { Post } from "@/lib/content";

type PostListProps = {
  posts: Post[];
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Message shown when there are no published posts yet. */
  emptyMessage?: string;
};

/** Listing page body: a section header over a responsive card grid. */
const PostList = ({
  posts,
  eyebrow,
  title,
  subtitle,
  emptyMessage = "New articles are on the way — check back soon.",
}: PostListProps) => {
  return (
    <div className="section">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      {posts.length ? (
        <div className="mx-auto mt-14 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-brand-slate">{emptyMessage}</p>
      )}
    </div>
  );
};

export default PostList;
