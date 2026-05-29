import Image from "next/image";
import type { ReactNode } from "react";
import { ContactCtaText } from "@/components/contact-cta-text";
import { cn } from "@/lib/utils";
import {
  ContactFormPanel,
  type ContactFormField,
} from "@/components/contact-form-panel";

type ContactCtaSectionBaseProps = {
  backgroundImageSrc: string;
  backgroundImageAlt: string;
  title: string;
  description: string;
  overlayClassName?: string;
  /** Merged onto the outer section (e.g. extra top spacing under a floating header). */
  className?: string;
};

type ContactCtaSectionWithFields = ContactCtaSectionBaseProps & {
  fields: ContactFormField[];
  submitLabel?: string;
  formSlot?: never;
};

type ContactCtaSectionWithSlot = ContactCtaSectionBaseProps & {
  formSlot: ReactNode;
  fields?: never;
  submitLabel?: never;
};

export type ContactCtaSectionProps =
  | ContactCtaSectionWithFields
  | ContactCtaSectionWithSlot;

export function ContactCtaSection(props: ContactCtaSectionProps) {
  const {
    backgroundImageSrc,
    backgroundImageAlt,
    title,
    description,
    overlayClassName = "bg-[#06182C]/68",
    className,
  } = props;

  const formColumn =
    "formSlot" in props && props.formSlot ? (
      props.formSlot
    ) : "fields" in props && props.fields ? (
      <ContactFormPanel
        className="w-full"
        fields={props.fields}
        submitLabel={props.submitLabel ?? "Submit"}
      />
    ) : null;

  return (
    <section
      id="contact"
      className={cn(
        "relative w-full overflow-hidden py-10 sm:py-12 md:py-14 lg:py-16",
        className,
      )}
    >
      <Image
        src={backgroundImageSrc}
        alt={backgroundImageAlt}
        fill
        sizes="100vw"
        // q=60: always under a dark overlay (default 68%) — imperceptible
        // quality loss; applied here so every page using this component benefits.
        quality={60}
        className="object-cover"
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />

      <div className="relative z-10 mx-auto w-full max-w-container px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-6 md:gap-8 lg:grid-cols-[1fr_560px] lg:gap-10 xl:grid-cols-[1fr_620px]">
          <ContactCtaText
            className="w-full max-w-[680px]"
            title={title}
            description={description}
            titleWrapClassName="w-full max-w-[660px]"
            descriptionWrapClassName="mt-4 w-full max-w-[500px] md:mt-5"
          />

          {formColumn}
        </div>
      </div>
    </section>
  );
}
