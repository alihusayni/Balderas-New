import { antonDisplaySizesClassName } from "@/lib/typography-display";
import { cn } from "@/lib/utils";

type HeroHeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
};

export function HeroHeading({ children, className, as: Tag = "h1" }: HeroHeadingProps) {
  return (
    <Tag
      className={cn(
        "[font-family:var(--font-anton)] w-full max-w-none min-w-0",
        antonDisplaySizesClassName,
        className,
      )}
    >
      {children}
    </Tag>
  );
}
