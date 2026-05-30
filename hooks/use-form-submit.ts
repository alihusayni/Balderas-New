"use client";

import { useState, useCallback } from "react";

export type FormStatus = "idle" | "sending" | "sent" | "error";

/**
 * Single source of truth for every form submission on the site.
 *
 * All forms POST to `/api/contact` with a `Record<string, string>` body.
 * If the endpoint, headers, or error handling ever need to change,
 * this is the only file you touch.
 */
export function useFormSubmit() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const submit = useCallback(async (data: Record<string, string>) => {
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, pageUrl: window.location.href }),
      });

      if (res.ok) {
        setStatus("sent");
        return true;
      } else {
        setStatus("error");
        return false;
      }
    } catch {
      setStatus("error");
      return false;
    }
  }, []);

  const reset = useCallback(() => setStatus("idle"), []);

  return { status, submit, reset } as const;
}
