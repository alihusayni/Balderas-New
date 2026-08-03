import { SameDayJunkRemovalLanding } from "@/components/services/same-day-junk-removal-landing";

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Same Day Junk Removal Orange County | Balderas Demolition",
  description: "Need it gone today? Balderas Demolition Inc. offers same-day junk removal across Orange County. Call for fast, reliable service.",
  path: "/junk-removal/same-day",
});

export default function SameDayJunkRemovalPage() {
  return (
    <>
      {/* Structured page content for indexing */}
      <div aria-hidden="true" className="sr-only">
        <h1>Same-Day Junk Removal Orange County</h1>
        <p>
          Balderas Demolition Inc. offers genuine same-day junk removal across Orange County.
          Book before noon and we can typically be on-site the same day —
          not a next available window promise, but actual same-day service.
        </p>
        <h2>What We Handle Same-Day</h2>
        <ul>
          <li>Single items: broken refrigerators, old sectionals, mattresses</li>
          <li>Multi-room mixed loads: furniture, appliances, electronics</li>
          <li>Renovation debris: drywall, tile, lumber scraps</li>
          <li>Estate and hoarding cleanouts</li>
        </ul>
        <p>
          We sort on the way out — separating items for donation, recycling, and landfill disposal.
          California compliance for mattresses, e-waste, and appliances is handled automatically.
        </p>
        <h2>Cost, Timeline, and Licensing</h2>
        <p>
          Cost: Single-item pickups start at $75–$150. Full truck loads run $400–$700.
          We give you a firm price on-site before loading begins — no surprise charges on the invoice.
        </p>
        <p>
          Timeline: Call before noon for same-day service. Jobs typically take 1–3 hours depending on volume.
        </p>
        <p>
          Licensing: Balderas Demolition Inc. holds a C-21 CSLB license and is fully bonded and insured in California.
        </p>
        <p>
          Disruption: We protect your driveway and property during loading.
          No mess left behind — broom-clean finish guaranteed.
        </p>
        <h2>Service Areas in Orange County</h2>
        <p>
          Same-day junk removal available in Anaheim, Irvine, Santa Ana, Costa Mesa, Huntington Beach,
          Fullerton, Newport Beach, Garden Grove, Tustin, Orange, and all surrounding OC cities.
          Call (714) 340-8108 before noon for same-day service.
        </p>
      </div>
      <SameDayJunkRemovalLanding />
    </>
  );
}
