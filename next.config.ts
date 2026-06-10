import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // inlineCss:true — keeps the CSS inside the HTML so there's zero extra
    // network round-trip before first paint. Without this, Next.js 16 Turbopack
    // emits a plain <link rel="stylesheet"> with no preload hint, making CSS
    // render-blocking. Confirmed: disabling inlineCss caused LCP to jump from
    // 3.4s → 4.5s+ on the user's browser (CDN-cold + render-blocking CSS).
    // Trade-off: CSS appears in both <style> tag AND RSC __next_f payload
    // (necessary for SPA navigation CSS delivery). With Geist removed, the
    // CSS is meaningfully smaller, reducing this overhead.
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
      config.resolve.alias = {
        ...config.resolve.alias,
        "next/dist/build/polyfills/polyfill-module": require("path").resolve(__dirname, "lib/empty-polyfill.js"),
      };
    }
    return config;
  },
  images: {
    // AVIF is 30–50% smaller than WebP at the same quality — cuts hero load duration.
    // Order matters: browser picks first format it supports (avif > webp > original).
    formats: ['image/avif', 'image/webp'],
    // Cache processed images at CDN for 1 year (default is 60s — causes re-processing
    // on every Vercel edge node cold start, adding latency for real users).
    minimumCacheTTL: 31536000,
    // Next.js 15+ defaults to qualities:[75] only — any other value returns
    // INVALID_IMAGE_OPTIMIZE_REQUEST (400). Explicitly allowlist all quality
    // values used across components:
    //   22 → full-bleed images under heavy dark overlays (hero, why-trust, spotlight)
    //   55 → grid/card images (services-detail-grid)
    //   75 → default (auto-preloads, fallback)
    qualities: [22, 55, 75],
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
