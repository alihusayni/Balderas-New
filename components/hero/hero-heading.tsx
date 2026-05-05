import { antonDisplaySizesClassName } from "@/lib/typography-display";
import { cn } from "@/lib/utils";

type HeroHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function HeroHeading({ children, className }: HeroHeadingProps) {
  return (
    <h1
      className={cn(
        "[font-family:var(--font-anton)] w-full max-w-none min-w-0",
        antonDisplaySizesClassName,
        className,
      )}
    >
      {children}
    </h1>
  );
}
