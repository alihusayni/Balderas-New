import Image from "next/image";
import type { Metadata } from "next";
import type { ContactFormField } from "@/components/contact-form-panel";
import { ConcreteRemovalHero } from "@/components/services/concrete-removal-hero";
import { DemolitionContactSection } from "@/components/services/demolition-contact-section";
import { DemolitionDifferenceSection } from "@/components/services/demolition-difference-section";
import { DemolitionProcessSection } from "@/components/services/demolition-process-section";
import { FaqAccordion, type FaqItem } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { MainHeading } from "@/components/main-heading";
import { ServiceDetailSection } from "@/components/service-detail-section";
import { ServiceIntroSection } from "@/components/service-intro-section";
import { SimpleText } from "@/components/simple-text";
import { SubHeading } from "@/components/sub-heading";
import {
  SITE,
  getBreadcrumbJsonLd,
  getFaqJsonLd,
  getServiceJsonLd,
  pageMetadata,
} from "@/lib/seo";

const CONCRETE_FAQ_ITEMS: FaqItem[] = [
  {
    question: "How Much Does Concrete Removal Cost?",
    answer:
      "Pricing for concrete removal depends on thickness, reinforcement (like rebar), and accessibility. Abel provides transparent, flat-rate quotes so there are no surprises on your final bill.",
  },
];

const concreteFaqJsonLd = getFaqJsonLd(CONCRETE_FAQ_ITEMS);

export const metadata: Metadata = pageMetadata({
  title: "Concrete Removal and Hauling Orange County | Balderas Demolition Inc.",
  description:
    "Need old concrete gone? Abel Balderas and Balderas Demolition Inc. specialize in concrete removal and hauling. From patios to driveways, we break it, load it, and haul it!",
  path: "/demolition/concrete-removal-hauling",
  image: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/services/img6.png",
  imageAlt:
    "Balderas Demolition Inc. loading concrete debris for hauling in Orange County",
  keywords: [
    "concrete removal Orange County",
    "concrete hauling",
    "driveway removal contractor",
    "patio demolition",
    "garage slab removal",
    "concrete recycling Orange County",
    "Balderas Demolition",
    "Abel Balderas",
  ],
});

const concreteServiceJsonLd = getServiceJsonLd({
  name: "Concrete Removal and Hauling in Orange County",
  description:
    "Residential concrete demolition and hauling: driveways and walkways, patio and pool deck removal, steps and retaining walls, garage slabs, shed pads, and post footing removal—with high-capacity trucks, eco-friendly recycling, and broom-clean site finishing throughout Orange County.",
  path: "/demolition/concrete-removal-hauling",
  serviceType: "Concrete Removal and Hauling",
  image: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/services/img6.png",
});

const concreteBreadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Demolition", path: "/demolition" },
  {
    name: "Concrete Removal & Hauling",
    path: "/demolition/concrete-removal-hauling",
  },
]);

const CONCRETE_CONTACT_FIELDS: ContactFormField[] = [
  {
    id: "con-name",
    label: "Name",
    type: "text",
    placeholder: "Your full name",
    width: "half",
  },
  {
    id: "con-address",
    label: "Project Address",
    type: "text",
    placeholder: "Street, city, ZIP",
    width: "half",
  },
  {
    id: "con-scope",
    label: "Scope",
    type: "select",
    placeholder: "What are we removing?",
    width: "full",
    options: [
      { value: "driveway-walkway", label: "Driveway / walkway" },
      { value: "patio-pool-deck", label: "Patio / pool deck" },
      { value: "garage-slab", label: "Garage slab" },
      { value: "steps-retaining", label: "Steps / retaining wall" },
      { value: "shed-pad-footings", label: "Shed pad / footings" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "con-best-time",
    label: "Best Time to Call",
    type: "select",
    placeholder: "Select a time window",
    width: "full",
    options: [
      { value: "morning", label: "Morning (8am–12pm)" },
      { value: "afternoon", label: "Afternoon (12pm–4pm)" },
      { value: "evening", label: "Evening (4pm–7pm)" },
      { value: "any", label: "Any time" },
    ],
  },
];

function getCallPhone() {
  const raw = SITE.telephone.trim();
  if (raw) {
    const digits = raw.replace(/\D/g, "");
    const href =
      digits.length === 10
        ? `tel:+1${digits}`
        : digits.length >= 11
          ? `tel:+${digits}`
          : "tel:+17143408108";
    return { href };
  }
  return { href: "tel:+17143408108" };
}

export default function ConcreteRemovalHaulingPage() {
  const { href: callHref } = getCallPhone();

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-brand-dark)]">
      <JsonLd id="ld-concrete-service" data={concreteServiceJsonLd} />
      <JsonLd id="ld-concrete-breadcrumb" data={concreteBreadcrumbJsonLd} />
      <JsonLd id="ld-concrete-faq" data={concreteFaqJsonLd} />
      <ConcreteRemovalHero quoteHref="/contact" callHref={callHref} />

      <section className="w-full bg-white py-24">
        <div className="mx-auto flex w-full max-w-container flex-col gap-20 px-6 lg:px-10 xl:gap-[120px]">
          <div className="w-full lg:hidden">
            <div className="relative h-[360px] w-full overflow-hidden">
              <Image
                src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/services/img6.png"
                alt="Concrete removal and hauling equipment on site"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ServiceIntroSection
            title="Comprehensive Concrete Removal Services"
            description={
              "We handle everything from small decorative features to large-scale residential slabs. No job is too heavy for our crew."
            }
            titleClassName="text-[#0b0300]"
            descriptionClassName="text-[#0b0300]"
            mobileDescription="From driveways to garage slabs—we break it, load it, and haul it. No residential concrete job is too heavy for our crew."
            mobileDescriptionClassName="font-maison text-[16px] font-semibold leading-[1.25] tracking-[0%] sm:text-[17px] sm:leading-[1.2] md:text-[19px]"
          />

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/services/img1.png"
            imageAlt="Residential driveway and patio concrete removal"
            imageSide="right"
            hideImageOnSmallScreens
            title="Residential Concrete Demolition"
            intro="Upgrade your curb appeal or reclaim your backyard space."
            items={[
              {
                heading: "Driveway & Walkway Removal:",
                text: "We break up aged, root-damaged, or cracked paths and driveways.",
              },
              {
                heading: "Patio & Pool Deck Removal:",
                text: "Careful demolition near structures and pools to ensure no damage to your home.",
              },
              {
                heading: "Concrete Steps & Retaining Walls:",
                text: "Precision removal of vertical concrete structures.",
              },
            ]}
          />

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/services/img3.jpg"
            imageAlt="Slab and foundation concrete breaking and removal"
            imageSide="left"
            title="Slab & Foundation Work"
            intro="Preparing for a new build or an ADU? We clear the ground."
            items={[
              {
                heading: "Garage Floor Removal:",
                text: "Professional slab breaking for garage renovations.",
              },
              {
                heading: "Shed & Outbuilding Pads:",
                text: "Quick removal of old foundations.",
              },
              {
                heading: "Post Footing & Fence Base Removal:",
                text: "Pulling deep-set concrete to leave your soil clean.",
              },
            ]}
          />

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/services/img6.png"
            imageAlt="Concrete debris loaded for professional hauling"
            imageSide="right"
            hideImageOnSmallScreens
            title="Professional Hauling: We Don't Just Break It, We Take It"
            intro={
              "The hardest part of concrete removal isn't the breaking—it's the hauling. Concrete is incredibly heavy, and most local trash services won't touch it."
            }
            items={[
              {
                heading: "High-Capacity Hauling:",
                text: "We utilize heavy-duty trucks designed to handle the massive weight of concrete and asphalt.",
              },
              {
                heading: "Eco-Friendly Recycling:",
                text: "We don't just dump your old concrete in a landfill. We haul it to specialized recycling facilities where it is crushed and reused as road base or aggregate.",
              },
              {
                heading: "Broom-Clean Finish:",
                text: "Concrete removal is messy. Abel ensures that once the last piece of rebar is loaded, your site is scraped and swept clean of dust and gravel.",
              },
            ]}
          />
        </div>
      </section>

      <DemolitionDifferenceSection />

      <DemolitionProcessSection />

      <section className="border-t border-[#eaeaea] bg-white py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
        <div className="mx-auto grid w-full max-w-container grid-cols-1 items-start gap-8 px-4 sm:gap-10 sm:px-6 md:gap-12 md:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10 xl:items-center">
          <div className="relative order-2 min-h-[300px] overflow-hidden sm:min-h-[360px] md:min-h-[500px] lg:order-1">
            <Image
              src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/about/2.jpg"
              alt="Abel Balderas, owner of Balderas Demolition Inc., overseeing concrete removal and hauling"
              fill
              sizes="(max-width: 1024px) 100vw, 650px"
              className="object-cover object-[40%_30%]"
            />
          </div>

          <div className="order-1 text-[#0b0b0b] lg:order-2">
            <MainHeading className="text-[#0b0300]" as="h2">
              Why Trust Balderas Demolition Inc. with Your Concrete Project?
            </MainHeading>

            <SimpleText className="mt-6 text-[#0b0300]">
              Concrete removal carries risks—from hitting underground utility lines to
              damaging nearby structures. Abel Balderas brings a level of expertise that
              guarantees a smooth experience:
            </SimpleText>

            <div className="mt-10 flex flex-col gap-8">
              <div>
                <SubHeading className="text-[#0b0300]">Utility Safety:</SubHeading>
                <SimpleText className="mt-2 text-[#0b0300]">
                  We perform a thorough site assessment to identify gas, water, and
                  electrical lines before we bring in the heavy equipment.
                </SimpleText>
              </div>
              <div>
                <SubHeading className="text-[#0b0300]">
                  Impact Management:
                </SubHeading>
                <SimpleText className="mt-2 text-[#0b0300]">
                  We use specialized techniques to manage vibrations and noise,
                  protecting your home&apos;s foundation and keeping your neighbors
                  happy.
                </SimpleText>
              </div>
              <div>
                <SubHeading className="text-[#0b0300]">
                  Abel&apos;s Personal Oversight:
                </SubHeading>
                <SimpleText className="mt-2 text-[#0b0300]">
                  Abel stays in constant communication from the initial quote to the
                  final haul, ensuring the project stays on schedule and on budget.
                </SimpleText>
              </div>
            </div>

            <blockquote className="mt-10 border-l-4 border-[var(--color-brand-orange)] pl-6 font-maison text-[17px] font-semibold italic leading-relaxed text-[#0b0300] sm:mt-12 sm:text-[19px] md:text-[21px]">
              &ldquo;Concrete work is about power and precision. We have the tools
              to do it fast, and the respect to do it right.&rdquo;{" "}
              <span className="mt-2 block font-bold not-italic">
                &mdash; Abel Balderas
              </span>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 lg:py-[96px]">
        <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-6 lg:gap-14 lg:px-10">
          <div className="flex w-full flex-col gap-4 text-center sm:text-left">
            <MainHeading className="text-[#0b0300]" as="h2">
              Concrete Removal FAQs
            </MainHeading>
            <SimpleText className="mx-auto max-w-[590px] text-[#0b0300] sm:mx-0">
              Tap the question below for details on how we price concrete removal and
              what goes into your quote.
            </SimpleText>
          </div>

          <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[72px]">
            <FaqAccordion
              items={CONCRETE_FAQ_ITEMS}
              defaultOpenIndex={0}
              className="mx-auto w-full max-w-[1300px]"
            />
          </div>
        </div>
      </section>

      <DemolitionContactSection
        title="Ready to Clear Your Concrete?"
        description="Tell us about your driveway, patio, or slab—we'll get you a straight answer and a firm plan. Contact Balderas Demolition Inc. for a professional quote."
        fields={CONCRETE_CONTACT_FIELDS}
        submitLabel="Submit"
        overlayClassName="bg-[#06182C]/72"
      />

      <section className="w-full bg-white py-16 lg:py-20">
        <div className="mx-auto w-full max-w-container px-6 lg:px-10">
          <div className="mx-auto max-w-[860px]">
            <h2 className="[font-family:var(--font-anton)] text-[28px] font-normal leading-[1.2] tracking-[-0.02em] text-[#0b0300] lg:text-[40px]">
              Concrete Removal in Orange County — Licensed, Insured, and All-Inclusive
            </h2>
            <div className="mt-8 flex flex-col gap-6 text-[17px] leading-[1.7] text-[#3a3a3a]">
              <p>
                Balderas Demolition Inc. is a C-21 CSLB licensed concrete removal contractor
                serving Orange County for over 15 years. We handle everything from residential
                driveways to commercial foundation slabs.
              </p>
              <p><strong>Common questions answered:</strong></p>
              <ul className="ml-6 list-disc flex flex-col gap-2">
                <li><strong>Cost:</strong> Concrete removal in OC typically runs $500–$3,500 depending on thickness, rebar content, and access. Free on-site quote before any work begins.</li>
                <li><strong>Licensing:</strong> C-21 CSLB licensed, fully bonded and insured in California. All required permits are pulled and filed by our team.</li>
                <li><strong>Timeline:</strong> Most residential concrete removal jobs complete in 1–2 days. We can typically schedule within 72 hours of your call.</li>
                <li><strong>Disruption:</strong> We use controlled breaking techniques to protect adjacent surfaces. Concrete is hauled to certified recycling facilities — 90%+ is recycled, not landfilled.</li>
              </ul>
              <p>
                <strong>Trust signals:</strong> 5-star Google rating, 500+ completed projects,
                C-21 CSLB certified, and fully insured.
                We serve Anaheim, Irvine, Santa Ana, Fullerton, Costa Mesa,
                Huntington Beach, Newport Beach, Tustin, Garden Grove, and Orange.
                Call <strong>(714) 340-8108</strong> for a free estimate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
