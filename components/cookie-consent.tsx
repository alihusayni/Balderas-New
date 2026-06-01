"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const CONSENT_KEY = "balderas_cookie_consent";

type ConsentValue = "accepted" | "declined";

/**
 * Lightweight cookie-consent banner.
 *
 * - Shows on first visit (no localStorage entry).
 * - Persists the user's choice in localStorage.
 * - When "Accept" is clicked, GA4 + CallRail scripts are already loaded
 *   (they run via next/script in layout.tsx), so this simply records consent.
 * - When "Decline" is clicked, we set a flag — a future enhancement could
 *   conditionally load analytics based on this value.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if the user hasn't made a choice yet
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const respond = useCallback((value: ConsentValue) => {
    localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 z-[9999] w-full animate-[slideUp_0.4s_ease-out] bg-[#06182C]/95 backdrop-blur-md"
    >
      <div className="mx-auto flex w-full max-w-container flex-col items-start gap-4 px-5 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-8 sm:py-5">
        <p className="flex-1 font-maison text-xs leading-[1.5] text-white/80 sm:text-sm">
          We use cookies (Google Analytics &amp; CallRail) to understand how
          visitors use our site and to improve your experience. By clicking
          &ldquo;Accept&rdquo; you consent to the use of these cookies. See our{" "}
          <Link
            href="/privacy"
            className="font-medium text-[var(--color-brand-orange)] underline underline-offset-2 transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>{" "}
          for details.
        </p>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => respond("declined")}
            className="font-maison text-xs font-medium text-white/90 underline underline-offset-2 transition-colors hover:text-white sm:text-sm"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => respond("accepted")}
            className="rounded-md border border-white/30 bg-white px-5 py-2 font-maison text-xs font-bold text-[#06182C] transition-opacity hover:opacity-90 sm:text-sm"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
