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
    <WasteDisposalLanding>
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="mx-auto w-full max-w-container px-6 lg:px-10">
          <div className="mx-auto max-w-[860px]">
            <h2 className="[font-family:var(--font-anton)] text-[28px] font-normal leading-[1.2] tracking-[-0.02em] text-[#0b0300] lg:text-[40px]">
              Waste Disposal in Orange County — Licensed, Compliant, Documented
            </h2>
            <div className="mt-8 flex flex-col gap-6 text-[17px] leading-[1.7] text-[#3a3a3a]">
              <p>
                Balderas Demolition Inc. provides professional waste disposal across Orange County.
                California CALGreen requires 65% diversion of construction and demolition debris from landfills.
                OC cities add their own ordinances on top. We manage all compliance for you.
              </p>
              <p><strong>Three waste categories we handle:</strong></p>
              <ul className="ml-6 list-disc flex flex-col gap-2">
                <li><strong>C&amp;D debris:</strong> Concrete, brick, drywall, lumber, roofing — taken to certified recycling facilities</li>
                <li><strong>Bulk household waste:</strong> Appliances, furniture, mattresses — donation centers, certified recyclers, or transfer stations</li>
                <li><strong>Green/yard waste:</strong> Sod, soil, tree limbs — diverted to composting facilities, not the landfill</li>
              </ul>
              <p>
                We document every load. Weight tickets and facility receipts are available
                for permit closeout, HOA compliance, or project records.
              </p>
              <p><strong>Common questions answered:</strong></p>
              <ul className="ml-6 list-disc flex flex-col gap-2">
                <li><strong>Cost:</strong> Most OC waste disposal jobs run $200–$800 depending on volume and material type. All-in pricing — no hidden fees.</li>
                <li><strong>Timeline:</strong> Same-day and next-day service available. We respond the same business day.</li>
                <li><strong>Licensing:</strong> Balderas Demolition Inc. holds a C-21 CSLB license, is fully bonded and insured, and certified for C&amp;D debris transport in California.</li>
                <li><strong>Disruption:</strong> Our crew handles all loading with professional equipment — no damage to driveways or landscaping.</li>
              </ul>
              <p>
                <strong>Service areas:</strong> Anaheim, Irvine, Santa Ana, Huntington Beach, Costa Mesa,
                Fullerton, Newport Beach, Tustin, Garden Grove, Orange, and all surrounding OC areas.
                Call <strong>(714) 340-8108</strong> for a free on-site estimate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </WasteDisposalLanding>
  );
}
