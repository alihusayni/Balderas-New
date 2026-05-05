import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import {
  getBreadcrumbJsonLd,
  getServiceJsonLd,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title:
    "Professional Waste Disposal Services Orange County | Balderas Demolition Inc.",
  description:
    "Efficient and eco-friendly waste disposal in Orange County. Abel Balderas and his team handle construction debris, household waste, and bulk hauling. Get a free quote today!",
  path: "/services/dumpsters-rental/waste-disposal",
  image: "/images/dumpsters_rental/img1.png",
  imageAlt:
    "Professional waste disposal and dumpster services in Orange County by Balderas Demolition Inc.",
  keywords: [
    "waste disposal Orange County",
    "construction debris disposal OC",
    "household waste hauling",
    "bulk waste pickup Orange County",
    "eco-friendly waste disposal",
    "Balderas Demolition",
    "Abel Balderas",
  ],
});

const wasteDisposalServiceJsonLd = getServiceJsonLd({
  name: "Professional Waste Disposal Services Orange County",
  description:
    "Efficient and eco-friendly waste disposal across Orange County: construction debris, household waste, and bulk hauling with transparent pricing and licensed hauling.",
  path: "/services/dumpsters-rental/waste-disposal",
  serviceType: "Waste Disposal",
  image: "/images/dumpsters_rental/img1.png",
});

const wasteDisposalBreadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Dumpster Rental", path: "/services/dumpsters-rental" },
  {
    name: "Waste Disposal",
    path: "/services/dumpsters-rental/waste-disposal",
  },
]);

export default function WasteDisposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd id="ld-waste-disposal-service" data={wasteDisposalServiceJsonLd} />
      <JsonLd
        id="ld-waste-disposal-breadcrumb"
        data={wasteDisposalBreadcrumbJsonLd}
      />
      {children}
    </>
  );
}
