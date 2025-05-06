import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "raw.githubusercontent.com",
      "example.com",
      "unsplash.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "images.remotePatterns",
    ],
  },
};
export default nextConfig;
