"use client";

import { DirectionButton } from "@/components/hero/direction-button";
import { HeroCtas } from "@/components/hero/hero-ctas";
import { HeroHeading } from "@/components/hero/hero-heading";
import { HeroParallaxBackground } from "@/components/hero/hero-parallax-background";
import { HeroSubheading } from "@/components/hero/hero-subheading";

type CommercialDemolitionHeroProps = {
  quoteHref: string;
  callHref: string;
};

export function CommercialDemolitionHero({
  quoteHref,
  callHref,
}: CommercialDemolitionHeroProps) {
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
        alt="Commercial demolition and heavy equipment in Orange County"
        priority
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] items-end px-6 pb-20 lg:px-10">
        <div className="max-w-[760px] text-[var(--color-brand-white)] sm:max-w-[680px] md:max-w-[1100px]">
          <div className="h-[50px]" aria-hidden />
          <HeroHeading>
            Orange County Commercial Demolition:
            Precision Deconstruction for Your Business
          </HeroHeading>
          <HeroSubheading>
            In the commercial world, time is money. Whether you&apos;re a
            property manager prepping a retail space for a new tenant or a general
            contractor needing a reliable sub-partner for a large-scale office
            strip-out, you need a team that understands the complexity of
            commercial environments. Balderas Demolition Inc., led by Abel
            Balderas, provides systematic, high-efficiency commercial demolition
            services across Orange County.
          </HeroSubheading>
          <HeroCtas
            primaryHref={quoteHref}
            primaryLabel="Request a Commercial Bid"
            secondaryHref={callHref}
            secondaryLabel="Call Our Project Manager"
            showSecondaryArrow={false}
            primaryButtonClassName="sm:w-auto sm:min-w-[200px] md:w-auto md:min-w-[280px]"
            secondaryButtonClassName="sm:w-auto sm:min-w-[200px] md:w-auto md:min-w-[260px]"
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
