// Server Component — no "use client".
// The LCP <h1> is SSR'd immediately; the scroll button is isolated
// in HeroScrollButton (a "use client" leaf) as on the homepage.
import Image from "next/image";
import type { Metadata } from "next";
import { BoldText } from "@/components/bold-text";
import { ContactCtaText } from "@/components/contact-cta-text";
import { ContactFormPanel, type ContactFormField } from "@/components/contact-form-panel";
import { GlassFeatureListCard } from "@/components/glass-feature-list-card";
import { HeroScrollButton } from "@/components/hero/hero-scroll-button";
import { HeroCtas } from "@/components/hero/hero-ctas";
import { HeroHeading } from "@/components/hero/hero-heading";
import { HeroParallaxBackground } from "@/components/hero/hero-parallax-background";
import { HeroSubheading } from "@/components/hero/hero-subheading";
import {
  CompactManeuverableIcon,
  DrivewaySafePlacementIcon,
  FastDeliveryIcon,
  FillItUpIcon,
  NoHiddenFeesIcon,
  PickYourSizeIcon,
  ReliableSchedulingIcon,
} from "@/components/icons";
import { MainHeading } from "@/components/main-heading";
import { ServiceDetailSection } from "@/components/service-detail-section";
import { ServiceIntroSection } from "@/components/service-intro-section";
import { ServiceStepsSection } from "@/components/service-steps-section";
import { RentalWarningIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbJsonLd, getServiceJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Affordable Dumpster Rental Orange County | Balderas Demolition",
  description: "Rent a dumpster in Orange County from Balderas Demolition Inc. Easy drop-off, flat-rate pricing, same-week delivery available. You load it, we haul it.",
  path: "/dumpster-rental",
});

const dumpsterRentalServiceJsonLd = getServiceJsonLd({
  name: "Dumpster Rental Services in Orange County",
  description:
    "Affordable roll-off dumpster rental throughout Orange County. Flat-rate pricing, same-week delivery, driveway-safe containers for residential and commercial projects.",
  path: "/dumpster-rental",
  serviceType: "Dumpster Rental",
  image: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img1.png",
});

const dumpsterRentalBreadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Dumpster Rental", path: "/dumpster-rental" },
]);

const dumpsterRentalFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What dumpster sizes do you offer for Orange County projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a range of roll-off dumpster sizes to fit any project \u2014 from small kitchen remodels to full estate cleanouts. Our containers are driveway-safe and designed to avoid damage to your concrete or pavers. Contact us to find the right size for your job.",
      },
    },
    {
      "@type": "Question",
      name: "How long can I keep the dumpster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard rental periods are flexible \u2014 most customers keep their dumpster 3\u20137 days. We work with your timeline and schedule pickup when you\u2019re ready. Extended rentals are available at a daily rate.",
      },
    },
    {
      "@type": "Question",
      name: "Are there items I cannot put in the dumpster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You cannot place hazardous materials (paint, chemicals, asbestos, batteries, tires, or medical waste) in our dumpsters. All other general construction and household debris is acceptable.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a permit to place a dumpster in my driveway in Orange County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If the dumpster stays on your private driveway, no permit is typically required. If it needs to be placed on a public street or sidewalk, a city encroachment permit may be needed. We can advise you on the requirements for your specific city.",
      },
    },
  ],
};

const dumpstersContactFields: ContactFormField[] = [
  { id: "dumpster-name", label: "Name", type: "text", placeholder: "Your full name", width: "half" },
  { id: "dumpster-phone", label: "Phone Number", type: "text", inputType: "tel", placeholder: "Enter your phone number", width: "half" },
  { id: "dumpster-delivery-address", label: "Delivery Address", type: "text", placeholder: "Enter delivery address", width: "full" },
  {
    id: "dumpster-start-date", label: "Estimated Start Date", type: "select",
    placeholder: "Select estimated start date", width: "full",
    options: [
      { value: "this-week", label: "This Week" },
      { value: "next-week", label: "Next Week" },
      { value: "this-month", label: "This Month" },
    ],
  },
];

export default function DumpstersRentalPage() {

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-brand-dark)]">
      <JsonLd id="ld-dumpster-rental-service" data={dumpsterRentalServiceJsonLd} />
      <JsonLd id="ld-dumpster-rental-breadcrumb" data={dumpsterRentalBreadcrumbJsonLd} />
      <JsonLd id="ld-dumpster-rental-faq" data={dumpsterRentalFaqJsonLd} />
      <section className="-mt-[130px] relative min-h-screen w-full overflow-hidden pt-[230px]">
        <HeroParallaxBackground
          src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img1.png"
          alt="Dumpster rental truck in Orange County"
          priority
        />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-container items-end px-6 pb-[180px] lg:px-10">
          <div className="max-w-[900px] text-[var(--color-brand-white)]">
            <HeroHeading className="lg:text-[6.2vw] lg:leading-[1.05] xl:text-[4vw]">
              Affordable Dumpster Rental Orange County: You Load It, We Haul It
            </HeroHeading>

            <HeroSubheading className="max-w-[980px]">
              Sometimes you don't need a full crew - just the right equipment.
              Whether it&apos;s a garage cleanout, landscaping project, or small
              renovation, Balderas Demolition Inc. makes disposal simple. Abel
              Balderas and his team deliver the dumpster, you fill it, and we
              haul it away - conveniently, transparently, and with respect for
              your property.
            </HeroSubheading>

            <HeroCtas
              className="mt-10 flex-wrap"
              primaryHref="/contact"
              primaryLabel="Dumpster Sizes & Pricing"
              primaryButtonClassName="lg:w-[250px] xl:w-[270px]"
              secondaryHref="tel:+17143408108"
              secondaryLabel="(714) 340-8108"
              showSecondaryArrow={false}
            />
          </div>
        </div>
        <HeroScrollButton className="absolute bottom-6 right-5 z-20 hidden lg:flex lg:bottom-24 lg:right-8" />
      </section>

      <section className="w-full bg-white py-24">
        <div className="mx-auto flex w-full max-w-container flex-col gap-20 px-6 lg:px-10 xl:gap-[120px]">
          <div className="w-full lg:hidden">
            <div className="relative h-[360px] w-full overflow-hidden">
              <Image
                src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img2.jpg"
                alt="Residential cleanup debris and dumpster"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ServiceIntroSection
            title="The Right Dumpster for Every Orange County Project"
            description="We offer compact, driveway-safe roll-off containers in sizes that fit Orange County properties without damaging your concrete, blocking your street, or your neighbors' view."
            titleClassName="text-[#0b0300]"
            descriptionClassName="text-[#0b0300]"
          />

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img2.jpg"
            imageAlt="Residential cleanup debris and dumpster"
            imageSide="right"
            hideImageOnSmallScreens
            textVerticalAlign="center"
            title="Residential Cleanouts"
            intro="Perfect for spring cleaning, moving prep, or clearing out the attic."
            items={[
              {
                heading: "Household Junk:",
                text: "Furniture, old toys, clothes, and general clutter.",
              },
              {
                heading: "Garage & Shed Debris:",
                text: "Boxes, old tools, and miscellaneous storage.",
              },
            ]}
          />

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img3.jpg"
            imageAlt="Construction dumpster with remodeling debris"
            imageSide="left"
            title="Remodeling & Construction Debris"
            intro="Keep your job site safe and tidy while you work."
            items={[
              {
                heading: "Kitchen & Bath Reno:",
                text: "Drywall scraps, cabinetry, and old fixtures.",
              },
              {
                heading: "Flooring Projects:",
                text: "Easy disposal for carpet, laminate, and tile.",
              },
            ]}
          />

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img4.jpg"
            imageAlt="Yard and landscape waste dumpsters"
            imageSide="right"
            title="Yard & Landscape Waste"
            intro="Clear away the overgrowth and start fresh."
            items={[
              {
                heading: "Green Waste:",
                text: "Branches, brush, and clippings.",
              },
              {
                heading: "Heavy Materials:",
                text: "Specialized containers available for dirt, rock, and concrete removal.",
              },
            ]}
          />
        </div>
      </section>

      <section className="relative w-full overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img5.jpg"
            alt="Dumpster truck and bins on residential street"
            fill
            sizes="100vw"
            quality={60}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#06182C]/72" />

        <div className="relative z-10 mx-auto flex w-full max-w-container flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-10">
          <div className="w-full lg:max-w-[560px]">
            <MainHeading className="text-white">
              Why Rent from Balderas Demolition Inc.?
            </MainHeading>
            <div className="mt-6 w-full lg:max-w-[500px]">
              <BoldText className="text-white">
                Big-box dumpster companies drop off rusty, oversized bins and
                hit you with hidden &quot;tonnage&quot; fees. Abel Balderas does
                things the local way &mdash; smaller footprint, better service,
                upfront price:
              </BoldText>
            </div>
          </div>

          <GlassFeatureListCard
            className="lg:w-[730px]"
            items={[
              {
                icon: <DrivewaySafePlacementIcon className="h-full w-full" />,
                title: "Driveway-Safe Placement:",
                description:
                  "We use protective boards under our bins to ensure your driveway stays free of scratches and cracks.",
              },
              {
                icon: <CompactManeuverableIcon className="h-full w-full" />,
                title: "Compact & Maneuverable:",
                description:
                  "Our dumpsters are designed to fit into tight OC spaces where larger trucks can't go.",
              },
              {
                icon: <NoHiddenFeesIcon className="h-full w-full" />,
                title: "No Hidden Fees:",
                description:
                  "We provide upfront pricing that includes delivery, pickup, and a generous weight allowance.",
              },
              {
                icon: <ReliableSchedulingIcon className="h-full w-full" />,
                title: "Reliable Scheduling:",
                description:
                  "When Abel says the dumpster will be there at 8:00 AM, it will be there. No more waiting around all day for a delivery.",
              },
            ]}
          />
        </div>
      </section>

      <ServiceStepsSection
        imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img6.jpg"
        imageAlt="Dumpster rental process truck on city street"
        imageSide="left"
        title="How Our Dumpster Rental Process Works"
        steps={[
          {
            icon: <PickYourSizeIcon className="h-[25px] w-[31px]" />,
            title: "Pick Your Size:",
            description: "Tell Abel about your project, and he'll recommend the best bin for your needs.",
          },
          {
            icon: <FastDeliveryIcon className="h-[29px] w-[31px]" />,
            title: "Fast Delivery:",
            description:
              "We drop off the container at your preferred location, ensuring it's placed for easy loading.",
          },
          {
            icon: <FillItUpIcon className="h-[33px] w-[31px]" />,
            title: "Fill It Up:",
            description:
              "Take your time! We offer flexible rental periods to match your project's timeline.",
          },
        ]}
      />

      <ServiceStepsSection
        imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img7.jpg"
        imageAlt="Safety first road marking"
        imageSide="right"
        title="Important Rental Reminders"
        steps={[
          {
            icon: <RentalWarningIcon className="h-[23px] w-[26px]" />,
            title: "Avoid Overfilling:",
            description: "For safety reasons, please keep debris level with the top of the bin.",
          },
          {
            icon: <RentalWarningIcon className="h-[23px] w-[26px]" />,
            title: "Prohibited Items:",
            description:
              "We cannot accept hazardous waste (paint, oil, chemicals), tires, or batteries.",
          },
          {
            icon: <RentalWarningIcon className="h-[23px] w-[26px]" />,
            title: "Permits:",
            description:
              "If you need the dumpster placed on a public street, we can help you navigate the local Orange County permit requirements.",
          },
        ]}
      />

      <section className="relative w-full overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/dumpsters_rental/img8.png"
            alt="Dumpster rental contact section background"
            fill
            sizes="100vw"
            quality={60}
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
              title="Ready to Tackle Your Project?"
              description="Don&apos;t let debris slow you down. Rent a clean, reliable dumpster from Abel Balderas and work on your own schedule &mdash; we deliver same week."
            />

            <ContactFormPanel
              className="w-full lg:ml-auto lg:max-w-[620px] xl:w-[780px] xl:max-w-[780px]"
              fields={dumpstersContactFields}
              submitLabel="Submit"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
