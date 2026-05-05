import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Anton, Geist, Geist_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteShell } from "@/components/site-shell";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SITE, getLocalBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const maisonNeue = localFont({
  variable: "--font-maison",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
  src: [
    {
      path: "../public/fonts/maison/MaisonNeue-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/maison/MaisonNeue-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/maison/MaisonNeue-Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/maison/MaisonNeue-BookItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/maison/MaisonNeue-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/maison/MaisonNeue-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/maison/MaisonNeue-Demi.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/maison/MaisonNeue-DemiItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/maison/MaisonNeue-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/maison/MaisonNeue-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
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
      { url: "/favicon_new.ico", type: "image/svg+xml" },
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
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${maisonNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd
          id="ld-local-business"
          data={getLocalBusinessJsonLd()}
        />
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
      </body>
    </html>
  );
}
