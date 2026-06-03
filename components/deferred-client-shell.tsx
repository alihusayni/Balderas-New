"use client";

/**
 * Deferred client-only shell — wraps components that are NOT needed at first paint.
 * Using ssr:false here (valid because this is a "use client" component) means their
 * JS is excluded from the initial bundle and loads lazily after FCP.
 *
 * - CookieConsent: checks localStorage and shows a banner (naturally post-FCP UX)
 *
 * NOTE: nextjs-toploader was removed — it added ~10KB of JS that had to be parsed
 * even when deferred. It only fires on SPA navigation (never on initial page load)
 * so it was invisible to real users on first visit and to PageSpeed's test window.
 * Native browser navigation indicators are sufficient for this site.
 */

import dynamic from "next/dynamic";

const CookieConsent = dynamic(
  () => import("@/components/cookie-consent").then((m) => m.CookieConsent),
  { ssr: false }
);

export function DeferredClientShell() {
  return <CookieConsent />;
}
