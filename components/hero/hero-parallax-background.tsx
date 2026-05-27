"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type HeroParallaxBackgroundProps = {
  src: string;
  alt: string;
  priority?: boolean;
  speed?: number;
  scale?: number;
  overlayClassName?: string;
  imageClassName?: string;
};

export function HeroParallaxBackground({
  src,
  alt,
  priority = true,
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
        priority={priority}
        sizes="100vw"
        // q=45: busts Vercel CDN cache — source re-uploaded to S3 at q=22 (146KB).
        quality={45}
        className={cn("object-cover will-change-transform", imageClassName)}
      />
      <div className={cn("absolute inset-0 bg-[#06182C]/68", overlayClassName)} />
    </>
  );
}
