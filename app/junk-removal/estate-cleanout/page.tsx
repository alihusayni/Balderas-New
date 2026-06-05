import { EstateCleanoutLanding } from "@/components/services/estate-cleanout-landing";

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Estate Cleanout Services Orange County | Balderas Demolition",
  description: "Compassionate estate cleanout services in Orange County. Balderas Demolition Inc. clears homes quickly, donating and recycling where possible.",
  path: "/junk-removal/estate-cleanout",
});


export default function EstateCleanoutPage() {
  return <EstateCleanoutLanding />;
}
