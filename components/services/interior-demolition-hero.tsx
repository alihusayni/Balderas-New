"use client";

import { DirectionButton } from "@/components/hero/direction-button";
import { HeroCtas } from "@/components/hero/hero-ctas";
import { HeroHeading } from "@/components/hero/hero-heading";
import { HeroParallaxBackground } from "@/components/hero/hero-parallax-background";
import { HeroSubheading } from "@/components/hero/hero-subheading";

type InteriorDemolitionHeroProps = {
  quoteHref: string;
  callHref: string;
};

export function InteriorDemolitionHero({
  quoteHref,
  callHref,
}: InteriorDemolitionHeroProps) {
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
        alt="Interior kitchen and bath demolition prep in Orange County"
        priority
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] items-end px-6 pb-20 lg:px-10">
        <div className="max-w-[760px] text-[var(--color-brand-white)] sm:max-w-[680px] md:max-w-[1100px]">
          <div className="h-[50px]" aria-hidden />
          <HeroHeading>
            Interior Demolition Specialists:{" "}
            <br className="hidden sm:block" />
            Precision Strip-Outs for Your Next Remodel
          </HeroHeading>
          <HeroSubheading>
            Remodeling your home starts with a clean slate, but getting there
            shouldn&apos;t mean a mess in the rest of your house. At Balderas
            Demolition Inc., we specialize in interior &ldquo;surgical&rdquo;
            demolition. Led by Abel Balderas, our team focuses on removing
            exactly what you don&apos;t want while meticulously protecting the
            parts of your home you love.
          </HeroSubheading>
          <HeroCtas
          
            primaryHref={quoteHref}
            primaryLabel="Get an Interior Demo Quote"
            secondaryHref={callHref}
            secondaryLabel="Call Abel Now"
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
