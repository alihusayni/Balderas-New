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
    <SameDayJunkRemovalLanding>
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="mx-auto w-full max-w-container px-6 lg:px-10">
          <div className="mx-auto max-w-[860px]">
            <h2 className="[font-family:var(--font-anton)] text-[28px] font-normal leading-[1.2] tracking-[-0.02em] text-[#0b0300] lg:text-[40px]">
              Same-Day Junk Removal in Orange County — How It Works
            </h2>
            <div className="mt-8 flex flex-col gap-6 text-[17px] leading-[1.7] text-[#3a3a3a]">
              <p>
                Balderas Demolition Inc. offers genuine same-day junk removal across Orange County.
                Book before noon and we can typically be on-site the same day —
                not a &quot;next available window&quot; promise.
              </p>
              <p><strong>What we handle same-day:</strong></p>
              <ul className="ml-6 list-disc flex flex-col gap-2">
                <li>Single items: broken refrigerators, old sectionals, mattresses</li>
                <li>Multi-room mixed loads: furniture, appliances, electronics</li>
                <li>Renovation debris: drywall, tile, lumber scraps</li>
                <li>Estate and hoarding cleanouts</li>
              </ul>
              <p>
                We sort on the way out — separating items for donation, recycling, and landfill disposal.
                California compliance for mattresses, e-waste, and appliances is handled automatically.
              </p>
              <p><strong>Common questions answered:</strong></p>
              <ul className="ml-6 list-disc flex flex-col gap-2">
                <li><strong>Cost:</strong> Single-item pickups start at $75–$150. Full truck loads run $400–$700. We give you a firm price on-site before loading begins.</li>
                <li><strong>Timeline:</strong> Call before noon for same-day service. Jobs typically take 1–3 hours depending on volume.</li>
                <li><strong>Licensing:</strong> Balderas Demolition Inc. holds a C-21 CSLB license and is fully bonded and insured in California.</li>
                <li><strong>Disruption:</strong> We protect your driveway and property during loading. No mess left behind — broom-clean finish guaranteed.</li>
              </ul>
              <p>
                <strong>Service areas:</strong> Anaheim, Irvine, Santa Ana, Costa Mesa, Huntington Beach,
                Fullerton, Newport Beach, Garden Grove, Tustin, Orange, and all surrounding OC cities.
                Call <strong>(714) 340-8108</strong> before noon for same-day service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SameDayJunkRemovalLanding>
  );
}
