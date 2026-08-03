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
    "Demolition, Junk Removal & Dumpster Rental Orange County | Balderas Demolition Inc.",
  description:
    "Balderas Demolition Inc. — Orange County's trusted source for licensed demolition, junk removal, and dumpster rentals. Abel Balderas leads every project personally. Get a free same-day quote!",
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
    "residential demolition OC",
    "same day junk removal Orange County",
    "concrete removal Orange County",
    "licensed demolition contractor",
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
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="mx-auto w-full max-w-container px-6 lg:px-10">
          <div className="mx-auto max-w-[860px]">
            <h2 className="[font-family:var(--font-anton)] text-[28px] font-normal leading-[1.2] tracking-[-0.02em] text-[#0b0300] lg:text-[40px]">
              Orange County&apos;s Licensed Demolition, Junk Removal &amp; Dumpster Rental Company
            </h2>
            <div className="mt-8 flex flex-col gap-6 text-[17px] leading-[1.7] text-[#3a3a3a]">
              <p>
                Balderas Demolition Inc. is a C-21 CSLB licensed demolition contractor
                serving Orange County for over 15 years. Every project is led personally
                by Abel Balderas — not subcontracted to an unknown crew.
              </p>
              <p><strong>Our services:</strong></p>
              <ul className="ml-6 list-disc flex flex-col gap-2">
                <li>Residential &amp; commercial demolition — full teardown to interior-only</li>
                <li>Junk removal — same-day, estate cleanout, furniture, appliances</li>
                <li>Dumpster rental — roll-off delivery and pickup across OC</li>
                <li>Concrete removal and hauling — driveways, slabs, foundations</li>
              </ul>
              <p><strong>Common questions answered:</strong></p>
              <ul className="ml-6 list-disc flex flex-col gap-2">
                <li><strong>Cost:</strong> Demolition projects typically run $12,000–$35,000. Junk removal starts at $75. Dumpster rentals from $350/week. All quotes are free and given on-site.</li>
                <li><strong>Licensing:</strong> C-21 CSLB licensed, fully bonded and insured in California. License number available on request.</li>
                <li><strong>Timeline:</strong> Most junk removal is same-day. Demolition permits take 2–6 weeks; physical teardown is 1–5 days depending on scope.</li>
                <li><strong>Disruption:</strong> We handle permit filing, utility disconnects, and CalOSHA compliance. Neighbors and adjacent structures are protected throughout.</li>
              </ul>
              <p>
                <strong>Why Orange County chooses Balderas:</strong> 5-star rated on Google,
                500+ projects completed, C-21 CSLB certified, and fully insured.
                We serve Anaheim, Irvine, Santa Ana, Fullerton, Costa Mesa,
                Huntington Beach, Newport Beach, Tustin, Garden Grove, and Orange.
                Call <strong>(714) 340-8108</strong> for a free same-day quote.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
