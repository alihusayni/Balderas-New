import type { ReactNode } from "react";
import { SubHeading } from "@/components/sub-heading";
import { BodyText } from "@/components/ui/body-text";
import { cn } from "@/lib/utils";

type IconFeatureItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
  iconBoxClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
};

export function IconFeatureItem({
  icon,
  title,
  description,
  iconBoxClassName,
  titleClassName,
  descriptionClassName,
  className,
}: IconFeatureItemProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex w-full items-start gap-4 sm:gap-5">
        <div
          className={cn(
            "flex h-[54px] w-[54px] shrink-0 items-center justify-center bg-[var(--color-brand-orange)] px-[9px] pb-[15px] pt-[16px] sm:h-[58px] sm:w-[58px] sm:px-[10px] sm:pb-[16px] sm:pt-[17px] md:h-[62px] md:w-[62px] md:px-[11px] md:pb-[18px] md:pt-[19px] lg:h-[67px] lg:w-[67px] lg:px-[12px] lg:pb-[19px] lg:pt-[20px]",
            iconBoxClassName,
          )}
        >
          <div className="h-[27px] w-[31px] sm:h-[29px] sm:w-[34px] md:h-[31px] md:w-[36px] lg:h-[34px] lg:w-[39px]">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <SubHeading className={cn("text-[#0b0300]", titleClassName)}>
            {title}
          </SubHeading>
          <div className="mt-2 w-full">
            <BodyText className={descriptionClassName}>{description}</BodyText>
          </div>
        </div>
      </div>
    </div>
  );
}
