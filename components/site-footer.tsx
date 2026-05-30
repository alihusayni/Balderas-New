import Image from "next/image";
import Link from "next/link";
import { SimpleText } from "@/components/simple-text";

type NavItem = {
  label: string;
  href: string;
};

const FOOTER_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Demolition", href: "/demolition" },
  { label: "Junk Removal", href: "/junk-removal" },
  { label: "Dumpster Rental", href: "/dumpster-rental" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/#contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-[#020a14] text-(--color-brand-white)">
      <Image
        src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/footer/bg.webp"
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="-z-10 object-cover object-center select-none pointer-events-none"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[353px] w-full max-w-[1554px] flex-col justify-between gap-8 px-10 py-12 lg:px-14 lg:py-16">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/"
            className="relative flex h-14 w-[140px] shrink-0 items-center transition-opacity hover:opacity-90"
            aria-label="Go to homepage"
          >
            <Image
              src="/logo.svg"
              alt="Balderas Demolition Inc."
              fill
              sizes="160px"
              className="object-contain object-left"
            />
          </Link>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-maison text-[18px] font-medium leading-[22px] tracking-[-0.02em] text-white"
          >
            {FOOTER_NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-(--color-brand-orange)"
              >
                {item.label}
              </Link>
            ))}
          </nav>

        </div>

        <div className="flex flex-col items-center gap-4 text-center font-maison text-[15px] font-medium leading-[22px] tracking-[-0.02em] text-white/70 sm:flex-row sm:justify-center sm:gap-8 sm:text-left">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[var(--color-brand-orange)]"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>11431 Westminster Ave, Garden Grove, CA 92843</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[var(--color-brand-orange)]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>Mon – Sat: 8:00 AM – 7:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[var(--color-brand-orange)]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <a href="tel:+17143408108" className="transition-colors hover:text-white">(714) 340-8108</a>
          </div>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-3 font-maison text-[18px] font-medium leading-[22px] tracking-[-0.02em] text-white sm:flex-row">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <Link
              href="/terms"
              className="transition-colors hover:text-(--color-brand-orange)"
            >
              Terms of use
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-(--color-brand-orange)"
            >
              Privacy &amp; Environmental Policy
            </Link>
          </div>
          <SimpleText className="text-[14px] font-medium leading-[22px] tracking-[-0.02em] text-white/80 sm:text-[16px]">
            Copyright &copy; {year} Balderas Demolition Inc. All Rights
            Reserved. Powered by{" "}
            <a
              href="https://www.toporganicleads.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-white underline underline-offset-2 transition-colors hover:text-(--color-brand-orange)"
            >
              Top Organic Leads
            </a>
            {" "}and{" "}
            <a
              href="https://www.despora.ai"
              target="_blank"
              rel="noreferrer noopener"
              className="text-white underline underline-offset-2 transition-colors hover:text-(--color-brand-orange)"
            >
              Despora
            </a>
            .
          </SimpleText>
        </div>
      </div>
    </footer>
  );
}
