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
  DrivewaySafePlacementIcon,
  FastDeliveryIcon,
  FillItUpIcon,
  NoHiddenFeesIcon,
  OnSiteConsultationIcon,
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
  return "tel:+17143330178";
}

const junkHaulingContactFields: ContactFormField[] = [
  {
    id: "junk-hauling-name",
    type: "text",
    label: "Name",
    placeholder: "Your Name",
  },
  {
    id: "junk-hauling-phone",
    type: "text",
    inputType: "tel",
    label: "Phone Number",
    placeholder: "(714) 000-0000",
  },
  {
    id: "junk-hauling-city",
    type: "text",
    label: "City",
    placeholder: "e.g., Tustin, Irvine, Newport Beach",
  },
  {
    id: "junk-hauling-description",
    type: "textarea",
    label: "Description of Items to be Hauled",
    placeholder: "Tell us what needs hauling (furniture, debris, dirt, appliances, etc.)",
    rows: 4,
  },
];

export function JunkHaulingLanding({
  children,
}: {
  children?: React.ReactNode;
}) {
  const quoteHref = "#schedule-pickup";

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-brand-dark)]">
      <section className="-mt-[130px] relative w-full overflow-hidden">
        <HeroParallaxBackground
          src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img6.jpg"
          alt="Junk hauling truck and crew ready for debris removal in Orange County"
          priority
          overlayClassName="bg-[#06182C]/65"
        />

        <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-container items-end px-6 pt-[200px] pb-[80px] lg:min-h-[1040px] lg:px-10 lg:pt-[230px] lg:pb-[100px]">
          <div className="max-w-[760px] text-[var(--color-brand-white)] sm:max-w-[680px] md:max-w-[1100px]">
            <HeroHeading>
              Professional Junk Hauling Services in Orange County:{" "}
              <br className="hidden sm:block" />
              Heavy-Duty Muscle for Your Toughest Cleanups
            </HeroHeading>

            <HeroSubheading className="max-w-[940px]">
              <strong className="font-semibold text-white">
                Heavy-Duty Hauling Solutions for Homes, Yards, and Job Sites.
              </strong>{" "}
              When you have more than just a few bags of trash, you need more
              than just a pickup truck. You need a professional hauling partner
              who can manage the logistics of heavy loads and large-scale
              removals. At Demolition OC, we provide high-capacity
              junk hauling services that take the stress out of your biggest
              cleanups. Our team is equipped to handle
              everything from old appliances to massive piles of construction
              debris, ensuring your property is cleared quickly and safely.
            </HeroSubheading>

            <HeroCtas
              className="mt-10 flex-wrap"
              primaryHref="/contact"
              primaryLabel="Get a Hauling Quote"
              primaryButtonClassName="lg:w-[260px] xl:w-[280px]"
              secondaryHref="tel:+17143330178"
              secondaryLabel="(714) 333-0178"
              secondaryButtonClassName="sm:w-auto md:w-auto sm:shrink-0"
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
        <div className="mx-auto flex w-full max-w-container flex-col gap-20 px-6 lg:px-10 xl:gap-[120px]">
          <div className="w-full lg:hidden">
            <div className="relative h-[360px] w-full overflow-hidden">
              <Image
                src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img2.jpg"
                alt="Residential junk and debris ready for hauling in Orange County"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ServiceIntroSection
            title="Comprehensive Junk Hauling for Every Scale"
            description={`We specialize in "The Big Stuff." If it's too heavy for you to lift or too large for your trash bin, we'll haul it away.`}
            titleClassName="text-[#0b0300]"
            descriptionClassName="text-[#0b0300]"
          />

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img2.jpg"
            imageAlt="Residential junk and debris ready for hauling in Orange County"
            imageSide="right"
            hideImageOnSmallScreens
            textVerticalAlign="center"
            title="Residential Hauling"
            intro="When it won't fit in the bin, we load it and haul it safely and efficiently."
            items={[
              {
                heading: "Appliance & E-Waste Hauling:",
                text: "Safe removal of refrigerators, washers, dryers, and bulky electronics.",
              },
              {
                heading: "Property Cleanouts:",
                text: "Hauling away years of accumulated items from garages, attics, and basements.",
              },
              {
                heading: "Large Furniture Hauling:",
                text: "We move and haul sectionals, armoires, and heavy dining sets with ease.",
              },
            ]}
          />

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img4.jpg"
            imageAlt="Yard waste and exterior debris hauling in Orange County"
            imageSide="left"
            title="Yard & Exterior Hauling"
            intro="Clear fences, sheds, green waste, and more from your property."
            items={[
              {
                heading: "Green Waste Removal:",
                text: "Hauling away fallen trees, brush, sod, and landscape debris.",
              },
              {
                heading: "Hot Tub & Shed Removal:",
                text: "We don't just haul it; we can break it down and remove the entire structure.",
              },
              {
                heading: "Fence & Deck Hauling:",
                text: "Professional removal of old wood, vinyl, or chain-link fencing.",
              },
            ]}
          />

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img3.jpg"
            imageAlt="Construction and commercial debris hauling in Orange County"
            imageSide="right"
            title="Commercial & Construction Hauling"
            intro="From active job sites to retail turnovers, we keep debris off your timeline."
            items={[
              {
                heading: "Site Debris Removal:",
                text: "Keeping your construction or renovation site safe and navigable.",
              },
              {
                heading: "Office Furniture & Equipment:",
                text: "Fast hauling for business relocations or upgrades.",
              },
              {
                heading: 'Retail "Trash-Outs":',
                text: "Clearing out commercial spaces for new tenants.",
              },
            ]}
          />
        </div>
      </section>

      <section className="relative w-full overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img5.jpg"
            alt="Demolition OC hauling truck in Orange County"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#06182C]/72" />

        <div className="relative z-10 mx-auto flex w-full max-w-container flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-10">
          <div className="w-full lg:max-w-[560px]">
            <MainHeading className="text-white">
              Why Demolition OC is the Top Choice for Hauling
            </MainHeading>
            <div className="mt-6 w-full lg:max-w-[500px]">
              <BoldText className="text-white">
                In Orange County, reliability is everything. Demolition OC has
                built a reputation for being the hauler who actually shows up on
                time and does exactly what was promised.
              </BoldText>
            </div>
          </div>

          <GlassFeatureListCard
            className="lg:w-[730px]"
            items={[
              {
                icon: <FillItUpIcon className="h-full w-full" />,
                title: "High-Volume Capacity:",
                description:
                  "Our trucks are designed for maximum volume, meaning we can often clear an entire project in a single trip, saving you time and money.",
              },
              {
                icon: <DrivewaySafePlacementIcon className="h-full w-full" />,
                title: "Driveway-Safe Equipment:",
                description:
                  "Even our heavy-duty hauling equipment is operated with care to ensure your driveway and landscaping remain undamaged.",
              },
              {
                icon: <DebrisSortingDisposalIcon className="h-full w-full" />,
                title: "Responsible Disposal & Recycling:",
                description:
                  "We are committed to the OC community. We sort every haul to ensure that recyclables and donations are diverted away from the landfill whenever possible.",
              },
              {
                icon: <OnSiteConsultationIcon className="h-full w-full" />,
                title: "Hands-On Professional Oversight:",
                description:
                  "Every hauling project is managed with the same precision as a full-scale demolition job. Our leadership ensures the crew is efficient, respectful, and thorough.",
              },
            ]}
          />
        </div>
      </section>

      <ServiceStepsSection
        imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img6.jpg"
        imageAlt="Demolition OC truck loaded for junk hauling in Orange County"
        imageSide="left"
        title="Transparent, Volume-Based Pricing"
        intro="We believe in fair, honest pricing. You shouldn't pay for a full truck if you only have a half-load. Demolition OC provides upfront, all-inclusive quotes based on how much space your items take up in our truck."
        steps={[
          {
            icon: <UpfrontVolumePricingIcon className="h-[25px] w-[31px]" />,
            title: "No Labor Surcharges",
            description:
              "Loading and crew time are included in your upfront quote—no surprise labor charges on the invoice.",
          },
          {
            icon: <NoHiddenFeesIcon className="h-[25px] w-[31px]" />,
            title: "No Surprise Disposal Fees",
            description:
              "Disposal and diversion costs are built into the price we confirm before we haul—nothing sneaky at the dump.",
          },
          {
            icon: <FastDeliveryIcon className="h-[29px] w-[31px]" />,
            title: "No Hidden Fuel Costs",
            description:
              "Fuel and trip costs are part of your all-inclusive estimate, not a fee tacked on at pickup.",
          },
        ]}
      />

      {children}

      <section className="relative w-full overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img8.png"
            alt="Junk hauling contact section background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#06182C]/58" />

        <div className="relative z-10 mx-auto w-full max-w-container px-6 lg:px-10">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
            <ContactCtaText
              className="w-full lg:max-w-[420px] xl:max-w-[444px]"
              titleWrapClassName="w-full lg:max-w-[420px] xl:max-w-[444px]"
              descriptionWrapClassName="mt-5 w-full lg:max-w-[420px] xl:w-[444px]"
              title="Ready to Get Those Heavy Items Hauled Away?"
              description="Stop looking at that pile and start enjoying your space again. Contact the Demolition OC team for the most reliable junk hauling in the county."
            />

            <ContactFormPanel
              className="w-full lg:ml-auto lg:max-w-[620px] xl:w-[780px] xl:max-w-[780px]"
              fields={junkHaulingContactFields}
              submitLabel="Submit"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
