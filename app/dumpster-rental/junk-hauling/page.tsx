import { JunkHaulingLanding } from "@/components/services/junk-hauling-landing";

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Junk Hauling Services Orange County | Balderas Demolition",
  description: "Full-service junk hauling across Orange County. Balderas Demolition Inc. removes and disposes of all types of junk—residential, yard, and commercial—with upfront volume pricing.",
  path: "/dumpster-rental/junk-hauling",
});

export default function JunkHaulingPage() {
  return (
    <>
      {/* Structured page content for indexing */}
      <div aria-hidden="true" className="sr-only">
        <h1>Junk Hauling Orange County — Licensed, All-Inclusive, Same-Day Available</h1>
        <p>
          Balderas Demolition Inc. provides professional junk hauling for homeowners,
          landlords, contractors, and property managers across Orange County.
          Pricing is based on volume and disclosed upfront — before we touch a single item.
        </p>
        <h2>What We Haul</h2>
        <ul>
          <li>Old appliances, furniture, and mattresses</li>
          <li>Construction debris: concrete, tile, drywall, lumber</li>
          <li>Yard waste: sod, soil, tree limbs, green waste</li>
          <li>Mixed renovation loads left behind by contractors</li>
          <li>Electronics, e-waste, and bulk household clutter</li>
        </ul>
        <p>
          Unlike standard junk companies, we are licensed for construction and demolition debris hauling.
          We can legally transport loads that require specialized permits and disposal documentation.
        </p>
        <h2>Cost, Timeline, and Licensing</h2>
        <p>
          Cost: Most junk hauling jobs in OC run $150–$700 depending on volume.
          We quote on-site before loading begins — no surprise charges.
        </p>
        <p>
          Timeline: Same-day and next-day hauling available throughout Orange County.
        </p>
        <p>
          Licensing: Balderas Demolition Inc. holds a C-21 CSLB license, is fully bonded and insured,
          and certified for construction and demolition debris transport in California.
        </p>
        <p>
          Documentation: We provide weight tickets and facility receipts for any job requiring disposal records —
          whether for permit closeout, HOA compliance, or project documentation.
        </p>
        <h2>Service Areas in Orange County</h2>
        <p>
          Junk hauling service available in Anaheim, Irvine, Santa Ana, Huntington Beach, Costa Mesa,
          Fullerton, Newport Beach, Tustin, Garden Grove, Orange, and all surrounding OC communities.
          Call (714) 340-8108 for a free quote.
        </p>
      </div>
      <JunkHaulingLanding />
    </>
  );
}
