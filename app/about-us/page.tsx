import Image from "next/image";
import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/about-hero-section";
import { CtaBanner } from "@/components/cta-banner";
import { IconFeatureItem } from "@/components/icon-feature-item";
import { JsonLd } from "@/components/json-ld";
import { MainHeading } from "@/components/main-heading";
import { SimpleText } from "@/components/simple-text";
import {
  BroomCleanStandardIcon,
  EcoFriendlyDisposalIcon,
  SafetyAsStandardIcon,
  SurgicalPrecisionIcon,
} from "@/components/icons";
import { getBreadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title:
    "About Us | Demolition OC - Orange County's Trusted Demolition Team",
  description:
    "Learn about Demolition OC's commitment to safe demolition, eco-friendly junk removal, and superior service across Orange County.",
  path: "/about-us",
  image: "/images/about/2.jpg",
  imageAlt: "Demolition OC project supervisor on a job site",
  keywords: [
    "Demolition OC",
    "Orange County demolition contractor",
    "Tustin demolition company",
    "residential demolition OC",
    "commercial demolition Orange County",
  ],
});

const aboutBreadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "About", path: "/about-us" },
]);

const CORE_VALUES = [
  {
    icon: <SafetyAsStandardIcon className="h-full w-full" />,
    title: "Safety as a Standard:",
    description:
      "Demolition is inherently dangerous, but it doesn't have to be risky. We utilize systematic deconstruction methods, strict utility protocols, and top-tier safety gear to ensure our crew, your property, and your neighbors stay protected from start to finish.",
  },
  {
    icon: <EcoFriendlyDisposalIcon className="h-full w-full" />,
    title: "Eco-Conscious Disposal",
    description:
      "We love Orange County, and we want to keep it beautiful. We are committed to high diversion rates — sorting debris on-site so that concrete, wood, metal, and green waste go to recycling centers rather than landfills.",
  },
  {
    icon: <SurgicalPrecisionIcon className="h-full w-full" />,
    title: "Surgical Precision",
    description:
      'We don\'t believe in \"senseless smashing.\" Whether it\'s an interior strip-out or a \"Hut Top\" removal, we use a surgical approach to remove exactly what you want while carefully protecting every structure that remains.',
  },
  {
    icon: <BroomCleanStandardIcon className="h-full w-full" />,
    title: '"Broom-Clean" Guarantee',
    description:
      'The job isn\'t done until the last nail is swept up. We pride ourselves on our final walk-through — ensuring the site is pristine and ready for the next trade, or for you to enjoy your reclaimed space.',
  },
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-brand-dark)]">
      <JsonLd id="ld-about-breadcrumb" data={aboutBreadcrumbJsonLd} />
      <AboutHeroSection />

      <section className="w-full bg-white py-20 lg:py-[120px]">
        <div className="mx-auto flex w-full max-w-[1610px] flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-[90px] lg:px-12">
          <div className="w-full lg:w-[611px] lg:shrink-0">
            <div className="relative h-[420px] w-full overflow-hidden sm:h-[520px] lg:h-[761px]">
              <Image
                src="/images/about/2.jpg"
                alt="Demolition OC project supervisor on a job site wearing safety gear"
                fill
                sizes="(max-width: 1024px) 100vw, 611px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-8 lg:flex-1 lg:gap-16">
            <MainHeading className="text-[#0b0300]">
              Hands-On Leadership:{" "}
              <span className="text-[var(--color-brand-orange)]">
                A Higher Standard
              </span>
            </MainHeading>

            <div className="flex flex-col gap-6">
              <SimpleText className="text-[#0b0300]">
                In an industry where many contractors sit behind a desk, our
                project managers are a familiar face on every job site. With years of
                experience in the specialized trades of demolition and
                hauling, Demolition OC was built to fill a critical need in Orange County:
                a contractor who combines high-level technical expertise with
                the &ldquo;white-glove&rdquo; service of a boutique business.
              </SimpleText>

              <SimpleText className="text-[#0b0300]">
                Our philosophy is rooted in responsiveness and
                reliability. When you call Demolition OC, you
                aren&rsquo;t talking to a national dispatch center &mdash;
                you&rsquo;re talking to a local professional who knows your
                neighborhood, understands the local permits, and takes
                personal pride in the satisfaction of every client.
              </SimpleText>

              <SimpleText className="font-semibold text-[#0b0300]">
                &ldquo;We started this company because we saw how stressful
                demolition could be for property owners. Our goal is to take that
                stress off your shoulders, treat your property with respect,
                and leave you with a blank canvas for your vision.&rdquo;{" "}
                <span className="whitespace-nowrap">&mdash; Demolition OC Team</span>
              </SimpleText>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden">
        <Image
          src="/images/about/3.png"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[#06182C]/90"
        />

        <div className="relative mx-auto flex w-full max-w-[1610px] flex-col gap-16 px-6 py-20 lg:flex-row lg:items-center lg:gap-12 lg:px-12 lg:py-[120px]">
          <div className="flex w-full flex-col gap-8 lg:flex-1 lg:gap-10">
            <p className="font-maison text-[20px] font-bold leading-none tracking-[-0.02em] text-white/60 sm:text-[24px]">
              Why Us?
            </p>

            <MainHeading className="max-w-[729px] text-white">
              Proudly Serving Our Orange County Neighbors
            </MainHeading>

            <SimpleText className="max-w-[971px] text-[20px] leading-[28px] text-white/80 sm:text-[24px] sm:leading-[32px] lg:text-[28px] lg:leading-[37px]">
              Based in Tustin, we proudly serve the diverse communities that
              make up Orange County — from the historic homes of Santa Ana and
              Orange to the modern developments of Irvine and the coastal
              properties of Newport Beach. We understand the unique
              architectural and regulatory landscape of our county, and we
              bring that local expertise to every project.
            </SimpleText>
          </div>

          <div className="flex w-full justify-center lg:w-[556px] lg:shrink-0 lg:justify-end">
            <div className="relative h-[360px] w-[320px] sm:h-[480px] sm:w-[420px] lg:h-[640px] lg:w-[556px]">
              <div className="absolute left-0 top-0 h-[78%] w-[58%]">
                <Image
                  src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/about/california-top.png"
                  alt=""
                  aria-hidden
                  fill
                  sizes="(max-width: 1024px) 250px, 325px"
                  className="object-contain object-left-top"
                />
              </div>
              <div className="absolute bottom-0 right-0 h-[88%] w-[78%]">
                <Image
                  src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/about/california.png"
                  alt="Outline of California highlighting Orange County service area"
                  fill
                  sizes="(max-width: 1024px) 330px, 435px"
                  className="object-contain object-right-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 lg:py-[120px]">
        <div className="mx-auto flex w-full max-w-[1610px] flex-col gap-12 px-6 lg:px-12 xl:flex-row xl:items-stretch xl:gap-[50px]">
          <div className="flex w-full flex-col gap-12 xl:w-[780px] xl:gap-[60px]">
            <MainHeading className="max-w-[654px] text-[#1E1E1E]">
              Our Core Values: The Demolition OC Difference
            </MainHeading>

            <div className="flex flex-col gap-8 xl:gap-[30px]">
              {CORE_VALUES.map((value) => (
                <IconFeatureItem
                  key={value.title}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>

          <div className="w-full xl:flex-1">
            <div className="relative h-[360px] w-full overflow-hidden sm:h-[520px] xl:h-full xl:min-h-[856px]">
              <Image
                src="/images/about/3.png"
                alt="Demolition OC crew working safely on a residential demolition"
                fill
                sizes="(max-width: 1279px) 100vw, 780px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to clear the way?"
        description="When you hire Demolition OC, you are partnering with a licensed, insured, and dedicated team that cares about the outcome as much as you do. Experience the difference that professional communication and a customer-first attitude can make."
        backgroundSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/about/about-footer.webp"
        backgroundAlt=""
        titleClassName="text-[40px] sm:text-[56px] lg:text-[68px] lg:leading-[70px]"
        ctas={[
          {
            label: "Get Your Free Quote",
            href: "/#contact",
            variant: "primary",
            showArrow: false,
          },
          {
            label: "View Our Services",
            href: "/demolition",
            variant: "secondary",
            showArrow: true,
          },
        ]}
      />

    </main>
  );
}
