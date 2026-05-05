import { antonDisplaySizesClassName } from "@/lib/typography-display";
import { cn } from "@/lib/utils";

type MainHeadingProps = {
  children: React.ReactNode;
  className?: string;
  /** Default `h2` for section titles; use `h1` for the page title when appropriate. */
  as?: "h1" | "h2";
};

export function MainHeading({
  children,
  className,
  as: Tag = "h2",
}: MainHeadingProps) {
  return (
    <Tag
      className={cn(
        "[font-family:var(--font-anton)] w-full max-w-none min-w-0 tracking-[-0.03em]",
        antonDisplaySizesClassName,
        className,
      )}
    >
      {children}
    </Tag>
  );
}
