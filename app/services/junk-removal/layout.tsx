import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import {
  getBreadcrumbJsonLd,
  getServiceJsonLd,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title:
    "Junk Removal Orange County | Professional Hauling by Balderas Demolition Inc.",
  description:
    "Reclaim your space with professional junk removal in Orange County. Abel Balderas and Balderas Demolition Inc. provide fast, eco-friendly hauling for homes and businesses. Free quotes!",
  path: "/services/junk-removal",
  image: "/images/junk_removal/img1.png",
  imageAlt:
    "Balderas Demolition Inc. junk removal truck loaded for an Orange County haul",
  keywords: [
    "junk removal Orange County",
    "same day junk removal",
    "furniture removal Orange County",
    "appliance removal Orange County",
    "estate cleanout Orange County",
    "construction debris removal",
    "Tustin junk hauling",
    "Irvine junk removal",
  ],
});

const junkRemovalServiceJsonLd = getServiceJsonLd({
  name: "Junk Removal Orange County",
  description:
    "Full-service junk removal for homes and businesses across Orange County: furniture and appliance hauling, same-day service, estate cleanouts, and construction debris removal.",
  path: "/services/junk-removal",
  serviceType: "Junk Removal",
  image: "/images/junk_removal/img1.png",
});

const junkRemovalBreadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Junk Removal", path: "/services/junk-removal" },
]);

export default function JunkRemovalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd id="ld-junk-removal-service" data={junkRemovalServiceJsonLd} />
      <JsonLd
        id="ld-junk-removal-breadcrumb"
        data={junkRemovalBreadcrumbJsonLd}
      />
      {children}
    </>
  );
}
