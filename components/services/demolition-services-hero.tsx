"use client";

import { DirectionButton } from "@/components/hero/direction-button";
import { HeroCtas } from "@/components/hero/hero-ctas";
import { HeroHeading } from "@/components/hero/hero-heading";
import { HeroParallaxBackground } from "@/components/hero/hero-parallax-background";
import { HeroSubheading } from "@/components/hero/hero-subheading";

export function DemolitionServicesHero() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="-mt-[130px] relative min-h-screen w-full overflow-hidden pt-[230px]">
      <HeroParallaxBackground
        src="/images/services/img1.png"
        alt="Workers performing interior demolition"
        priority
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-container items-end px-6 pb-[180px] lg:px-10">
        <div className="max-w-[760px] text-[var(--color-brand-white)] sm:max-w-[680px] md:max-w-[1100px]">
          <div className="h-[50px]" aria-hidden />
          <HeroHeading>
            Expert Demolition Services in Orange County:{" "}
            <br className="hidden xl:block" aria-hidden />
            We Clear the Way for Your Vision
          </HeroHeading>
          <HeroSubheading>
            Demolition isn&apos;t just about tearing things down &mdash;
            it&apos;s about setting the stage for what comes next. At Demolition
            OC, our team oversees a systematic, safe, and
            efficient process that leaves your site broom-clean and ready for
            the next phase.
          </HeroSubheading>
          <HeroCtas
            primaryHref="/contact"
            primaryLabel="Request a Free Estimate"
            secondaryHref="tel:+17143330178"
            secondaryLabel="(714) 333-0178"
            showSecondaryArrow={false}
            primaryButtonClassName="sm:w-auto sm:min-w-[200px] md:w-auto md:min-w-[200px]"
          />
        </div>
      </div>
      <DirectionButton
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
        className="absolute bottom-6 right-5 z-20 hidden lg:flex lg:bottom-24 lg:right-8"
      />
    </section>
  );
}
