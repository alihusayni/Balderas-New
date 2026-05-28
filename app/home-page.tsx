// No "use client" — this is a Server Component so the LCP <h1> is SSR'd and
// paints immediately without waiting for JS hydration.
// Client-side behaviour (parallax, scroll handler) is pushed down into their
// own "use client" leaf components: HeroParallaxBackground & HeroScrollButton.

import Image from "next/image";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { HeroParallaxBackground } from "@/components/hero/hero-parallax-background";
import { HeroScrollButton } from "@/components/hero/hero-scroll-button";
import { HeroCtas } from "@/components/hero/hero-ctas";
import { HeroHeading } from "@/components/hero/hero-heading";
import { HeroSubheading } from "@/components/hero/hero-subheading";
import { InfoTicker } from "@/components/info-ticker";
import { MeetOwnerSection } from "@/components/meet-owner-section";
import { ServicesDetailGrid } from "@/components/services-detail-grid";
import { ServicesSpotlight } from "@/components/services-spotlight";
import dynamic from "next/dynamic";
// Dynamic import — defers embla-carousel (~75KB) until below-fold section is visible
const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((m) => m.TestimonialsSection),
  { ssr: true }
);
import { WhyTrustSection } from "@/components/why-trust-section";
import type { ContactFormField } from "@/components/contact-form-panel";

const homeContactFields: ContactFormField[] = [
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
    label: "Service Needed",
    type: "select",
    placeholder: "Select service",
    width: "half",
    options: [
      { value: "demolition", label: "Demolition" },
      { value: "junk-removal", label: "Junk Removal" },
      { value: "dumpster-rental", label: "Dumpster Rental" },
    ],
  },
  {
    id: "message",
    label: "Message/Special Request",
    type: "textarea",
    placeholder: "Anything else we should know?",
    width: "full",
    rows: 4,
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-brand-dark)]">
      <section className="relative min-h-[100svh] w-full overflow-hidden pt-[clamp(10.5rem,18vh,12rem)] lg:pt-[clamp(8.75rem,12vh,9rem)]">
        {/* Parallax background — client component, isolated from LCP critical path */}
        <HeroParallaxBackground
          src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/homepage/hero.webp"
          alt="Demolition service hero"
          priority
          speed={0.25}
          scale={1.08}
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-1.5rem)] w-full max-w-[1400px] items-end px-5 pb-[clamp(12.25rem,12vh,9rem)] pt-[env(safe-area-inset-top,0px)] md:px-8 lg:px-10">
          <div className="max-w-[760px] text-[var(--color-brand-white)] md:max-w-[680px] lg:max-w-[760px]">
            <div className="flex items-center mb-4 sm:mb-8 gap-2 md:gap-2.5">
              <Image
                src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/icons/badgeIcon.svg"
                alt="Orange County"
                width={18}
                height={18}
                className="h-[18px] w-auto sm:h-[20px] md:h-[24px]"
                style={{ width: "auto" }}
              />
              <p className="[font-family:var(--font-anton)] text-sm font-medium tracking-[0.08em] sm:text-base md:text-lg lg:text-xl">
                ORANGE COUNTY&apos;S TOP CHOICE
              </p>
            </div>
            {/* LCP element — SSR'd immediately, no hydration wait */}
            <HeroHeading>
              Demolishing, Dumpster Rentals &amp; Junk Removal in Orange County
            </HeroHeading>
            <HeroSubheading>
              From tearing down a kitchen to hauling away years of garage
              clutter, we clear the way for your next big project. Safe,
              systematic, and committed to your satisfaction.
            </HeroSubheading>
            <HeroCtas
              primaryHref="#contact"
              primaryLabel="Get Free Quote"
              secondaryHref="tel:+17143408108"
              secondaryLabel="(714) 340-8108"
              showSecondaryArrow={false}
            />
          </div>
        </div>

        {/* Scroll-to-next button — client component, isolated */}
        <HeroScrollButton className="absolute bottom-6 right-5 z-20 hidden lg:flex lg:bottom-24 lg:right-8" />
      </section>
      <InfoTicker />
      {/* content-visibility:auto — browser skips Style & Layout for off-screen sections,
          slashing the 2,843ms Style & Layout cost measured by PageSpeed.
          contain-intrinsic-size gives the browser a height estimate to avoid scroll jumps. */}
      <div style={{ contentVisibility: "auto", containIntrinsicSize: "auto 800px" }}>
        <ServicesSpotlight />
      </div>
      <div style={{ contentVisibility: "auto", containIntrinsicSize: "auto 900px" }}>
        <ServicesDetailGrid />
      </div>
      <div style={{ contentVisibility: "auto", containIntrinsicSize: "auto 600px" }}>
        <WhyTrustSection />
      </div>
      <div style={{ contentVisibility: "auto", containIntrinsicSize: "auto 600px" }}>
        <MeetOwnerSection />
      </div>
      <div style={{ contentVisibility: "auto", containIntrinsicSize: "auto 500px" }}>
        <TestimonialsSection />
      </div>
      <div style={{ contentVisibility: "auto", containIntrinsicSize: "auto 700px" }}>
        <ContactCtaSection
          backgroundImageSrc="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/homepage/contactbg.webp"
          backgroundImageAlt="Contact Balderas Demolition"
          title="Start Your Demolition or Junk Removal Project Today"
          description="Ready to clear the deck? Get a fast, friendly estimate from Abel Balderas and the team."
          fields={homeContactFields}
          submitLabel="Submit"
        />
      </div>
    </main>
  );
}
