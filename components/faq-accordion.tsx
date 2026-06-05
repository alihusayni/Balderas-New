"use client";

import { useId, useState } from "react";
import { SimpleText } from "@/components/simple-text";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  defaultOpenIndex?: number;
  className?: string;
};

export function FaqAccordion({
  items,
  defaultOpenIndex = -1,
  className,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex);
  const baseId = useId();

  return (
    <div className={cn("flex w-full flex-col", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-q-${index}`;
        const panelId = `${baseId}-p-${index}`;

        return (
          <div
            key={item.question}
            className="w-full border-b border-[#F2F2F2]"
          >
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() =>
                setOpenIndex((prev) => (prev === index ? -1 : index))
              }
              className="group flex w-full items-center justify-between gap-4 py-6 text-left transition-colors sm:gap-6 sm:py-7 lg:gap-24 lg:py-8"
            >
              <span className="[font-family:var(--font-anton)] flex-1 text-[17px] font-normal leading-[24px] tracking-[-0.01em] text-[#0b0300] sm:text-[18px] sm:leading-[26px] md:text-[19px] md:leading-[27px] lg:text-[22px] lg:leading-[30px]">
                {item.question}
              </span>

              <span
                aria-hidden
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center text-[#4F5B79] transition-transform duration-300 sm:h-7 sm:w-7",
                  isOpen ? "rotate-180" : "rotate-0",
                )}
              >
                <svg
                  viewBox="0 0 28 28"
                  fill="none"
                  className="h-6 w-6 sm:h-7 sm:w-7"
                  aria-hidden
                >
                  <path
                    d="M7 11l7 7 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <SimpleText className="pb-6 font-medium text-[#0b0300] sm:pb-7 lg:pb-8">
                  {item.answer}
                </SimpleText>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
