import { WasteDisposalLanding } from "@/components/services/waste-disposal-landing";

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Waste Disposal Services Orange County | Balderas Demolition",
  description: "Professional waste disposal in Orange County by Balderas Demolition Inc. C&D debris, bulk household waste, and construction materials hauled away safely.",
  path: "/dumpster-rental/waste-disposal",
});

export default function WasteDisposalPage() {
  return (
    <>
      {/* Structured page content for indexing */}
      <div aria-hidden="true" className="sr-only">
        <h1>Waste Disposal Orange County — Licensed, Compliant, Documented</h1>
        <p>
          Balderas Demolition Inc. provides professional waste disposal across Orange County.
          California CALGreen requires 65% diversion of construction and demolition debris from landfills.
          OC cities add their own ordinances on top. We manage all compliance for you.
        </p>
        <h2>Three Waste Categories We Handle</h2>
        <ul>
          <li>
            Construction and demolition debris: concrete, brick, drywall, lumber, roofing —
            taken to certified recycling facilities
          </li>
          <li>
            Bulk household waste: appliances, furniture, mattresses —
            donation centers, certified recyclers, or licensed transfer stations
          </li>
          <li>
            Green and yard waste: sod, soil, tree limbs —
            diverted to composting facilities, not the landfill
          </li>
        </ul>
        <p>
          We document every load. Weight tickets and facility receipts are available for
          permit closeout, HOA compliance, or project records.
        </p>
        <h2>Cost, Timeline, and Licensing</h2>
        <p>
          Cost: Most OC waste disposal jobs run $200–$800 depending on volume and material type.
          All-in pricing — no hidden fees. Quote given on-site before loading begins.
        </p>
        <p>
          Timeline: Same-day and next-day service available. We respond the same business day.
        </p>
        <p>
          Licensing: Balderas Demolition Inc. holds a C-21 CSLB license, is fully bonded and insured,
          and certified for construction and demolition debris transport in California.
        </p>
        <p>
          Disruption: Our crew handles all loading with professional equipment —
          no damage to driveways or landscaping.
        </p>
        <h2>Service Areas in Orange County</h2>
        <p>
          Waste disposal service available in Anaheim, Irvine, Santa Ana, Huntington Beach, Costa Mesa,
          Fullerton, Newport Beach, Tustin, Garden Grove, Orange, and all surrounding OC areas.
          Call (714) 340-8108 for a free on-site estimate.
        </p>
      </div>
      <WasteDisposalLanding />
    </>
  );
}
