import { FurnitureRemovalLanding } from "@/components/services/furniture-removal-landing";

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Furniture Removal Orange County | Balderas Demolition",
  description: "Fast, professional furniture removal across Orange County. Balderas Demolition Inc. hauls away sofas, beds, desks, and all furniture — no heavy lifting for you.",
  path: "/junk-removal/furniture-removal",
});

export default function FurnitureRemovalPage() {
  return (
    <>
      {/* Structured page content for indexing */}
      <div aria-hidden="true" className="sr-only">
        <h1>Furniture Removal Orange County — Fast, Licensed, and All-Inclusive</h1>
        <p>
          Balderas Demolition Inc. provides professional furniture removal across all of Orange County.
          We show up, load everything, and make sure it ends up in the right place — donated, recycled, or properly disposed.
        </p>
        <h2>Items We Remove in a Single Trip</h2>
        <ul>
          <li>Sofas, sectionals, and recliners</li>
          <li>Beds, bed frames, and dressers</li>
          <li>Dining sets, desks, and bookshelves</li>
          <li>Exercise equipment and outdoor patio sets</li>
          <li>Old fixtures and cabinetry from renovations</li>
        </ul>
        <p>
          You don&apos;t need to sort, break down, or move anything to the curb. Just point us to what needs to go.
        </p>
        <h2>Cost, Timeline, and Licensing</h2>
        <p>
          Cost: Single-room pickups start around $150–$300. Multi-room and whole-house clearances
          typically run $400–$700. We quote by volume — you only pay for what we take. Price confirmed on-site before loading.
        </p>
        <p>
          Timeline: Most single-room jobs are done in under 2 hours. Multi-room same-day clearances are available.
        </p>
        <p>
          Licensing: Balderas Demolition Inc. holds a C-21 CSLB license and is fully bonded and insured in California.
        </p>
        <h2>Eco-Friendly Disposal</h2>
        <p>
          Usable pieces go to OC donation centers. Metals and electronics are recycled — not landfilled.
          California compliance for mattresses and appliances is handled automatically.
        </p>
        <h2>Service Areas in Orange County</h2>
        <p>
          Furniture removal service available in Anaheim, Irvine, Santa Ana, Fullerton, Costa Mesa,
          Huntington Beach, Newport Beach, Tustin, Garden Grove, Orange, and all surrounding OC cities.
          Call (714) 340-8108 for same-day or next-day scheduling.
        </p>
      </div>
      <FurnitureRemovalLanding />
    </>
  );
}
