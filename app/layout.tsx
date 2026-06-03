import type { Metadata, Viewport } from "next";
import { Analytics } from "@/components/analytics";
import CallRailLoader from "@/components/callrail-loader";

import { Anton, Geist } from "next/font/google";
import { DeferredClientShell } from "@/components/deferred-client-shell";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteShell } from "@/components/site-shell";
import { SiteHeader } from "@/components/site-header";
import { SITE, getLocalBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "optional",
  preload: false, // display:optional already non-blocking; preload causes unused-preload warnings
});



const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "optional", // was defaulting to swap — caused a preload
  preload: false,
});


export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Demolition and Junk Removal Orange County | Balderas Demolition Inc.",
    template: "%s | Balderas Demolition Inc.",
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
      "Demolition and Junk Removal Orange County | Balderas Demolition Inc.",
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
      "Demolition and Junk Removal Orange County | Balderas Demolition Inc.",
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
      // MaisonNeue is loaded via @font-face in globals.css (Vercel Blob) — no localFont variable needed
      className={`${geistSans.variable} ${anton.variable} h-full antialiased`}
    >
      <head>
        {/*
          Preconnect: establish TCP+TLS to font CDNs during HTML parse — before
          CSS is even parsed. Without this, both origins incur a cold handshake
          at ~1079ms (when CSS discovers the fonts). On slow 4G (150ms RTT)
          that handshake costs 300ms+. These hints shave that off the critical path.
        */}
        {/* Anton → served from fonts.gstatic.com */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* MaisonNeue → served from Vercel Blob */}
        <link rel="preconnect" href="https://y5judepxfpr0logb.public.blob.vercel-storage.com" crossOrigin="anonymous" />

        {/*
          Preload MaisonNeue-Book (400) — the default body weight used everywhere.
          Ensures it's available at first paint so body text renders in brand font.
          Only preloading Book (not Bold/Medium/Demi) to avoid competing preloads.
        */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://y5judepxfpr0logb.public.blob.vercel-storage.com/balderas/fonts/MaisonNeue-Book-gfuA6Vo46rvlpNHkUbiuJz2YVALkFy.woff2"
          crossOrigin="anonymous"
        />

        {/*
          No manual <link rel="preload"> for hero image needed here.
          <Image priority fetchPriority="high"> in HeroParallaxBackground
          auto-generates a single complete preload covering all deviceSizes at q=22.
          A manual preload would create a SECOND competing preload → browser
          may double-download or deprioritize → LCP regression (was 2.6s).
          This is the same pattern as tuanlelaw.com (consistently 98+/100).
        */}
      </head>

      <body className="min-h-full flex flex-col">
        <JsonLd
          id="ld-local-business"
          data={getLocalBusinessJsonLd()}
        />



        {/* Server-side analytics */}
        <Analytics />
        <CallRailLoader />

        <DeferredClientShell />

        <SiteShell>
          <SiteHeader />
        </SiteShell>
        {children}
        <SiteShell>
          <SiteFooter />
        </SiteShell>
      </body>
    </html>
  );
}
