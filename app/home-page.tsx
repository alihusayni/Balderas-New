"use client";

import Image from "next/image";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { DirectionButton } from "@/components/hero/direction-button";
import { HeroCtas } from "@/components/hero/hero-ctas";
import { HeroHeading } from "@/components/hero/hero-heading";
import { HeroSubheading } from "@/components/hero/hero-subheading";
import { InfoTicker } from "@/components/info-ticker";
import { MeetOwnerSection } from "@/components/meet-owner-section";
import { ServicesDetailGrid } from "@/components/services-detail-grid";
import { ServicesSpotlight } from "@/components/services-spotlight";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WhyTrustSection } from "@/components/why-trust-section";
import { useEffect, useState } from "react";
import type { ContactFormField } from "@/components/contact-form-panel";

export default function HomePage() {
  const [parallaxY, setParallaxY] = useState(0);
  const homeContactFields: ContactFormField[] = [
    {
      id: "home-contact-name",
      label: "Name",
      type: "text",
      placeholder: "Your full name",
      width: "half",
    },
    {
      id: "home-contact-phone",
      label: "Phone Number",
      type: "text",
      inputType: "tel",
      placeholder: "Enter your phone number",
      width: "half",
    },
    {
      id: "home-contact-service",
      label: "Service Needed",
      type: "select",
      placeholder: "Select service",
      width: "full",
      options: [
        { value: "demolition", label: "Demolition" },
        { value: "junk-removal", label: "Junk Removal" },
        { value: "dumpster-rental", label: "Dumpster Rental" },
      ],
    },
    {
      id: "home-contact-message",
      label: "Message/Special Request",
      type: "textarea",
      placeholder: "Anything else we should know?",
      width: "full",
      rows: 4,
    },
  ];

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setParallaxY(window.scrollY * 0.25);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-brand-dark)]">
      <section className="relative min-h-[100svh] w-full overflow-hidden pt-[clamp(10.5rem,18vh,12rem)] lg:pt-[clamp(8.75rem,12vh,9rem)]">
        <Image
          src="/images/homepage/hero.webp"
          alt="Demolition service hero"
          fill
          priority
          className="object-cover will-change-transform"
          style={{ transform: `translate3d(0, ${parallaxY}px, 0) scale(1.08)` }}
        />

        <div className="absolute inset-0  bg-[#06182C]/68" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-1.5rem)] w-full max-w-[1400px] items-end px-5 pb-[clamp(12.25rem,12vh,9rem)] pt-[env(safe-area-inset-top,0px)] md:px-8 lg:px-10">
          <div className="max-w-[760px] text-[var(--color-brand-white)] md:max-w-[680px] lg:max-w-[760px]">
           <div className="flex items-center mb-4 sm:mb-8 gap-2 md:gap-2.5">
            <Image
              src="/icons/badgeIcon.svg"
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
            <HeroHeading>
              Demolishing, Dumpster Rentals, &amp; Junk Removal in Orange County
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
            />
          </div>
        </div>
        <DirectionButton
          onClick={scrollToNextSection}
          aria-label="Scroll to next section"
          className="absolute bottom-6 right-5 z-20 hidden lg:flex lg:bottom-24 lg:right-8"
        />
      </section>
      <InfoTicker />
      <ServicesSpotlight />
      <ServicesDetailGrid />
      <WhyTrustSection />
      <MeetOwnerSection />
      <TestimonialsSection />
      <ContactCtaSection
        backgroundImageSrc="/images/homepage/contactbg.webp"
        backgroundImageAlt="Contact Balderas Demolition"
        title="Start Your Demolition or Junk Removal Project Today"
        description="Ready to clear the deck? Get a fast, friendly estimate from Abel Balderas and the team."
        fields={homeContactFields}
        submitLabel="Submit"
      />
    </main>
  );
}
