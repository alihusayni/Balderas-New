import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Demolition OC",
  description: "Sorry, we can't find the page you are looking for.",
};

export default function NotFound() {
  return (
    <main className="mt-[-130px] flex min-h-screen items-center justify-center bg-[#06182C] px-4 pt-[160px] pb-16 text-(--color-brand-white) sm:px-6 sm:pt-[180px] sm:pb-24 lg:px-10 lg:pt-[200px] lg:pb-32">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
        <h1
          className="[font-family:var(--font-anton)] text-[clamp(6rem,30vw,15.625rem)] font-normal leading-[0.95] tracking-[-0.04em] uppercase"
          aria-label="404 page not found"
        >
          404
        </h1>

        <p className="font-maison mt-2 text-[clamp(1.75rem,8vw,4rem)] font-normal leading-[1] tracking-[-0.02em] text-white">
          Page not found
        </p>

        <p className="font-maison mt-4 max-w-[900px] text-[clamp(1rem,4.8vw,2.5rem)] font-normal leading-[1.2] tracking-[-0.02em] text-white/80">
          Sorry, we can&apos;t find the page you are looking for
        </p>

        <Link
          href="/"
          className="font-maison mt-8 inline-flex h-[64px] w-full max-w-[426px] items-center justify-center gap-[10px] bg-(--color-brand-orange) px-6 text-[clamp(1rem,4.5vw,1.5rem)] font-bold leading-[1] tracking-[-0.02em] text-(--color-brand-white) transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-brand-orange) focus-visible:ring-offset-2 focus-visible:ring-offset-[#06182C] sm:mt-10 sm:h-[72px] sm:px-8 md:h-[80px]"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
