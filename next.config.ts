import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hsclinic-site",
  assetPrefix: "/hsclinic-site/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
