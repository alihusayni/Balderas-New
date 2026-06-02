/**
 * Lightweight lookup sets for article slug / canonical-path matching.
 *
 * Used by `site-header.tsx` (a "use client" component) to determine whether
 * the current pathname is a known article detail page.
 *
 * IMPORTANT — keep this file in sync with the ARTICLES array in
 * `lib/articles.ts`. Whenever a new article is added, add its slug and
 * canonical path here too.
 *
 * This module replaces the previous `import { ARTICLES } from "@/lib/articles"`
 * in the header, which pulled the ENTIRE 38 KB articles array (all body content,
 * CTAs, images) into the client JS bundle — just for two `.some()` lookups.
 * This file is < 1 KB.
 */

export const ARTICLE_SLUGS: ReadonlySet<string> = new Set([
  "house-demolition-costs-process",
  "hut-top-structure-removal",
  "the-high-cost-of-cheap-why-a-licensed-demolition-contractor-is-non-negotionable",
  "affordable-dumpster-rental-and-demolition-services",
  "top-reasons-to-hire-a-professional-junk-removal",
  "systematic-project-control",
  "fast-and-hassle-free-junk-removal",
  "choose-the-right-dumpster-for-your-project",
  "safe-controlled-demolition-process",
]);

export const ARTICLE_CANONICAL_PATHS: ReadonlySet<string> = new Set([
  "/demolition/house-demolition-costs-process",
  "/demolition/hut-top-structure-removal",
  "/demolition/the-high-cost-of-cheap-why-a-licensed-demolition-contractor-is-non-negotionable",
  "/dumpster-rental/affordable-dumpster-rental-and-demolition-services",
  "/junk-removal/top-reasons-to-hire-a-professional-junk-removal",
  "/demolition/systematic-project-control",
  "/junk-removal/fast-and-hassle-free-junk-removal",
  "/dumpster-rental/choose-the-right-dumpster-for-your-project",
  "/demolition/safe-controlled-demolition-process",
]);
