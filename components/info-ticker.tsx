import Image from "next/image";
import { cn } from "@/lib/utils";

const TICKER_ITEMS = [
  "DEMOLITION",
  "JUNK REMOVAL",
  "DUMPSTERS RENTAL",
  "TOP CHOICE",
  "BALDERAS DEMOLITION INC.",
  "STRUCTURAL DEMOLITION",
];

type InfoTickerProps = {
  className?: string;
};

export function InfoTicker({ className }: InfoTickerProps) {
  const loopItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section
      className={cn(
        "relative z-20 border-y border-white/10 bg-[var(--color-brand-dark)] overflow-hidden",
        className,
      )}
    >
      {/* 🔥 Gradient edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-brand-dark)] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-brand-dark)] to-transparent z-10" />

      {/* 🔥 Track */}
      <div className="flex w-max items-center whitespace-nowrap animate-[ticker_22s_linear_infinite] hover:[animation-play-state:paused] md:animate-[ticker_28s_linear_infinite]">
        {loopItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="inline-flex shrink-0 items-center gap-6 px-6 py-3"
          >
            <span className="[font-family:var(--font-anton)] inline-flex items-center gap-2 text-sm tracking-[0.08em] text-[var(--color-brand-white)] whitespace-nowrap">
              {item === "TOP CHOICE" && (
                <Image
                  src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/icons/badgeIcon.svg"
                  alt=""
                  width={14}
                  height={14}
                  style={{ width: "auto", height: "auto" }}
                  aria-hidden
                />
              )}
              {item}
            </span>

            <span className="text-[var(--color-brand-white)]/80">■</span>
          </div>
        ))}
      </div>
    </section>
  );
}