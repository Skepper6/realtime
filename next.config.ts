import type { NextConfig } from "next";

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/+$/, "");

const nextConfig: NextConfig = {
  basePath: basePath || undefined,
  distDir: process.env.NEXT_DIST_DIR || ".next",
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    cpus: 1,
  },
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/designuptime",
        destination: "/our-process",
        permanent: true,
      },
      {
        source: "/wellbeing",
        destination: "/well-being-comfort",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/casestudy",
        destination: "/resources/case-study",
        permanent: true,
      },
      {
        source: "/blog-grid",
        destination: "/resources/blogs",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/resources/blogs",
        permanent: true,
      },
      {
        source: "/blogs/:path*",
        destination: "/resources/blogs/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
