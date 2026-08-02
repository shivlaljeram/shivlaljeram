import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    formats: ["image/webp"],
    deviceSizes: [480, 768, 1024, 1280],
    unoptimized: true,
  },
};

export default nextConfig;
