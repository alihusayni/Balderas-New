import { cn } from "@/lib/utils";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function Heading({ children, className }: HeadingProps) {
  return (
    <h3
      className={cn(
        "[font-family:var(--font-anton)] text-7xl font-normal leading-[1.2] tracking-[-0.02em] sm:text-8xl sm:leading-[1.2] md:text-9xl md:leading-[1.2] lg:text-11xl lg:leading-11xl",
        className,
      )}
    >
      {children}
    </h3>
  );
}
