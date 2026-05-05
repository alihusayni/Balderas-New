import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSubheading } from "@/components/ui/section-subheading";

export function MeetOwnerSection() {
  return (
    <section className="bg-[#efefef] py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-6 px-4 sm:gap-8 sm:px-6 md:gap-10 md:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10">
        <div className="order-2 relative min-h-[300px] overflow-hidden sm:min-h-[360px] md:min-h-[500px] lg:order-1">
          <Image
            src="/images/about/2.jpg"
            alt="Meet owner portrait placeholder"
            fill
            sizes="(max-width: 1024px) 100vw, 650px"
            className="object-cover object-[40%_30%]"
          />
        </div>

        <div className="order-1 text-[#0b0b0b] lg:order-2">
          <SectionHeading className="uppercase leading-[0.92] sm:text-[56px] md:text-[70px] lg:text-[78px]">
            Meet the owner
            <span className="block text-[var(--color-brand-orange)]">
              Abel Balderas
            </span>
          </SectionHeading>
        <div className="sm:mt-12"/>
          <SectionSubheading className="mt-8 text-sm font-medium sm:mt-12 sm:text-base md:text-[19px] md:leading-[1.5]">
            When you hire Balderas Demolition Inc., you&apos;re partnering with
            Abel Balderas. Known in Orange County for his responsive
            communication and genuine helpfulness, Abel personally ensures every
            client feels confident about the job. His philosophy is simple:
            provide solutions where others see problems. From creative fixes in
            tight spaces to power-washing driveways after the job, Abel always
            goes the extra mile.
          </SectionSubheading>
        </div>
      </div>
    </section>
  );
}
