import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Hero parallax background — Server Component (no "use client").
 *
 * Image loading strategy — follow tuanlelaw pattern:
 *   priority={true} + fetchPriority="high" → Next.js auto-generates a SINGLE
 *   <link rel="preload" fetchPriority="high" imageSrcSet="...q=22..."> covering
 *   ALL deviceSizes. No manual preload in layout.tsx needed or desired.
 *
 *   DO NOT add a separate manual <link rel="preload"> in layout.tsx:
 *   loading="eager" (without priority) already generates a preload WITHOUT
 *   fetchPriority. A manual preload WITH fetchPriority then creates TWO
 *   competing preloads for the same resource → browser may double-download
 *   or fight over priorities → LCP 2.6s instead of ~1.1s.
 *
 *   IMPORTANT: quality={22} is allowed by next.config.ts qualities:[22,55,75].
 *   priority generates the preload URL using the Image's quality prop,
 *   so the auto-preload is at q=22 (not q=75). qualities allowlist ensures
 *   these q=22 URLs don't return 400 INVALID_IMAGE_OPTIMIZE_REQUEST.
 *
 * Parallax strategy:
 *   CSS scroll-driven animation (hero-parallax-img class in globals.css)
 *   replaces the previous vanilla JS useEffect + requestAnimationFrame listener.
 *   Runs on compositor thread — zero JS, zero main-thread cost.
 *   Browser support: Chrome 115+, Safari 18+, Firefox 128+ (~92% global, 2025).
 *   Fallback: image stays at scale(1.08) translateY(-10%) — static, no parallax.
 */

type HeroParallaxBackgroundProps = {
  src: string;
  alt: string;
  /** Accepted for call-site compat — component always uses priority={true} internally. */
  priority?: boolean;
  /** Accepted for call-site compat — intentionally not forwarded (CSS handles speed). */
  speed?: number;
  /** Accepted for call-site compat — intentionally not forwarded (CSS handles scale). */
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
        // priority + fetchPriority="high": generates ONE preload with fetchPriority="high"
        // at q=22 (uses the Image's quality prop). Remove loading="eager" — priority
        // already implies eager. No manual <link rel="preload"> in layout.tsx.
        priority
        fetchPriority="high"
        // decoding="auto": let browser choose sync decode for this small (18 KB) file.
        // Next.js sets decoding="async" for all priority images by default —
        // async decode means image may not appear until after FCP even if bytes are ready.
        // "auto" → browser decodes synchronously for small images → LCP ≈ FCP.
        decoding="auto"
        sizes="100vw"
        quality={22}
        // q=22: full-bleed under 68% dark overlay. Allowed by next.config.ts qualities:[22,55,75].
        // AVIF at q=22 ≈ 30–50% smaller than WebP at same quality.
        className={cn("object-cover hero-parallax-img", imageClassName)}
      />
      <div className={cn("absolute inset-0 bg-[#06182C]/68", overlayClassName)} />
    </>
  );
}
