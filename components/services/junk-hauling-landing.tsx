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
  return "tel:+17143408108";
}

const junkHaulingContactFields: ContactFormField[] = [
  {
    id: "junk-hauling-name",
    type: "text",
    label: "Name",
    placeholder: "Your full name",
    width: "half",
  },
  {
    id: "junk-hauling-phone",
    type: "text",
    inputType: "tel",
    label: "Phone Number",
    placeholder: "Enter your phone number",
    width: "half",
  },
  {
    id: "junk-hauling-city",
    type: "text",
    label: "City",
    placeholder: "Enter your city",
    width: "full",
  },
  {
    id: "junk-hauling-description",
    type: "textarea",
    label: "Description of Items to be Hauled",
    placeholder:
      "Describe what you need removed (furniture, appliances, debris, etc.)",
    width: "full",
    rows: 4,
  },
];

export function JunkHaulingLanding() {
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
          src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img6.jpg"
          alt="Junk hauling crew and truck loading debris in Orange County"
          priority
        />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-container items-end px-6 pb-[180px] lg:px-10">
          <div className="max-w-[920px] text-[var(--color-brand-white)]">
            <HeroHeading className="max-w-[920px]">
              Professional Junk Hauling Services Across Orange County
            </HeroHeading>

            <HeroSubheading className="max-w-[940px]">
              <strong className="font-semibold text-white">
                Heavy-Duty Hauling Solutions for Homes, Yards, and Job Sites.
              </strong>{" "}
              When you have more than just a few bags of trash, you need more
              than just a pickup truck. You need a professional hauling partner
              who can manage the logistics of heavy loads and large-scale
              removals. At Balderas Demolition Inc., we provide high-capacity
              junk hauling services that take the stress out of your biggest
              cleanups. Led by Abel Balderas, our team is equipped to handle
              everything from old appliances to massive piles of construction
              debris, ensuring your property is cleared quickly and safely.
            </HeroSubheading>

            <HeroCtas
              className="mt-10 flex-wrap"
              primaryHref="/contact"
              primaryLabel="Get a Hauling Quote"
              primaryButtonClassName="lg:w-[260px] xl:w-[280px]"
              secondaryHref="tel:+17143408108"
              secondaryLabel="(714) 340-8108"
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
            alt="Balderas Demolition hauling truck in Orange County"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#06182C]/72" />

        <div className="relative z-10 mx-auto flex w-full max-w-container flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-10">
          <div className="w-full lg:max-w-[560px]">
            <MainHeading className="text-white">
              Why Balderas Demolition Inc. is the Top Choice for Hauling
            </MainHeading>
            <div className="mt-6 w-full lg:max-w-[500px]">
              <BoldText className="text-white">
                In Orange County, reliability is everything. Abel Balderas has
                built a reputation for being the hauler who actually shows up on
                time and does exactly what he promised.
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
                title: "Abel's Personal Oversight:",
                description:
                  "Every hauling project is managed with the same precision as a full-scale demolition job. Abel ensures the crew is efficient, respectful, and thorough.",
              },
            ]}
          />
        </div>
      </section>

      <ServiceStepsSection
        imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img6.jpg"
        imageAlt="Balderas Demolition truck loaded for junk hauling in Orange County"
        imageSide="left"
        title="Transparent, Volume-Based Pricing"
        intro="We believe in fair, honest pricing. You shouldn't pay for a full truck if you only have a half-load. Abel provides upfront, all-inclusive quotes based on how much space your items take up in our truck."
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
              "Disposal and diversion costs are built into the price Abel confirms before we haul—nothing sneaky at the dump.",
          },
          {
            icon: <FastDeliveryIcon className="h-[29px] w-[31px]" />,
            title: "No Hidden Fuel Costs",
            description:
              "Fuel and trip costs are part of your all-inclusive estimate, not a fee tacked on at pickup.",
          },
        ]}
      />

      <section className="w-full bg-white py-16 lg:py-20">
        <div className="mx-auto w-full max-w-container px-6 lg:px-10">
          <div className="mx-auto max-w-[860px]">
            <h2 className="[font-family:var(--font-anton)] text-[28px] font-normal leading-[1.2] tracking-[-0.02em] text-[#0b0300] lg:text-[40px]">
              Junk Hauling in Orange County: Residential, Commercial, and Everything In Between
            </h2>
            <div className="mt-8 flex flex-col gap-6 text-[17px] leading-[1.7] text-[#3a3a3a]">
              <p>
                Junk hauling in Orange County isn&apos;t just about having a big truck.
                It requires knowledge of California&apos;s disposal regulations, access
                to licensed transfer stations, and the muscle and equipment to
                handle heavy, awkward, and mixed loads. Balderas Demolition Inc.
                provides professional junk hauling services for homeowners,
                landlords, contractors, and property managers throughout OC —
                with pricing that&apos;s based on volume and disclosed upfront, before
                we touch a single item.
              </p>
              <p>
                We haul everything that your regular trash service won&apos;t touch:
                old appliances, broken furniture, construction debris, yard waste,
                concrete, tile, drywall, and mixed loads from renovation projects.
                Unlike standard junk removal companies, we&apos;re also licensed for
                construction and demolition debris hauling — which means we can
                legally transport loads that require specialized permits and
                disposal documentation. If your contractor left a pile of debris
                on your property after a remodel, we handle it properly.
              </p>
              <p>
                Our hauling process is simple. We arrive, assess the load, quote
                the volume price on-site, and get your approval before loading
                begins. Our crew handles all the heavy lifting — you don&apos;t need
                to move items to the curb or break anything down. We sort mixed
                loads during the haul, separating recyclables from landfill-bound
                material, and we can provide weight tickets or disposal
                documentation for jobs that require it.
              </p>
              <p>
                Junk hauling services from Balderas Demolition Inc. are available
                across all of Orange County, including Anaheim, Irvine, Santa Ana,
                Huntington Beach, Costa Mesa, Fullerton, Newport Beach, Tustin,
                Garden Grove, and surrounding communities. Same-day and next-day
                hauling is available. Call (714) 340-8108 for a free quote or
                submit a request below.
              </p>
            </div>
          </div>
        </div>
      </section>

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
              description="Stop looking at that pile and start enjoying your space again. Contact the Balderas Demolition Inc. team for the most reliable junk hauling in the county."
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
