import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/components/ui": path.resolve(__dirname, "packages/common-core-components/src/components")
    };
    return config;
  }
};

export default nextConfig;
