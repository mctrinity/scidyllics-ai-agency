import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Skip ESLint checks in Docker builds
  },
};

export default nextConfig;
