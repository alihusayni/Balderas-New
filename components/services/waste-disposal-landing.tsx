"use client";

import Image from "next/image";
import { DirectionButton } from "@/components/hero/direction-button";
import { HeroCtas } from "@/components/hero/hero-ctas";
import { HeroHeading } from "@/components/hero/hero-heading";
import { HeroParallaxBackground } from "@/components/hero/hero-parallax-background";
import { HeroSubheading } from "@/components/hero/hero-subheading";
import { BoldText } from "@/components/bold-text";
import { ContactCtaText } from "@/components/contact-cta-text";
import type { ContactFormField } from "@/components/contact-form-panel";
import { ContactFormPanel } from "@/components/contact-form-panel";
import { GlassFeatureListCard } from "@/components/glass-feature-list-card";
import {
  DebrisSortingDisposalIcon,
  EcoFriendlyDisposalIcon,
  FullSiteClearanceIcon,
  LicensedInsuredIcon,
  OnSiteConsultationIcon,
  PermitUtilityCheckIcon,
  SafetyAsStandardIcon,
  UpfrontVolumePricingIcon,
} from "@/components/icons";
import { MainHeading } from "@/components/main-heading";
import { ServiceDetailSection } from "@/components/service-detail-section";
import { ServiceIntroSection } from "@/components/service-intro-section";
import { ServiceStepsSection } from "@/components/service-steps-section";
import { SITE } from "@/lib/seo";

function getTelHref(): string {
  const digits = SITE.telephone.replace(/\D/g, "");
  if (digits.length === 10) return `tel:+1${digits}`;
  if (digits.length >= 11) return `tel:+${digits}`;
  return "tel:+17143408108";
}

const wasteDisposalContactFields: ContactFormField[] = [
  {
    id: "waste-disposal-name",
    type: "text",
    label: "Name",
    placeholder: "Your full name",
    width: "half",
  },
  {
    id: "waste-disposal-phone",
    type: "text",
    inputType: "tel",
    label: "Phone Number",
    placeholder: "Enter your phone number",
    width: "half",
  },
  {
    id: "waste-disposal-location",
    type: "text",
    label: "Location",
    placeholder: "Enter location or address",
    width: "full",
  },
  {
    id: "waste-disposal-type",
    type: "select",
    label: "Type of Waste",
    placeholder: "Select type of waste",
    width: "full",
    options: [
      { value: "cd", label: "C&D" },
      { value: "household", label: "Household" },
      { value: "green-waste", label: "Green Waste" },
    ],
  },
];

export function WasteDisposalLanding() {
  const telHref = getTelHref();

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-brand-dark)]">
      <section className="relative -mt-[130px] min-h-screen w-full overflow-hidden pt-[230px]">
        <HeroParallaxBackground
          src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img1.png"
          alt="Dumpster and waste hauling for construction and household debris in Orange County"
          priority
        />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] items-end px-6 pb-[180px] lg:px-10">
          <div className="max-w-[920px] text-[var(--color-brand-white)]">
            <HeroHeading className="max-w-[920px]">
              Professional Waste Disposal Services in Orange County
            </HeroHeading>

            <HeroSubheading className="max-w-[940px]">
              Efficient and eco-friendly waste disposal in Orange County. Abel
              Balderas and his team handle construction debris, household waste,
              and bulk hauling. Get a free quote today!
            </HeroSubheading>

            <HeroCtas
              className="mt-10 flex-wrap"
              primaryHref="/contact"
              primaryLabel="Get a Free Quote"
              primaryButtonClassName="lg:w-[260px] xl:w-[280px]"
              secondaryHref="tel:+17143408108"
              secondaryLabel="(714) 340-8108"
              showSecondaryArrow={false}
            />
          </div>
        </div>

        <DirectionButton
          onClick={scrollToNextSection}
          aria-label="Scroll to next section"
          className="absolute bottom-6 right-5 z-20 hidden lg:bottom-24 lg:right-8 lg:flex"
        />
      </section>

      <section className="w-full bg-white py-24">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-20 px-6 lg:px-10 xl:gap-[120px]">
          <div className="w-full lg:hidden">
            <div className="relative h-[360px] w-full overflow-hidden">
              <Image
                src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img2.jpg"
                alt="Waste disposal and debris removal in Orange County"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ServiceIntroSection
            title="Comprehensive Waste Disposal Solutions"
            description="Whether you are managing a one-time cleanout or ongoing construction debris, we have the capacity and the expertise to handle your waste removal needs."
            titleClassName="text-[#0b0300]"
            descriptionClassName="text-[#0b0300]"
          />

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img3.jpg"
            imageAlt="Construction and demolition waste disposal"
            imageSide="right"
            hideImageOnSmallScreens
            textVerticalAlign="center"
            title="Construction & Demolition (C&D) Waste"
            intro="Keeping your job site clear of hazards is our priority."
            items={[
              {
                heading: "Lumber & Drywall:",
                text: "Fast removal of framing scraps and gypsum board.",
              },
              {
                heading: "Roofing & Siding:",
                text: "Disposal of old shingles, tiles, and exterior cladding.",
              },
              {
                heading: "Concrete & Brick:",
                text: "Heavy-duty hauling for masonry and stone debris.",
              },
            ]}
          />

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img4.jpg"
            imageAlt="Bulk household waste and appliance disposal"
            imageSide="left"
            title="Bulk Household Waste"
            intro="For the items that your local trash collector won&apos;t touch."
            items={[
              {
                heading: "Appliance Disposal:",
                text: "Safe removal and recycling of refrigerators, ovens, and HVAC units.",
              },
              {
                heading: "Mattress & Furniture Hauling:",
                text: "Ensuring bulky items are disposed of according to California state mandates.",
              },
              {
                heading: "Outdoor & Garden Waste:",
                text: "Large-scale removal of tree limbs, dirt, and sod.",
              },
            ]}
          />
        </div>
      </section>

      <section className="relative w-full overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img5.jpg"
            alt="Waste disposal truck and service in Orange County"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#06182C]/72" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-10">
          <div className="w-full lg:max-w-[560px]">
            <MainHeading className="text-white">
              The Balderas Demolition Inc. Standard: Eco-Friendly & Compliant
            </MainHeading>
            <div className="mt-6 w-full lg:max-w-[500px]">
              <BoldText className="text-white">
                Waste disposal in 2026 requires more than just a trip to the
                landfill. Abel Balderas is committed to sustainable practices
                that protect the Orange County environment.
              </BoldText>
            </div>
          </div>

          <GlassFeatureListCard
            className="lg:w-[730px]"
            items={[
              {
                icon: <EcoFriendlyDisposalIcon className="h-full w-full" />,
                title: "High Diversion Rates:",
                description:
                  "We don&apos;t just dump. We sort through your waste to divert as much as possible away from landfills. Metals, wood, and concrete are taken to specialized recycling facilities to be repurposed.",
              },
              {
                icon: <LicensedInsuredIcon className="h-full w-full" />,
                title: "Regulatory Compliance:",
                description:
                  "We stay up-to-date on all OC waste management ordinances, ensuring that your debris is disposed of legally and ethically.",
              },
              {
                icon: <UpfrontVolumePricingIcon className="h-full w-full" />,
                title: "Transparent Pricing:",
                description:
                  "Our disposal rates are based on volume and weight, provided upfront so you can manage your project costs without surprises.",
              },
              {
                icon: <SafetyAsStandardIcon className="h-full w-full" />,
                title: "Safety First:",
                description:
                  "Our team uses professional-grade equipment to load waste, preventing injuries and protecting your property from damage during the haul.",
              },
            ]}
          />
        </div>
      </section>

      <ServiceStepsSection
        imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img6.jpg"
        imageAlt="Waste management truck and crew loading debris in Orange County"
        imageSide="left"
        title="How We Manage Your Waste"
        steps={[
          {
            icon: <OnSiteConsultationIcon className="h-[25px] w-[31px]" />,
            title: "Site Evaluation:",
            description:
              "Abel provides a clear estimate based on the type and volume of waste you need to be removed.",
          },
          {
            icon: <FullSiteClearanceIcon className="h-[29px] w-[31px]" />,
            title: "Efficient Loading:",
            description:
              "Our crew arrives and handles the heavy lifting, using specialized tools to load the trucks safely.",
          },
          {
            icon: <DebrisSortingDisposalIcon className="h-[28px] w-[31px]" />,
            title: "Strategic Sorting:",
            description:
              "We transport the materials to the appropriate facilities—charity for donations, recycling centers for raw materials, and certified transfer stations for the rest.",
          },
          {
            icon: <PermitUtilityCheckIcon className="h-[26px] w-[31px]" />,
            title: "Verification:",
            description:
              "Upon request, we can provide documentation of where your waste was disposed of for your records.",
          },
        ]}
      />

      <section className="relative w-full overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img8.png"
            alt="Waste disposal contact section background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#06182C]/58" />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
            <ContactCtaText
              className="w-full lg:max-w-[420px] xl:max-w-[444px]"
              titleWrapClassName="w-full lg:max-w-[420px] xl:max-w-[444px]"
              descriptionWrapClassName="mt-5 w-full lg:max-w-[420px] xl:w-[444px]"
              title="Ready to Clear Your Property?"
              description="Don't let waste pile up and become a safety hazard or an eyesore. Trust the Balderas Demolition Inc. team to handle your disposal needs quickly and professionally."
            />

            <ContactFormPanel
              className="w-full lg:ml-auto lg:max-w-[620px] xl:w-[780px] xl:max-w-[780px]"
              fields={wasteDisposalContactFields}
              submitLabel="Submit"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
