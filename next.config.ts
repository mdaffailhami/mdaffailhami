import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  reactCompiler: true,
  devIndicators: {
    position: "top-right",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
  async headers() {
    // Disable indexing for any non production environment
    if (process.env.VERCEL_ENV !== "production") {
      return [
        {
          source: "/(.*)", // Apply to all routes
          headers: [
            {
              key: "X-Robots-Tag",
              value: "noindex, nofollow",
            },
          ],
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
