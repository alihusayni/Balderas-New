"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { SimpleText } from "@/components/simple-text";

type Testimonial = {
  name: string;
  date: string;
  text: string;
  image: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Cindy Young-West",
    date: "April 2026",
    text: "Great experience! Ordered a trailer for whole-house trash out. Abel was on time and courteous. Highly recommend!",
    image: "/images/homepage/testimonial/cindy.jpg",
  },
  {
    name: "Patricia Andrews",
    date: "February 2026",
    text: "Very happy with their service. I would definitely use them again. They arrived exactly at the time they said. Very polite, very friendly. And a very reasonable price.",
    image: "/images/homepage/testimonial/patricia.jpg",
  },
  {
    name: "Nancy Thompson",
    date: "January 2026",
    text: "I had a great experience with Balderas! They got the job done quickly and efficiently and I look forward to working with them again when I need to!",
    image: "/images/homepage/testimonial/nancy.jpg",
  },
  {
    name: "Brice Nzeukou",
    date: "December 2025",
    text: "Great and professional service. They worked quickly, communicated well ahead of time, and were competitive with price. I'll definitely consider them again!",
    image: "/images/homepage/testimonial/brice.jpg",
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  return (
    <section className="bg-white py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-2">
            <p className="font-maison text-base font-bold text-[#0b0b0b] sm:text-lg">
              Testimonial
            </p>
            <h2 className="[font-family:var(--font-anton)] text-[30px] font-normal leading-[0.95] tracking-[-0.02em] text-black sm:text-[38px] md:text-[48px] lg:text-[56px] xl:text-[72px]">
              What Our Clients Are Saying
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden items-center gap-3 pb-2 md:flex">
            <button
              type="button"
              className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#e2e4e9] text-[#1b1f2b] transition-colors hover:bg-[#d1d4dc]"
              aria-label="Previous testimonials"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button
              type="button"
              className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#e2e4e9] text-[#1b1f2b] transition-colors hover:bg-[#d1d4dc]"
              aria-label="Next testimonials"
              onClick={() => emblaApi?.scrollNext()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        <div className="-my-4 mt-10 overflow-hidden py-4" ref={emblaRef}>
          {/* Changed items-start to items-stretch below */}
          <div className="-ml-4 flex items-stretch sm:-ml-6">
          {TESTIMONIALS.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="min-w-0 flex-[0_0_85%] pl-4 sm:flex-[0_0_50%] sm:pl-6 md:flex-[0_0_40%] xl:flex-[0_0_25%]"
            >
              {/* Added h-full below */}
              <div className="flex h-full flex-col space-y-4">
                {/* Image Container */}
                <div className="relative aspect-square w-full flex-none overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 639px) 85vw, (max-width: 767px) 50vw, (max-width: 1279px) 40vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* Text Content */}
                <SimpleText className="text-[14px] leading-[1.6] text-[#333333]">
                  {item.text}
                </SimpleText>

                {/* Footer Info - Added mt-auto below */}
                <div className="mt-auto flex items-center gap-1.5 pt-2">
                  <span className="font-maison text-[15px] font-bold text-[#111111]">
                    {item.name}
                  </span>
                  {/* Verified Checkmark Icon */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#777777"/>
                    <path d="M16.5 8.5L10.5 14.5L7.5 11.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-maison text-[13px] text-[#777777]">
                    {item.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}