import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#06182C",
    theme_color: "#dc5a31",
    icons: [
      { src: "/favicon.ico?v=6", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { src: "/icon.svg?v=6", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
