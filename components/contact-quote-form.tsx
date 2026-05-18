"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { SimpleText } from "@/components/simple-text";
import { cn } from "@/lib/utils";
import { useFormSubmit } from "@/hooks/use-form-submit";

const STEPS = ["Services", "Project Details", "Your Info"] as const;

const SERVICES: ReadonlyArray<string> = [
  "Junk Removal Services",
  "Appliance Removal Services",
  "Construction Debris Removal Services",
  "Dumpster Rental Services",
  "Garage Cleanout Services",
  "Office Cleanout Services",
  "Junk Hauling Services",
  "Basement Cleanout Services",
  "Property Management Junk Removal",
  "Trash Removal Services",
  "Yard Waste Removal Services",
  "Retail Cleanout Services",
  "Garbage Pickup Services",
  "Mattress Disposal Services",
  "Foreclosure Cleanout Services",
  "Waste Management Solutions",
  "Old Couch Removal Services",
  "Same Day Junk Removal",
  "Junk Pickup Services",
  "Estate Cleanout Services",
  "Home Renovation Dumpster Rental",
  "Affordable Dumpster Rental",
  "Commercial Junk Removal Services",
  "Demolition Services",
  "Furniture Removal Services",
];

type ContactQuoteFormProps = {
  /** Use inside homepage-style CTA (no hero logo); fits white panel beside MainHeading */
  variant?: "standalone" | "embedded";
};

export function ContactQuoteForm({
  variant = "standalone",
}: ContactQuoteFormProps) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [projectDetails, setProjectDetails] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { status, submit } = useFormSubmit();

  const sending = status === "sending";
  const submitted = status === "sent";
  const error = status === "error";

  const canProceed = useMemo(() => {
    if (step === 0) return selected.length > 0;
    if (step === 1) return projectDetails.trim().length > 0;
    if (step === 2) return name.trim().length > 0 && phone.trim().length > 0;
    return false;
  }, [step, selected, projectDetails, name, phone]);

  const toggleService = (service: string) => {
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service],
    );
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!canProceed) return;

    await submit({
      name,
      phone,
      service: selected.join(", "),
      message: projectDetails,
    });
  };

  const embedded = variant === "embedded";

  if (submitted) {
    return (
      <div
        className={cn(
          "text-center",
          embedded
            ? "py-8"
            : "border border-black/10 bg-white px-6 py-10",
        )}
      >
        <h2 className="[font-family:var(--font-maison)] text-[28px] font-bold text-[#161C28]">
          Thank you.
        </h2>
        <SimpleText className="mt-2 text-[#222222]">
          Your request has been received. We will contact you soon.
        </SimpleText>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "mx-auto w-full bg-white",
        embedded
          ? "px-0 pb-2 pt-0"
          : "max-w-[1100px] px-6 pb-10 pt-12 sm:px-10 sm:pt-16 lg:px-16",
      )}
    >
      {!embedded ? (
        <div className="flex justify-start pl-2 sm:pl-6 lg:pl-12">
          <div className="relative h-[240px] w-[240px] sm:h-[340px] sm:w-[340px] lg:h-[420px] lg:w-[420px]">
            <Image
              src="/round-logo.png"
              alt="Balderas Demolition Rhino logo"
              fill
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 340px, 420px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}

      <div
        className={cn(!embedded && "mt-6 sm:mt-10 sm:pl-[160px] lg:pl-[280px]")}
      >
        <ol className="mb-8 flex items-start gap-3">
          {STEPS.map((label, index) => {
            const active = index === step;
            const completed = index < step;

            return (
              <li key={label} className="flex-1">
                <div
                  className={cn(
                    "h-[3px] w-full rounded-full",
                    completed || active
                      ? "bg-[var(--color-brand-orange)]"
                      : "bg-[#CCCCCC]/70",
                  )}
                />
              </li>
            );
          })}
        </ol>

        {step === 0 ? (
          <fieldset
            className={cn(
              embedded && "max-h-[min(420px,50vh)] overflow-y-auto pr-1 lg:max-h-none",
            )}
          >
            <legend className="[font-family:var(--font-maison)] mb-5 text-[18px] font-bold text-black">
              Please Select Requested Service(s)
            </legend>
            <div
              className={cn(
                "grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2",
                !embedded && "lg:grid-cols-3",
              )}
            >
              {SERVICES.map((service) => (
                <label
                  key={service}
                  className="[font-family:var(--font-maison)] flex items-start gap-2 text-[13px] leading-[18px] text-black"
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(service)}
                    onChange={() => toggleService(service)}
                    className="mt-[2px] size-[14px] rounded-[2px] border-[#BBBBBB]"
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        {step === 1 ? (
          <div>
            <label
              htmlFor="project-details"
              className="[font-family:var(--font-maison)] mb-2 block text-[16px] font-bold text-black"
            >
              Project details
            </label>
            <textarea
              id="project-details"
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              rows={6}
              placeholder="Address, timeline, and any special notes"
              className="[font-family:var(--font-maison)] w-full border border-[#BBBBBB] p-3 text-[14px] leading-[20px] text-black outline-none focus:border-[var(--color-brand-orange)]"
            />
          </div>
        ) : null}

        {step === 2 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="full-name"
                className="[font-family:var(--font-maison)] mb-2 block text-[14px] font-bold text-black"
              >
                Full Name
              </label>
              <input
                id="full-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="[font-family:var(--font-maison)] h-[42px] w-full border border-[#BBBBBB] px-3 text-[14px] text-black outline-none focus:border-[var(--color-brand-orange)]"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="[font-family:var(--font-maison)] mb-2 block text-[14px] font-bold text-black"
              >
                Phone
              </label>
              <input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="[font-family:var(--font-maison)] h-[42px] w-full border border-[#BBBBBB] px-3 text-[14px] text-black outline-none focus:border-[var(--color-brand-orange)]"
              />
            </div>
          </div>
        ) : null}

        <div className="mt-8 flex items-center justify-start">
          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={() =>
                setStep((prev) => Math.min(prev + 1, STEPS.length - 1))
              }
              disabled={!canProceed}
              className={cn(
                "[font-family:var(--font-maison)] inline-flex h-[48px] min-w-[120px] items-center justify-center gap-2 rounded-[6px] border px-6 text-[14px] font-bold transition-opacity text-[#0b0300]",
                canProceed
                  ? "border-transparent bg-[var(--color-brand-orange)] hover:opacity-90"
                  : "cursor-not-allowed border-transparent bg-neutral-400 text-white",
              )}
            >
              <span>Next</span>
              <ChevronRight className="size-3.5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!canProceed || sending}
              className={cn(
                "[font-family:var(--font-maison)] inline-flex h-[48px] min-w-[120px] items-center justify-center gap-2 rounded-[6px] border px-6 text-[14px] font-bold transition-opacity text-[var(--color-brand-white)]",
                canProceed && !sending
                  ? "border-transparent bg-[var(--color-brand-orange)] hover:opacity-90"
                  : "cursor-not-allowed border-transparent bg-neutral-400",
              )}
            >
              <span>{sending ? "Sending..." : "Submit"}</span>
              {!sending && <ChevronRight className="size-3.5" />}
            </button>
          )}
          {error && (
            <p className="[font-family:var(--font-maison)] mt-3 text-[13px] text-red-500">
              Something went wrong. Please try again or call us directly.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M6 3.5L10.5 8L6 12.5" />
    </svg>
  );
}
