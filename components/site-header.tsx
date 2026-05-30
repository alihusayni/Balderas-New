"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Fragment,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { ARTICLES } from "@/lib/articles";
import { cn } from "@/lib/utils";

type NavChild = { label: string; href: string };

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

const MAIN_NAV: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about-us" },
  {
    label: "DEMOLITION",
    href: "/demolition",
    children: [
      { label: "Residential Demolition", href: "/demolition/residential" },
      { label: "Interior Demolition", href: "/demolition/residential/interior" },
      { label: "Commercial Demolition", href: "/demolition/commercial" },
      {
        label: "Concrete Removal & Hauling",
        href: "/demolition/concrete-removal-hauling",
      },
    ],
  },
  {
    label: "JUNK REMOVAL",
    href: "/junk-removal",
    children: [
      { label: "Furniture Removal", href: "/junk-removal/furniture-removal" },
      { label: "Same Day Junk Removal", href: "/junk-removal/same-day" },
      { label: "Estate Cleanout", href: "/junk-removal/estate-cleanout" },
    ],
  },
  {
    label: "DUMPSTER RENTAL",
    href: "/dumpster-rental",
    children: [
      { label: "Waste Disposal", href: "/dumpster-rental/waste-disposal" },
      { label: "Junk Hauling", href: "/dumpster-rental/junk-hauling" },
    ],
  },
  { label: "RESOURCES", href: "/resources" },
  { label: "CONTACT", href: "/#contact" },
];

const CONTACT_NAV =
  MAIN_NAV.find((item) => item.href === "/#contact") ?? MAIN_NAV[MAIN_NAV.length - 1];

/** Keep mobile top-level list manageable: everything except CONTACT (shown as CTA). */
const MOBILE_MAIN_NAV = MAIN_NAV.filter((item) => item.href !== CONTACT_NAV.href);

const DROPDOWN_MAX_ROWS = 8;

const DROPDOWN_CLOSE_MS = 220;

function chunkNavColumns<T>(items: T[], maxPerColumn: number): T[][] {
  const cols: T[][] = [];
  for (let i = 0; i < items.length; i += maxPerColumn) {
    cols.push(items.slice(i, i + maxPerColumn));
  }
  return cols;
}

function Chevron({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg
      className={cn(
        "size-4 shrink-0 transition-transform duration-200 ease-out",
        open && "-rotate-180",
        className,
      )}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const mobileNavId = useId();
  const headerRef = useRef<HTMLElement>(null);

  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  /** Avoid hydration mismatches: pathname-driven "active" styles apply only after mount. */
  const [navMatched, setNavMatched] = useState(false);
  const closeDropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const resourceDetailMatch = pathname.match(/^\/resources\/([^/]+)$/);
  const resourceSlug = resourceDetailMatch?.[1] ?? null;
  const isKnownArticleDetail =
    (!!resourceSlug &&
      ARTICLES.some((article) => article.slug === resourceSlug)) ||
    ARTICLES.some((article) => article.canonicalPath === pathname);
  const isKnownPath =
    pathname === "/" ||
    pathname === "/about-us" ||
    pathname === "/#contact" ||
    pathname === "/resources" ||
    pathname === "/demolition" ||
    pathname === "/demolition/residential" ||
    pathname === "/demolition/residential/interior" ||
    pathname === "/demolition/commercial" ||
    pathname === "/demolition/concrete-removal-hauling" ||
    pathname === "/junk-removal" ||
    pathname === "/junk-removal/furniture-removal" ||
    pathname === "/junk-removal/same-day" ||
    pathname === "/junk-removal/estate-cleanout" ||
    pathname === "/dumpster-rental" ||
    pathname === "/dumpster-rental/waste-disposal" ||
    pathname === "/dumpster-rental/junk-hauling" ||
    pathname === "/faq" ||
    pathname === "/reviews" ||
    isKnownArticleDetail;
  const isNotFoundRoute = !isKnownPath;
  const isArticleDetail = isKnownArticleDetail;

  const cancelScheduledDropdownClose = useCallback(() => {
    if (closeDropdownTimerRef.current !== null) {
      clearTimeout(closeDropdownTimerRef.current);
      closeDropdownTimerRef.current = null;
    }
  }, []);

  const scheduleDropdownClose = useCallback(() => {
    cancelScheduledDropdownClose();
    closeDropdownTimerRef.current = setTimeout(() => {
      setOpenKey(null);
      closeDropdownTimerRef.current = null;
    }, DROPDOWN_CLOSE_MS);
  }, [cancelScheduledDropdownClose]);

  const openDesktopDropdown = useCallback(
    (key: string) => {
      cancelScheduledDropdownClose();
      setOpenKey(key);
    },
    [cancelScheduledDropdownClose],
  );

  const closeDropdowns = useCallback(() => {
    cancelScheduledDropdownClose();
    setOpenKey(null);
  }, [cancelScheduledDropdownClose]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDropdowns();
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [closeDropdowns]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) closeDropdowns();
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [closeDropdowns]);

  useEffect(() => {
    return () => cancelScheduledDropdownClose();
  }, [cancelScheduledDropdownClose]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setNavMatched(true);
  }, []);

  const isActive = (href: string) => {
    if (!navMatched) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isNavItemActive = (item: NavItem) => {
    if (!navMatched) return false;
    if (isActive(item.href)) return true;
    if (!item.children?.length) return false;
    if (
      item.label === "SERVICES" &&
      (pathname === "/services" ||
        pathname.startsWith("/services/") ||
        pathname.startsWith("/junk-removal"))
    ) {
      return true;
    }
    return item.children.some((child) => isActive(child.href));
  };

  const handleGoBack = () => {
    router.back();
  };

  const accent = "text-[var(--color-brand-orange)]";

  const onNavKeyDown = (
    e: ReactKeyboardEvent,
    key: string,
    hasChildren: boolean,
  ) => {
    if (!hasChildren) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenKey((k) => (k === key ? null : key));
    }
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "z-50 [font-family:var(--font-anton)] font-normal",
        isNotFoundRoute
          ? "relative bg-[#06182C]"
          : isArticleDetail
            ? "relative bg-[#06182C]"
            : "absolute inset-x-0 top-0 bg-transparent",
      )}
    >
      <div className="mx-auto flex min-w-0 max-w-container items-center justify-between gap-2 px-6 py-3 sm:gap-4 sm:py-4 lg:px-10">
        <Link
          href="/"
          className="relative flex h-[52px] w-[118px] shrink-0 items-center transition-opacity hover:opacity-90 sm:h-[72px] sm:w-[158px] lg:h-24 lg:w-[180px]"
          aria-label="Go to homepage"
        >
          <Image
            src="/logo.svg"
            alt="Balderas Demolition Inc."
            fill
            className="object-contain object-left"
            sizes="(max-width: 640px) 120px, 200px"

          />
        </Link>

        {isArticleDetail ? (
          <div className="flex min-w-0 flex-1 items-center justify-end gap-1.5 sm:gap-3">
            <button
              type="button"
              onClick={handleGoBack}
              className="font-maison inline-flex h-9 max-w-[min(100%,10rem)] shrink items-center justify-center bg-white px-2.5 text-[13px] font-bold leading-none tracking-[-0.02em] text-[#0b0300] transition-colors hover:bg-[var(--color-brand-orange)] hover:text-white sm:max-w-none sm:h-[48px] sm:min-w-[120px] sm:px-5 sm:text-[17px] md:min-w-[160px] md:text-[19px] lg:h-[56px] lg:min-w-[200px] lg:px-6 lg:text-[21px] xl:h-[64px] xl:min-w-[220px] xl:text-[22px]"
            >
              Go Back
            </button>
            <button
              type="button"
              className="inline-flex shrink-0 items-center justify-center rounded-md p-2 text-[var(--color-brand-white)] transition-colors hover:bg-white/10 hover:text-[var(--color-brand-orange)] xl:hidden"
              aria-expanded={mobileOpen}
              aria-controls={mobileNavId}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? (
                <svg
                  className="size-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="size-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        ) : (
          <>
            <nav
              className="hidden flex-1 items-center justify-end gap-6 text-[15px] font-normal tracking-wide text-[var(--color-brand-white)] lg:gap-8 xl:flex"
              aria-label="Main"
            >
              {MAIN_NAV.map((item) => {
                const key = item.label;
                const hasChildren = Boolean(item.children?.length);
                const open = openKey === key;
                const active = isNavItemActive(item);

                if (!hasChildren) {
                  return (
                    <Link
                      key={key}
                      href={item.href}
                      className={cn(
                        "rounded px-0 py-1 transition-colors hover:text-[var(--color-brand-orange)]",
                        active && accent,
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                }

                const dropdownColumns = chunkNavColumns(
                  item.children!,
                  DROPDOWN_MAX_ROWS,
                );

                return (
                  <div
                    key={key}
                    className="relative py-2"
                    onMouseEnter={() => openDesktopDropdown(key)}
                    onMouseLeave={scheduleDropdownClose}
                  >
                    <div className="flex items-center gap-0.5">
                      <Link
                        href={item.href}
                        className={cn(
                          "rounded px-0 py-1 transition-colors hover:text-[var(--color-brand-orange)]",
                          active && accent,
                        )}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        className={cn(
                          "flex items-center rounded p-1 transition-colors duration-200",
                          open || active
                            ? accent
                            : "text-[var(--color-brand-white)] hover:text-[var(--color-brand-orange)]/90",
                        )}
                        aria-expanded={open}
                        aria-haspopup="true"
                        aria-label={`${item.label} submenu`}
                        onClick={() =>
                          setOpenKey((k) => (k === key ? null : key))
                        }
                        onKeyDown={(e) => onNavKeyDown(e, key, hasChildren)}
                      >
                        <Chevron open={open} />
                      </button>
                    </div>

                    <div
                      className={cn(
                        "absolute left-1/2 top-full z-50 w-max min-w-[16rem] -translate-x-1/2 pt-3 transition-all duration-200 ease-out",
                        open
                          ? "pointer-events-auto visible translate-y-0 opacity-100"
                          : "pointer-events-none invisible translate-y-2 opacity-0",
                      )}
                      onMouseEnter={() => openDesktopDropdown(key)}
                      role="region"
                      aria-label={`${item.label} links`}
                    >
                      <div className="rounded-lg border border-white/10 bg-[#06182C] p-4 shadow-2xl shadow-black/50">
                        <div className="flex items-stretch">
                          {dropdownColumns.map((chunk, colIndex) => (
                            <Fragment key={colIndex}>
                              {colIndex > 0 && (
                                <div
                                  className="mx-3 w-px shrink-0 self-stretch bg-white/15"
                                  aria-hidden
                                />
                              )}
                              <ul className="flex min-w-[12rem] flex-col gap-0.5">
                                {chunk.map((sub) => {
                                  const subActive = isActive(sub.href);
                                  return (
                                    <li key={sub.href}>
                                      <Link
                                        href={sub.href}
                                        className={cn(
                                          "relative flex items-center rounded-md py-2 pl-5 pr-3 font-maison text-[14px] font-semibold leading-snug transition-colors duration-150",
                                          subActive
                                            ? accent
                                            : "text-white/90 hover:bg-white/5 hover:text-[var(--color-brand-orange)]",
                                        )}
                                      >
                                        {subActive ? (
                                          <span
                                            className="absolute left-2 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-[var(--color-brand-orange)]"
                                            aria-hidden
                                          />
                                        ) : null}
                                        {sub.label}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-brand-white)] transition-colors hover:bg-white/10 hover:text-[var(--color-brand-orange)] xl:hidden"
              aria-expanded={mobileOpen}
              aria-controls={mobileNavId}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? (
                <svg
                  className="size-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="size-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </>
        )}
      </div>

      <div
        id={mobileNavId}
        className={cn(
          "fixed inset-0 z-[100] xl:hidden xl:pointer-events-none",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/65 transition-opacity duration-300 ease-in-out",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMobileOpen(false)}
        />

        <nav
          className={cn(
            "absolute inset-y-0 right-0 flex w-[300px] max-w-[85vw] flex-col border-l border-white/10 bg-[#06182C] shadow-2xl transition-transform duration-300 ease-in-out",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
          aria-label="Mobile main"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-6 py-5">
              <Link
                href="/"
                className="relative flex h-16 w-[200px] shrink-0 items-center"
                aria-label="Go to homepage"
                onClick={() => setMobileOpen(false)}
              >
                <Image
                  src="/logo.svg"
                  alt="Balderas Demolition Inc."
                  fill
                  className="object-contain object-left"
                  sizes="184px"
                />
              </Link>
              <button
                type="button"
                className="inline-flex rounded-md p-2 text-[var(--color-brand-white)] transition-colors hover:bg-white/10 hover:text-[var(--color-brand-orange)]"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <svg
                  className="size-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto py-2">
            {MOBILE_MAIN_NAV.map((item) => {
                const key = item.label;
                const hasChildren = Boolean(item.children?.length);
                const expanded = openKey === `m-${key}`;
                const active = isNavItemActive(item);

                if (!hasChildren) {
                  return (
                    <div
                      key={key}
                      className={cn(
                        "relative flex w-full items-center transition-colors",
                        active ? "bg-white/5" : "hover:bg-white/5",
                      )}
                    >
                      {active ? (
                        <span className="absolute left-0 top-1/2 h-[22px] w-1 -translate-y-1/2 rounded-r-md bg-[var(--color-brand-orange)]" />
                      ) : null}
                      <Link
                        href={item.href}
                        className={cn(
                          "flex-1 py-3.5 pl-6 pr-4 text-[15px] tracking-wide transition-colors",
                          active
                            ? accent
                            : "text-[var(--color-brand-white)] hover:text-[var(--color-brand-orange)]",
                        )}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </div>
                  );
                }

                const isHighlighted = active || expanded;

                return (
                  <div key={key} className="flex flex-col">
                    <div
                      className={cn(
                        "relative flex w-full items-center transition-colors",
                        isHighlighted ? "bg-white/5" : "hover:bg-white/5",
                      )}
                    >
                      {isHighlighted ? (
                        <span className="absolute left-0 top-1/2 h-[22px] w-1 -translate-y-1/2 rounded-r-md bg-[var(--color-brand-orange)]" />
                      ) : null}
                      <Link
                        href={item.href}
                        className={cn(
                          "flex-1 py-3.5 pl-6 pr-2 text-[15px] tracking-wide transition-colors",
                          isHighlighted
                            ? accent
                            : "text-[var(--color-brand-white)] hover:text-[var(--color-brand-orange)]",
                        )}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        className={cn(
                          "flex items-center justify-center px-4 py-3.5 transition-colors",
                          isHighlighted
                            ? accent
                            : "text-[var(--color-brand-white)] hover:text-[var(--color-brand-orange)]",
                        )}
                        aria-expanded={expanded}
                        aria-label={`Expand ${item.label} submenu`}
                        onClick={() =>
                          setOpenKey((k) =>
                            k === `m-${key}` ? null : `m-${key}`,
                          )
                        }
                      >
                        <Chevron open={expanded} />
                      </button>
                    </div>

                    <div
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-200 ease-out",
                        expanded
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="mb-2 ml-6 mr-4 mt-1 space-y-0.5 border-l border-white/15 py-1 pl-2">
                          {item.children!.map((sub) => {
                            const subActive = isActive(sub.href);
                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={cn(
                                  "relative flex items-center rounded-md px-3 py-2.5 font-maison text-[14px] transition-all duration-150",
                                  subActive
                                    ? cn("font-bold", accent)
                                    : "text-white/85 hover:text-[var(--color-brand-orange)]",
                                )}
                                onClick={() => setMobileOpen(false)}
                              >
                                {subActive ? (
                                  <span className="absolute left-[-11px] top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-[var(--color-brand-orange)]" />
                                ) : null}
                                <span>{sub.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
            })}
          </div>

          <div className="shrink-0 border-t border-white/10 px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <Link
              href={CONTACT_NAV.href}
              className={cn(
                "font-maison flex w-full items-center justify-center bg-[var(--color-brand-orange)] px-4 py-3.5 text-[15px] font-bold uppercase tracking-[0.06em] text-[#0b0300] transition-[filter] hover:brightness-110",
                isActive(CONTACT_NAV.href) && "ring-2 ring-inset ring-black/20",
              )}
              onClick={() => setMobileOpen(false)}
            >
              {CONTACT_NAV.label}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
