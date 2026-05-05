import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { MainHeading } from "@/components/main-heading";
import { SimpleText } from "@/components/simple-text";
import { getBreadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services | Balderas Demolition Inc. | Orange County",
  description:
    "Demolition, junk removal, and dumpster rental in Orange County. Browse our services and get a free quote from Abel Balderas and the team.",
  path: "/services",
  image: "/images/services/img1.png",
  imageAlt:
    "Balderas Demolition Inc. crew performing work in Orange County",
  keywords: [
    "demolition Orange County",
    "junk removal Orange County",
    "dumpster rental Orange County",
    "Balderas Demolition services",
  ],
});

const servicesBreadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

const SERVICE_LINKS = [
  {
    href: "/demolition",
    title: "Demolition",
    description:
      "Residential and commercial demolition, interior strip-outs, structural removal, and site clearance.",
  },
  {
    href: "/demolition/commercial",
    title: "Commercial demolition",
    description:
      "Office and retail strip-outs, white-box prep, warehouse clearing, and deadline-driven crews for OC property teams.",
  },
  {
    href: "/services/junk-removal",
    title: "Junk removal",
    description:
      "Furniture and appliance hauling, estate cleanouts, and construction debris removal.",
  },
  {
    href: "/services/dumpsters-rental",
    title: "Dumpster rental",
    description:
      "Driveway-safe 13-yard and 16-yard dumpsters for DIY and renovation projects.",
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-brand-dark)] pb-24 pt-[120px] sm:pt-[140px] lg:pt-[160px]">
      <JsonLd id="ld-services-breadcrumb" data={servicesBreadcrumbJsonLd} />
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
        <MainHeading className="text-[var(--color-brand-white)]">
          Our Services
        </MainHeading>
        <SimpleText className="mt-6 max-w-[760px] text-white/85">
          From controlled demolition to full-service hauling and dumpsters, we
          help homeowners and contractors across Orange County clear the way
          safely and on schedule.
        </SimpleText>

        <ul className="mt-14 flex flex-col gap-6 sm:gap-8">
          {SERVICE_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group block rounded-lg border border-white/15 bg-white/5 p-6 transition-colors hover:border-[var(--color-brand-orange)] hover:bg-white/10 sm:p-8"
              >
                <p className="font-maison text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--color-brand-orange)]">
                  Learn more
                </p>
                <h2 className="mt-2 text-[28px] uppercase tracking-wide text-white [font-family:var(--font-anton)] sm:text-[36px]">
                  {item.title}
                </h2>
                <p className="font-maison mt-3 max-w-[640px] text-[17px] leading-relaxed text-white/80">
                  {item.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
