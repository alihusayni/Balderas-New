import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Hero parallax background — Server Component (no "use client").
 *
 * Parallax is handled by CSS scroll-driven animations (zero JS, compositor thread):
 *   animation-timeline: scroll(root) — tracks the root scrollbar
 *   @keyframes hero-parallax-move in globals.css applies translateY as user scrolls
 *
 * Browser support: Chrome 115+, Safari 18+, Firefox 128+ (~92% globally, 2025).
 * Fallback for unsupported browsers: image stays at scale(1.08) translateY(0) — fine.
 *
 * Preload strategy:
 *   DO NOT add priority={true} — auto-generates a q=75 preload (ignores quality prop)
 *   DO NOT add fetchPriority="high" — Next.js 16 Turbopack also generates q=75 preload
 *   Both conflict with our manual q=22 preload in layout.tsx (imageSrcSet).
 *   loading="eager" is required — without it next/image defaults to lazy loading → LCP 4s.
 *   The <link rel="preload" imageSrcSet q=22 fetchPriority="high"> in layout.tsx is the
 *   sole priority signal. loading="eager" ensures the image isn't lazily deferred.
 *   IMPORTANT: keep quality in sync with q= in layout.tsx preload imageSrcSet.
 */

type HeroParallaxBackgroundProps = {
  src: string;
  alt: string;
  /** Accepted for call-site compat — intentionally ignored (CSS handles the effect). */
  priority?: boolean;
  /** Accepted for call-site compat — intentionally ignored (CSS handles the speed). */
  speed?: number;
  /** Accepted for call-site compat — intentionally ignored (CSS handles the scale). */
  scale?: number;
  overlayClassName?: string;
  imageClassName?: string;
};

export function HeroParallaxBackground({
  src,
  alt,
  priority: _priority,
  speed: _speed,
  scale: _scale,
  overlayClassName,
  imageClassName,
}: HeroParallaxBackgroundProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        loading="eager"
        sizes="100vw"
        quality={22}
        className={cn("object-cover hero-parallax-img", imageClassName)}
      />
      <div className={cn("absolute inset-0 bg-[#06182C]/68", overlayClassName)} />
    </>
  );
}
