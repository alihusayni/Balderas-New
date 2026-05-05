import type { Metadata } from "next";
import {
  pageMetadata,
  getServiceJsonLd,
  getBreadcrumbJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = pageMetadata({
  title: "Dumpster Rental Orange County | Roll-Off Containers | Balderas Demolition",
  description:
    "Affordable dumpster rental in Orange County, CA. 10–40 yard roll-off containers for demolition debris, construction waste, and cleanouts. Fast delivery, no hidden fees. Call (714) 340-8108.",
  path: "/dumpster-rental",
  keywords: [
    "dumpster rental Orange County",
    "roll-off dumpster Orange County",
    "construction dumpster rental",
    "waste disposal Orange County",
    "junk hauling Orange County",
    "Balderas Demolition dumpster",
  ],
});

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Dumpster Rental", path: "/dumpster-rental" },
]);

const serviceJsonLd = getServiceJsonLd({
  name: "Dumpster Rental",
  description:
    "Affordable roll-off dumpster rental in Orange County for demolition debris, construction waste, and cleanouts with fast delivery and no hidden fees.",
  path: "/dumpster-rental",
  serviceType: "Dumpster Rental Service",
});

export default function DumpsterRentalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd id="ld-breadcrumb-dumpster-rental" data={breadcrumbJsonLd} />
      <JsonLd id="ld-service-dumpster-rental" data={serviceJsonLd} />
      {children}
    </>
  );
}
