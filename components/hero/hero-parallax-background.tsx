"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
  priority = false,
  speed = 0.25,
  scale = 1.08,
  overlayClassName,
  imageClassName,
}: HeroParallaxBackgroundProps) {
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setParallaxY(window.scrollY * speed);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        // q=60: this image sits under a dark 68% overlay — lower quality is
        // imperceptible and saves ~62 KiB per PageSpeed audit.
        quality={60}
        className={cn("object-cover will-change-transform", imageClassName)}
        style={{ transform: `translate3d(0, ${parallaxY}px, 0) scale(${scale})` }}
      />
      <div className={cn("absolute inset-0 bg-[#06182C]/68", overlayClassName)} />
    </>
  );
}
