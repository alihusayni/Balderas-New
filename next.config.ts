import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Inlines CSS into <style> tags in the HTML response instead of emitting
    // separate <link rel="stylesheet"> files. This removes the render-blocking
    // CSS chunk (e.g. 0r_78-cg8y~1r.css) that PageSpeed flags on the critical
    // path, improving FCP and LCP for first-time visitors.
    // Ideal for Tailwind-based projects where the CSS output is compact.
    inlineCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  async redirects() {
    return [
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/about", destination: "/about-us", permanent: true },
      // Old /services/* → new silo roots
      { source: "/services/demolition", destination: "/demolition", permanent: true },
      { source: "/services/junk-removal", destination: "/junk-removal", permanent: true },
      { source: "/services/dumpsters-rental", destination: "/dumpster-rental", permanent: true },
      { source: "/services/dumpsters-rental/waste-disposal", destination: "/dumpster-rental/waste-disposal", permanent: true },
      { source: "/services/dumpsters-rental/junk-hauling", destination: "/dumpster-rental/junk-hauling", permanent: true },
      { source: "/services", destination: "/demolition", permanent: true },
      // Old typo redirects
      { source: "/demolition/residentials", destination: "/demolition/residential", permanent: true },
      { source: "/commercial-demolition", destination: "/demolition/commercial", permanent: true },
      // Article typo redirect
      {
        source: "/resources/the-high-cost-of-cheap-why-a-licensed-demolition-contractor-is-non-negotiable",
        destination: "/demolition/the-high-cost-of-cheap-why-a-licensed-demolition-contractor-is-non-negotionable",
        permanent: true,
      },
      // Stale legacy links
      { source: "/blog", destination: "/resources", permanent: true },
      { source: "/project", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
