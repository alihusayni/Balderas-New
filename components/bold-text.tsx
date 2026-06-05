import { cn } from "@/lib/utils";

type BoldTextProps = {
  children: React.ReactNode;
  className?: string;
  mobileChildren?: React.ReactNode;
  mobileClassName?: string;
};

export function BoldText({
  children,
  className,
  mobileChildren,
  mobileClassName,
}: BoldTextProps) {
  return (
    <p
      className={cn(
        "[font-family:var(--font-anton)] text-[16px] font-normal leading-[24px] tracking-[0em] sm:text-[17px] sm:leading-[25px] md:text-[18px] md:leading-[26px] lg:text-[22px] lg:leading-[30px]",
        className,
      )}
    >
      {mobileChildren ? (
        <>
          <span className={cn("lg:hidden", mobileClassName)}>{mobileChildren}</span>
          <span className="hidden lg:inline">{children}</span>
        </>
      ) : (
        children
      )}
    </p>
  );
}
