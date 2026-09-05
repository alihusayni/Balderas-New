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
    "Need safe, reliable demolition in Orange County? From kitchen tear-downs to full structural removal, Demolition OC handles it all. Get your free estimate!",
  path: "/demolition",
  image: "/images/services/img1.png",
  imageAlt:
    "Demolition OC crew performing residential demolition in Orange County",
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

const demolitionFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does demolition cost in Orange County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential demolition projects in Orange County range from $8,000 to $35,000 depending on home size, construction type, and whether hazardous materials like asbestos are present. A 1,500\u20132,000 sq ft wood-frame home typically runs $12,000\u2013$22,000. Demolition OC provides free on-site quotes with all-in pricing \u2014 no surprise change orders.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a permit for demolition in Orange County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All demolition projects in Orange County require a permit from your city\u2019s building department. Projects also require AQMD (Air Quality Management District) notification at least 10 business days before work begins. Demolition OC handles all permit filings and AQMD notifications as part of every project.",
      },
    },
    {
      "@type": "Question",
      name: "How long does residential demolition take in Orange County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard residential demolition in OC takes 1\u20133 days for the actual teardown once permits are in place. The permitting and utility disconnect process can take 2\u20136 weeks depending on your city. We recommend starting that process as early as possible.",
      },
    },
    {
      "@type": "Question",
      name: "Is Demolition OC licensed and insured in California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Demolition OC holds a C-21 Building Moving/Demolition License issued by the California Contractors State License Board (CSLB), carries full general liability insurance, and is bonded. You can verify our license at the CSLB website.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle asbestos removal before demolition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with certified asbestos inspectors to test your property before any work begins. If asbestos is found, we coordinate with licensed abatement contractors to safely remove it \u2014 as required by California law \u2014 before our demolition crew starts.",
      },
    },
  ],
};

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
      <JsonLd id="ld-demolition-faq" data={demolitionFaqJsonLd} />
      <DemolitionServicesHero />

      <section className="w-full bg-white py-24">
        <div className="mx-auto flex w-full max-w-container flex-col gap-20 px-6 lg:px-10 xl:gap-[120px]">
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
            description="Whether you are a homeowner tackling a DIY remodel or a professional contractor needing a reliable partner, we provide a full suite of demolition services tailored to your project's specific requirements."
            titleClassName="text-[#0b0300]"
            descriptionClassName="text-[#0b0300]"
            mobileDescription="Whether you're a homeowner or a contractor, we handle the demolition so you can focus on what comes next. Safe, systematic, and broom-clean every time."
            mobileDescriptionClassName="font-maison text-[16px] font-semibold leading-[1.25] tracking-[0%] sm:text-[17px] sm:leading-[1.2] md:text-[19px]"
          />

          <ServiceDetailSection
            imageSrc="/images/services/img2.png"
            imageAlt="Interior demolition work in progress"
            imageSide="right"
            hideImageOnSmallScreens
            title="Interior Residential Demolition"
            intro="Prepping for a dream renovation? We handle the dirty work so you can focus on the design."
            items={[
              {
                heading: "Kitchen & Bathroom Gutting:",
                text: "Careful removal of cabinets, flooring, and fixtures without damaging plumbing or the structure.",
              },
              {
                heading: "Wall Removal:",
                text: "Non-load bearing and load-bearing wall removal (per engineering specs).",
              },
              {
                heading: "Flooring Removal:",
                text: "Hardwood, tile, and carpet stripping down to the subfloor.",
              },
            ]}
          />

          <ServiceDetailSection
            imageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/services/img3.jpg"
            imageAlt="Exterior and structural demolition with heavy equipment"
            imageSide="left"
            title="Exterior & Structural Demolition"
            intro="From backyard upgrades to lot-clearing, we bring the equipment and expertise to handle the heavy work safely."
            items={[
              {
                heading: "Concrete & Asphalt Removal:",
                text: "Driveways, patios, walkways, and pool decks.",
              },
              {
                heading: "Shed & Accessory Structure Removal:",
                text: "Clearing out old outbuildings, detached garages, and backyard structures.",
              },
              {
                heading: "Pool In-fills & Deck Removal:",
                text: "Safely reclaiming your outdoor space with minimal disruption.",
              },
            ]}
          />
        </div>
      </section>

      <DemolitionDifferenceSection />

      <DemolitionProcessSection />

      <DemolitionContactSection fields={DEMOLITION_CONTACT_FIELDS} />

      <section className="w-full bg-white py-16 lg:py-20">
        <div className="mx-auto w-full max-w-container px-6 lg:px-10">
          <div className="mx-auto max-w-[860px]">
            <h2 className="[font-family:var(--font-anton)] text-[28px] font-normal leading-[1.2] tracking-[-0.02em] text-[#0b0300] lg:text-[40px]">
              Why Orange County Homeowners Choose Demolition OC
            </h2>
            <div className="mt-8 flex flex-col gap-6 text-[17px] leading-[1.7] text-[#3a3a3a]">
              <p>
                Demolition OC is a C-21 CSLB licensed demolition contractor
                with over 15 years serving Orange County. Our dedicated project managers lead every
                project in person — never handed off to an unknown subcontractor.
              </p>
              <p><strong>Common questions answered:</strong></p>
              <ul className="ml-6 list-disc flex flex-col gap-2">
                <li><strong>Cost:</strong> Residential demolition in OC typically runs $12,000–$35,000 depending on structure size and hazmat conditions. We provide free on-site quotes before any commitment.</li>
                <li><strong>Licensing:</strong> C-21 CSLB licensed, fully bonded, and insured in California. We handle all permit filing with the city on your behalf.</li>
                <li><strong>Timeline:</strong> Permit approval takes 2–6 weeks. Physical teardown is 1–5 days. We coordinate utility disconnects and CalOSHA compliance — you don&apos;t manage any of it.</li>
                <li><strong>Disruption:</strong> Neighbors and adjacent structures are protected with containment barriers. Dust and debris are controlled throughout. Site is left graded and cleared.</li>
              </ul>
              <p>
                <strong>Trust signals:</strong> 5-star rated on Google, 500+ completed projects,
                C-21 CSLB certified, fully insured, and members of the National Demolition Association.
                We serve Anaheim, Irvine, Santa Ana, Fullerton, Costa Mesa,
                Huntington Beach, Newport Beach, Tustin, Garden Grove, and Orange.
                Call <strong>(714) 333-0178</strong> for a free estimate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
