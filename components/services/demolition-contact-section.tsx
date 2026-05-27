import type { ReactNode } from "react";
import { ContactCtaText } from "@/components/contact-cta-text";
import {
  ContactFormPanel,
  type ContactFormField,
} from "@/components/contact-form-panel";
import { FullBleedImageSection } from "@/components/services/full-bleed-image-section";

type DemolitionContactSectionProps = {
  fields: ContactFormField[];
  submitLabel?: string;
  title?: string;
  description?: string;
  /** Renders below the main CTA blurb (e.g. phone line). */
  extraContent?: ReactNode;
  /** Dark overlay tint over the photo (default matches main demolition contact). */
  overlayClassName?: string;
};

export function DemolitionContactSection({
  fields,
  submitLabel = "Submit",
  title = "Ready to Start Your Orange County Demolition Project?",
  description = "Don't let a messy site hold up your progress. Join the hundreds of OC homeowners who trust Abel Balderas for clean, professional demolition.",
  extraContent,
  overlayClassName = "bg-[#06182C]/58",
}: DemolitionContactSectionProps) {
  return (
    <FullBleedImageSection
      imageSrc="https://balderas-assets.s3.amazonaws.com/images/services/img6.png"
      imageAlt="Excavator at demolition site"
      overlayClassName={overlayClassName}
      className="py-20 lg:py-24"
      contentClassName="mx-auto w-full max-w-[1600px] px-6 lg:px-10"
    >
      <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-start lg:gap-10 xl:gap-14">
        <div className="w-full lg:flex-1 lg:min-w-0">
          <ContactCtaText title={title} description={description} />
          {extraContent ? <div className="mt-6">{extraContent}</div> : null}
        </div>

        <ContactFormPanel
          className="w-full lg:max-w-[620px] xl:w-[780px] xl:max-w-[780px]"
          fields={fields}
          submitLabel={submitLabel}
        />
      </div>
    </FullBleedImageSection>
  );
}
