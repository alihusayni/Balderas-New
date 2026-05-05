import { SplitHeroText } from "@/components/split-hero-text";
import {
  DustDebrisControlIcon,
  FullSiteClearanceIcon,
  LicensedInsuredIcon,
  SystematicPlanningIcon,
} from "@/components/icons";
import { DifferenceFeatureCard } from "@/components/services/difference-feature-card";
import { DifferenceFeaturesGrid } from "@/components/services/difference-features-grid";
import { FullBleedImageSection } from "@/components/services/full-bleed-image-section";

const DIFFERENCE_FEATURES = [
  {
    variant: "orange" as const,
    title: "Systematic Planning:",
    description:
      "We identify load-bearing structures and utility lines before the first hammer swings.",
    icon: <SystematicPlanningIcon className="h-full w-full" />,
    className: "order-1 md:order-none",
  },
  {
    variant: "slate" as const,
    title: "Dust & Debris Control:",
    description:
      "We use professional-grade barriers and cleanup techniques to keep the rest of your property pristine.",
    icon: <DustDebrisControlIcon className="h-full w-full" />,
    className: "order-2 md:order-none",
  },
  {
    variant: "mist" as const,
    title: "Full Site Clearance:",
    description:
      'We don\'t just demo; we haul. When we leave, your site is "broom-clean" and ready for the next trade.',
    icon: <FullSiteClearanceIcon className="h-full w-full" />,
    className: "order-4 md:order-none",
  },
  {
    variant: "orange" as const,
    title: "Licensed & Insured:",
    description:
      "Rest easy knowing your property is protected by a fully insured professional team.",
    icon: <LicensedInsuredIcon className="h-full w-full" />,
    className: "order-3 md:order-none",
  },
];

export function DemolitionDifferenceSection() {
  return (
    <FullBleedImageSection
      imageSrc="/images/services/img4.png"
      imageAlt="Balderas worksite background"
      overlayClassName="bg-[#06182C]/72"
      className="py-20 lg:py-24"
      contentClassName="mx-auto flex w-full max-w-[1400px] flex-col gap-16 px-6 lg:px-10"
    >
      <SplitHeroText
        title="The Balderas Demolition Inc. Difference: Safety First, Every Time"
        description="We know that demolition can be stressful for neighbors and homeowners. That's why Abel Balderas oversees a process designed to minimize disruption and maximize safety."
        titleClassName="text-white"
        descriptionClassName="text-white"
      />
      <DifferenceFeaturesGrid>
        {DIFFERENCE_FEATURES.map(
          ({ className: orderClassName, ...item }) => (
            <DifferenceFeatureCard
              key={item.title}
              {...item}
              className={orderClassName}
            />
          ),
        )}
      </DifferenceFeaturesGrid>
    </FullBleedImageSection>
  );
}
