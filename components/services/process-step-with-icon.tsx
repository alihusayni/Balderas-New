import type { ReactNode } from "react";
import { IconFeatureItem } from "@/components/icon-feature-item";

type ProcessStepWithIconProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function ProcessStepWithIcon({
  icon,
  title,
  description,
}: ProcessStepWithIconProps) {
  return <IconFeatureItem icon={icon} title={title} description={description} />;
}
