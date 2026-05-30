import { cn } from "@/lib/utils";

type SimpleTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function SimpleText({ children, className }: SimpleTextProps) {
  return (
    <p
      className={cn(
        "[font-family:var(--font-maison)] text-[15px] font-normal leading-[23px] tracking-[-0.02em] sm:text-[16px] sm:leading-[25px] md:text-[17px] md:leading-[26px] lg:text-[20px] lg:leading-[29px]",
        className,
      )}
    >
      {children}
    </p>
  );
}
