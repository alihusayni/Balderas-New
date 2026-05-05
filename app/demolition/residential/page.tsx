import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ContactFormField } from "@/components/contact-form-panel";
import { DemolitionContactSection } from "@/components/services/demolition-contact-section";
import { DifferenceFeatureCard } from "@/components/services/difference-feature-card";
import { DifferenceFeaturesGrid } from "@/components/services/difference-features-grid";
import { FullBleedImageSection } from "@/components/services/full-bleed-image-section";
import { ProcessStepWithIcon } from "@/components/services/process-step-with-icon";
import { ResidentialDemolitionHero } from "@/components/services/residential-demolition-hero";
import { JsonLd } from "@/components/json-ld";
import { MainHeading } from "@/components/main-heading";
import { ServiceDetailSection } from "@/components/service-detail-section";
import { ServiceIntroSection } from "@/components/service-intro-section";
import {
  ControlledDemolitionIcon,
  DebrisSortingDisposalIcon,
  DustDebrisControlIcon,
  FullSiteClearanceIcon,
  LicensedInsuredIcon,
  OnSiteConsultationIcon,
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
  title: "Residential Demolition Orange County | Home Remodel Tear-Outs",
  description:
    "Planning a home remodel? Get professional residential demolition in Orange County. Abel Balderas and his team specialize in kitchen, bath, and backyard demo.",
  path: "/demolition/residential",
  image: "/images/services/img2.png",
  imageAlt:
    "Balderas Demolition Inc. performing careful residential demolition in Orange County",
  keywords: [
    "residential demolition Orange County",
    "home remodel demolition",
    "kitchen gutting Orange County",
    "bathroom demolition",
    "interior strip-out",
    "backyard structure removal",
    "Tustin residential demo",
  ],
});

const residentialServiceJsonLd = getServiceJsonLd({
  name: "Residential Demolition in Orange County",
  description:
    "Surgical residential demolition for remodels: interior strip-outs, kitchen and bath gutting, wall removal, flooring removal, and exterior services including decks, sheds, and pool in-fills throughout Orange County.",
  path: "/demolition/residential",
  serviceType: "Residential Demolition",
  image: "/images/services/img2.png",
});

const residentialBreadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Demolition", path: "/demolition" },
  { name: "Residential", path: "/demolition/residential" },
]);

const RESIDENTIAL_CONTACT_FIELDS: ContactFormField[] = [
  {
    id: "res-name",
    label: "Name",
    type: "text",
    placeholder: "Your full name",
    width: "half",
  },
  {
    id: "res-home-address",
    label: "Home Address",
    type: "text",
    placeholder: "Street, city, ZIP",
    width: "half",
  },
  {
    id: "res-project-type",
    label: "Project Type",
    type: "select",
    placeholder: "Select project type",
    width: "full",
    options: [
      { value: "kitchen", label: "Kitchen" },
      { value: "bath", label: "Bath" },
      { value: "whole-home-interior", label: "Whole home interior" },
      { value: "backyard-exterior", label: "Backyard / exterior" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "res-best-time",
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

const WHY_CHOOSE_FEATURES = [
  {
    variant: "orange" as const,
    title: "Dust & Protection Barriers:",
    description:
      "We use high-grade plastic sheeting and floor protection so dust doesn't migrate to the rest of your home.",
    icon: <SystematicPlanningIcon className="h-full w-full" />,
    className: "order-1 md:order-none",
  },
  {
    variant: "slate" as const,
    title: "Punctual & Respectful:",
    description:
      "We show up on time, keep noise to a minimum, and never use foul language on your property.",
    icon: <DustDebrisControlIcon className="h-full w-full" />,
    className: "order-2 md:order-none",
  },
  {
    variant: "mist" as const,
    title: "\"Broom-Clean\" Guarantee:",
    description:
      "We don't leave a pile of rubble. When we finish, the area is swept and vacuumed—ready for your next trade.",
    icon: <FullSiteClearanceIcon className="h-full w-full" />,
    className: "order-4 md:order-none",
  },
  {
    variant: "orange" as const,
    title: "Utility Awareness:",
    description:
      "Abel performs a pre-demo check on water, gas, and electrical lines to prevent costly accidents.",
    icon: <LicensedInsuredIcon className="h-full w-full" />,
    className: "order-3 md:order-none",
  },
];

const PROCESS_STEPS = [
  {
    title: "Walk-Through:",
    description:
      "Abel visits your home to understand your vision and identify any structural concerns.",
    icon: <OnSiteConsultationIcon className="h-full w-full" />,
  },
  {
    title: "Protection Setup:",
    description:
      "We seal off the work zone to protect your family and your air quality.",
    icon: <DustDebrisControlIcon className="h-full w-full" />,
  },
  {
    title: "Surgical Demo:",
    description:
      "Our crew removes the specified materials quickly and with control.",
    icon: <ControlledDemolitionIcon className="h-full w-full" />,
  },
  {
    title: "Final Haul:",
    description:
      "We load our trucks and perform a deep clean of the workspace.",
    icon: <DebrisSortingDisposalIcon className="h-full w-full" />,
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
    return { display: raw, href };
  }
  return { display: "(714) 340-8108", href: "tel:+17143408108" };
}

export default function ResidentialDemolitionPage() {
  const { display: phoneDisplay, href: callHref } = getCallPhone();

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-brand-dark)]">
      <JsonLd id="ld-residential-service" data={residentialServiceJsonLd} />
      <JsonLd
        id="ld-residential-breadcrumb"
        data={residentialBreadcrumbJsonLd}
      />
      <ResidentialDemolitionHero quoteHref="/contact" callHref={callHref} />

      <section className="w-full bg-white py-24">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-20 px-6 lg:px-10 xl:gap-[120px]">
          <div className="w-full lg:hidden">
            <div className="relative h-[360px] w-full overflow-hidden">
              <Image
                src="/images/services/img2.png"
                alt="Residential kitchen and bath demolition prep"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>


        
          <ServiceIntroSection
            title="Specializing in Home Remodel Demolition"
            description={
              "We don\u2019t just \u201csmash\u201d things. We systematically deconstruct spaces to make the job easier for your contractor, your plumber, and your family."
            }
            titleClassName="text-[#0b0300]"
            descriptionClassName="text-[#0b0300]"
            mobileDescription="We don\u2019t smash through blindly\u2014we deconstruct cleanly so every trade downstream can hit the ground running."
            mobileDescriptionClassName="font-maison text-[16px] font-semibold leading-[1.25] tracking-[0%] sm:text-[17px] sm:leading-[1.2] md:text-[19px]"
          />

          <ServiceDetailSection
            imageSrc="/images/services/img2.png"
            imageAlt="Interior residential strip-out and kitchen demolition"
            imageSide="right"
            hideImageOnSmallScreens
            title='Interior "Strip-Outs"'
            intro="Ready for a fresh look? We handle the heavy, dusty work of prepping your interior for its makeover."
            items={[
              {
                heading: "Kitchen & Bathroom Gutting:",
                text: "We carefully remove cabinets, countertops, and tile without damaging your subfloors or plumbing.",
              },
              {
                heading: "Wall & Partition Removal:",
                text: 'Expert removal of drywall and framing to create that "open concept" feel.',
              },
              {
                heading: "Complete Flooring Removal:",
                text: "We strip away old hardwood, stubborn tile, and dated carpet, leaving a smooth surface for your new install.",
              },
            ]}
          />

          <ServiceDetailSection
            imageSrc="/images/services/img3.jpg"
            imageAlt="Exterior residential demolition and debris removal"
            imageSide="left"
            title="Exterior Residential Services"
            intro="Clear the way for your new landscape or ADU."
            items={[
              {
                heading: "Patio & Deck Removal:",
                text: "We break up old concrete and haul away rotting wood decks safely.",
              },
              {
                heading: "Shed & Play-Set Disposal:",
                text: "If it’s an eyesore in your backyard, we can make it disappear in a single afternoon.",
              },
              {
                heading: "Pool In-fills:",
                text: "Reclaim your backyard space with professional concrete and pool structure removal.",
              },
            ]}
          />
        </div>
      </section>

      <FullBleedImageSection
        imageSrc="/images/services/img4.png"
        imageAlt="Balderas residential demolition team"
        overlayClassName="bg-[#06182C]/72"
        className="py-20 lg:py-24"
        contentClassName="mx-auto flex w-full max-w-[1400px] flex-col gap-16 px-6 lg:px-10"
      >
        <SplitHeroText
          title="Why Homeowners Choose Abel Balderas"
          description={
            "Demolition inside a home requires a different level of care than a commercial job site. Abel personally ensures his team follows a \u201cResident-First\u201d protocol:"
          }
          titleClassName="text-white"
          descriptionClassName="text-white"
        />
        <DifferenceFeaturesGrid>
          {WHY_CHOOSE_FEATURES.map(
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

      <section className="w-full bg-white py-20 xl:py-24">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-14 px-6 lg:px-10">
          <div className="flex flex-col gap-12 xl:flex-row xl:items-start xl:h-[720px]">
            <div className="w-full xl:w-1/2">
              <div className="relative h-[460px] w-full overflow-hidden xl:h-[720px]">
                <Image
                  src="/images/services/img5.jpg"
                  alt="Abel Balderas walking through a residential demo project"
                  fill
                  sizes="(max-width: 1279px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full xl:w-1/2">
              <MainHeading className="text-[#0b0300]" as="h2">
                Our 4-Step Residential Process
              </MainHeading>

              <div className="mt-8 w-full space-y-6 xl:space-y-8">
                {PROCESS_STEPS.map((step) => (
                  <ProcessStepWithIcon key={step.title} {...step} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemolitionContactSection
        title="Ready to Start Your Home Transformation"
        description="Stop staring at that old tile and start your demo today. Join the hundreds of OC homeowners who trust Abel Balderas for a clean start."
        fields={RESIDENTIAL_CONTACT_FIELDS}
        submitLabel="Submit"
        overlayClassName="bg-[#06182C]/72"
        
      />
    </main>
  );
}
