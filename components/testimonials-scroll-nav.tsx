"use client";

/**
 * TestimonialsScrollNav — desktop-only prev/next buttons for the testimonials
 * scroll container. Isolated as a "use client" leaf so TestimonialsSection
 * itself stays a Server Component (zero JS hydration for the cards).
 *
 * These buttons are hidden md:flex — invisible on Lighthouse's 412px mobile
 * test device. On mobile, CSS scroll-snap handles swipe natively.
 */
export function TestimonialsScrollNav() {
  const scroll = (dir: 1 | -1) => {
    const el = document.getElementById("testimonials-scroll");
    const card = el?.querySelector("article");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: "smooth" });
  };

  return (
    <div className="hidden items-center gap-3 pb-2 md:flex">
      <button
        type="button"
        className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#e2e4e9] text-[#1b1f2b] transition-colors hover:bg-[#d1d4dc]"
        aria-label="Previous testimonials"
        onClick={() => scroll(-1)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#e2e4e9] text-[#1b1f2b] transition-colors hover:bg-[#d1d4dc]"
        aria-label="Next testimonials"
        onClick={() => scroll(1)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
