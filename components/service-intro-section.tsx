import { BoldText } from "@/components/bold-text";
import { MainHeading } from "@/components/main-heading";

type ServiceIntroSectionProps = {
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  mobileDescription?: string;
  mobileDescriptionClassName?: string;
};

export function ServiceIntroSection({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  mobileDescription,
  mobileDescriptionClassName,
}: ServiceIntroSectionProps) {
  return (
    <div
      className={`flex flex-col justify-between gap-10 xl:flex-row xl:items-start ${className ?? ""}`.trim()}
    >
      <div className="w-full xl:w-[627px]">
        <div className="w-full lg:h-[140px] lg:w-[728px] xl:h-[210px] xl:w-[627px]">
          <MainHeading className={titleClassName}>{title}</MainHeading>
        </div>
      </div>

      <div className="w-full xl:w-[612px] xl:pt-[120px]">
        <div className="w-full lg:h-[54px] lg:w-[964px] xl:h-[90px] xl:w-[612px]">
          <BoldText
            className={descriptionClassName}
            mobileChildren={mobileDescription}
            mobileClassName={mobileDescriptionClassName}
          >
            {description}
          </BoldText>
        </div>
      </div>
    </div>
  );
}
