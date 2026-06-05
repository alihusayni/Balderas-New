import { cn } from "@/lib/utils";

type ArticleBodyTextProps = {
  children: React.ReactNode;
  className?: string;
  /** Book (400) or Bold (700); same responsive scale as `SimpleText`. */
  variant?: "book" | "bold";
};

/** Shared Maison body scale (matches `SimpleText`) for `p`, `li`, quote attribution. */
export const articleBodyTextBaseClassName =
  "[font-family:var(--font-maison)] text-[15px] leading-[23px] tracking-[-0.02em] sm:text-[16px] sm:leading-[25px] md:text-[17px] md:leading-[26px] lg:text-[20px] lg:leading-[29px]";

const baseClassName = articleBodyTextBaseClassName;

export function ArticleBodyText({
  children,
  className,
  variant = "book",
}: ArticleBodyTextProps) {
  return (
    <p
      className={cn(
        baseClassName,
        variant === "bold" ? "font-bold" : "font-normal",
        className,
      )}
    >
      {children}
    </p>
  );
}
