import Image from "next/image";
import type { Metadata } from "next";
import type { ContactFormField } from "@/components/contact-form-panel";
import { DemolitionContactSection } from "@/components/services/demolition-contact-section";
import { DifferenceFeatureCard } from "@/components/services/difference-feature-card";
import { DifferenceFeaturesGrid } from "@/components/services/difference-features-grid";
import { FullBleedImageSection } from "@/components/services/full-bleed-image-section";
import { InteriorDemolitionHero } from "@/components/services/interior-demolition-hero";
import { JsonLd } from "@/components/json-ld";
import { MainHeading } from "@/components/main-heading";
import { ServiceDetailSection } from "@/components/service-detail-section";
import { ServiceIntroSection } from "@/components/service-intro-section";
import { SimpleText } from "@/components/simple-text";
import {
  DustDebrisControlIcon,
  FullSiteClearanceIcon,
  LicensedInsuredIcon,
  SystematicPlanningIcon,
} from "@/components/icons";
import {
  SITE,
  getBreadcrumbJsonLd,
  getServiceJsonLd,
  pageMetadata,
} from "@/lib/seo";
import { SplitHeroText } from "@/components/split-hero-text";

export const metadata: Metadata = pageMetadata({
  title: "Interior Demolition Services Orange County | Kitchen & Bath Strip-Outs",
  description:
    "Professional interior demolition in Orange County. Specializing in kitchen, bathroom, and flooring removal with dust control and surgical precision. Get a free quote today!",
  path: "/demolition/residential/interior",
  image: "/images/services/img2.png",
  imageAlt:
    "Demolition OC performing careful interior demolition in Orange County",
  keywords: [
    "interior demolition Orange County",
    "kitchen gutting Orange County",
    "bathroom strip-out",
    "flooring removal contractor",
    "interior demo dust control",
    "residential demolition remodel",
    "Demolition OC",
    "Orange County interior demolition",
  ],
});

const interiorServiceJsonLd = getServiceJsonLd({
  name: "Interior Demolition in Orange County",
  description:
    "Surgical interior residential demolition for remodels: kitchen and bathroom gutting, non-load-bearing wall removal, drywall and ceiling stripping, closet and built-in removal, and complete flooring tear-out—contractor-ready with dust containment and debris management throughout Orange County.",
  path: "/demolition/residential/interior",
  serviceType: "Interior Demolition",
  image: "/images/services/img2.png",
});

const interiorBreadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Demolition", path: "/demolition" },
  { name: "Residential", path: "/demolition/residential" },
  { name: "Interior Demolition", path: "/demolition/residential/interior" },
]);

const WHITE_GLOVE_FEATURES = [
  {
    variant: "orange" as const,
    title: "Superior Dust Containment:",
    description:
      "We use zip-poles and heavy-duty plastic sheeting to seal off the work zone, keeping dust out of your HVAC and furniture.",
    icon: <SystematicPlanningIcon className="h-full w-full" />,
    className: "order-1 md:order-none",
  },
  {
    variant: "slate" as const,
    title: "Floor & Path Protection:",
    description:
      "We lay down protective runners from your front door to the work area to prevent scuffs and scratches.",
    icon: <DustDebrisControlIcon className="h-full w-full" />,
    className: "order-2 md:order-none",
  },
  {
    variant: "mist" as const,
    title: "Strategic Debris Management:",
    description:
      "We don\u2019t drag heavy debris through your house; we use systematic pathways and smaller loads to ensure your home\u2019s integrity.",
    icon: <FullSiteClearanceIcon className="h-full w-full" />,
    className: "order-4 md:order-none",
  },
  {
    variant: "orange" as const,
    title: "The \"Broom-Clean\" Promise:",
    description:
      "We aren\u2019t finished until we\u2019ve vacuumed and wiped down the area. You won\u2019t find nails or splinters left behind.",
    icon: <LicensedInsuredIcon className="h-full w-full" />,
    className: "order-3 md:order-none",
  },
];

const INTERIOR_CONTACT_FIELDS: ContactFormField[] = [
  {
    id: "int-name",
    label: "Name",
    type: "text",
    placeholder: "Your full name",
    width: "half",
  },
  {
    id: "int-home-address",
    label: "Home Address",
    type: "text",
    placeholder: "Street, city, ZIP",
    width: "half",
  },
  {
    id: "int-focus",
    label: "Primary Focus",
    type: "select",
    placeholder: "Select focus area",
    width: "full",
    options: [
      { value: "kitchen", label: "Kitchen" },
      { value: "bathroom", label: "Bathroom" },
      { value: "flooring", label: "Flooring only" },
      { value: "whole-interior", label: "Whole interior" },
      { value: "walls-layout", label: "Walls / layout change" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "int-best-time",
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
          : "tel:+17143330178";
    return { display: raw, href };
  }
  return { display: "(714) 333-0178", href: "tel:+17143330178" };
}

export default function InteriorDemolitionPage() {
  const { href: callHref } = getCallPhone();

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-brand-dark)]">
      <JsonLd id="ld-interior-service" data={interiorServiceJsonLd} />
      <JsonLd id="ld-interior-breadcrumb" data={interiorBreadcrumbJsonLd} />
      <InteriorDemolitionHero quoteHref="/contact" callHref={callHref} />

      <section className="w-full bg-white py-24">
        <div className="mx-auto flex w-full max-w-container flex-col gap-20 px-6 lg:px-10 xl:gap-[120px]">
          <div className="w-full lg:hidden">
            <div className="relative h-[360px] w-full overflow-hidden">
              <Image
                src="/images/services/img2.png"
                alt="Interior kitchen and bath demolition"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ServiceIntroSection
            title="Interior Demolition Services Tailored for Remodels"
            description={
              "We provide the \u201cblank canvas\u201d that contractors and designers need to build your dream space. Our services are designed to be \u201ccontractor-ready\u201d\u2014meaning when we leave, the next trade can start immediately."
            }
            titleClassName="text-[#0b0300]"
            descriptionClassName="text-[#0b0300]"
            mobileDescription="We leave you a contractor-ready blank canvas\u2014strip-outs, gutting, and flooring removal so the next trade can start the moment we\u2019re done."
            mobileDescriptionClassName="font-maison text-[16px] font-semibold leading-[1.25] tracking-[0%] sm:text-[17px] sm:leading-[1.2] md:text-[19px]"
          />

          <ServiceDetailSection
            imageSrc="/images/services/img2.png"
            imageAlt="Kitchen and bathroom gutting and strip-out"
            imageSide="right"
            hideImageOnSmallScreens
            title="Kitchen & Bathroom Gutting"
            intro="The most important rooms in your house require the most careful demolition."
            items={[
              {
                heading: "Cabinet & Countertop Removal:",
                text: "We pull fixtures without damaging the drywall or plumbing you intend to keep.",
              },
              {
                heading: "Tile & Backsplash Stripping:",
                text: "Clean removal of stubborn tile from walls and floors.",
              },
              {
                heading: "Fixture Disposal:",
                text: "We haul away old tubs, toilets, and heavy appliances so you don\u2019t have to.",
              },
            ]}
          />

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/services/img3.jpg"
            imageAlt="Interior wall removal and drywall stripping"
            imageSide="left"
            title="Wall & Space Transformation"
            intro="Ready for an open-concept living area? We help you rethink your layout."
            items={[
              {
                heading: "Non-Load Bearing Wall Removal:",
                text: "Expertly taking down partitions to open up your floor plan.",
              },
              {
                heading: "Drywall & Ceiling Stripping:",
                text: "Removing damaged or dated materials down to the studs.",
              },
              {
                heading: "Closet & Built-In Removal:",
                text: "Clearing out old shelving and unnecessary interior structures.",
              },
            ]}
          />

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/services/img5.jpg"
            imageAlt="Flooring removal and surface prep"
            imageSide="right"
            title="Surface & Flooring Removal"
            intro="We save you days of back-breaking labor by stripping your floors to the subfloor."
            items={[
              {
                heading: "Hardwood & Laminate:",
                text: "Efficient removal and nail-pulling.",
              },
              {
                heading: "Stubborn Tile & Stone:",
                text: "We use specialized tools to lift thin-set and mortar.",
              },
              {
                heading: "Carpet & Tack Strip Removal:",
                text: "Leaving your floors smooth and ready for your new install.",
              },
            ]}
          />
        </div>
      </section>

      <FullBleedImageSection
        imageSrc="/images/services/img4.png"
        imageAlt="Demolition OC team at a residential interior project"
        overlayClassName="bg-[#06182C]/72"
        className="py-20 lg:py-24"
        contentClassName="mx-auto flex w-full max-w-container flex-col gap-16 px-6 lg:px-10"
      >
        <SplitHeroText
          title='The "White Glove" Approach to Interior Demolition'
          description={
            "Demolition OC understands that we are working inside your sanctuary. That\u2019s why we\u2019ve developed a protocol specifically for interior residential work:"
          }
          titleClassName="text-white"
          descriptionClassName="text-white"
        />
        <DifferenceFeaturesGrid>
          {WHITE_GLOVE_FEATURES.map(
            ({ className: orderClassName, ...item }) => (
              <DifferenceFeatureCard
                key={item.title}
                {...item}
                className={orderClassName}
              />
            ),
          )}
        </DifferenceFeaturesGrid>
      </FullBleedImageSection>

      <section className="w-full bg-[#efefef] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
        <div className="mx-auto grid w-full max-w-container grid-cols-1 items-center gap-8 px-4 sm:gap-10 sm:px-6 md:gap-12 md:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10">
          <div className="relative order-2 min-h-[300px] overflow-hidden sm:min-h-[360px] md:min-h-[500px] lg:order-1">
            <Image
              src="/images/about/2.jpg"
              alt="Demolition OC site supervisor on a demolition job site, your interior demo partner"
              fill
              sizes="(max-width: 1024px) 100vw, 650px"
              className="object-cover object-[40%_30%]"
            />
          </div>

          <div className="order-1 text-[#0b0b0b] lg:order-2">
            <MainHeading className="text-[#0b0300]" as="h2">
              Hands-On Leadership:{" "}
              <span className="text-[var(--color-brand-orange)]">
                Your Interior Demo Partner
              </span>
            </MainHeading>
            <div className="hidden sm:block sm:mt-12" aria-hidden />

            <SimpleText className="mt-8 text-[#0b0300] sm:mt-12">
              When it comes to working inside your home, trust is everything.
              Demolition OC is known across Orange County for professional
              communication and a hands-on approach. We don&apos;t just send
              a crew; our experienced project supervisors ensure the plan is executed with the care and respect
              your home deserves.
            </SimpleText>

            <blockquote className="mt-8 border-l-4 border-[var(--color-brand-orange)] pl-6 font-maison text-[17px] font-semibold italic leading-relaxed text-[#0b0300] sm:text-[19px] md:text-[21px]">
              &ldquo;We treat your kitchen like it&apos;s ours. Our goal is to
              make the demolition the easiest part of your entire
              remodel.&rdquo;{" "}
              <span className="mt-2 block font-bold not-italic">
                &mdash; Demolition OC Team
              </span>
            </blockquote>
          </div>
        </div>
      </section>

      <DemolitionContactSection
        title="Get a Clean Start on Your Remodel Today"
        description={
          'Don\u2019t let the \u201cdirty work\u201d delay your design. Contact Demolition OC for a fast, friendly, and professional interior estimate.'
        }
        fields={INTERIOR_CONTACT_FIELDS}
        submitLabel="Submit"
        overlayClassName="bg-[#06182C]/72"
      />

      <section className="w-full bg-white py-16 lg:py-20">
        <div className="mx-auto w-full max-w-container px-6 lg:px-10">
          <div className="mx-auto max-w-[860px]">
            <h2 className="[font-family:var(--font-anton)] text-[28px] font-normal leading-[1.2] tracking-[-0.02em] text-[#0b0300] lg:text-[40px]">
              Interior Demolition in Orange County — Licensed, Safe, and Contained
            </h2>
            <div className="mt-8 flex flex-col gap-6 text-[17px] leading-[1.7] text-[#3a3a3a]">
              <p>
                Demolition OC provides interior demolition services across Orange County.
                C-21 CSLB licensed and CalOSHA compliant, we remove walls, flooring, ceilings,
                and fixtures while keeping the exterior structure fully intact.
              </p>
              <p><strong>Common questions answered:</strong></p>
              <ul className="ml-6 list-disc flex flex-col gap-2">
                <li><strong>Cost:</strong> Interior demolition in OC typically runs $3,000–$15,000 depending on scope and square footage. Free on-site quote before any commitment.</li>
                <li><strong>Licensing:</strong> C-21 CSLB licensed, fully bonded and insured in California. We handle all city permits and asbestos/lead testing requirements.</li>
                <li><strong>Timeline:</strong> Most interior demolition projects complete in 2–5 days. We can typically start within one week of permit approval.</li>
                <li><strong>Disruption:</strong> Work areas are sealed with containment barriers. Dust is controlled throughout. No damage to adjacent rooms, plumbing, or electrical panels.</li>
              </ul>
              <p>
                <strong>Trust signals:</strong> 5-star rated on Google, 500+ projects completed,
                C-21 CSLB certified, fully insured, and CalOSHA compliant.
                We serve Anaheim, Irvine, Santa Ana, Fullerton, Costa Mesa,
                Huntington Beach, Newport Beach, Tustin, Garden Grove, and Orange.
                Call <strong>(714) 333-0178</strong> for a free estimate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
