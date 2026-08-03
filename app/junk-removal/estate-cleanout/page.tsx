import { EstateCleanoutLanding } from "@/components/services/estate-cleanout-landing";

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Estate Cleanout Services Orange County | Balderas Demolition",
  description: "Compassionate estate cleanout services in Orange County. Balderas Demolition Inc. clears homes quickly, donating and recycling where possible.",
  path: "/junk-removal/estate-cleanout",
});

export default function EstateCleanoutPage() {
  return (
    <>
      {/* Structured page content for indexing */}
      <div aria-hidden="true" className="sr-only">
        <h1>Estate Cleanout Services Orange County</h1>
        <p>
          Balderas Demolition Inc. provides full estate cleanout services across Orange County.
          Whether settling a loved one&apos;s affairs or preparing a property for sale,
          we handle the physical work so your family can focus on what matters.
        </p>
        <p>
          Abel Balderas personally leads every walk-through. We identify what stays and what goes,
          set aside valuables for your review, and work on your timeline — single-day or phased over a week.
        </p>
        <h2>What We Remove</h2>
        <ul>
          <li>Furniture, appliances, and mattresses</li>
          <li>Clothing, kitchenware, and décor</li>
          <li>Garage contents and yard equipment</li>
          <li>Electronics, books, and miscellaneous clutter</li>
        </ul>
        <h2>Cost, Timeline, and Licensing</h2>
        <p>
          Cost: Most OC estate cleanouts run $400–$1,500 depending on home size and volume.
          We quote on-site before any work begins — no surprise charges.
        </p>
        <p>
          Timeline: Most cleanouts complete in 1–2 days. We can typically schedule within 48 hours of your call.
        </p>
        <p>
          Licensing: Balderas Demolition Inc. holds a C-21 CSLB license and is fully bonded and insured in California.
          Disruption is minimized — we protect your property during loading and leave broom-clean.
        </p>
        <h2>Eco-Friendly Disposal</h2>
        <p>
          We don&apos;t just haul to the landfill. Usable items go to OC donation centers.
          Metals and electronics go to certified recycling facilities.
          We provide itemized disposal records on request.
        </p>
        <h2>Service Areas in Orange County</h2>
        <p>
          We serve Anaheim, Irvine, Santa Ana, Fullerton, Costa Mesa, Huntington Beach,
          Newport Beach, Tustin, Garden Grove, Orange, and all surrounding OC cities.
          Call (714) 340-8108 for a free on-site assessment.
        </p>
      </div>
      <EstateCleanoutLanding />
    </>
  );
}
