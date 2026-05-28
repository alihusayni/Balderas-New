import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import {
  getBreadcrumbJsonLd,
  getServiceJsonLd,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Professional Estate Cleanout Services Orange County | Balderas Demolition Inc.",
  description:
    "Compassionate and efficient estate cleanout services in Orange County. Abel Balderas and his team handle full-property clearing with respect and care. Get a free consultation.",
  path: "/junk-removal/estate-cleanout",
  image: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/junk_removal/img3.jpg",
  imageAlt:
    "Compassionate estate cleanout and property clearing in Orange County by Balderas Demolition Inc.",
  keywords: [
    "estate cleanout Orange County",
    "estate clearance",
    "property cleanout after death",
    "executor cleanout",
    "Balderas Demolition",
    "Abel Balderas",
  ],
});

const estateServiceJsonLd = getServiceJsonLd({
  name: "Estate Cleanout Orange County",
  description:
    "Compassionate whole-home and property estate cleanouts in Orange County for families, executors, and realtors: sorting, donation-first disposition, valuables protocol, insured crews, and broom-clean handoff.",
  path: "/junk-removal/estate-cleanout",
  serviceType: "Estate Cleanout",
  image: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/junk_removal/img3.jpg",
});

const estateBreadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Junk Removal", path: "/junk-removal" },
  { name: "Estate Cleanout", path: "/junk-removal/estate-cleanout" },
]);

export default function EstateCleanoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd id="ld-estate-cleanout-service" data={estateServiceJsonLd} />
      <JsonLd id="ld-estate-cleanout-breadcrumb" data={estateBreadcrumbJsonLd} />
      {children}
    </>
  );
}
