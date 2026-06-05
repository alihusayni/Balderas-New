import { SimpleText } from "@/components/simple-text";
import { cn } from "@/lib/utils";

type SectionSubheadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionSubheading({
  children,
  className,
}: SectionSubheadingProps) {
  return (
    <SimpleText
      className={cn(
        "mt-3 font-semibold leading-[1.45] text-[#1f1f1f] sm:text-[15px] md:mt-4 md:text-base lg:text-[17px]",
        className,
      )}
    >
      {children}
    </SimpleText>
  );
}
