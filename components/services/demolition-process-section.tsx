import Image from "next/image";
import {
  ControlledDemolitionIcon,
  DebrisSortingDisposalIcon,
  FinalWalkThroughIcon,
  OnSiteConsultationIcon,
  PermitUtilityCheckIcon,
} from "@/components/icons";
import { MainHeading } from "@/components/main-heading";
import { ProcessStepWithIcon } from "@/components/services/process-step-with-icon";

const PROCESS_STEPS = [
  {
    title: "On-Site Consultation:",
    description:
      "Our experienced team meets you on-site to evaluate the scope and provide a transparent, no-obligation quote.",
    icon: <OnSiteConsultationIcon className="h-full w-full" />,
  },
  {
    title: "Permit & Utility Check:",
    description:
      "We ensure all necessary precautions are taken regarding gas, water, and electrical lines.",
    icon: <PermitUtilityCheckIcon className="h-full w-full" />,
  },
  {
    title: "Controlled Demolition:",
    description:
      "Our crew executes the plan quickly and safely using specialized tools.",
    icon: <ControlledDemolitionIcon className="h-full w-full" />,
  },
  {
    title: "Debris Sorting & Disposal:",
    description:
      "We sort materials (wood, metal, concrete) to ensure maximum recycling and responsible disposal.",
    icon: <DebrisSortingDisposalIcon className="h-full w-full" />,
  },
  {
    title: "Final Walk-Through:",
    description: `We don't leave until you've inspected the site and confirmed it meets your standards.`,
    icon: <FinalWalkThroughIcon className="h-full w-full" />,
  },
];

export function DemolitionProcessSection() {
  return (
    <section className="w-full bg-white py-20 xl:py-24">
      <div className="mx-auto flex w-full max-w-container flex-col gap-14 px-6 lg:px-10">
        <div className="flex flex-col gap-12 xl:flex-row xl:items-start xl:h-[777px]">
          <div className="w-full xl:w-1/2">
            <div className="relative h-[460px] w-full overflow-hidden xl:h-[777px]">
              <Image
                src="https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/services/img5.jpg"
                alt="Demolition OC team planning a demolition process"
                fill
                sizes="(max-width: 1279px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full xl:w-1/2">
            <MainHeading className="text-[#0b0300]">
              How Our Process{" "}
              <br className="hidden xl:block" aria-hidden />
              Works
            </MainHeading>

            <div className="mt-8 w-full space-y-6 xl:space-y-8">
              {PROCESS_STEPS.map((step) => (
                <ProcessStepWithIcon key={step.title} {...step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
