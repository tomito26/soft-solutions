/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Canonicalize to the non-www apex: any www request 308s to apex,
        // preserving the path. Matches the canonical URLs in lib/seo.ts.
        source: "/:path*",
        has: [{ type: "host", value: "www.softsolutions.co.ke" }],
        destination: "https://softsolutions.co.ke/:path*",
        permanent: true,
      },
      // Old/guessable paths that 404. Send them to their real destinations so
      // external links (and Google's memory of them) resolve instead of erroring.
      {
        // Real page is /contact-us.
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        // No services index page — the home page presents the services section.
        // Retarget if a dedicated services landing page is added.
        source: "/services",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
