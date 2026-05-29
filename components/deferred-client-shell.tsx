"use client";

/**
 * Deferred client-only shell — wraps components that are NOT needed at first paint.
 * Using ssr:false here (valid because this is a "use client" component) means their
 * JS is excluded from the initial bundle and loads lazily after FCP.
 *
 * - NextTopLoader: only shows during SPA navigations, never on initial page load
 * - CookieConsent: checks localStorage and shows a banner (naturally post-FCP UX)
 */

import dynamic from "next/dynamic";

const NextTopLoader = dynamic(() => import("nextjs-toploader"), { ssr: false });
const CookieConsent = dynamic(
  () => import("@/components/cookie-consent").then((m) => m.CookieConsent),
  { ssr: false }
);

export function DeferredClientShell() {
  return (
    <>
      <NextTopLoader
        color="#dc5a31"
        height={3}
        crawlSpeed={280}
        showSpinner={false}
        shadow={false}
        speed={380}
        zIndex={2000}
      />
      <CookieConsent />
    </>
  );
}
