import type { ReactNode } from "react";
import { SimpleText } from "@/components/simple-text";
import { cn } from "@/lib/utils";

/** Brand orange glyphs on light grey icon tiles (orange article background). */
const ICON_GLYPH_ON_LIGHT_TILE =
  "[&_svg]:!text-[var(--color-brand-orange)] [&_path]:!fill-[var(--color-brand-orange)] [&_path]:![stroke:var(--color-brand-orange)] [&_circle]:!stroke-[var(--color-brand-orange)] [&_circle]:!fill-[var(--color-brand-orange)] [&_line]:!stroke-[var(--color-brand-orange)]";

/** White glyphs on orange icon tiles (grey article background). */
const ICON_GLYPH_ON_ORANGE_TILE =
  "[&_svg]:!text-white [&_path]:!fill-white [&_path]:![stroke:#ffffff] [&_circle]:!stroke-white [&_circle]:!fill-white [&_line]:!stroke-white";

const VARIANT = {
  orange: {
    article: "bg-[var(--color-brand-orange)]",
    iconTile: "bg-[#d9d9d9]",
    iconGlyph: ICON_GLYPH_ON_LIGHT_TILE,
    title: "text-white",
    body: "text-white/95",
  },
  slate: {
    article: "bg-[#D1D4DB]",
    iconTile: "bg-[var(--color-brand-orange)]",
    iconGlyph: ICON_GLYPH_ON_ORANGE_TILE,
    title: "text-[#4F5B79]",
    body: "text-[#4F5B79]",
  },
  mist: {
    article: "bg-[#D1D4DB]",
    iconTile: "bg-[var(--color-brand-orange)]",
    iconGlyph: ICON_GLYPH_ON_ORANGE_TILE,
    title: "text-[#4F5B79]",
    body: "text-[#4F5B79]",
  },
} as const;

export type DifferenceFeatureVariant = keyof typeof VARIANT;

type DifferenceFeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  variant: DifferenceFeatureVariant;
  className?: string;
};

export function DifferenceFeatureCard({
  title,
  description,
  icon,
  variant,
  className,
}: DifferenceFeatureCardProps) {
  const v = VARIANT[variant];

  return (
    <article
      className={cn(
        "flex min-h-[220px] flex-col justify-center p-6 sm:min-h-[240px] sm:p-7 md:min-h-[260px] md:p-8",
        v.article,
        className,
      )}
    >
      <div className="flex w-full flex-row items-center gap-4 text-left sm:gap-6 md:gap-8">
        <div
          className={cn(
            "flex h-[54px] w-[54px] shrink-0 items-center justify-center px-2.5 pb-[15px] pt-4 sm:h-[58px] sm:w-[58px] sm:px-3 sm:pb-[16px] sm:pt-[17px] md:h-[62px] md:w-[62px] md:pb-[18px] md:pt-[19px] lg:h-[67px] lg:w-[67px] lg:pb-[19px] lg:pt-5",
            v.iconTile,
          )}
        >
          <div
            className={cn(
              "h-[27px] w-[31px] sm:h-[29px] sm:w-[34px] md:h-[31px] md:w-[36px] lg:h-[34px] lg:w-[39px]",
              v.iconGlyph,
            )}
          >
            {icon}
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col text-left">
          <h3
            className={cn(
              "font-maison text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl",
              v.title,
            )}
          >
            {title}
          </h3>
          <SimpleText
            className={cn(
              "mt-3 max-w-[280px] font-medium leading-[1.35] sm:mt-4",
              v.body,
            )}
          >
            {description}
          </SimpleText>
        </div>
      </div>
    </article>
  );
}
