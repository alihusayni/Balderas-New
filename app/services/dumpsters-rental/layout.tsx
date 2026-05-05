import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import {
  getBreadcrumbJsonLd,
  getServiceJsonLd,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dumpster Rental Orange County | Driveway-Safe Containers",
  description:
    "Need a dumpster for your DIY project? Balderas Demolition Inc. offers affordable, driveway-safe dumpster rentals in Orange County. Delivered and picked up by Abel Balderas.",
  path: "/services/dumpsters-rental",
  image: "/images/services/img4.png",
  imageAlt:
    "Driveway-safe dumpster rental delivered by Balderas Demolition Inc. in Orange County",
  keywords: [
    "dumpster rental Orange County",
    "13 yard dumpster rental",
    "16 yard dumpster rental",
    "driveway-safe dumpster",
    "construction debris dumpster",
    "Tustin dumpster rental",
    "Irvine dumpster rental",
    "residential dumpster rental",
  ],
});

const dumpsterServiceJsonLd = getServiceJsonLd({
  name: "Dumpster Rental Orange County",
  description:
    "Affordable 13-yard and 16-yard dumpster rentals (up to 3,000 lbs) with driveway-safe placement, transparent pricing, and reliable scheduling across Orange County, CA.",
  path: "/services/dumpsters-rental",
  serviceType: "Dumpster Rental",
  image: "/images/services/img4.png",
});

const dumpsterBreadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Dumpster Rental", path: "/services/dumpsters-rental" },
]);

export default function DumpstersRentalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd id="ld-dumpster-service" data={dumpsterServiceJsonLd} />
      <JsonLd id="ld-dumpster-breadcrumb" data={dumpsterBreadcrumbJsonLd} />
      {children}
    </>
  );
}
