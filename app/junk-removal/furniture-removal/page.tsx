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
    <FurnitureRemovalLanding>
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="mx-auto w-full max-w-container px-6 lg:px-10">
          <div className="mx-auto max-w-[860px]">
            <h2 className="[font-family:var(--font-anton)] text-[28px] font-normal leading-[1.2] tracking-[-0.02em] text-[#0b0300] lg:text-[40px]">
              Furniture Removal in Orange County — Fast, Licensed, and All-Inclusive
            </h2>
            <div className="mt-8 flex flex-col gap-6 text-[17px] leading-[1.7] text-[#3a3a3a]">
              <p>
                Getting rid of large furniture in Orange County is harder than it sounds.
                Curbside pickup won&apos;t touch oversized items without a weeks-long appointment.
                Renting a truck yourself means loading, driving, and paying dump fees.
                Balderas Demolition Inc. removes that friction entirely.
              </p>
              <p><strong>We remove all furniture types in a single trip:</strong></p>
              <ul className="ml-6 list-disc flex flex-col gap-2">
                <li>Sofas, sectionals, and recliners</li>
                <li>Beds, bed frames, and dressers</li>
                <li>Dining sets, desks, and bookshelves</li>
                <li>Exercise equipment and outdoor patio sets</li>
                <li>Old fixtures and cabinetry from renovations</li>
              </ul>
              <p>
                You don&apos;t need to sort, break down, or move anything to the curb.
                Just point us to what needs to go.
              </p>
              <p><strong>Common questions answered:</strong></p>
              <ul className="ml-6 list-disc flex flex-col gap-2">
                <li><strong>Cost:</strong> Single-room pickups start around $150–$300. Multi-room and whole-house clearances typically run $400–$700. We quote by volume — you only pay for what we take.</li>
                <li><strong>Timeline:</strong> Most single-room jobs are done in under 2 hours. Multi-room same-day clearances are available.</li>
                <li><strong>Licensing:</strong> Balderas Demolition Inc. holds a C-21 CSLB license and is fully bonded and insured in California.</li>
                <li><strong>Eco-disposal:</strong> Usable pieces go to OC donation centers. Metals and electronics are recycled — not landfilled.</li>
              </ul>
              <p>
                <strong>Service areas:</strong> Anaheim, Irvine, Santa Ana, Fullerton, Costa Mesa,
                Huntington Beach, Newport Beach, Tustin, Garden Grove, Orange, and all surrounding OC cities.
                Call <strong>(714) 340-8108</strong> for same-day or next-day scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </FurnitureRemovalLanding>
  );
}
