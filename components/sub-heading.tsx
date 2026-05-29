import { cn } from "@/lib/utils";

type SubHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function SubHeading({ children, className }: SubHeadingProps) {
  return (
    <h4
      className={cn(
        "[font-family:var(--font-maison)] text-4xl font-bold leading-[1.1] tracking-[-0.03em] sm:text-5xl sm:leading-[1.05] md:text-6xl md:leading-[1.02] lg:text-10xl lg:leading-[1]",
        className,
      )}
    >
      {children}
    </h4>
  );
}
