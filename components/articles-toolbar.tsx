"use client";

import { cn } from "@/lib/utils";

type Category = {
  id: string;
  label: string;
};

type ArticlesToolbarProps = {
  categories: Category[];
  activeCategoryId: string;
  onCategoryChange: (id: string) => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
  className?: string;
};

export function ArticlesToolbar({
  categories,
  activeCategoryId,
  onCategoryChange,
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search specific article",
  className,
}: ArticlesToolbarProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12",
        className,
      )}
    >
      <nav
        aria-label="Article categories"
        className="flex flex-wrap items-center gap-x-8 gap-y-3 sm:gap-x-10"
      >
        {categories.map((category) => {
          const isActive = activeCategoryId === category.id;
          return (
            <button
              type="button"
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "[font-family:var(--font-anton)] cursor-pointer text-[15px] font-normal leading-[24px] tracking-[-0.02em] transition-colors hover:text-[var(--color-brand-orange)] sm:text-[16px] sm:leading-[26px] md:text-[17px] md:leading-[27px] lg:text-[18px] lg:leading-[28px]",
                isActive ? "text-[#0b0300]" : "text-[#4F5B79]",
              )}
            >
              {category.label}
            </button>
          );
        })}
      </nav>

      <label className="relative flex h-[52px] w-full items-center justify-between gap-2 border border-[#C4C8D3] bg-white px-3 sm:h-[56px] sm:gap-3 md:h-[60px] lg:w-[307px]">
        <span className="sr-only">Search articles</span>
        <input
          type="search"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={searchPlaceholder}
          className="font-maison h-full flex-1 border-none bg-transparent text-[15px] font-normal leading-[21px] tracking-[-0.02em] text-[#0b0300] placeholder:text-[#4F5B79] focus:outline-none sm:text-[16px] sm:leading-[22px] md:text-[18px]"
        />

        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0 text-[#5F6368] sm:h-6 sm:w-6"
          fill="none"
        >
          <path
            d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm10 2-4.35-4.35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </label>
    </div>
  );
}
