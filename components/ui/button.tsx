import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        heroPrimary:
          "bg-[var(--color-brand-orange)] text-[var(--color-brand-white)] hover:opacity-90",
        heroSecondary:
          "bg-[var(--color-brand-dark)] text-[var(--color-brand-white)] hover:bg-black",
        /** Solid white for primary actions on dark photo overlays (e.g. CTA band). */
        ctaLight:
          "bg-white text-[#0b0300] hover:bg-white/90 hover:text-[#0b0300]",
      },
      size: {
        hero: "h-[46px] px-5 text-[14px] sm:h-[50px] sm:px-6 sm:text-[15px] md:h-[54px] md:px-7 md:text-[16px] lg:h-[58px] lg:px-8 lg:text-[17px] xl:h-[60px] xl:px-10 xl:text-[20px]",
      },
    },
    defaultVariants: {
      variant: "heroPrimary",
      size: "hero",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          "font-maison font-bold",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
