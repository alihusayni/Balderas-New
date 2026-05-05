import { BoldText } from "@/components/bold-text";
import { MainHeading } from "@/components/main-heading";
import { cn } from "@/lib/utils";

type SplitHeroTextProps = {
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  leftWidthClassName?: string;
  rightWidthClassName?: string;
  rightTopOffsetClassName?: string;
};

export function SplitHeroText({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  leftWidthClassName = "xl:max-w-[659px] 2xl:w-[659px]",
  rightWidthClassName = "xl:max-w-[404px] 2xl:w-[404px]",
  rightTopOffsetClassName = "xl:pt-[90px]",
}: SplitHeroTextProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between xl:gap-10",
        className,
      )}
    >
      <div className={cn("w-full", leftWidthClassName)}>
        <div className={cn("w-full", leftWidthClassName, "xl:h-[210px]")}>
          <MainHeading className={titleClassName}>{title}</MainHeading>
        </div>
      </div>

      <div className={cn("w-full", rightWidthClassName, rightTopOffsetClassName)}>
        <div className={cn("w-full", rightWidthClassName, "xl:h-[120px]")}>
          <BoldText className={descriptionClassName}>{description}</BoldText>
        </div>
      </div>
    </div>
  );
}
