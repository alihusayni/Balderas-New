import { SameDayJunkRemovalLanding } from "@/components/services/same-day-junk-removal-landing";

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Same Day Junk Removal Orange County | Balderas Demolition",
  description: "Need it gone today? Balderas Demolition Inc. offers same-day junk removal across Orange County. Call for fast, reliable service.",
  path: "/junk-removal/same-day",
});


export default function SameDayJunkRemovalPage() {
  return <SameDayJunkRemovalLanding />;
}
