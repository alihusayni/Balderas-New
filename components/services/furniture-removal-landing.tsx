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
  ControlledDemolitionIcon,
  DrivewaySafePlacementIcon,
  EcoFriendlyDisposalIcon,
  OnSiteConsultationIcon,
  AbelsPersonalGuaranteeIcon,
  BroomCleanStandardIcon,
  FullSiteClearanceIcon,
  ReliableSchedulingIcon,
} from "@/components/icons";
import { SITE } from "@/lib/seo";

function getTextPhotoSmsHref(): string {
  const digits = SITE.telephone.replace(/\D/g, "");
  if (digits.length === 10) {
    const body = encodeURIComponent(
      "Hi Abel—I need a furniture removal estimate. I'll send photos next. ",
    );
    return `sms:+1${digits}?body=${body}`;
  }
  if (digits.length >= 11) {
    const body = encodeURIComponent(
      "Hi Abel—I need a furniture removal estimate. I'll send photos next. ",
    );
    return `sms:+${digits}?body=${body}`;
  }
  return "/contact";
}

const PROCESS_STEPS = [
  {
    title: "Fast Quote:",
    description:
      "Text us a photo of the items or fill out our online form for a transparent, upfront price.",
    icon: <OnSiteConsultationIcon className="h-full w-full" />,
  },
  {
    title: "Scheduled Pickup:",
    description:
      "We arrive on time and provide a courtesy call when we are 15–30 minutes away.",
    icon: <ReliableSchedulingIcon className="h-full w-full" />,
  },
  {
    title: "Professional Removal:",
    description:
      "Our team carefully lifts and loads your items into our high-capacity trucks.",
    icon: <FullSiteClearanceIcon className="h-full w-full" />,
  },
  {
    title: "Final Cleanup:",
    description:
      "We sweep the area where the furniture used to be, leaving your room ready for your new pieces.",
    icon: <BroomCleanStandardIcon className="h-full w-full" />,
  },
];

export function FurnitureRemovalLanding() {
  const textPhotoHref = getTextPhotoSmsHref();

  const furnitureContactFields: ContactFormField[] = [
    {
      id: "furniture-name",
      label: "Name",
      type: "text",
      placeholder: "Your full name",
      width: "half",
    },
    {
      id: "furniture-phone",
      label: "Phone Number",
      type: "text",
      inputType: "tel",
      placeholder: "Enter your phone number",
      width: "half",
    },
    {
      id: "furniture-location",
      label: "Location",
      type: "select",
      placeholder: "Enter location",
      width: "full",
      options: [
        { value: "orange-county", label: "Orange County" },
        { value: "los-angeles", label: "Los Angeles County" },
        { value: "riverside", label: "Riverside County" },
      ],
    },
    {
      id: "furniture-description",
      label: "Items to Remove (or attach photos)",
      type: "textarea",
      placeholder: "e.g. sectional, king mattress + frame, china cabinet…",
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
          src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/junk_removal/img1.png"
          alt="Professional furniture removal in Orange County"
          priority
        />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-container items-end px-6 pb-[180px] lg:px-10">
          <div className="max-w-[920px] text-[var(--color-brand-white)]">
            <HeroHeading className="max-w-[920px]">
              Professional Furniture Removal Orange County: We Do the Heavy
              Lifting
            </HeroHeading>

            <HeroSubheading className="max-w-[940px]">
         
              Getting a new sofa or upgrading your bedroom set is
              exciting—until you realize you have to get the old, heavy
              furniture out of the house. Don&apos;t risk a back injury or a
              scratched wall trying to navigate a bulky mattress down a flight
              of stairs. At Balderas Demolition Inc., we specialize in
              professional furniture removal. Abel Balderas and his experienced
              crew handle the disassembly, lifting, and hauling, so you
              don&apos;t have to lift a finger.
            </HeroSubheading>

            <HeroCtas
              className="mt-10 flex-wrap"
              primaryHref="/contact"
              primaryLabel="Get a Furniture Removal Quote"
              primaryButtonClassName="lg:w-[300px] xl:w-[340px]"
              secondaryHref="tel:+17143408108"
              secondaryLabel="(714) 340-8108"
              secondaryButtonClassName="md:min-w-[260px] md:w-[280px] lg:w-[340px] xl:w-[400px] 2xl:w-[440px]"
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
                alt="Crew lifting furniture safely from a home"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/junk_removal/img2.png"
            imageAlt="Furniture pickup and hauling in Orange County"
            imageSide="right"
            hideImageOnSmallScreens
            title="We Remove All Types of Furniture"
            intro={
              "No matter how big, heavy, or awkward the item is, we have the tools and the muscle to move it safely."
            }
            items={[
              {
                heading: "Living Room:",
                text: "Sectionals, sofas, recliners, coffee tables, and heavy entertainment centers.",
              },
              {
                heading: "Bedroom:",
                text: "Mattresses, box springs, bed frames, headboards, and heavy armoires.",
              },
              {
                heading: "Dining & Kitchen:",
                text: "Large dining tables, china cabinets, hutches, and kitchen islands.",
              },
              {
                heading: "Office & Outdoor:",
                text: "Desks, filing cabinets, patio sets, and heavy outdoor umbrellas.",
              },
            ]}
          />
        </div>
      </section>

      <section className="relative w-full overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/junk_removal/img4.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#06182C]/72" />

        <div className="relative z-10 mx-auto w-full max-w-container px-6 lg:px-10">
          <p className="font-maison text-[26px] font-semibold text-white">
            Advantage
          </p>

          <div className="mt-8">
            <SplitHeroText
              title='The Balderas Demolition Inc. Advantage: More Than Just a Hauling Service'
              description="Why hire a demolition professional for a furniture job? Because we understand structural safety and property protection better than a standard junk company."
              titleClassName="text-white"
              descriptionClassName="text-white"
              leftWidthClassName="xl:max-w-[790px]"
              rightWidthClassName="xl:max-w-[500px]"
              rightTopOffsetClassName="xl:pt-[55px]"
            />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
            <GlassFeatureCard
              icon={<DrivewaySafePlacementIcon className="h-full w-full" />}
              title="Wall & Floor Protection:"
              description="We treat your home with the utmost respect. Our team is trained to navigate tight corners and narrow hallways without scuffing your paint or gouging your hardwood floors."
            />
            <GlassFeatureCard
              icon={<ControlledDemolitionIcon className="h-full w-full" />}
              title="Disassembly Included:"
              description="If that oversized desk won't fit through the office door, don't worry. We bring the tools necessary to disassemble large furniture items on the spot for easier removal."
            />
            <GlassFeatureCard
              icon={<AbelsPersonalGuaranteeIcon className="h-full w-full" />}
              title="Donation-First Policy:"
              description="Abel believes in giving back to the Orange County community. If your furniture is still in good, usable condition, we do our best to drop it off at local charities or non-profits so it can find a second home rather than ending up in a landfill."
            />
            <GlassFeatureCard
              icon={<EcoFriendlyDisposalIcon className="h-full w-full" />}
              title="Responsible Recycling:"
              description="For items that are past their prime, we ensure they are disposed of at the proper recycling centers—breaking down metal frames and handling mattresses according to California regulations."
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 xl:py-28">
        <div className="mx-auto flex w-full max-w-container flex-col gap-14 px-6 lg:px-10">
          <div className="flex flex-col gap-12 xl:flex-row xl:items-start xl:h-[720px]">
            <div className="w-full xl:w-1/2">
              <div className="relative h-[340px] w-full overflow-hidden sm:h-[400px] md:h-[460px] xl:h-[720px]">
                <Image
                  src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/junk_removal/img3.jpg"
                  alt="Professional furniture removal and hauling crew in Orange County"
                  fill
                  sizes="(max-width: 1279px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full xl:w-1/2">
              <MainHeading className="text-[#0b0300]" as="h2">
                How Our Furniture Removal Process Works
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

      <InfoTicker className="border-y-0 bg-[var(--color-brand-orange)]" />

      <section className="relative w-full overflow-hidden py-20 lg:py-24">
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
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
            <ContactCtaText
              className="w-full lg:max-w-[420px] xl:max-w-[444px]"
              titleWrapClassName="w-full lg:max-w-[420px] xl:max-w-[444px]"
              descriptionWrapClassName="mt-5 w-full lg:max-w-[420px] xl:max-w-[444px]"
              title="Ready to Reclaim Your Space?"
              description={
                "Whether it\u2019s one single heavy recliner or an entire house worth of furniture, Abel Balderas is ready to help. Get your free, no-obligation estimate today."
              }
            />

            <ContactFormPanel
              className="w-full lg:max-w-[620px] xl:w-[780px] xl:max-w-[780px]"
              fields={furnitureContactFields}
              submitLabel="Submit"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
