import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      {
        source: "/services/demolition",
        destination: "/demolition",
        permanent: true,
      },
      {
        source: "/demolition/residentials",
        destination: "/demolition/residential",
        permanent: true,
      },
      {
        source: "/commercial-demolition",
        destination: "/demolition/commercial",
        permanent: true,
      },
      {
        source: "/demolition/house-demolition-costs-process",
        destination: "/resources/house-demolition-costs-process",
        permanent: true,
      },
      {
        source:
          "/resources/the-high-cost-of-cheap-why-a-licensed-demolition-contractor-is-non-negotiable",
        destination:
          "/resources/the-high-cost-of-cheap-why-a-licensed-demolition-contractor-is-non-negotionable",
        permanent: true,
      },
      {
        source: "/demolition/concrete-removal-hauling/",
        destination: "/demolition/concrete-removal-hauling",
        permanent: true,
      },
      {
        source: "/junk-removal/furniture-removal/",
        destination: "/junk-removal/furniture-removal",
        permanent: true,
      },
      {
        source: "/junk-removal/same-day/",
        destination: "/junk-removal/same-day",
        permanent: true,
      },
      {
        source: "/junk-removal/estate-cleanout/",
        destination: "/junk-removal/estate-cleanout",
        permanent: true,
      },
      {
        source: "/dumpster-rental/waste-disposal",
        destination: "/services/dumpsters-rental/waste-disposal",
        permanent: true,
      },
      {
        source: "/dumpster-rental/junk-hauling",
        destination: "/services/dumpsters-rental/junk-hauling",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
