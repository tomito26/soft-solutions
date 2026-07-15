import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { formatDate, type Post } from "@/lib/content";

type ArticleLayoutProps = {
  post: Post;
  /** Where the back link points, e.g. "/blog". */
  backHref: string;
  /** Back link label, e.g. "Insights". */
  backLabel: string;
};

/**
 * Renders a single blog post or case study: a navy hero with title + meta, an
 * optional cover image and results strip, then the MDX body inside Tailwind
 * Typography `prose`. Server component — <MDXRemote /> compiles MDX at build.
 */
const ArticleLayout = ({ post, backHref, backLabel }: ArticleLayoutProps) => {
  const { frontmatter, content, readingTime } = post;
  const results = frontmatter.results;

  return (
    <article className="pb-20 md:pb-28">
      <header className="bg-navy text-white">
        <div className="container-x pt-14 pb-16 md:pt-20 md:pb-20">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>

          {frontmatter.tags?.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <h1 className="mt-4 max-w-3xl text-3xl font-bold md:text-5xl">
            {frontmatter.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-white/80 md:text-lg">
            {frontmatter.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
            {frontmatter.author ? <span>By {frontmatter.author}</span> : null}
            {frontmatter.client ? (
              <span>Client: {frontmatter.client}</span>
            ) : null}
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {formatDate(frontmatter.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {readingTime}
            </span>
          </div>
        </div>
      </header>

      {frontmatter.coverImage ? (
        <div className="container-x -mt-8 md:-mt-10">
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl border border-line shadow-lg">
            <Image
              src={frontmatter.coverImage}
              alt={frontmatter.coverAlt ?? frontmatter.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
            />
          </div>
        </div>
      ) : null}

      {results?.length ? (
        <div className="container-x mt-12">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 rounded-2xl border border-line bg-mist p-6 sm:grid-cols-3">
            {results.map((result) => (
              <div key={result.label} className="text-center">
                <p className="text-2xl font-bold text-navy md:text-3xl">
                  {result.value}
                </p>
                <p className="mt-1 text-xs text-brand-slate md:text-sm">
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="container-x mt-12">
        <div className="prose prose-slate mx-auto max-w-3xl prose-headings:text-navy prose-a:text-royal prose-strong:text-navy">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </div>
    </article>
  );
};

export default ArticleLayout;
