import { MEDIA, MEDIA_DOMAIN } from "@/lib/media-manifest";
import { bucketOrigin } from "@/lib/bucket";

// Server-only. This site reads ONLY its own bucket (named from its domain); the bucket host never reaches the browser.
const ORIGIN = bucketOrigin(MEDIA_DOMAIN);

export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(MEDIA).map((key) => ({ key }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ key: string }> }) {
  const { key } = await params;
  const type = MEDIA[key];
  if (!type) return new Response("Not found", { status: 404 });
  const up = await fetch(`${ORIGIN}/${key}`);
  if (!up.ok || !up.body) return new Response("Not found", { status: 404 });
  return new Response(up.body, {
    headers: { "Content-Type": type, "Cache-Control": "public, max-age=31536000, immutable", "X-Content-Type-Options": "nosniff" },
  });
}
