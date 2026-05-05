"use client";

import type { ButtonHTMLAttributes, SVGProps } from "react";
import { cn } from "@/lib/utils";

type DirectionArrowIconProps = SVGProps<SVGSVGElement>;

export function DirectionArrowIcon({
  className,
  ...props
}: DirectionArrowIconProps) {
  return (
    <svg
      width="33"
      height="21"
      viewBox="0 0 33 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-[21px] w-[33px]", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.07579 0L16.3032 12.2274L28.5305 0L32.6063 4.07579L16.3032 20.3789L0 4.07579L4.07579 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

type DirectionButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function DirectionButton({
  className,
  children,
  ...props
}: DirectionButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex h-[88px] w-[88px] flex-col items-center justify-center gap-[52.8px] rounded-[56.32px] bg-white/25 px-[31.68px] py-[23.76px] text-[#383838] backdrop-blur-[2px] transition hover:bg-white/35",
        className,
      )}
      {...props}
    >
      {children ?? <DirectionArrowIcon aria-hidden="true" />}
    </button>
  );
}
