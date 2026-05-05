"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function ServicesSpotlight() {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src="/images/homepage/servicesSpotlight.png"
        alt="Dumpster rental service spotlight"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#06182C]/68" />

      <div className="relative z-10 mx-auto grid min-h-[560px] w-full max-w-[1400px] grid-cols-1 items-end gap-6 px-4 pb-8 pt-12 sm:px-6 sm:pb-10 sm:pt-14 md:gap-8 md:px-8 md:pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div className="text-[var(--color-brand-white)] md:max-w-[760px] lg:relative lg:z-20 lg:w-[150%] lg:max-w-none">
          <p className="font-maison text-lg font-bold sm:text-xl xl:font-medium md:text-2xl">Service Spotlight</p>
          <div className="mt-6 pt-4 sm:pt-3 md:pt-2 lg:pt-0 
[font-family:var(--font-anton)] uppercase 
leading-[0.95] sm:leading-[0.9] md:leading-[0.85] lg:leading-[0.8] 
space-y-[12px] sm:space-y-[10px] md:space-y-[6px] lg:-space-y-6">

  <span className="block text-[clamp(42px,10vw,100px)] tracking-[-0.03em] text-transparent bg-[linear-gradient(172.17deg,_#E0E6F2_49.73%,_#4F5B79_139.36%)] bg-clip-text lg:leading-[128px] lg:whitespace-nowrap">
    Dumpsters Rentals.
  </span>

  <span className="block text-[clamp(42px,10vw,100px)] tracking-[-0.03em] text-[#4F5B79] opacity-80 lg:leading-[128px] lg:whitespace-nowrap">
    Demolition.
  </span>

  <span className="block text-[clamp(42px,10vw,100px)] tracking-[-0.03em] text-transparent opacity-80 bg-[linear-gradient(180deg,_#4F5B79_0%,_rgba(146,168,223,0)_69.23%)] bg-clip-text lg:leading-[128px] lg:whitespace-nowrap">
    Junk Removal.
  </span>

</div>
          <p className="font-maison mt-6 max-w-[420px] text-[5vw] font-bold leading-[1.15] sm:mt-8 sm:text-[28px] md:mt-10 md:max-w-[520px] md:text-[28px] md:font-medium  xl:text-[1.5vw] xl:max-w-[450px] xl:font-medium">
            Reliable dumpster rental solutions to manage waste easily throughout
            your project.
          </p>

          <Button
            asChild
            variant="heroPrimary"
            size="hero"
            className="mt-8 hidden lg:inline-flex lg:w-fit xl:w-[350px]"
          >
            <Link
              href="/contact"
              className="font-maison text-[14px] font-bold sm:text-[15px] md:text-base lg:text-[17px]"
            >
              Get Free Quote
            </Link>
          </Button>
        </div>

        <div className="mb-0 w-full justify-self-start rounded-2xl border border-white/20 bg-white/20 p-4 backdrop-blur-md sm:p-5 md:p-6 lg:mb-0 lg:w-auto lg:min-w-[360px] lg:justify-self-end">
          <ul className="font-maison space-y-1 text-[4.5vw] font-bold text-white sm:space-y-0 sm:text-[18px] md:text-[21px] md:font-medium lg:text-[24px] xl:text-[1.2vw] xl:font-medium">
            <li>• Various sizes</li>
            <li>• Flexible terms</li>
            <li>• Fast delivery &amp; pickup</li>
          </ul>
        </div>

        <Button
          asChild
          variant="heroPrimary"
          size="hero"
          className="mt-0 w-full justify-self-stretch md:mt-2 md:w-auto md:justify-self-start lg:hidden"
        >
          <Link
            href="/contact"
            className="font-maison text-[14px] font-bold sm:text-[15px] md:text-[17px]"
          >
            Get Free Quote
          </Link>
        </Button>
      </div>
    </section>
  );
}
