import Image from "next/image";
import Link from "next/link";
import { SimpleText } from "@/components/simple-text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  showArrow?: boolean;
};

type CtaBannerProps = {
  title: string;
  description: string;
  backgroundSrc: string;
  backgroundAlt?: string;
  ctas?: CtaButton[];
  /** Convenience props for single-CTA usage. */
  ctaLabel?: string;
  ctaHref?: string;
  showArrow?: boolean;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  overlayClassName?: string;
};

function ButtonContent({
  label,
  showArrow,
}: {
  label: string;
  showArrow?: boolean;
}) {
  return (
    <span className="font-maison flex items-center justify-center gap-3 text-lg font-bold tracking-[-0.02em] sm:gap-4 sm:text-2xl md:text-4xl lg:gap-5 lg:text-6xl">
      <span>{label}</span>
      {showArrow ? (
        <span aria-hidden className="inline-flex shrink-0 text-current">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
              fill="currentColor"
            />
          </svg>
        </span>
      ) : null}
    </span>
  );
}

export function CtaBanner({
  title,
  description,
  backgroundSrc,
  backgroundAlt = "",
  ctas,
  ctaLabel,
  ctaHref,
  showArrow = true,
  className,
  contentClassName,
  titleClassName,
  overlayClassName,
}: CtaBannerProps) {
  const resolvedCtas: CtaButton[] =
    ctas && ctas.length > 0
      ? ctas
      : ctaLabel && ctaHref
        ? [{ label: ctaLabel, href: ctaHref, variant: "primary", showArrow }]
        : [];

  return (
    <section
      className={cn(
        "relative isolate flex min-h-[min(100svh,880px)] w-full flex-col justify-end overflow-hidden sm:min-h-[min(92svh,820px)]",
        className,
      )}
    >
      <Image
        src={backgroundSrc}
        alt={backgroundAlt}
        fill
        sizes="100vw"
        // q=60: always rendered under a configurable dark overlay;
        // lower quality is imperceptible and reduces transfer size.
        quality={60}
        aria-hidden={!backgroundAlt}
        className="-z-20 object-cover object-[center_bottom]"
      />

      <div
        aria-hidden
        className={cn(
          "-z-10 absolute inset-0 bg-[#06182C]/60",
          overlayClassName,
        )}
      />

      <div
        className={cn(
          "relative z-10 mx-auto flex w-full max-w-container flex-col items-start gap-8 px-6 pb-14 sm:gap-10 sm:pb-[4.25rem] lg:px-10 lg:pb-24",
          contentClassName,
        )}
      >
        <div className="flex w-full max-w-[820px] flex-col gap-5 text-left sm:gap-6 lg:max-w-[920px] lg:gap-8">
          <h2
            className={cn(
              "[font-family:var(--font-anton)] text-7xl font-normal leading-[1.05] tracking-[-0.02em] text-white sm:text-10xl md:text-12xl lg:text-14xl xl:text-[clamp(52px,5vw,68px)] lg:leading-[1.03]",
              titleClassName,
            )}
          >
            {title}
          </h2>

          <SimpleText className="max-w-[780px] leading-[1.55] text-white xl:text-4xl">
            {description}
          </SimpleText>
        </div>

        {resolvedCtas.length > 0 ? (
          <div className="flex w-full max-w-[920px] flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:gap-5">
            {resolvedCtas.map((cta) => {
              const isSecondary = cta.variant === "secondary";

              return (
                <Button
                  key={cta.label}
                  asChild
                  variant={isSecondary ? "ctaLight" : "heroPrimary"}
                  size="hero"
                  className="min-h-[50px] w-full rounded-none px-5 py-3 sm:min-h-[56px] sm:px-7 sm:py-3.5 md:min-h-[60px] md:px-8 md:py-[1.125rem] sm:w-auto sm:min-w-[min(100%,300px)] sm:max-w-none lg:min-h-[70px] lg:min-w-[280px]"
                >
                  <Link href={cta.href}>
                    <ButtonContent
                      label={cta.label}
                      showArrow={cta.showArrow}
                    />
                  </Link>
                </Button>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
