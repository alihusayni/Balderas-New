import type { JsonLdScriptProps } from "@/lib/seo";

/**
 * Renders JSON-LD structured data inside a `<script type="application/ld+json">`
 * tag. Safe to use in server components and inside the document `<body>`;
 * Google reads structured data from anywhere in the rendered HTML.
 */
export function JsonLd({ data, id }: JsonLdScriptProps) {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
