import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ['video-caribbean.s3.us-east-2.amazonaws.com', 'images6.alphacoders.com', 'media-cldnry.s-nbcnews.com'],
  },
};

export default nextConfig;
