"use client";

import { DirectionButton } from "@/components/hero/direction-button";
import { HeroCtas } from "@/components/hero/hero-ctas";
import { HeroHeading } from "@/components/hero/hero-heading";
import { HeroParallaxBackground } from "@/components/hero/hero-parallax-background";
import { HeroSubheading } from "@/components/hero/hero-subheading";

type ConcreteRemovalHeroProps = {
  quoteHref: string;
  callHref: string;
};

export function ConcreteRemovalHero({
  quoteHref,
  callHref,
}: ConcreteRemovalHeroProps) {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="-mt-[130px] relative min-h-screen w-full overflow-hidden pt-[230px]">
      <HeroParallaxBackground
        src="/images/services/img6.png"
        alt="Heavy equipment breaking and loading concrete for hauling in Orange County"
        priority
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] items-end px-6 pb-[180px] lg:px-10">
        <div className="max-w-[760px] text-[var(--color-brand-white)] sm:max-w-[680px] md:max-w-[1100px]">
          <div className="h-[50px]" aria-hidden />
          <HeroHeading>
            Concrete Removal and Hauling:{" "}
            <br className="hidden sm:block" />
            We Do the Heavy Lifting for You
          </HeroHeading>
          <HeroSubheading>
          
            Old, cracked concrete isn&apos;t just an eyesore{'\u2014'}it&apos;s
            a
            major hurdle for your next landscaping or construction project.
            Breaking up and hauling away concrete is one of the most physically
            demanding tasks a property owner can face. At Balderas Demolition
            Inc., we take the burden off your shoulders. Led by Abel Balderas, our
            team provides the muscle and the machinery to break, load, and haul
            your concrete away in record time.
          </HeroSubheading>
          <HeroCtas
            primaryHref={quoteHref}
            primaryLabel="Get a Concrete Removal Quote"
            secondaryHref={callHref}
            secondaryLabel="Call Abel Now"
            showSecondaryArrow={false}
            primaryButtonClassName="sm:w-auto sm:min-w-[200px] md:w-auto md:min-w-[280px]"
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
