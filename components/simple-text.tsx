import { cn } from "@/lib/utils";

type SimpleTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function SimpleText({ children, className }: SimpleTextProps) {
  return (
    <p
      className={cn(
        "[font-family:var(--font-maison)] text-base font-normal leading-xl tracking-[-0.02em] sm:text-lg sm:leading-3xl md:text-xl md:leading-4xl lg:text-4xl lg:leading-7xl",
        className,
      )}
    >
      {children}
    </p>
  );
}
