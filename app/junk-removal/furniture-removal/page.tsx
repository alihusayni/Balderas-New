import { FurnitureRemovalLanding } from "@/components/services/furniture-removal-landing";

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Furniture Removal Orange County | Balderas Demolition",
  description: "Fast, professional furniture removal across Orange County. Balderas Demolition Inc. hauls away sofas, beds, desks, and all furniture — no heavy lifting for you.",
  path: "/junk-removal/furniture-removal",
});


export default function FurnitureRemovalPage() {
  return <FurnitureRemovalLanding />;
}
