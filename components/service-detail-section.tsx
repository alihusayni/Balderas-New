import Image from "next/image";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/sub-heading";
import { BodyText } from "@/components/ui/body-text";

type ServiceDetailItem = {
  heading: string;
  text: string;
};

type ServiceDetailSectionProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  intro: string;
  items: ServiceDetailItem[];
  imageSide?: "left" | "right";
  textVerticalAlign?: "top" | "center";
  hideImageOnSmallScreens?: boolean;
};

export function ServiceDetailSection({
  imageSrc,
  imageAlt,
  title,
  intro,
  items,
  imageSide = "right",
  textVerticalAlign = "center",
  hideImageOnSmallScreens = false,
}: ServiceDetailSectionProps) {
  const imageOrderClass =
    imageSide === "left" ? "order-1" : "order-1 xl:order-2";
  const textOrderClass =
    imageSide === "left" ? "order-2" : "order-2 xl:order-1";

  const imageBlock = (
    <div
      className={`${imageOrderClass} w-full xl:w-[780px] ${
        hideImageOnSmallScreens ? "hidden lg:block" : ""
      }`}
    >
      <div className="relative h-[300px] w-full overflow-hidden sm:h-[380px] lg:h-[494px] xl:h-[494px]">
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

  const textBlock = (
    <div
      className={`${textOrderClass} w-full xl:w-[780px] ${
        textVerticalAlign === "center"
          ? "xl:flex xl:min-h-[494px] xl:flex-col xl:justify-center"
          : ""
      }`}
    >
      <div className="w-full">
        <Heading className="text-[#0b0300]">{title}</Heading>
      </div>

      <div className="mt-2 w-full">
        <BodyText>{intro}</BodyText>
      </div>

      {items.map((item) => (
        <div key={item.heading} className="mt-8 w-full">
          <SubHeading className="text-[#0b0300]">{item.heading}</SubHeading>
          <div className="mt-2 w-full">
            <BodyText>{item.text}</BodyText>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col gap-14 lg:gap-[50px] xl:flex-row xl:items-start">
      {imageBlock}
      {textBlock}
    </div>
  );
}
