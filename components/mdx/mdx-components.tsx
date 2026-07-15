import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

/**
 * Element overrides passed to `<MDXRemote components={...} />`. The article body
 * is wrapped in Tailwind Typography's `prose`, so most elements need no styling
 * here — we only upgrade links: internal hrefs use `next/link` for client-side
 * navigation, external ones open in a new tab with safe `rel`.
 */
export const mdxComponents = {
  a: ({ href = "", children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href.startsWith("/")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  },
};
