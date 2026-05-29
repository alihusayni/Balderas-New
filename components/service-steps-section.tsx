import type { ReactNode } from "react";
import Image from "next/image";
import { MainHeading } from "@/components/main-heading";
import { SubHeading } from "@/components/sub-heading";
import { BodyText } from "@/components/ui/body-text";

type ServiceStepItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

type ServiceStepsSectionProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  /** Optional lead paragraph below the section title (e.g. pricing explainer). */
  intro?: string;
  steps: ServiceStepItem[];
  imageSide?: "left" | "right";
};

export function ServiceStepsSection({
  imageSrc,
  imageAlt,
  title,
  intro,
  steps,
  imageSide = "left",
}: ServiceStepsSectionProps) {
  const imageBlock = (
    <div className="w-full xl:w-[780px]">
      <div className="relative h-[460px] w-full overflow-hidden lg:h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>
  );

  const contentBlock = (
    <div className="w-full xl:w-[780px]">
      <MainHeading className="text-[#0b0300]">{title}</MainHeading>

      {intro ? (
        <div className="mt-6 max-w-[680px]">
          <BodyText>{intro}</BodyText>
        </div>
      ) : null}

      <div className="mt-8 space-y-6 xl:space-y-8">
        {steps.map((step, index) => (
          <div
            key={`${step.title}-${index}`}
            className="flex items-start gap-4 sm:gap-5"
          >
            <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center bg-[var(--color-brand-orange)] p-3 sm:h-[58px] sm:w-[58px] sm:p-3.5 md:h-[62px] md:w-[62px] lg:h-[67px] lg:w-[67px] lg:p-4">
              {step.icon}
            </div>
            <div className="flex-1">
              <SubHeading className="text-[#0b0300]">{step.title}</SubHeading>
              <div className="mt-2">
                <BodyText>{step.description}</BodyText>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white py-20 xl:py-24">
      <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-6 lg:px-10 xl:flex-row xl:items-stretch">
        {imageSide === "left" ? (
          <>
            {imageBlock}
            {contentBlock}
          </>
        ) : (
          <>
            {contentBlock}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}
