import Image from "next/image";
import { HeroHeading } from "@/components/hero/hero-heading";
import { SimpleText } from "@/components/simple-text";

type TrustCard = {
  stat: string;
  title: string;
  description: string;
  highlighted?: boolean;
};

const TRUST_CARDS: TrustCard[] = [
  {
    stat: "100%",
    title: "Eco-Friendly",
    description: "We recycle as much debris as possible to keep OC green.",
    highlighted: true,
  },
  {
    stat: "0",
    title: "Hidden Fees",
    description: "Transparent pricing you can understand with zero surprises.",
  },
  {
    stat: "100%",
    title: "Full Service",
    description:
      "We even offer dumpster rentals for those who prefer to DIY their cleanup!",
  },
];

export function WhyTrustSection() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/homepage/whyUs/bg.webp"
        alt="Why trust Balderas Demolition"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#06182C]/68" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-12 md:px-8 md:pb-12 md:pt-16 lg:px-10 lg:pb-14 lg:pt-16">
        <div>
          <p className="font-maison text-lg font-semibold text-white sm:text-xl">
            Why Us?
          </p>

          <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
            <HeroHeading className="mt-0 max-w-[1080px] text-[40px] uppercase leading-[0.95] tracking-[-0.02em] text-white sm:text-[54px] md:text-[68px] lg:text-[68px]">
              Why Orange County Trust Balderas Demolition Inc.
            </HeroHeading>

            <p className="font-maison max-w-[520px] justify-self-start pt-1 text-base font-black leading-[1.05] text-white sm:text-lg md:text-xl lg:justify-self-end">
              We offer systematic planning, safe work practices, and a 100%
              commitment to your satisfaction across Orange County.
            </p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 overflow-hidden border border-white/15 sm:mt-10 md:grid-cols-2 lg:mt-50 lg:grid-cols-3">
          {TRUST_CARDS.map((card, index) => (
            <article
              key={card.title}
              className={
                card.highlighted
                  ? "flex min-h-[220px] flex-col items-start justify-start bg-[var(--color-brand-orange)] p-6 sm:min-h-[240px] sm:p-7 md:min-h-[260px] md:p-8"
                  : index === 1
                    ? "flex min-h-[220px] flex-col items-start justify-start bg-[#C4C8D3] p-6 sm:min-h-[240px] sm:p-7 md:min-h-[260px] md:p-8"
                    : "flex min-h-[220px] flex-col items-start justify-start bg-[#e9ebf1] p-6 sm:min-h-[240px] sm:p-7 md:min-h-[260px] md:p-8"
              }
            >
              <p
                className={
                  card.highlighted
                    ? "[font-family:var(--font-anton)] text-[44px] leading-none text-white sm:text-[32px]"
                    : "[font-family:var(--font-anton)] text-[44px] leading-none text-[#55617e] sm:text-[32px]"
                }
              >
                {card.stat}
              </p>
              <h3
                className={
                  card.highlighted
                    ? "font-maison mt-5 text-[30px] font-bold leading-[1.05] text-white sm:text-[24px]"
                    : "font-maison mt-5 text-[30px] font-bold leading-[1.05] text-[#3e4a67] sm:text-[24px]"
                }
              >
                {card.title}
              </h3>
              <SimpleText
                className={
                  card.highlighted
                    ? "mt-4 max-w-[280px] font-medium leading-[1.35] text-white/95"
                    : "mt-4 max-w-[280px] font-medium leading-[1.35] text-[#4b5977]"
                }
              >
                {card.description}
              </SimpleText>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
