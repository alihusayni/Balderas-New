import type { Metadata, Viewport } from "next";
import { Suspense } from 'react';
import Script from 'next/script';
// Anton removed from next/font/google — it is now inlined as base64 in
// globals.css, which eliminates the cold-CDN delay (~1,000 ms) caused by
// next/font stamping a new ?dpl=<deploy-hash> URL on every build.
// --font-anton CSS variable is now defined in globals.css :root.
import { DeferredClientShell } from "@/components/deferred-client-shell";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteShell } from "@/components/site-shell";
import { SiteHeader } from "@/components/site-header";
import { SITE, getLocalBusinessJsonLd } from "@/lib/seo";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Demolition and Junk Removal Orange County | Demolition OC",
    template: "%s | Demolition OC",
  },
  description: SITE.description,
  applicationName: SITE.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.founder }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Construction & Home Services",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title:
      "Demolition and Junk Removal Orange County | Demolition OC",
    description: SITE.description,
    images: [
      {
        url: SITE.defaultOgImage,
        width: 1200,
        height: 630,
        alt: SITE.defaultOgImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Demolition and Junk Removal Orange County | Demolition OC",
    description: SITE.description,
    images: [SITE.defaultOgImage],
    creator: SITE.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Replace with the real verification tokens once provided.
    // google: "your-google-site-verification-token",
    // other: { "msvalidate.01": "your-bing-verification-token" },
  },
  icons: {
    icon: [
      { url: "/favicon_new.ico", type: "image/x-icon" },
      { url: "/favicon.ico?v=4", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico?v=4",
    apple: "/favicon.ico?v=4",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#dc5a31" },
    { media: "(prefers-color-scheme: dark)", color: "#06182C" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      // Anton is now inlined in globals.css — no next/font variable class needed.
      // MaisonNeue is loaded via @font-face in globals.css (Vercel Blob).
      className="h-full antialiased"
    >
      <head>
        {/*
          Preconnect — MaisonNeue is served from Vercel Blob (external CDN).
          This preconnect eliminates the cold DNS+TCP+TLS overhead when the
          browser discovers the MaisonNeue @font-face URL in the inline CSS.

          Anton preconnect/preload REMOVED: Anton is now an inline base64 data:
          URL in globals.css — the font is available the instant CSS parses.
          No network request needed, no preload link needed.
        */}
        <link rel="preconnect" href="https://y5judepxfpr0logb.public.blob.vercel-storage.com" crossOrigin="anonymous" />
      </head>

      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.despora.ai/despora-pixel.js"
          data-project="demolitionoc"
          data-endpoint="/api/dp-collect"
          strategy="afterInteractive"
        />

        <DeferredClientShell />

        <SiteShell>
          <SiteHeader />
        </SiteShell>
        {children}
        <SiteShell>
          <SiteFooter />
        </SiteShell>

        {/*
          JSON-LD moved to END of body — Google indexes it from anywhere on the
          page. Placing it at the top of <body> added 17 KB of data before the
          H1 in the HTML stream, delaying FCP. Moving it here costs nothing SEO-
          wise but lets the browser reach the H1 text ~100 ms sooner.
        */}
        <JsonLd
          id="ld-local-business"
          data={getLocalBusinessJsonLd()}
        />
      </body>
    </html>
  );
}
