import type { ReactNode } from "react";
import { SimpleText } from "@/components/simple-text";
import { SubHeading } from "@/components/sub-heading";

type GlassFeatureListItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

type GlassFeatureListCardProps = {
  items: GlassFeatureListItem[];
  className?: string;
};

export function GlassFeatureListCard({ items, className }: GlassFeatureListCardProps) {
  return (
    <article
      className={`w-full rounded-[10px] bg-white/25 p-6 backdrop-blur-[10px] md:p-8 lg:max-w-[730px] lg:p-[50px] ${className ?? ""}`.trim()}
    >
      <div className="divide-y divide-white/20">
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className={`flex items-start gap-3 py-5 sm:gap-4 md:gap-5 lg:gap-6 lg:py-6 ${index === 0 ? "pt-0" : ""} ${
              index === items.length - 1 ? "pb-0" : ""
            }`.trim()}
          >
            <div className="mt-1 h-[28px] w-[28px] shrink-0 text-white sm:h-[30px] sm:w-[30px] md:h-[32px] md:w-[32px] lg:h-[34px] lg:w-[34px]">
              {item.icon}
            </div>
            <div className="min-w-0">
              <SubHeading className="text-white">{item.title}</SubHeading>
              <div className="mt-2">
                <SimpleText className="text-white/95">{item.description}</SimpleText>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
