import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
};

export function SectionHeading({ children, className, as: Tag = "h2" }: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "[font-family:var(--font-anton)] text-7xl font-normal leading-[1.05] tracking-[-0.02em] text-black sm:text-10xl md:text-11xl md:leading-[1.05] lg:text-14xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
