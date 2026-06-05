import { cn } from "@/lib/utils";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function Heading({ children, className }: HeadingProps) {
  return (
    <h3
      className={cn(
        "[font-family:var(--font-anton)] text-[26px] font-normal leading-[1.2] tracking-[-0.02em] sm:text-[28px] sm:leading-[1.2] md:text-[30px] md:leading-[1.2] lg:text-[40px] lg:leading-[50px]",
        className,
      )}
    >
      {children}
    </h3>
  );
}
