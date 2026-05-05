import type { MetadataRoute } from "next";
import { ARTICLES, getArticleHref } from "@/lib/articles";
import { SITE, absoluteUrl } from "@/lib/seo";

/**
 * Generates `/sitemap.xml` from the live route table. Update this file
 * whenever new top-level routes are added.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/about-us"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/services"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/demolition"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/demolition/residential"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/demolition/residential/interior"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: absoluteUrl("/demolition/commercial"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/demolition/concrete-removal-hauling"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: absoluteUrl("/services/junk-removal"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/junk-removal/furniture-removal"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/junk-removal/same-day"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/junk-removal/estate-cleanout"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/services/dumpsters-rental"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/services/dumpsters-rental/waste-disposal"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/services/dumpsters-rental/junk-hauling"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/resources"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: absoluteUrl(getArticleHref(article)),
    lastModified: parseArticleDate(article.publishedDate) ?? lastModified,
    changeFrequency: "yearly",
    priority:
      article.slug === "house-demolition-costs-process" ? 0.88 : 0.6,
  }));

  // Reference SITE so the bundler keeps it in scope alongside future fields.
  void SITE;

  return [...staticRoutes, ...articleRoutes];
}

/**
 * Article publish dates are stored as human-readable strings (e.g.
 * "April 16, 2026"). Try to parse them into a Date for lastmod, falling
 * back to `null` when the format is non-standard.
 */
function parseArticleDate(value: string): Date | null {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed;
}
