import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
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
