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
    <EstateCleanoutLanding>
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="mx-auto w-full max-w-container px-6 lg:px-10">
          <div className="mx-auto max-w-[860px]">
            <h2 className="[font-family:var(--font-anton)] text-[28px] font-normal leading-[1.2] tracking-[-0.02em] text-[#0b0300] lg:text-[40px]">
              Estate Cleanout Services in Orange County — What to Expect
            </h2>
            <div className="mt-8 flex flex-col gap-6 text-[17px] leading-[1.7] text-[#3a3a3a]">
              <p>
                Balderas Demolition Inc. provides full estate cleanout services across Orange County.
                Whether you&apos;re settling a loved one&apos;s affairs or preparing a property for sale,
                we handle the physical work so your family can focus on what matters.
              </p>
              <p>
                Abel Balderas personally leads every walk-through. We identify what stays and what goes,
                set aside valuables for your review, and work on your timeline — single-day or phased over a week.
              </p>
              <p><strong>What we remove in a single trip:</strong></p>
              <ul className="ml-6 list-disc flex flex-col gap-2">
                <li>Furniture, appliances, and mattresses</li>
                <li>Clothing, kitchenware, and décor</li>
                <li>Garage contents and yard equipment</li>
                <li>Electronics, books, and miscellaneous clutter</li>
              </ul>
              <p>
                We don&apos;t just haul to the landfill. Usable items go to OC donation centers.
                Metals and electronics go to certified recycling facilities.
                We provide itemized disposal records on request.
              </p>
              <p><strong>Common questions answered:</strong></p>
              <ul className="ml-6 list-disc flex flex-col gap-2">
                <li><strong>Cost:</strong> Most OC estate cleanouts run $400–$1,500 depending on home size and volume. We quote on-site before any work begins.</li>
                <li><strong>Timeline:</strong> Most cleanouts complete in 1–2 days. We can typically schedule within 48 hours of your call.</li>
                <li><strong>Licensing:</strong> Balderas Demolition Inc. holds a C-21 CSLB license and is fully bonded and insured in California.</li>
              </ul>
              <p>
                <strong>We serve all of Orange County</strong>, including Anaheim, Irvine, Santa Ana,
                Fullerton, Costa Mesa, Huntington Beach, Newport Beach, Tustin, Garden Grove, and Orange.
                Call <strong>(714) 340-8108</strong> for a free on-site assessment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </EstateCleanoutLanding>
  );
}
