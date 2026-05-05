import { SimpleText } from "@/components/simple-text";
import { cn } from "@/lib/utils";

type BodyTextProps = {
  children: React.ReactNode;
  className?: string;
};

/** Maison body copy for light sections; default color `#1b1b1b`. */
export function BodyText({ children, className }: BodyTextProps) {
  return (
    <SimpleText className={cn("text-[#1b1b1b]", className)}>
      {children}
    </SimpleText>
  );
}
