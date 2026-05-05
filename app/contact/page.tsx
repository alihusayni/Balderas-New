import type { Metadata } from "next";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { ContactQuoteForm } from "@/components/contact-quote-form";
import { JsonLd } from "@/components/json-ld";
import {
  SITE,
  absoluteUrl,
  getBreadcrumbJsonLd,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Balderas Demolition Inc. | Free Quotes in Orange County",
  description:
    "Tell us about your demolition, dumpster, or junk-removal project and Abel Balderas will follow up within one business day with a clear, honest estimate.",
  path: "/contact",
  image: "/images/homepage/contactbg.webp",
  imageAlt:
    "Contact Balderas Demolition Inc. for a free demolition or junk-removal estimate",
  keywords: [
    "Balderas Demolition contact",
    "Orange County demolition quote",
    "free junk removal estimate Orange County",
    "Abel Balderas phone",
  ],
});

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: absoluteUrl("/contact"),
  name: "Contact Balderas Demolition Inc.",
  description:
    "Get a free demolition, dumpster rental, or junk-removal quote from Balderas Demolition Inc. in Orange County, CA.",
  inLanguage: "en-US",
  isPartOf: { "@id": `${SITE.url}#website` },
  about: { "@id": `${SITE.url}#business` },
  mainEntity: { "@id": `${SITE.url}#business` },
};

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export default function ContactPage() {
  return (
    <main>
      <JsonLd id="ld-contact-page" data={contactPageJsonLd} />
      <JsonLd id="ld-contact-breadcrumb" data={breadcrumbJsonLd} />
      <ContactCtaSection
        className="pt-[140px] sm:pt-[148px] md:pt-[168px] lg:pt-[176px] xl:pt-[182px]"
        backgroundImageSrc="/images/homepage/contactbg.webp"
        backgroundImageAlt="Contact Balderas Demolition"
        overlayClassName="bg-[#06182C]/68"
        title="Get Your Free Estimate in Orange County"
        description="Whether you’re planning demolition, renting a dumpster, or clearing debris, Abel and the crew respond quickly with straight answers—no fluff, just professional service."
        formSlot={
          <div className="w-full bg-white p-[30px]">
            <ContactQuoteForm variant="embedded" />
          </div>
        }
      />
    </main>
  );
}
