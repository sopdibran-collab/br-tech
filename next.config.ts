import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/opengraph-image": ["./src/lib/og/**/*"],
    "/twitter-image": ["./src/lib/og/**/*"],
  },
};

export default nextConfig;
