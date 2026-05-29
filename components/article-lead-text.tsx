import { cn } from "@/lib/utils";

type ArticleLeadTextProps = {
  children: React.ReactNode;
  className?: string;
  /**
   * Book (400) or Bold (700). Maison Neue: 32px, line-height 100%, letter-spacing -2%.
   */
  variant?: "book" | "bold";
};

/** Shared scale for article body copy under headings (blog). */
export const articleLeadTextBaseClassName =
  "[font-family:var(--font-maison)] text-10xl leading-[1] tracking-[-0.02em] text-[#0b0300] break-words";

/** Paragraph-style wrapper; use `articleLeadTextBaseClassName` for `li` / custom nodes. */
export function ArticleLeadText({
  children,
  className,
  variant = "book",
}: ArticleLeadTextProps) {
  return (
    <p
      className={cn(
        articleLeadTextBaseClassName,
        variant === "bold" ? "font-bold" : "font-normal",
        className,
      )}
    >
      {children}
    </p>
  );
}
