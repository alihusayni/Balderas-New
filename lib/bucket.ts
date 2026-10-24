/**
 * One S3 bucket per site. The name is derived from the site's domain, so no per-project env var is needed.
 * Mirror of ~/.gemini/config/site-bucket.js `bucketOf`.
 * Server-only: never import from client components, and never print this host in HTML, metadata or JSON-LD.
 */
export const bucketName = (domain: string): string =>
  domain.toLowerCase().replace(/^www\./, "").replace(/\.[a-z]{2,}$/, "").replace(/[^a-z0-9-]/g, "").slice(0, 63);
export const bucketOrigin = (domain: string, region = "us-east-1"): string => `https://${bucketName(domain)}.s3.${region}.amazonaws.com`;
