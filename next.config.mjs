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
    ];
  },
};

export default nextConfig;
