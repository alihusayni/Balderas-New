import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import {
  getBreadcrumbJsonLd,
  getServiceJsonLd,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Furniture Removal Services Orange County | Safe & Fast Hauling",
  description:
    "Need to get rid of an old sofa, mattress, or dining set? Demolition OC provides professional furniture removal in Orange County. We do all the heavy lifting!",
  path: "/junk-removal/furniture-removal",
  image: "/images/junk_removal/img1.png",
  imageAlt:
    "Demolition OC hauling furniture safely in Orange County",
  keywords: [
    "furniture removal Orange County",
    "sofa removal",
    "mattress disposal Orange County",
    "large furniture hauling",
    "junk furniture pickup",
    "Demolition OC",
    "OC furniture removal",
  ],
});

const furnitureServiceJsonLd = getServiceJsonLd({
  name: "Furniture Removal Orange County",
  description:
    "Professional residential and office furniture removal in Orange County: sectionals and mattresses, disassembly included, donation-first disposition when possible, and responsible recycling with wall and floor protection.",
  path: "/junk-removal/furniture-removal",
  serviceType: "Furniture Removal",
  image: "/images/junk_removal/img1.png",
});

const furnitureBreadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Junk Removal", path: "/junk-removal" },
  { name: "Furniture Removal", path: "/junk-removal/furniture-removal" },
]);

export default function FurnitureRemovalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd id="ld-furniture-removal-service" data={furnitureServiceJsonLd} />
      <JsonLd
        id="ld-furniture-removal-breadcrumb"
        data={furnitureBreadcrumbJsonLd}
      />
      {children}
    </>
  );
}
