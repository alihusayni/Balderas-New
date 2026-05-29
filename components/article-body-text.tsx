import { cn } from "@/lib/utils";

type ArticleBodyTextProps = {
  children: React.ReactNode;
  className?: string;
  /** Book (400) or Bold (700); same responsive scale as `SimpleText`. */
  variant?: "book" | "bold";
};

/** Shared Maison body scale (matches `SimpleText`) for `p`, `li`, quote attribution. */
export const articleBodyTextBaseClassName =
  "[font-family:var(--font-maison)] text-base leading-xl tracking-[-0.02em] sm:text-lg sm:leading-3xl md:text-xl md:leading-4xl lg:text-4xl lg:leading-7xl";

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
