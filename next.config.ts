import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    // Inlines CSS into <style> tags in the HTML response instead of emitting
    // separate <link rel="stylesheet"> files. This removes the render-blocking
    // CSS chunk (e.g. 0r_78-cg8y~1r.css) that PageSpeed flags on the critical
    // path, improving FCP and LCP for first-time visitors.
    // Ideal for Tailwind-based projects where the CSS output is compact.
    inlineCss: true,
  },
  turbopack: {
    resolveAlias: {
      // Relative path ('./lib/empty-polyfill.js') is silently ignored by Turbopack.
      // Must use absolute path so Turbopack's module resolver can find the file.
      'next/dist/build/polyfills/polyfill-module': path.resolve(__dirname, 'lib/empty-polyfill.js'),
    },
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      const path = require("path");
      config.resolve.alias = {
        ...config.resolve.alias,
        "next/dist/build/polyfills/polyfill-module": path.resolve(__dirname, "lib/empty-polyfill.js"),
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qxwyml8xuwxdgws0.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
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
