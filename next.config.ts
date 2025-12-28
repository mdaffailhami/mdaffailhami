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
        hostname: "wrkmncssawszpcdmgbra.supabase.co",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
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
