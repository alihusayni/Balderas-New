import type { ReactNode } from "react";

type DifferenceFeaturesGridProps = {
  children: ReactNode;
};

export function DifferenceFeaturesGrid({ children }: DifferenceFeaturesGridProps) {
  return (
    <div className="w-full overflow-hidden border border-white/15">
      <div className="grid w-full grid-cols-1 md:grid-cols-2">{children}</div>
    </div>
  );
}
