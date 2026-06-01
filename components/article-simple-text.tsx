import { cn } from "@/lib/utils";

type ArticleSimpleTextProps = {
  children: React.ReactNode;
  className?: string;
  /**
   * `meta` — date / read time (medium).
   * `emphasis` — author name next to avatar (bold).
   */
  variant?: "meta" | "emphasis";
  /** Use `span` when inline inside a flex row (e.g. author). */
  as?: "p" | "span";
};

const variantClass: Record<
  NonNullable<ArticleSimpleTextProps["variant"]>,
  string
> = {
  meta: "font-maison text-sm font-medium leading-sm tracking-[-0.02em] text-[#4F5B79] sm:text-base sm:leading-base lg:text-2xl lg:leading-lg",
  emphasis:
    "font-maison text-sm font-bold leading-sm tracking-[-0.02em] text-[#4F5B79] sm:text-base sm:leading-base lg:text-2xl lg:leading-lg",
};

/** Maison supporting copy for article detail (meta line, author). */
export function ArticleSimpleText({
  children,
  className,
  variant = "meta",
  as = "p",
}: ArticleSimpleTextProps) {
  const Component = as;
  return (
    <Component className={cn(variantClass[variant], className)}>
      {children}
    </Component>
  );
}
