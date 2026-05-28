import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // inlineCss:true — keeps CSS in the HTML head so hero renders without
    // waiting for an external CSS file round-trip. Disabling it caused LCP
    // to regress from 1.1s → 2.6s (external CSS became render-blocking).
    // The CSS is 83.8 KB but this is still faster than a blocking network fetch
    // at simulated mobile speed, because the image preload starts immediately
    // from the same HTML stream rather than waiting for a second request.
    inlineCss: true,
  },
  turbopack: {
    resolveAlias: {
      // Relative path ('./lib/empty-polyfill.js') is silently ignored by Turbopack.
      // Must use absolute path so Turbopack's module resolver can find the file.
      'next/dist/build/polyfills/polyfill-module': require('path').resolve(__dirname, 'lib/empty-polyfill.js'),
    },
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      const path = require("path");
      config.resolve.alias = {
        ...config.resolve.alias,
        "next/dist/build/polyfills/polyfill-module": require("path").resolve(__dirname, "lib/empty-polyfill.js"),
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
