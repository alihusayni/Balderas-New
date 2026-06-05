import { JunkHaulingLanding } from "@/components/services/junk-hauling-landing";

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Junk Hauling Services Orange County | Balderas Demolition",
  description: "Full-service junk hauling across Orange County. Balderas Demolition Inc. removes and disposes of all types of junk—residential, yard, and commercial—with upfront volume pricing.",
  path: "/dumpster-rental/junk-hauling",
});


export default function JunkHaulingPage() {
  return <JunkHaulingLanding />;
}
