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
        "[font-family:var(--font-anton)] text-lg font-normal leading-2xl tracking-[0em] sm:text-xl sm:leading-3xl md:text-2xl md:leading-4xl lg:text-5xl lg:leading-8xl",
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
