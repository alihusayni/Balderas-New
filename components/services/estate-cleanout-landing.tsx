"use client";

import Image from "next/image";
import { ContactCtaText } from "@/components/contact-cta-text";
import {
  ContactFormPanel,
  type ContactFormField,
} from "@/components/contact-form-panel";
import { DirectionButton } from "@/components/hero/direction-button";
import { HeroCtas } from "@/components/hero/hero-ctas";
import { HeroHeading } from "@/components/hero/hero-heading";
import { HeroParallaxBackground } from "@/components/hero/hero-parallax-background";
import { HeroSubheading } from "@/components/hero/hero-subheading";
import { GlassFeatureCard } from "@/components/glass-feature-card";
import { InfoTicker } from "@/components/info-ticker";
import { ProcessStepWithIcon } from "@/components/services/process-step-with-icon";
import { ServiceDetailSection } from "@/components/service-detail-section";
import { SplitHeroText } from "@/components/split-hero-text";
import { MainHeading } from "@/components/main-heading";
import {
  AbelsPersonalGuaranteeIcon,
  BroomCleanStandardIcon,
  DebrisSortingDisposalIcon,
  EcoFriendlyDisposalIcon,
  FinalWalkThroughIcon,
  LicensedInsuredIcon,
  NoHiddenFeesIcon,
  OnSiteConsultationIcon,
  PermitUtilityCheckIcon,
  ReliableSchedulingIcon,
} from "@/components/icons";
import { SITE } from "@/lib/seo";

function getTelHref(): string {
  const digits = SITE.telephone.replace(/\D/g, "");
  if (digits.length === 10) return `tel:+1${digits}`;
  if (digits.length >= 11) return `tel:+${digits}`;
  return "tel:+17143408108";
}

const CONSULTATION_HASH = "#estate-consultation";

const ESTATE_PROCESS_STEPS = [
  {
    title: "Initial Consultation:",
    description:
      "Abel meets with you at the property to determine the scope of the cleanout and what items need to stay or go.",
    icon: <OnSiteConsultationIcon className="h-full w-full" />,
  },
  {
    title: "Sorting & Loading:",
    description:
      "Our crew carefully removes items, sorting for donations, recycling, and disposal as we go.",
    icon: <DebrisSortingDisposalIcon className="h-full w-full" />,
  },
  {
    title: "Documentation Recovery:",
    description:
      "We keep an eye out for important papers or valuables you may have missed.",
    icon: <PermitUtilityCheckIcon className="h-full w-full" />,
  },
  {
    title: "Final Walk-Through:",
    description:
      "We ensure the property is broom-clean and meets your exact specifications.",
    icon: <FinalWalkThroughIcon className="h-full w-full" />,
  },
];

export function EstateCleanoutLanding() {
  const telHref = getTelHref();

  const estateContactFields: ContactFormField[] = [
    {
      id: "estate-name",
      label: "Name",
      type: "text",
      placeholder: "Your full name",
      width: "full",
    },
    {
      id: "estate-address",
      label: "Property Address",
      type: "text",
      placeholder: "Street, city, ZIP",
      width: "full",
    },
    {
      id: "estate-timeline",
      label: "Preferred Timeline",
      type: "select",
      placeholder: "Select timing",
      width: "full",
      options: [
        { value: "asap", label: "ASAP" },
        { value: "1-2-weeks", label: "Within 1–2 weeks" },
        { value: "1-month", label: "Within a month" },
        { value: "flexible", label: "Flexible / planning ahead" },
        { value: "unsure", label: "Not sure yet" },
      ],
    },
    {
      id: "estate-message",
      label: "Message / Specific Needs",
      type: "textarea",
      placeholder:
        "Share context executors asked for—keys, staging deadlines, sentimental items…",
      width: "full",
      rows: 5,
    },
  ];

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-brand-dark)]">
      <section className="-mt-[130px] relative min-h-screen w-full overflow-hidden pt-[230px]">
        <HeroParallaxBackground
          src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/junk_removal/img3.jpg"
          alt="Thoughtful estate cleanout and property clearing in Orange County"
          priority
        />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-container items-end px-6 pb-[180px] lg:px-10">
          <div className="max-w-[940px] text-[var(--color-brand-white)]">
            <HeroHeading className="max-w-[940px]">
              Compassionate Estate Cleanout Services in Orange County
            </HeroHeading>

            <HeroSubheading className="max-w-[940px]">
      
              Dealing with the loss of a loved one or managing the transition of an
              estate is a monumental task. The physical process of sorting through
              decades of belongings and clearing a property can be emotionally and
              physically exhausting. At Balderas Demolition Inc., we provide
              comprehensive estate cleanout services designed to lift that burden.
              Led by Abel Balderas, our team approaches every estate with the
              sensitivity, patience, and professionalism required during difficult
              times.
            </HeroSubheading>

            <HeroCtas
              className="mt-10 flex-wrap"
              primaryHref={CONSULTATION_HASH}
              primaryLabel="Request a Private Consultation"
              primaryButtonClassName="lg:min-w-[300px] lg:w-auto xl:min-w-[340px]"
              secondaryHref="tel:+17143408108"
              secondaryLabel="(714) 340-8108"
              secondaryButtonClassName="md:min-w-[240px] md:w-auto lg:w-[280px]"
              showSecondaryArrow={false}
            />
          </div>
        </div>
        <DirectionButton
          onClick={scrollToNextSection}
          aria-label="Scroll to next section"
          className="absolute bottom-6 right-5 z-20 hidden lg:flex lg:bottom-24 lg:right-8"
        />
      </section>

      <section className="w-full bg-white py-24">
        <div className="mx-auto flex w-full max-w-container flex-col gap-20 px-6 lg:px-10 xl:gap-[120px]">
          <div className="w-full lg:hidden">
            <div className="relative h-[360px] w-full overflow-hidden">
              <Image
                src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/junk_removal/img2.png"
                alt="Estate cleanout crew clearing a home with care"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/junk_removal/img2.png"
            imageAlt="Estate cleanout crew clearing a home with care"
            imageSide="right"
            hideImageOnSmallScreens
            title="Full-Service Estate Clearing Solutions"
            intro={`We don't just "haul junk." We provide a complete solution for families, executors, and real estate professionals who need a property returned to a "market-ready" state.`}
            items={[
              {
                heading: "Whole-Home Cleanouts:",
                text: "Comprehensive removal of all household items, including furniture, clothing, kitchenware, and personal effects.",
              },
              {
                heading: "Garage & Storage Shed Clearing:",
                text: "Sorting through tools, equipment, and long-term storage areas.",
              },
              {
                heading: "Property Prep for Sale:",
                text: "We clear the way for realtors by removing everything from the interior and exterior, ensuring the home is ready for staging or renovation.",
              },
              {
                heading: "Attic & Basement Hauling:",
                text: "Safe removal of items from hard-to-reach areas of the home.",
              },
            ]}
          />
        </div>
      </section>

      <section className="relative w-full overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/junk_removal/img4.jpg"
            alt="Estate cleanout and junk removal staging in Orange County"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#06182C]/72" />

        <div className="relative z-10 mx-auto w-full max-w-container px-6 lg:px-10">
          <p className="font-maison text-[26px] font-semibold text-white">
            Our Promise
          </p>

          <div className="mt-8">
            <SplitHeroText
              title="The Abel Balderas Promise: Respect and Integrity"
              description={`An estate cleanout is different from a standard junk removal job. It requires a partner who understands the value of the items they are handling—both financial and sentimental.`}
              titleClassName="text-white"
              descriptionClassName="text-white"
              leftWidthClassName="xl:max-w-[790px]"
              rightWidthClassName="xl:max-w-[500px]"
              rightTopOffsetClassName="xl:pt-[55px]"
            />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            <GlassFeatureCard
              icon={<AbelsPersonalGuaranteeIcon className="h-full w-full" />}
              title='The "Find and Save" Protocol'
              description={`If our team comes across items that appear to be of high sentimental or financial value (such as photographs, legal documents, jewelry, or small heirlooms), we set them aside and notify you immediately. We don't just dump—we look out for your family's history.`}
            />
            <GlassFeatureCard
              icon={<EcoFriendlyDisposalIcon className="h-full w-full" />}
              title="Donation-First Approach:"
              description="Abel believes in honoring the legacy of an estate by keeping as much as possible out of the landfill. We work with local Orange County charities to donate usable furniture, clothing, and household goods."
            />
            <GlassFeatureCard
              icon={<BroomCleanStandardIcon className="h-full w-full" />}
              title="Broom-Clean Results:"
              description="Once the property is cleared, we perform a deep sweep and cleanup. Our goal is to hand back the keys to a space that is empty, tidy, and ready for its next chapter."
            />
          </div>

          <p className="mt-20 font-maison text-[26px] font-semibold text-white lg:mt-24">
            Why Choose Us?
          </p>

          <div className="mt-8">
            <SplitHeroText
              title="Why Families and Realtors Trust Balderas Demolition Inc."
              description="From first phone call to final walk-through, you get predictable pricing, insured crews, and one accountable point of contact—Abel himself."
              titleClassName="text-white"
              descriptionClassName="text-white"
              leftWidthClassName="xl:max-w-[790px]"
              rightWidthClassName="xl:max-w-[500px]"
              rightTopOffsetClassName="xl:pt-[55px]"
            />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
            <GlassFeatureCard
              icon={<NoHiddenFeesIcon className="h-full w-full" />}
              title="Transparent, Flat-Rate Estimates:"
              description="We provide clear quotes based on the volume of the cleanout, so executors can manage the estate budget with confidence."
            />
            <GlassFeatureCard
              icon={<LicensedInsuredIcon className="h-full w-full" />}
              title="Insured and Professional:"
              description="We are fully insured, protecting the property during the entire removal process."
            />
            <GlassFeatureCard
              icon={<OnSiteConsultationIcon className="h-full w-full" />}
              title="Sensitive Communication:"
              description="Abel personally manages these projects, providing a single point of contact who is responsive and understanding of the situation."
            />
            <GlassFeatureCard
              icon={<ReliableSchedulingIcon className="h-full w-full" />}
              title="Fast Turnaround:"
              description="We can often clear an entire property in 1–2 days, helping you meet real estate or legal deadlines."
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 xl:py-28">
        <div className="mx-auto flex w-full max-w-container flex-col gap-14 px-6 lg:px-10">
          <div className="flex flex-col gap-12 xl:flex-row xl:items-start xl:h-[760px]">
            <div className="w-full xl:w-1/2">
              <div className="relative h-[340px] w-full overflow-hidden sm:h-[400px] md:h-[460px] xl:h-[760px]">
                <Image
                  src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/junk_removal/img1.png"
                  alt="Estate property walk-through with Balderas Demolition"
                  fill
                  sizes="(max-width: 1279px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full xl:w-1/2">
              <MainHeading className="text-[#0b0300]" as="h2">
                Our Step-by-Step Estate Process
              </MainHeading>

              <div className="mt-8 w-full space-y-6 xl:space-y-8">
                {ESTATE_PROCESS_STEPS.map((step) => (
                  <ProcessStepWithIcon key={step.title} {...step} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <InfoTicker className="border-y-0 bg-[var(--color-brand-orange)]" />

      <section
        id="estate-consultation"
        className="relative w-full scroll-mt-28 overflow-hidden py-20 lg:py-24"
      >
        <div className="absolute inset-0">
          <Image
            src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/junk_removal/img5.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#06182C]/58" />

        <div className="relative z-10 mx-auto w-full max-w-container px-6 lg:px-10">
          <div className="flex flex-col gap-14 lg:flex-row lg:items-start">
            <ContactCtaText
              className="w-full lg:max-w-[420px] xl:max-w-[444px]"
              titleWrapClassName="w-full lg:max-w-[420px] xl:max-w-[444px]"
              descriptionWrapClassName="mt-5 w-full lg:max-w-[420px] xl:max-w-[444px]"
              title="Let Us Help You Through This Transition"
              description="You don&apos;t have to do this alone. Trust Abel Balderas and the team at Balderas Demolition Inc. to handle your estate cleanout with the dignity it deserves."
            />

            <ContactFormPanel
              className="w-full lg:max-w-[620px] xl:w-[780px] xl:max-w-[780px]"
              fields={estateContactFields}
              submitLabel="Submit"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
