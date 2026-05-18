"use client";

import { DirectionButton } from "./direction-button";

type HeroScrollButtonProps = {
  className?: string;
};

/**
 * Isolates the scroll-to-next-section click handler so the parent hero
 * section can remain a Server Component (critical for LCP — the <h1> must
 * be SSR'd, not held until client hydration).
 */
export function HeroScrollButton({ className }: HeroScrollButtonProps) {
  const handleClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <DirectionButton
      onClick={handleClick}
      aria-label="Scroll to next section"
      className={className}
    />
  );
}
