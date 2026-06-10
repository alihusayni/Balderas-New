import type { Metadata } from "next";
import HomePage from "./home-page";
import { JsonLd } from "@/components/json-ld";
import {
  SITE,
  absoluteUrl,
  getBreadcrumbJsonLd,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title:
    "Demolition and Junk Removal Orange County | Balderas Demolition Inc.",
  description:
    "Looking for professional demolition or junk removal in Orange County? Balderas Demolition Inc. team provides safe, fast, and friendly debris solutions. Get a free quote today!",
  path: "/",
  image: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/homepage/hero.webp",
  imageAlt:
    "Balderas Demolition Inc. demolition crew on an Orange County job site",
  keywords: [
    "demolition Orange County",
    "junk removal Orange County",
    "dumpster rental Orange County",
    "Balderas Demolition Inc.",
    "Abel Balderas",
    "Tustin demolition contractor",
  ],
});

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}#website`,
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  inLanguage: "en-US",
  publisher: { "@id": `${SITE.url}#business` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${absoluteUrl("/resources")}?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Page() {
  return (
    <>
      <HomePage />
      {/*
        JSON-LD moved to AFTER HomePage — Google indexes structured data from
        anywhere on the page. Previously these scripts added ~2 KB before the
        hero H1 in the HTML stream, delaying FCP by ~20 ms at Lighthouse speed.
      */}
      <JsonLd id="ld-website" data={websiteJsonLd} />
      <JsonLd
        id="ld-home-breadcrumb"
        data={getBreadcrumbJsonLd([{ name: "Home", path: "/" }])}
      />
    </>
  );
}
