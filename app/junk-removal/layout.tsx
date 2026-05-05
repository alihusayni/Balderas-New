import type { Metadata } from "next";
import {
  pageMetadata,
  getServiceJsonLd,
  getBreadcrumbJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = pageMetadata({
  title: "Junk Removal Orange County | Fast & Affordable | Balderas Demolition",
  description:
    "Professional junk removal services across Orange County, CA. Furniture removal, estate cleanouts, same-day pickup. Upfront pricing, eco-friendly disposal. Call (714) 340-8108.",
  path: "/junk-removal",
  keywords: [
    "junk removal Orange County",
    "furniture removal Orange County",
    "estate cleanout Orange County",
    "same day junk removal",
    "junk hauling Orange County",
    "Balderas Demolition junk removal",
  ],
});

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Junk Removal", path: "/junk-removal" },
]);

const serviceJsonLd = getServiceJsonLd({
  name: "Junk Removal",
  description:
    "Professional junk removal services across Orange County including furniture removal, estate cleanouts, and same-day pickup with eco-friendly disposal.",
  path: "/junk-removal",
  serviceType: "Junk Removal Service",
});

export default function JunkRemovalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd id="ld-breadcrumb-junk-removal" data={breadcrumbJsonLd} />
      <JsonLd id="ld-service-junk-removal" data={serviceJsonLd} />
      {children}
    </>
  );
}
