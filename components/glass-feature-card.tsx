import type { ReactNode } from "react";
import { SimpleText } from "@/components/simple-text";
import { SubHeading } from "@/components/sub-heading";
import { cn } from "@/lib/utils";

type GlassFeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function GlassFeatureCard({
  icon,
  title,
  description,
  className,
}: GlassFeatureCardProps) {
  return (
    <article
      className={cn(
        "w-full rounded-[10px] border border-white/25 bg-white/25 p-6 backdrop-blur-[10px] md:p-8 lg:p-[50px]",
        "min-h-[190px] md:min-h-[210px] lg:min-h-[227px]",
        className,
      )}
    >
      <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4">
        <div className="h-5 w-5 shrink-0 text-white sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8">
          {icon}
        </div>
        <SubHeading className="text-white">{title}</SubHeading>
      </div>
      <div className="mt-6 md:mt-7 lg:mt-10">
        <SimpleText className="text-white/95">
          {description}
        </SimpleText>
      </div>
    </article>
  );
}
