// No "use client" — Server Component.
// The testimonial cards are static content: text + images. No interactivity needed.
// The desktop scroll buttons are extracted into TestimonialsScrollNav (a tiny
// "use client" leaf) so this parent stays server-rendered with zero client JS.
// React does NOT hydrate Server Components → zero TBT contribution from this section.

import Image from "next/image";
import { SimpleText } from "@/components/simple-text";
import { TestimonialsScrollNav } from "@/components/testimonials-scroll-nav";

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
    text: "Great experience! Ordered a trailer for whole-house trash out. The crew was on time and courteous. Highly recommend!",
    image: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/homepage/testimonial/cindy.jpg",
  },
  {
    name: "Patricia Andrews",
    date: "February 2026",
    text: "Very happy with their service. I would definitely use them again. They arrived exactly at the time they said. Very polite, very friendly. And a very reasonable price.",
    image: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/homepage/testimonial/patricia.jpg",
  },
  {
    name: "Nancy Thompson",
    date: "January 2026",
    text: "I had a great experience with Demolition OC! They got the job done quickly and efficiently and I look forward to working with them again when I need to!",
    image: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/homepage/testimonial/nancy.jpg",
  },
  {
    name: "Brice Nzeukou",
    date: "December 2025",
    text: "Great and professional service. They worked quickly, communicated well ahead of time, and were competitive with price. I'll definitely consider them again!",
    image: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/homepage/testimonial/brice.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-white py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-2">
            <p className="font-maison text-base font-bold text-[#0b0b0b] sm:text-lg">
              Client Reviews
            </p>
            <h2 className="[font-family:var(--font-anton)] text-[30px] font-normal leading-[0.95] tracking-[-0.02em] text-black sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[72px]">
              What OC Homeowners Are Saying About Us
            </h2>
          </div>

          {/*
            TestimonialsScrollNav — "use client" leaf for the prev/next buttons.
            These are hidden md:flex (only visible on desktop). Lighthouse tests
            at 412px mobile → the buttons are never rendered in the test viewport.
            Isolating them here means TestimonialsSection itself has zero JS.
          */}
          <TestimonialsScrollNav />
        </div>

        {/*
          Scroll container — plain server-rendered div. CSS scroll snap handles
          touch swipe natively (no JS). Nav buttons query this element by id.
          gap-4 avoids the negative-margin CLS bug (no -ml-4 / pl-4 pattern).
        */}
        <div
          id="testimonials-scroll"
          className="no-scrollbar testimonials-scroll mt-10 flex items-stretch gap-4 overflow-x-auto sm:gap-6"
        >
          {TESTIMONIALS.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="testimonials-snap-start flex w-[85%] flex-none flex-col gap-4 sm:w-1/2 md:w-[40%] xl:w-1/4"
            >
              {/* Image */}
              <div className="relative aspect-square w-full flex-none overflow-hidden bg-[#f3f4f6]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 639px) 85vw, (max-width: 767px) 50vw, (max-width: 1279px) 40vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Review text */}
              <SimpleText className="text-sm leading-[1.6] text-[#333333]">
                {item.text}
              </SimpleText>

              {/* Author */}
              <div className="mt-auto flex items-center gap-1.5 pt-2">
                <span className="font-maison text-base font-bold text-[#111111]">
                  {item.name}
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#595959" />
                  <path d="M16.5 8.5L10.5 14.5L7.5 11.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-maison text-xs text-[#595959]">{item.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}