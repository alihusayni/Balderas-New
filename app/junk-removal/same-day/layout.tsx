import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import {
  getBreadcrumbJsonLd,
  getServiceJsonLd,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Same Day Junk Removal Orange County | Fast Hauling Today",
  description:
    "Need junk gone today? Balderas Demolition Inc. offers same day junk removal in Orange County. Call or text Abel Balderas now for a fast, free estimate and immediate service!",
  path: "/junk-removal/same-day",
  image: "https://balderas-assets.s3.amazonaws.com/images/junk_removal/img5.jpg",
  imageAlt:
    "Balderas Demolition Inc. same day junk removal and hauling in Orange County",
  keywords: [
    "same day junk removal Orange County",
    "express junk hauling",
    "emergency haul away OC",
    "fast junk pickup Orange County",
    "Balderas Demolition",
    "Abel Balderas",
  ],
});

const sameDayServiceJsonLd = getServiceJsonLd({
  name: "Same Day Junk Removal Orange County",
  description:
    "Express junk removal across Orange County: on-call pickups, urgent property cleanouts, move-outs, renovation debris, and estate situations with transparent volume-based quotes and professional loading.",
  path: "/junk-removal/same-day",
  serviceType: "Same Day Junk Removal",
  image: "https://balderas-assets.s3.amazonaws.com/images/junk_removal/img5.jpg",
});

const sameDayBreadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Junk Removal", path: "/junk-removal" },
  { name: "Same Day Junk Removal", path: "/junk-removal/same-day" },
]);

export default function SameDayJunkRemovalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd id="ld-same-day-junk-removal-service" data={sameDayServiceJsonLd} />
      <JsonLd id="ld-same-day-junk-removal-breadcrumb" data={sameDayBreadcrumbJsonLd} />
      {children}
    </>
  );
}
