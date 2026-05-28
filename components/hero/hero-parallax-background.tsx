"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type HeroParallaxBackgroundProps = {
  src: string;
  alt: string;
  // priority prop removed — use layout.tsx <link rel="preload" imageSrcSet> instead.
  // next/image priority={true} auto-generates a preload at q=75 (ignores quality prop),
  // which conflicts with our manual q=45 preload causing a double download.
  // Accepted here to avoid breaking existing call sites — it is intentionally ignored.
  priority?: boolean;
  speed?: number;
  scale?: number;
  overlayClassName?: string;
  imageClassName?: string;
};

export function HeroParallaxBackground({
  src,
  alt,
  priority: _priority, // accepted for call-site compat; intentionally not forwarded — see type comment
  speed = 0.25,
  scale = 1.08,
  overlayClassName,
  imageClassName,
}: HeroParallaxBackgroundProps) {
  // Ref points directly at the <img> DOM node so we can mutate style.transform
  // without triggering a React re-render (and its forced layout recalculation)
  // on every scroll frame. Previous useState approach caused ~60 layout passes/s.
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        if (imgRef.current) {
          imgRef.current.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0) scale(${scale})`;
        }
        ticking = false;
      });
    };

    // Set initial transform
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed, scale]);

  return (
    <>
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill
        // DO NOT use priority={true} — auto-generates a q=75 preload (ignores quality prop),
        // conflicting with our manual q=22 preload in layout.tsx.
        // DO NOT use fetchPriority="high" — Next.js 16 Turbopack also auto-generates a
        // q=75 preload for any Image with fetchPriority="high", same conflict.
        // The manual <link rel="preload" imageSrcSet q=22> in layout.tsx is the sole
        // priority signal. The Image here just renders with default loading behavior
        // and picks up the already-preloaded q=22 resource from browser cache.
        sizes="100vw"
        quality={22}
        // q=22: full-bleed under 68% dark overlay — same as why-trust and spotlight.
        // IMPORTANT: keep in sync with the imageSrcSet q= value in layout.tsx preload.
        className={cn("object-cover will-change-transform", imageClassName)}
      />
      <div className={cn("absolute inset-0 bg-[#06182C]/68", overlayClassName)} />
    </>
  );
}
