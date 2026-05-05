import { MainHeading } from "@/components/main-heading";
import { SimpleText } from "@/components/simple-text";
import { cn } from "@/lib/utils";

type ContactCtaTextProps = {
  title: string;
  description: string;
  className?: string;
  titleWrapClassName?: string;
  descriptionWrapClassName?: string;
};

export function ContactCtaText({
  title,
  description,
  className,
  titleWrapClassName,
  descriptionWrapClassName,
}: ContactCtaTextProps) {
  return (
    <div className={cn("w-full text-left", className)}>
      <div className={titleWrapClassName ?? "w-full lg:max-w-[620px] xl:w-[780px]"}>
        <MainHeading className="text-white">{title}</MainHeading>
      </div>
      <div
        className={
          descriptionWrapClassName ??
          "mt-5 w-full lg:max-w-[620px] xl:max-w-[780px]"
        }
      >
        <SimpleText className="text-white">{description}</SimpleText>
      </div>
    </div>
  );
}
