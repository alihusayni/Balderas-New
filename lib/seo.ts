import type { Metadata } from "next";

/**
 * Single source of truth for site-wide SEO values.
 *
 * Override the public-facing URL by setting `NEXT_PUBLIC_SITE_URL` in your
 * environment (e.g. on Vercel). The default falls back to the production
 * domain documented in the site copy.
 */
export const SITE = {
  name: "Balderas Demolition Inc.",
  shortName: "Balderas Demolition",
  legalName: "Balderas Demolition Inc.",
  tagline: "Demolition, Dumpster Rentals & Junk Removal in Orange County",
  description:
    "Balderas Demolition Inc. provides licensed, insured demolition, dumpster rentals, and junk removal across Orange County, CA. Get a fast, friendly free quote from Abel Balderas and the team.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.demolitionoc.com").replace(
    /\/$/,
    "",
  ),
  locale: "en_US",
  defaultOgImage: "https://balderas-assets.s3.amazonaws.com/images/homepage/hero.webp",
  defaultOgImageAlt:
    "Balderas Demolition Inc. crew on a residential demolition site in Orange County",
  /** X (Twitter) handle, e.g. `@balderasdemo` — leave empty until you have one. */
  twitterHandle: "",
  founder: "Abel Balderas",
  /** California C-21 contractor license number — fill when available. */
  c21LicenseNumber: "",
  telephone: "(714) 340-8108",
  email: "info@demolitionoc.com",
  address: {
    streetAddress: "11431 Westminster Ave",
    addressLocality: "Garden Grove",
    addressRegion: "CA",
    postalCode: "92843",
    addressCountry: "US",
  },
  /** Set when you have a verified office / yard location for maps rich results. */
  geo: {
    latitude: 33.7748 as number | null,
    longitude: -117.9463 as number | null,
  },
  areasServed: [
    "Tustin, CA",
    "Irvine, CA",
    "Santa Ana, CA",
    "Orange, CA",
    "Anaheim, CA",
    "Newport Beach, CA",
    "Costa Mesa, CA",
    "Huntington Beach, CA",
    "Laguna Beach, CA",
    "Orange County, CA",
  ],
  hours: [
    {
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
    x: "",
  },
  keywords: [
    "demolition Orange County",
    "Orange County demolition contractor",
    "junk removal Orange County",
    "dumpster rental Orange County",
    "residential demolition",
    "commercial demolition",
    "interior demolition",
    "concrete removal",
    "estate cleanout Orange County",
    "Tustin demolition",
    "Irvine demolition",
    "Balderas Demolition",
    "Abel Balderas",
    "C-21 licensed contractor",
  ],
};

/**
 * Build an absolute URL from an in-site path.
 */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. `/demolition`. */
  path: string;
  /** Optional: relative or absolute image path for OG/Twitter cards. */
  image?: string;
  imageAlt?: string;
  keywords?: readonly string[];
  /**
   * For blog/article pages. When provided, OpenGraph type becomes `article`
   * and the relevant article fields are emitted.
   */
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    authors?: readonly string[];
    section?: string;
    tags?: readonly string[];
  };
  /** When true, the page will be indexed as `noindex,nofollow`. */
  noIndex?: boolean;
};

/**
 * Helper for building per-page metadata that inherits site-wide defaults
 * (template, OG site name, Twitter card style, etc.) defined in the root
 * layout while filling in canonical URLs and OG/Twitter image data.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  keywords,
  article,
  noIndex,
}: PageMetadataInput): Metadata {
  const canonicalUrl = absoluteUrl(path);
  const ogImage = image ?? SITE.defaultOgImage;
  const ogAlt = imageAlt ?? SITE.defaultOgImageAlt;

  return {
    title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE.name,
      locale: SITE.locale,
      type: article ? "article" : "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
      ...(article
        ? {
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime,
            authors: article.authors ? [...article.authors] : undefined,
            section: article.section,
            tags: article.tags ? [...article.tags] : undefined,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      ...(SITE.twitterHandle.trim()
        ? { creator: SITE.twitterHandle.trim() }
        : {}),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/**
 * Schema.org `LocalBusiness` (specifically `GeneralContractor`) JSON-LD
 * for the entire business. Inject once site-wide.
 */
export function getLocalBusinessJsonLd() {
  const hasAddress = Object.values(SITE.address).some(
    (v) => typeof v === "string" && v.trim() !== "",
  );
  const hasGeo =
    SITE.geo.latitude != null &&
    SITE.geo.longitude != null &&
    !Number.isNaN(SITE.geo.latitude) &&
    !Number.isNaN(SITE.geo.longitude);
  const sameAs = Object.values(SITE.social).filter(
    (url) => typeof url === "string" && url.trim() !== "",
  );

  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "LocalBusiness"],
    "@id": `${SITE.url}#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: SITE.shortName,
    description: SITE.description,
    url: SITE.url,
    image: absoluteUrl(SITE.defaultOgImage),
    logo: absoluteUrl("/logo.svg"),
    priceRange: "$$",
    founder: { "@type": "Person", name: SITE.founder },
    areaServed: SITE.areasServed.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: SITE.hours,
    knowsAbout: [
      "Residential demolition",
      "Commercial demolition",
      "Interior demolition",
      "Concrete removal and hauling",
      "Junk removal",
      "Dumpster rental",
      "Estate cleanout",
      "CALGreen-compliant debris diversion",
    ],
  };

  const tel = SITE.telephone.trim();
  if (tel) base.telephone = tel;

  const mail = SITE.email.trim();
  if (mail) base.email = mail;

  const license = SITE.c21LicenseNumber.trim();
  if (license) {
    base.identifier = {
      "@type": "PropertyValue",
      name: "California C-21 contractor license number",
      value: license,
    };
  }

  if (hasAddress) {
    base.address = {
      "@type": "PostalAddress",
      ...SITE.address,
    };
  }

  if (hasGeo) {
    base.geo = {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    };
  }

  if (sameAs.length > 0) {
    base.sameAs = sameAs;
  }

  return base;
}

/**
 * Schema.org `Service` JSON-LD for an individual service / sub-service page.
 */
export function getServiceJsonLd(input: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(input.path)}#service`,
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    serviceType: input.serviceType ?? input.name,
    image: absoluteUrl(input.image ?? SITE.defaultOgImage),
    provider: { "@id": `${SITE.url}#business` },
    areaServed: SITE.areasServed.map((name) => ({
      "@type": "City",
      name,
    })),
    audience: {
      "@type": "Audience",
      audienceType: "Homeowners, contractors, property managers in Orange County, CA",
    },
  };
}

/**
 * Schema.org `BreadcrumbList` JSON-LD for navigational context.
 */
export function getBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * Schema.org `Article` JSON-LD for blog / resource posts.
 */
export function getArticleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt?: string;
  authorName: string;
  publishedDate: string;
  modifiedDate?: string;
  section?: string;
}) {
  const url = absoluteUrl(input.path);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: input.title,
    description: input.description,
    image: [absoluteUrl(input.image)],
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    datePublished: input.publishedDate,
    dateModified: input.modifiedDate ?? input.publishedDate,
    inLanguage: "en-US",
    articleSection: input.section,
    author: { "@type": "Person", name: input.authorName },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.svg"),
      },
    },
  };
}

type FaqJsonLdItem = { question: string; answer: string };

/**
 * Schema.org `FAQPage` JSON-LD for pages that include question/answer blocks.
 */
export function getFaqJsonLd(items: FaqJsonLdItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Tiny inline helper for embedding any JSON-LD object into a server component.
 *
 * Usage:
 *   <JsonLd data={getLocalBusinessJsonLd()} />
 */
export type JsonLdScriptProps = {
  /** A JSON-serializable schema.org object. */
  data: unknown;
  /** Optional script id for easier debugging in DevTools. */
  id?: string;
};
