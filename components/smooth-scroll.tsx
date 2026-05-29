/**
 * Smooth scroll placeholder — Lenis was removed (caused incomplete scroll issues).
 * Native CSS smooth scrolling via `scroll-behavior: smooth` on <html> is used instead.
 * Returns null — kept as import for call-site compat with layout.tsx.
 */
export function SmoothScroll() {
  return null;
}
