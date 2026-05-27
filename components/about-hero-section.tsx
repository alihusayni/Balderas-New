"use client";

import { DirectionButton } from "@/components/hero/direction-button";
import { HeroHeading } from "@/components/hero/hero-heading";
import { HeroParallaxBackground } from "@/components/hero/hero-parallax-background";
import { HeroSubheading } from "@/components/hero/hero-subheading";

export function AboutHeroSection() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="-mt-[130px] relative w-full overflow-hidden">
      <HeroParallaxBackground
        src="https://balderas-assets.s3.amazonaws.com/images/about/1.png"
        alt="Balderas Demolition crew loading a dumpster on site in Orange County"
        priority
        overlayClassName="bg-[#06182C]/60"
      />

      <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-[1400px] items-end px-6 pt-[200px] pb-[80px] lg:min-h-[1040px] lg:px-10 lg:pt-[230px] lg:pb-[100px]">
        <div className="max-w-[760px] text-[var(--color-brand-white)] sm:max-w-[680px] md:max-w-[1100px]">
          <HeroHeading>
            Behind the Hammer: The Story of Balderas Demolition Inc.
          </HeroHeading>
          <HeroSubheading>
            At Balderas Demolition Inc., we believe every project starts with a
            clean, safe site. From home renovations to commercial clear-outs,
            we prepare your space for what&apos;s next. Founded by Abel Balderas,
            our mission is simple: deliver a higher standard of demolition and
            junk removal in Orange County.
          </HeroSubheading>
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
