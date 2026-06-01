import { cn } from "@/lib/utils";

type HeroSubheadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function HeroSubheading({ children, className }: HeroSubheadingProps) {
  return (
    <p
      className={cn(
        "font-maison mt-4 max-w-[95%] text-[4.2vw] font-medium leading-[1.38] text-white/90 sm:text-lg sm:leading-[1.36] md:max-w-[680px] md:text-2xl md:leading-[1.34] lg:max-w-[760px] lg:text-4xl lg:leading-[1.32]",
        className,
      )}
    >
      {children}
    </p>
  );
}
