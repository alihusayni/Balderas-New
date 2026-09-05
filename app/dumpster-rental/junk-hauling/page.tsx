import { JunkHaulingLanding } from "@/components/services/junk-hauling-landing";

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Junk Hauling Services Orange County | Demolition OC",
  description: "Full-service junk hauling across Orange County. Demolition OC removes and disposes of all types of junk—residential, yard, and commercial—with upfront volume pricing.",
  path: "/dumpster-rental/junk-hauling",
});

export default function JunkHaulingPage() {
  return (
    <JunkHaulingLanding>
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="mx-auto w-full max-w-container px-6 lg:px-10">
          <div className="mx-auto max-w-[860px]">
            <h2 className="[font-family:var(--font-anton)] text-[28px] font-normal leading-[1.2] tracking-[-0.02em] text-[#0b0300] lg:text-[40px]">
              Junk Hauling in Orange County — Licensed, All-Inclusive, Same-Day Available
            </h2>
            <div className="mt-8 flex flex-col gap-6 text-[17px] leading-[1.7] text-[#3a3a3a]">
              <p>
                Demolition OC provides professional junk hauling for homeowners,
                landlords, contractors, and property managers across Orange County.
                Pricing is based on volume and disclosed upfront — before we touch a single item.
              </p>
              <p><strong>We haul what regular trash service won&apos;t touch:</strong></p>
              <ul className="ml-6 list-disc flex flex-col gap-2">
                <li>Old appliances, furniture, and mattresses</li>
                <li>Construction debris: concrete, tile, drywall, lumber</li>
                <li>Yard waste: sod, soil, tree limbs, green waste</li>
                <li>Mixed renovation loads left behind by contractors</li>
                <li>Electronics, e-waste, and bulk household clutter</li>
              </ul>
              <p>
                Unlike standard junk companies, we&apos;re licensed for C&amp;D debris hauling.
                We can legally transport loads that require disposal documentation.
              </p>
              <p><strong>Common questions answered:</strong></p>
              <ul className="ml-6 list-disc flex flex-col gap-2">
                <li><strong>Cost:</strong> Most junk hauling jobs in OC run $150–$700 depending on volume. We quote on-site before loading begins.</li>
                <li><strong>Timeline:</strong> Same-day and next-day hauling available throughout Orange County.</li>
                <li><strong>Licensing:</strong> Demolition OC holds a C-21 CSLB license, is fully bonded and insured, and certified for C&amp;D debris transport.</li>
                <li><strong>Documentation:</strong> We provide weight tickets and facility receipts for any job requiring disposal records.</li>
              </ul>
              <p>
                <strong>Service areas:</strong> Anaheim, Irvine, Santa Ana, Huntington Beach, Costa Mesa,
                Fullerton, Newport Beach, Tustin, Garden Grove, Orange, and all surrounding OC communities.
                Call <strong>(714) 333-0178</strong> for a free quote.
              </p>
            </div>
          </div>
        </div>
      </section>
    </JunkHaulingLanding>
  );
}
