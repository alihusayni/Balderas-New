"use client";

import { DirectionButton } from "@/components/hero/direction-button";
import { HeroCtas } from "@/components/hero/hero-ctas";
import { HeroHeading } from "@/components/hero/hero-heading";
import { HeroParallaxBackground } from "@/components/hero/hero-parallax-background";
import { HeroSubheading } from "@/components/hero/hero-subheading";

type ResidentialDemolitionHeroProps = {
  /** Primary CTA typically `/contact`. */
  quoteHref: string;
  /** Use `tel:…` so mobile devices can dial. */
  callHref: string;
};

export function ResidentialDemolitionHero({
  quoteHref,
  callHref,
}: ResidentialDemolitionHeroProps) {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="-mt-[130px] relative min-h-screen w-full overflow-hidden pt-[230px]">
      <HeroParallaxBackground
        src="/images/services/img2.png"
        alt="Residential interior demolition in Orange County"
        priority
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] items-end px-6 pb-[180px] lg:px-10">
        <div className="max-w-[760px] text-[var(--color-brand-white)] sm:max-w-[680px] md:max-w-[1100px]">
          <div className="h-[50px]" aria-hidden />
          <HeroHeading>
            Residential Demolition in <br /> Orange County: Preparing Your Home
            for What&apos;s Next
          </HeroHeading>
          <HeroSubheading>
            Taking the first step toward your dream home can be intimidating.
              Whether you&apos;re gutting a 1970s kitchen or clearing out a
              backyard structure, you need a team that respects your property as
              much as you do. At Balderas Demolition Inc., Abel Balderas and his
              crew specialize in &ldquo;surgical&rdquo; residential
              demolition—tearing down exactly what needs to go while protecting
              everything that stays.
            
          </HeroSubheading>
          <HeroCtas
            primaryHref={quoteHref}
            primaryLabel="Get a Residential Demo Quote"
            secondaryHref="tel:+17143408108"
            secondaryLabel="(714) 340-8108"
            showSecondaryArrow={false}
            primaryButtonClassName="sm:w-auto sm:min-w-[200px] md:w-auto md:min-w-[260px]"
            secondaryButtonClassName="sm:w-auto sm:min-w-[200px] md:w-auto md:min-w-[220px]"
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
