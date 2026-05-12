import Image from "next/image";
import type { Metadata } from "next";
import type { ContactFormField } from "@/components/contact-form-panel";
import { DemolitionContactSection } from "@/components/services/demolition-contact-section";
import { DemolitionDifferenceSection } from "@/components/services/demolition-difference-section";
import { DemolitionProcessSection } from "@/components/services/demolition-process-section";
import { DemolitionServicesHero } from "@/components/services/demolition-services-hero";
import { JsonLd } from "@/components/json-ld";
import { ServiceDetailSection } from "@/components/service-detail-section";
import { ServiceIntroSection } from "@/components/service-intro-section";
import {
  getBreadcrumbJsonLd,
  getServiceJsonLd,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title:
    "Professional Demolition Services Orange County | Residential & Commercial",
  description:
    "Need safe, reliable demolition in Orange County? From kitchen tear-downs to full structural removal, Abel Balderas and Balderas Demolition Inc. handle it all. Get your free estimate!",
  path: "/demolition",
  image: "/images/services/img1.png",
  imageAlt:
    "Balderas Demolition Inc. crew performing residential demolition in Orange County",
  keywords: [
    "demolition services Orange County",
    "residential demolition",
    "commercial demolition",
    "interior demolition",
    "concrete removal Orange County",
    "kitchen demolition",
    "Tustin demolition contractor",
    "Irvine demolition",
  ],
});

const demolitionServiceJsonLd = getServiceJsonLd({
  name: "Demolition Services in Orange County",
  description:
    "Licensed, insured residential and commercial demolition: interior strip-outs, structural tear-downs, concrete removal, and full site clearance throughout Orange County.",
  path: "/demolition",
  serviceType: "Demolition",
  image: "/images/services/img1.png",
});

const demolitionBreadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Demolition", path: "/demolition" },
]);

const DEMOLITION_CONTACT_FIELDS: ContactFormField[] = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Your full name",
    width: "half",
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "text",
    inputType: "tel",
    placeholder: "Enter your phone number",
    width: "half",
  },
  {
    id: "email",
    label: "Email Address",
    type: "text",
    inputType: "email",
    placeholder: "Enter your email",
    width: "half",
  },
  {
    id: "service",
    label: "Type of Demolition Needed",
    type: "select",
    placeholder: "Select Demo needed",
    width: "half",
    options: [
      { value: "interior-residential", label: "Interior Residential" },
      { value: "exterior-structural", label: "Exterior & Structural" },
      { value: "full-site-clearance", label: "Full Site Clearance" },
    ],
  },
  {
    id: "message",
    label: "Project Details",
    type: "textarea",
    placeholder: "Budget, timeline, address, or anything else we should know",
    width: "full",
    rows: 4,
  },
];

export default function DemolitionPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-brand-dark)]">
      <JsonLd id="ld-demolition-service" data={demolitionServiceJsonLd} />
      <JsonLd
        id="ld-demolition-breadcrumb"
        data={demolitionBreadcrumbJsonLd}
      />
      <DemolitionServicesHero />

      <section className="w-full bg-white py-24">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-20 px-6 lg:px-10 xl:gap-[120px]">
          <div className="w-full lg:hidden">
            <div className="relative h-[360px] w-full overflow-hidden">
              <Image
                src="/images/services/img2.png"
                alt="Interior demolition work in progress"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ServiceIntroSection
            title="Comprehensive Demolition Services for Every Need"
            description="Whether you are a homeowner tackling a DIY remodel or a professional contractor needing a reliable partner, we provide a full suite of services tailored to your project's specific requirements."
            titleClassName="text-[#0b0300]"
            descriptionClassName="text-[#0b0300]"
            mobileDescription="If it’s taking up space, we’ll take it away. Our junk removal process is fast, transparent, and eco-friendly. We handle the sorting, loading, and disposal so you don't have to."
            mobileDescriptionClassName="font-maison text-[16px] font-semibold leading-[1.25] tracking-[0%] sm:text-[17px] sm:leading-[1.2] md:text-[19px]"
          />

          <ServiceDetailSection
            imageSrc="/images/services/img2.png"
            imageAlt="Interior demolition work in progress"
            imageSide="right"
            hideImageOnSmallScreens
            title="Interior Residential Demolition"
            intro='Prepping for a dream renovation? We handle the "dirty work" so you can focus on the design.'
            items={[
              {
                heading: "Kitchen & Bathroom Gutting:",
                text: "Careful removal of cabinets, flooring, and fixtures without damaging the structure.",
              },
              {
                heading: "Wall Removal:",
                text: "Non-load bearing and load-bearing wall removal (per engineering specs).",
              },
              {
                heading: "Flooring Removal:",
                text: "Hardwood, tile, and carpet stripping.",
              },
            ]}
          />

          <ServiceDetailSection
            imageSrc="/images/services/img3.jpg"
            imageAlt="Exterior and structural demolition with heavy equipment"
            imageSide="left"
            title="Exterior & Structural Demolition"
            intro="From backyard upgrades to clearing a lot, we have the equipment to handle the heavy stuff."
            items={[
              {
                heading: "Concrete & Asphalt Removal:",
                text: "Driveways, patios, and walkways.",
              },
              {
                heading: "Shed & Accessory Structure Removal:",
                text: "Clearing out old outbuildings and detached garages.",
              },
              {
                heading: "Pool In-fills & Deck Removal:",
                text: "Safely reclaiming your outdoor space.",
              },
            ]}
          />
        </div>
      </section>

      <DemolitionDifferenceSection />

      <DemolitionProcessSection />

      <DemolitionContactSection fields={DEMOLITION_CONTACT_FIELDS} />
    </main>
  );
}
