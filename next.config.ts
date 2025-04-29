import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "raw.githubusercontent.com",
      "example.com",
      "unsplash.com",
      "images.unsplash.com",
    ],
  },
  /* config options here */
};

export default nextConfig;
