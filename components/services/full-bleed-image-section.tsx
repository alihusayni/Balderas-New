import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FullBleedImageSectionProps = {
  imageSrc: string;
  imageAlt: string;
  overlayClassName: string;
  sizes?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function FullBleedImageSection({
  imageSrc,
  imageAlt,
  overlayClassName,
  sizes = "100vw",
  children,
  className,
  contentClassName,
}: FullBleedImageSectionProps) {
  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes={sizes}
            className="object-cover"
          />
        </div>
      </div>
      <div className={cn("absolute inset-0", overlayClassName)} />
      <div className={cn("relative z-10", contentClassName)}>{children}</div>
    </section>
  );
}
