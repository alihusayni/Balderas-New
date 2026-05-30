import Image from "next/image";
import type { Metadata } from "next";
import type { ContactFormField } from "@/components/contact-form-panel";
import { CommercialDemolitionHero } from "@/components/services/commercial-demolition-hero";
import { DemolitionContactSection } from "@/components/services/demolition-contact-section";
import { DifferenceFeatureCard } from "@/components/services/difference-feature-card";
import { DifferenceFeaturesGrid } from "@/components/services/difference-features-grid";
import { FullBleedImageSection } from "@/components/services/full-bleed-image-section";
import { JsonLd } from "@/components/json-ld";
import { ServiceDetailSection } from "@/components/service-detail-section";
import { ServiceIntroSection } from "@/components/service-intro-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSubheading } from "@/components/ui/section-subheading";
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
  absoluteUrl,
} from "@/lib/seo";
import { SplitHeroText } from "@/components/split-hero-text";

export const metadata: Metadata = pageMetadata({
  title: "Commercial Demolition Services Orange County | Balderas Demolition Inc.",
  description:
    "Leading commercial demolition in Orange County. We specialize in office strip-outs, retail deconstruction, and industrial clearing. Licensed, insured, and deadline-driven.",
  path: "/demolition/commercial",
  image: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/services/img1.png",
  imageAlt:
    "Balderas Demolition Inc. crew performing commercial demolition in Orange County",
  keywords: [
    "commercial demolition Orange County",
    "office strip-out",
    "retail white box",
    "industrial demolition",
    "warehouse demolition",
    "Irvine commercial demo",
    "Anaheim demolition contractor",
  ],
});

const commercialServiceJsonLd = getServiceJsonLd({
  name: "Commercial Demolition in Orange County",
  description:
    "Office and retail strip-outs, white-box prep, industrial and warehouse clearing, CALGreen-compliant debris reporting, and deadline-driven scheduling for property managers and general contractors across Orange County.",
  path: "/demolition/commercial",
  serviceType: "Commercial Demolition",
  image: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/services/img1.png",
});

const commercialBreadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Demolition", path: "/demolition" },
  { name: "Commercial", path: "/demolition/commercial" },
]);

const COMMERCIAL_CONTACT_FIELDS: ContactFormField[] = [
  {
    id: "com-name",
    label: "Name",
    type: "text",
    placeholder: "Your full name",
    width: "half",
  },
  {
    id: "com-company",
    label: "Company",
    type: "text",
    placeholder: "Business or property name",
    width: "half",
  },
  {
    id: "com-project-address",
    label: "Project Address",
    type: "text",
    placeholder: "Site address, city, ZIP",
    width: "full",
  },
  {
    id: "com-service-type",
    label: "Service Type",
    type: "select",
    placeholder: "Select service type",
    width: "full",
    options: [
      { value: "retail-restaurant", label: "Retail & restaurant white box" },
      { value: "office-corporate", label: "Office & corporate deconstruction" },
      { value: "industrial-warehouse", label: "Industrial & warehouse" },
      { value: "mixed-multi", label: "Mixed-use / multi-site" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "com-bid-deadline",
    label: "Bid Deadline",
    type: "text",
    placeholder: "e.g. MM/DD/YYYY or ASAP",
    width: "full",
  },
];

const PREFERRED_PARTNER_FEATURES = [
  {
    variant: "orange" as const,
    title: "Strict Adherence to Timelines:",
    description:
      "Your grand opening or move-in date is set in stone. We work nights and weekends when needed to stay on schedule.",
    icon: <SystematicPlanningIcon className="h-full w-full" />,
    className: "order-1 md:order-none",
  },
  {
    variant: "slate" as const,
    title: "Advanced Dust & Noise Mitigation:",
    description:
      "Industrial-grade HEPA air scrubbers and sound barriers help protect neighboring businesses during the work.",
    icon: <DustDebrisControlIcon className="h-full w-full" />,
    className: "order-2 md:order-none",
  },
  {
    variant: "mist" as const,
    title: "Licensed & High-Limit Insurance:",
    description:
      "General Liability and Workers\u2019 Comp at the levels major commercial sites and high-rise projects expect.",
    icon: <FullSiteClearanceIcon className="h-full w-full" />,
    className: "order-4 md:order-none",
  },
  {
    variant: "orange" as const,
    title: "CALGreen Compliance:",
    description:
      "Tonnage reports and recycling receipts for LEED certification support and city permit close-outs.",
    icon: <LicensedInsuredIcon className="h-full w-full" />,
    className: "order-3 md:order-none",
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

export default function CommercialDemolitionPage() {
  const { display: phoneDisplay, href: callHref } = getCallPhone();
  const siteHost = SITE.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-brand-dark)]">
      <JsonLd id="ld-commercial-service" data={commercialServiceJsonLd} />
      <JsonLd
        id="ld-commercial-breadcrumb"
        data={commercialBreadcrumbJsonLd}
      />
      <CommercialDemolitionHero quoteHref="/contact" callHref={callHref} />

      <section className="w-full bg-white py-24">
        <div className="mx-auto flex w-full max-w-container flex-col gap-20 px-6 lg:px-10 xl:gap-[120px]">
          <div className="w-full lg:hidden">
            <div className="relative h-[360px] w-full overflow-hidden">
              <Image
                src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/services/img3.jpg"
                alt="Commercial interior demolition and strip-out"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ServiceIntroSection
            title="Our Commercial Specializations"
            description={
              "We provide \u201cwhite-glove\u201d interior and exterior services for a wide range of commercial properties, from high-rise offices to industrial warehouses."
            }
            titleClassName="text-[#0b0300]"
            descriptionClassName="text-[#0b0300]"
            mobileDescription="Retail, office, and industrial demolition with tight schedules and clean handoffs—built for OC property teams."
            mobileDescriptionClassName="font-maison text-[16px] font-semibold leading-[1.25] tracking-[0%] sm:text-[17px] sm:leading-[1.2] md:text-[19px]"
          />

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/services/img2.png"
            imageAlt="Retail and restaurant commercial strip-out"
            imageSide="right"
            hideImageOnSmallScreens
            title='Retail & Restaurant "White Box" Prep'
            intro="Moving into a new lease? We strip retail and restaurant spaces back to their original shell."
            items={[
              {
                heading: "Complete Strip-Outs:",
                text: "Removal of specialized equipment, walk-in coolers, and heavy-duty fixtures.",
              },
              {
                heading: "Wall & Floor Stripping:",
                text: "Storefronts, interior partitions, and commercial-grade flooring (VCT, tile, epoxy).",
              },
              {
                heading: "Ceiling & HVAC Prep:",
                text: "Safe removal of drop ceilings, ductwork, and lighting systems.",
              },
            ]}
          />

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/services/img4.png"
            imageAlt="Office deconstruction and furniture removal"
            imageSide="left"
            title="Office & Corporate Deconstruction"
            intro="We help businesses transition smoothly by clearing out old layouts."
            items={[
              {
                heading: "Cubicle & System Furniture Removal:",
                text: "Fast deconstruction of complex office furniture systems.",
              },
              {
                heading: "IT & E-Waste Disposal:",
                text: "Secure, responsible hauling of old servers, wiring, and electronics.",
              },
              {
                heading: "Partition & Glass Wall Removal:",
                text: "Clean removal of modern office dividers without damaging the main structure.",
              },
            ]}
          />

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/services/img6.png"
            imageAlt="Industrial warehouse demolition and concrete work"
            imageSide="right"
            hideImageOnSmallScreens
            title="Industrial & Warehouse Clearing"
            intro="Heavy-duty solutions for large-scale facilities."
            items={[
              {
                heading: "Pallet Racking & Shelving Removal:",
                text: "Professional dismantling of high-density storage systems.",
              },
              {
                heading: "Concrete Trenching & Slab Removal:",
                text: "Preparing warehouse floors for new machinery or plumbing.",
              },
              {
                heading: "Loading Dock Demolition:",
                text: "Removing old dock levelers and exterior concrete pads.",
              },
            ]}
          />
        </div>
      </section>

      <FullBleedImageSection
        imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/services/img5.jpg"
        imageAlt="Commercial demolition project coordination"
        overlayClassName="bg-[#06182C]/72"
        className="py-20 lg:py-40"
        contentClassName="mx-auto flex w-full max-w-container flex-col gap-16 px-6 lg:px-10"
      >
        <SplitHeroText
          className="lg:mb-8 xl:mb-12 2xl:mb-12"
          title="Why Balderas Demolition is the Preferred Commercial Partner"
          description={
            "Commercial demolition in Orange County requires more than just a truck; it requires a deep understanding of local compliance and site-specific logistics."
          }
          titleClassName="text-white"
          descriptionClassName="text-white"
        />
        <DifferenceFeaturesGrid>
          {PREFERRED_PARTNER_FEATURES.map(
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
              src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/about/2.jpg"
              alt="Abel Balderas, owner of Balderas Demolition Inc., on a commercial job site wearing safety gear"
              fill
              sizes="(max-width: 1024px) 100vw, 650px"
              className="object-cover object-[40%_30%]"
            />
          </div>

          <div className="order-1 text-[#0b0b0b] lg:order-2">
            <SectionHeading className="uppercase leading-[0.92] sm:text-[56px] md:text-[70px] lg:text-[78px]">
              Meet the owner
              <span className="block normal-case tracking-[-0.03em] text-[var(--color-brand-orange)]">
                Abel Balderas
              </span>
            </SectionHeading>
            <div className="hidden sm:block sm:mt-12" aria-hidden />

            <SectionSubheading className="mt-8 text-[#1f1f1f] sm:mt-12 sm:text-base md:text-[19px] md:leading-[1.5]">
              When you partner with Balderas Demolition Inc., you get a dedicated
              project manager. Abel Balderas personally ensures that every
              commercial site is clean, safe, and organized. We pride ourselves
              on clear communication—providing daily progress updates and
              immediate solutions to on-site challenges.
            </SectionSubheading>

            <blockquote className="mt-8 border-l-4 border-[var(--color-brand-orange)] pl-6 font-maison text-[17px] font-semibold italic leading-relaxed text-[#0b0300] sm:text-[19px] md:text-[21px]">
              &ldquo;We treat every commercial job site like our own business
              depends on it—because it does. Your project&apos;s success is our
              highest priority.&rdquo;{" "}
              <span className="mt-2 block font-bold not-italic">
                &mdash; Abel Balderas
              </span>
            </blockquote>
          </div>
        </div>
      </section>

      <DemolitionContactSection
        title="Let's Start Your Commercial Project"
        description="From the Irvine Spectrum to the Anaheim Resort District, we clear the way for Orange County\u2019s growth. Contact us today for a professional bid and a walk-through of your facility."
        fields={COMMERCIAL_CONTACT_FIELDS}
        submitLabel="Submit"
        overlayClassName="bg-[#06182C]/72"
      />
    </main>
  );
}
