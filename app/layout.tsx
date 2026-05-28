import type { Metadata, Viewport } from "next";
import { Analytics } from "@/components/analytics";

import { Anton, Geist, Geist_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteShell } from "@/components/site-shell";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CookieConsent } from "@/components/cookie-consent";
import { SITE, getLocalBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "optional",
  preload: false, // display:optional already non-blocking; preload causes unused-preload warnings
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "optional",
  preload: false,
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
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} h-full antialiased`}
    >
      <head>
        {/*
          Preload the hero LCP image via the actual /_next/image URL.
          The raw S3 preload was wrong — the browser never fetches S3 directly.
          imagesrcset mirrors next/image's srcset buckets for sizes="100vw".
          fetchpriority="high" ensures the browser starts this fetch immediately.
        */}
        <link
          rel="preload"
          as="image"
          fetchPriority="high"
          imageSrcSet={[
            "/_next/image?url=https%3A%2F%2Fqxwyml8xuwxdgws0.public.blob.vercel-storage.com%2Fbalderas-assets%2Fimages%2Fhomepage%2Fhero.webp&w=640&q=22 640w",
            "/_next/image?url=https%3A%2F%2Fqxwyml8xuwxdgws0.public.blob.vercel-storage.com%2Fbalderas-assets%2Fimages%2Fhomepage%2Fhero.webp&w=1080&q=22 1080w",
            "/_next/image?url=https%3A%2F%2Fqxwyml8xuwxdgws0.public.blob.vercel-storage.com%2Fbalderas-assets%2Fimages%2Fhomepage%2Fhero.webp&w=1200&q=22 1200w",
            "/_next/image?url=https%3A%2F%2Fqxwyml8xuwxdgws0.public.blob.vercel-storage.com%2Fbalderas-assets%2Fimages%2Fhomepage%2Fhero.webp&w=1920&q=22 1920w",
          ].join(", ")}
          imageSizes="100vw"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <JsonLd
          id="ld-local-business"
          data={getLocalBusinessJsonLd()}
        />



        {/* Server-side analytics */}
        <Analytics />

        <NextTopLoader
          color="#dc5a31"
          height={3}
          crawlSpeed={280}
          showSpinner={false}
          shadow={false}
          speed={380}
          zIndex={2000}
        />
        <SmoothScroll />
        <SiteShell>
          <SiteHeader />
        </SiteShell>
        {children}
        <SiteShell>
          <SiteFooter />
        </SiteShell>
        <CookieConsent />
      </body>
    </html>
  );
}
