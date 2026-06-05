import { WasteDisposalLanding } from "@/components/services/waste-disposal-landing";

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Waste Disposal Services Orange County | Balderas Demolition",
  description: "Professional waste disposal in Orange County by Balderas Demolition Inc. C&D debris, bulk household waste, and construction materials hauled away safely.",
  path: "/dumpster-rental/waste-disposal",
});


export default function WasteDisposalPage() {
  return <WasteDisposalLanding />;
}
