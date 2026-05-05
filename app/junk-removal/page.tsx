"use client";

import Image from "next/image";
import { ContactCtaText } from "@/components/contact-cta-text";
import { ContactFormPanel, type ContactFormField } from "@/components/contact-form-panel";
import { DirectionButton } from "@/components/hero/direction-button";
import { HeroCtas } from "@/components/hero/hero-ctas";
import { HeroHeading } from "@/components/hero/hero-heading";
import { HeroParallaxBackground } from "@/components/hero/hero-parallax-background";
import { HeroSubheading } from "@/components/hero/hero-subheading";
import { InfoTicker } from "@/components/info-ticker";
import { GlassFeatureCard } from "@/components/glass-feature-card";
import { ServiceDetailSection } from "@/components/service-detail-section";
import { ServiceIntroSection } from "@/components/service-intro-section";
import { SplitHeroText } from "@/components/split-hero-text";
import {
  AbelsPersonalGuaranteeIcon,
  BroomCleanStandardIcon,
  EcoFriendlyDisposalIcon,
  UpfrontVolumePricingIcon,
} from "@/components/icons";

export default function JunkRemovalPage() {
  const junkRemovalContactFields: ContactFormField[] = [
    {
      id: "junk-name",
      label: "Name",
      type: "text",
      placeholder: "Your full name",
      width: "half",
    },
    {
      id: "junk-phone",
      label: "Phone Number",
      type: "text",
      inputType: "tel",
      placeholder: "Enter your phone number",
      width: "half",
    },
    {
      id: "junk-location",
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
      id: "junk-description",
      label: "Brief Description of Items",
      type: "textarea",
      placeholder: "",
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
          src="/images/junk_removal/img1.png"
          alt="Professional junk removal service in Orange County"
          priority
        />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] items-end px-6 pb-[180px] lg:px-10">
          <div className="max-w-[860px] text-[var(--color-brand-white)]">
            <HeroHeading className="max-w-[860px]">
              Professional Junk Removal Orange County: Reclaim Your Space Today
            </HeroHeading>

            <HeroSubheading className="max-w-[920px]">
              Clutter takes up space in your home-and in your mind. Instead of
              spending your weekend hauling heavy boxes to the dump, let
              Balderas Demolition Inc. handle it for you. Abel Balderas and his
              team take care of the heavy lifting, loading, and responsible
              disposal, so you&apos;re left with a clean, stress-free space.
            </HeroSubheading>

            <HeroCtas
              className="mt-10 flex-wrap"
              primaryHref="/contact"
              primaryLabel="Get a Junk Removal Quote"
              primaryButtonClassName="lg:w-[300px] xl:w-[340px]"
              secondaryHref="tel:+17143408108"
              secondaryLabel="(714) 340-8108"
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
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-20 px-6 lg:px-10 xl:gap-[120px]">
          <div className="w-full lg:hidden">
            <div className="relative h-[360px] w-full overflow-hidden">
              <Image
                src="/images/junk_removal/img2.png"
                alt="Residential junk hauling team loading debris"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ServiceIntroSection
            title="Full-Service Junk Removal"
            description="We don't just pick up bags on the curb. We go wherever the junk is-attics, basements, backyards, or office buildings."
            titleClassName="text-[#0b0300]"
            descriptionClassName="text-[#0b0300]"
          />

          <ServiceDetailSection
            imageSrc="/images/junk_removal/img2.png"
            imageAlt="Residential junk hauling team loading debris"
            imageSide="right"
            hideImageOnSmallScreens
            title="Residential Junk Hauling"
            intro="We help you clear out years of &quot;stuff&quot; so you can finally park your car inside again."
            items={[
              {
                heading: "Garage & Attic Cleanouts",
                text: "We help you clear out years of &quot;stuff&quot; so you can finally park your car inside again.",
              },
              {
                heading: "Furniture & Appliance Removal:",
                text: "Safely hauling away heavy sofas, refrigerators, washers, and mattresses.",
              },
              {
                heading: "Estate & Hoarding Cleanouts:",
                text: "Compassionate, efficient service for large-scale residential clearing.",
              },
              {
                heading: "E-Waste Disposal:",
                text: "Responsible recycling of old TVs, monitors, and electronics.",
              },
            ]}
          />

          <ServiceDetailSection
            imageSrc="/images/junk_removal/img3.jpg"
            imageAlt="Construction and commercial debris cleanup site"
            imageSide="left"
            title="Construction & Commercial Debris"
            intro="From backyard upgrades to clearing a lot, we have the equipment to handle the heavy stuff."
            items={[
              {
                heading: "Renovation Debris:",
                text: "We haul away wood, drywall, and carpet scraps from your DIY projects.",
              },
              {
                heading: "Office Cleanouts:",
                text: "Removing old desks, chairs, and filing cabinets to prep for your next move.",
              },
              {
                heading: "Property Manager Services:",
                text: "Quick turnarounds on apartment or rental unit \"trash-outs.\"",
              },
            ]}
          />
        </div>
      </section>

      <section className="relative w-full overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/junk_removal/img4.jpg"
            alt="Junk removal staging background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#06182C]/72" />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <p className="font-maison text-[26px] font-semibold text-white">Why Us?</p>

          <div className="mt-8">
            <SplitHeroText
              title="Why Choose Balderas Demolition Inc. for Your Hauling Needs?"
              description="There are plenty of &quot;guys with trucks&quot; in Orange County, but Abel Balderas brings a professional demolition background to every junk removal job. This means more safety, more efficiency, and better results."
              titleClassName="text-white"
              descriptionClassName="text-white"
              leftWidthClassName="xl:max-w-[790px]"
              rightWidthClassName="xl:max-w-[500px]"
              rightTopOffsetClassName="xl:pt-[55px]"
            />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
            <GlassFeatureCard
              icon={<EcoFriendlyDisposalIcon className="h-full w-full" />}
              title="Eco-Friendly Disposal:"
              description="We don't just head straight to the landfill. We sort through your items to donate usable goods to local OC charities and recycle metals, plastics, and paper."
            />
            <GlassFeatureCard
              icon={<UpfrontVolumePricingIcon className="h-full w-full" />}
              title="Upfront, Volume-Based Pricing:"
              description="You only pay for the space you use in our truck. No hidden labor fees or &quot;surprise&quot; disposal costs."
            />
            <GlassFeatureCard
              icon={<BroomCleanStandardIcon className="h-full w-full" />}
              title="The &quot;Broom-Clean&quot; Standard:"
              description="We don't leave a mess behind. After we load the junk, we sweep the area clean so you can enjoy your new space immediately."
            />
            <GlassFeatureCard
              icon={<AbelsPersonalGuaranteeIcon className="h-full w-full" />}
              title="Abel's Personal Guarantee:"
              description="As a locally owned business, our reputation is everything. Abel ensures his team is respectful, on time, and careful not to scuff anything during the process."
            />
          </div>
        </div>
      </section>

      <InfoTicker className="bg-[var(--color-brand-orange)] border-y-0" />

      <section className="relative w-full overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/junk_removal/img5.jpg"
            alt="Junk removal quote section background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#06182C]/58" />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
            <ContactCtaText
              className="w-full lg:max-w-[420px] xl:max-w-[444px]"
              titleWrapClassName="w-full lg:max-w-[420px] xl:max-w-[444px]"
              descriptionWrapClassName="mt-5 w-full lg:max-w-[420px] xl:max-w-[444px]"
              title="Ready to Say Goodbye to the Clutter?"
              description="Getting a quote is simple. Just point to what you want gone, and Abel will handle the rest. Join the Orange County residents who trust Balderas Demolition Inc. for a fresh start."
            />

            <ContactFormPanel
              className="w-full lg:max-w-[620px] xl:w-[780px] xl:max-w-[780px]"
              fields={junkRemovalContactFields}
              submitLabel="Submit"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
