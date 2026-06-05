import Image from "next/image";
import Link from "next/link";
import { SimpleText } from "@/components/simple-text";
import { cn } from "@/lib/utils";

type ArticleCardProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  ctaLabel?: string;
  className?: string;
};

export function ArticleCard({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
  ctaLabel = "View More",
  className,
}: ArticleCardProps) {
  return (
    <article
      className={cn(
        "group/card flex h-full min-h-0 w-full flex-col gap-[28px]",
        className,
      )}
    >
      <Link href={href} className="group/image block w-full shrink-0">
        <div className="relative h-[260px] w-full overflow-hidden bg-[#DC5A31] sm:h-[300px] lg:h-[366px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 767px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover/image:scale-[1.03]"
          />
        </div>
      </Link>

      <div className="flex min-h-0 w-full flex-1 flex-col gap-[28px]">
        <div className="flex min-h-0 flex-1 flex-col gap-3">
          <Link href={href} className="block min-h-0">
            <h3 className="[font-family:var(--font-anton)] line-clamp-2 min-h-[52px] text-[18px] font-normal leading-[26px] tracking-[-0.01em] text-[#0b0300] transition-colors group-hover/card:text-[var(--color-brand-orange)] sm:min-h-[56px] sm:text-[20px] sm:leading-[28px] md:text-[21px] md:leading-[29px] lg:min-h-[60px] lg:text-[22px] lg:leading-[30px]">
              {title}
            </h3>
          </Link>

          <SimpleText className="line-clamp-2 min-h-[48px] text-[#0b0300] sm:min-h-[50px] md:min-h-[52px] lg:min-h-[58px]">
            {description}
          </SimpleText>
        </div>

        <Link
          href={href}
          aria-label={`${ctaLabel}: ${title}`}
          className="font-maison inline-flex shrink-0 items-center gap-2 text-[14px] font-bold leading-none text-[var(--color-brand-orange)] transition-opacity hover:opacity-80 sm:gap-2.5 sm:text-[15px] md:gap-3 md:text-[16px] lg:text-[17px] xl:text-[20px]"
        >
          <span>{ctaLabel}</span>
          <span
            aria-hidden
            className="text-[14px] leading-none sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px]"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
