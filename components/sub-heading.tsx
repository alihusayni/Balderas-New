import { cn } from "@/lib/utils";

type SubHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function SubHeading({ children, className }: SubHeadingProps) {
  return (
    <h4
      className={cn(
        "[font-family:var(--font-maison)] text-[20px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[22px] sm:leading-[1.05] md:text-[24px] md:leading-[1.02] lg:text-[32px] lg:leading-[1]",
        className,
      )}
    >
      {children}
    </h4>
  );
}
