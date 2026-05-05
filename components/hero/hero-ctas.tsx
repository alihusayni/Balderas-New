import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeroCtasProps = {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  showSecondaryButton?: boolean;
  showSecondaryArrow?: boolean;
  className?: string;
  textClassName?: string;
  primaryTextClassName?: string;
  secondaryTextClassName?: string;
  primaryButtonClassName?: string;
  secondaryButtonClassName?: string;
};

export function HeroCtas({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  showSecondaryButton = true,
  showSecondaryArrow = true,
  className,
  textClassName,
  primaryTextClassName,
  secondaryTextClassName,
  primaryButtonClassName,
  secondaryButtonClassName,
}: HeroCtasProps) {
  const sharedTextClasses = cn(
    "font-maison font-bold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]",
    textClassName,
  );

  return (
    <div
      className={cn(
        "mt-6 flex w-full flex-col items-stretch gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:items-center md:mt-7",
        className,
      )}
    >
      <Button
        asChild
        variant="heroPrimary"
        size="hero"
        className={cn(
          "w-full p-8 sm:w-[220px] sm:shrink-0 md:w-[240px]",
          primaryButtonClassName,
        )}
      >
        <Link
          href={primaryHref}
          className={cn(
            "text-[19px] sm:text-[17px] md:text-[18px]",
            sharedTextClasses,
            primaryTextClassName,
          )}
        >
          {primaryLabel}
        </Link>
      </Button>

      {showSecondaryButton && secondaryHref && secondaryLabel ? (
        <Button
          asChild
          variant="heroSecondary"
          size="hero"
          className={cn(
            "w-full p-8 sm:w-[220px] sm:shrink-0 md:w-[240px]",
            secondaryButtonClassName,
          )}
        >
          <Link
            href={secondaryHref}
            className={cn(
              "flex items-center gap-2 sm:gap-3",
              sharedTextClasses,
              secondaryTextClassName,
            )}
          >
            <span>{secondaryLabel}</span>
            {showSecondaryArrow ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                  fill="white"
                />
              </svg>
            ) : null}
          </Link>
        </Button>
      ) : null}
    </div>
  );
}
