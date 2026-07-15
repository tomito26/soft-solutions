import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { formatDate, postPath, type Post } from "@/lib/content";

/** Card for a single post in a listing grid. */
const PostCard = ({ post }: { post: Post }) => {
  const { frontmatter } = post;
  const href = postPath(post);
  const badge = frontmatter.industry ?? frontmatter.tags?.[0];

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg"
    >
      {frontmatter.coverImage ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={frontmatter.coverImage}
            alt={frontmatter.coverAlt ?? frontmatter.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        {badge ? (
          <span className="text-xs font-semibold uppercase tracking-wide text-royal">
            {badge}
          </span>
        ) : null}
        <h3 className="mt-2 text-lg font-bold text-navy transition-colors group-hover:text-royal">
          {frontmatter.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-brand-slate line-clamp-3">
          {frontmatter.description}
        </p>
        <div className="mt-5 flex items-center justify-between text-xs text-brand-slate">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {formatDate(frontmatter.date)}
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-royal">
            Read
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
