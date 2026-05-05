import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the gate page, gate API, static assets, and metadata files through
  if (
    pathname === "/gate" ||
    pathname.startsWith("/api/gate") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname === "/manifest.webmanifest" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|css|js|woff|woff2|ttf|json)$/)
  ) {
    return NextResponse.next();
  }

  // Check for the auth cookie
  const authCookie = request.cookies.get("balderas_demo_auth");
  if (authCookie?.value === "authenticated") {
    return NextResponse.next();
  }

  // Redirect to the gate page
  const gateUrl = new URL("/gate", request.url);
  gateUrl.searchParams.set("from", pathname);
  return NextResponse.redirect(gateUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
