import type { NextConfig } from "next";

const PRODUCTION_VERCEL_HOST = "br-tech-nine\\.vercel\\.app";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/opengraph-image": ["./src/lib/og/**/*"],
    "/twitter-image": ["./src/lib/og/**/*"],
  },
  async redirects() {
    return [
      {
        // Host match is a regex. Dots are escaped so only this production
        // alias redirects; preview hosts stay reachable.
        source: "/:path*",
        has: [{ type: "host", value: PRODUCTION_VERCEL_HOST }],
        destination: "https://brtech.ch/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
