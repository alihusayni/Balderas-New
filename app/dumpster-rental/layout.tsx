import type { Metadata } from "next";
import {
  pageMetadata,
  getServiceJsonLd,
  getBreadcrumbJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = pageMetadata({
  title: "Dumpster Rental Orange County | Roll-Off Containers | Demolition OC",
  description:
    "Affordable dumpster rental in Orange County, CA. 10–40 yard roll-off containers for demolition debris, construction waste, and cleanouts. Fast delivery, no hidden fees. Call (714) 333-0178.",
  path: "/dumpster-rental",
  keywords: [
    "dumpster rental Orange County",
    "roll-off dumpster Orange County",
    "construction dumpster rental",
    "waste disposal Orange County",
    "junk hauling Orange County",
    "Demolition OC dumpster",
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
