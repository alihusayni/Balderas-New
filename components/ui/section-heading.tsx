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
        "[font-family:var(--font-anton)] text-[26px] font-normal leading-[1.05] tracking-[-0.02em] text-black sm:text-[32px] md:text-[40px] md:leading-[1.05] lg:text-[54px]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
