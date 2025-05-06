import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
