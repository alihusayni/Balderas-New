"use client";

import { useEffect, useState } from "react";

/**
 * Lazy-loaded smooth scroll wrapper.
 * Lenis is only imported after the page is interactive (idle callback),
 * so it doesn't block first paint or LCP.
 */
export function SmoothScroll() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Delay loading until the browser is idle
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => setReady(true));
      return () => window.cancelIdleCallback(id);
    } else {
      const id = setTimeout(() => setReady(true), 200);
      return () => clearTimeout(id);
    }
  }, []);

  useEffect(() => {
    if (!ready) return;

    let lenis: import("lenis").default | null = null;
    let rafId = 0;

    import("lenis").then((mod) => {
      const Lenis = mod.default;
      lenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        touchMultiplier: 1.2,
      });

      const raf = (time: number) => {
        lenis!.raf(time);
        rafId = window.requestAnimationFrame(raf);
      };
      rafId = window.requestAnimationFrame(raf);
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, [ready]);

  return null;
}
