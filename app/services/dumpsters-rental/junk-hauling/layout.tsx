import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import {
  getBreadcrumbJsonLd,
  getServiceJsonLd,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Junk Hauling Services Orange County | Fast & Reliable Debris Removal",
  description:
    "Professional junk hauling in Orange County. Balderas Demolition Inc. crew provide heavy-duty hauling for residential and commercial properties. Free estimates!",
  path: "/services/dumpsters-rental/junk-hauling",
  image: "/images/dumpsters_rental/img6.jpg",
  imageAlt:
    "Professional junk hauling and debris removal in Orange County by Balderas Demolition Inc.",
  keywords: [
    "junk hauling Orange County",
    "debris hauling OC",
    "heavy junk removal",
    "construction debris hauling",
    "residential junk hauling",
    "Balderas Demolition",
    "Abel Balderas",
  ],
});

const junkHaulingServiceJsonLd = getServiceJsonLd({
  name: "Junk Hauling Services Orange County",
  description:
    "High-capacity junk hauling for homes, yards, and job sites across Orange County: appliances, furniture, green waste, and construction debris with licensed, insured crews.",
  path: "/services/dumpsters-rental/junk-hauling",
  serviceType: "Junk Hauling",
  image: "/images/dumpsters_rental/img6.jpg",
});

const junkHaulingBreadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Dumpster Rental", path: "/services/dumpsters-rental" },
  {
    name: "Junk Hauling",
    path: "/services/dumpsters-rental/junk-hauling",
  },
]);

export default function JunkHaulingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd id="ld-junk-hauling-service" data={junkHaulingServiceJsonLd} />
      <JsonLd
        id="ld-junk-hauling-breadcrumb"
        data={junkHaulingBreadcrumbJsonLd}
      />
      {children}
    </>
  );
}
