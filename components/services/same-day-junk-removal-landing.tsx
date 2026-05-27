"use client";

import Image from "next/image";
import { ContactCtaText } from "@/components/contact-cta-text";
import {
  ContactFormPanel,
  type ContactFormField,
} from "@/components/contact-form-panel";
import { DirectionButton } from "@/components/hero/direction-button";
import { HeroCtas } from "@/components/hero/hero-ctas";
import { HeroHeading } from "@/components/hero/hero-heading";
import { HeroParallaxBackground } from "@/components/hero/hero-parallax-background";
import { HeroSubheading } from "@/components/hero/hero-subheading";
import { GlassFeatureCard } from "@/components/glass-feature-card";
import { InfoTicker } from "@/components/info-ticker";
import { ProcessStepWithIcon } from "@/components/services/process-step-with-icon";
import { ServiceDetailSection } from "@/components/service-detail-section";
import { ServiceIntroSection } from "@/components/service-intro-section";
import { SplitHeroText } from "@/components/split-hero-text";
import { SubHeading } from "@/components/sub-heading";
import { MainHeading } from "@/components/main-heading";
import { BodyText } from "@/components/ui/body-text";
import {
  ControlledDemolitionIcon,
  FullSiteClearanceIcon,
  NoHiddenFeesIcon,
  OnSiteConsultationIcon,
  UpfrontVolumePricingIcon,
} from "@/components/icons";
import { SITE } from "@/lib/seo";

function getTelHref(): string {
  const digits = SITE.telephone.replace(/\D/g, "");
  if (digits.length === 10) return `tel:+1${digits}`;
  if (digits.length >= 11) return `tel:+${digits}`;
  return "tel:+17143408108";
}

function getSameDaySmsHref(): string {
  const digits = SITE.telephone.replace(/\D/g, "");
  const body = encodeURIComponent(
    "Hi Abel—I need same-day junk removal in Orange County. I'll send photos of the pile.",
  );
  if (digits.length === 10) return `sms:+1${digits}?body=${body}`;
  if (digits.length >= 11) return `sms:+${digits}?body=${body}`;
  return "/contact";
}

const STEPS_SAME_DAY = [
  {
    title: "Call or Text Now",
    description: `Dial ${SITE.telephone} or text us a photo of your pile.`,
    icon: <OnSiteConsultationIcon className="h-full w-full" />,
  },
  {
    title: "Get Your Quote",
    description:
      "We'll provide an immediate estimate based on the volume of junk.",
    icon: <UpfrontVolumePricingIcon className="h-full w-full" />,
  },
  {
    title: "Watch it Disappear",
    description:
      "Our crew arrives, loads the truck, sweeps the area, and hauls it away—all within hours of your call.",
    icon: <FullSiteClearanceIcon className="h-full w-full" />,
  },
];

export function SameDayJunkRemovalLanding() {
  const telHref = getTelHref();
  const smsHref = getSameDaySmsHref();

  const sameDayContactFields: ContactFormField[] = [
    {
      id: "same-day-name",
      label: "Name",
      type: "text",
      placeholder: "Your full name",
      width: "half",
    },
    {
      id: "same-day-phone",
      label: "Phone Number",
      type: "text",
      inputType: "tel",
      placeholder: "Enter your phone number",
      width: "half",
    },
    {
      id: "same-day-city",
      label: "City",
      type: "text",
      placeholder: "City in Orange County",
      width: "full",
    },
    {
      id: "same-day-urgency",
      label: "How fast do you need it gone?",
      type: "select",
      placeholder: "Select timing",
      width: "full",
      options: [
        { value: "same-day-today", label: "Same day — today" },
        { value: "tomorrow", label: "Tomorrow" },
        { value: "this-week", label: "Within a few days" },
        { value: "flexible", label: "Flexible / planning ahead" },
      ],
    },
  ];

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-brand-dark)]">
      <section className="-mt-[130px] relative min-h-screen w-full overflow-hidden pt-[230px]">
        <HeroParallaxBackground
          src="https://balderas-assets.s3.amazonaws.com/images/junk_removal/img5.jpg"
          alt="Same day junk removal truck and crew in Orange County"
          priority
        />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] items-end px-6 pb-[180px] lg:px-10">
          <div className="max-w-[920px] text-[var(--color-brand-white)]">
            <HeroHeading className="max-w-[920px]">
              Same Day Junk Removal Orange County: Your Clutter Gone Today
            </HeroHeading>

            <HeroSubheading className="max-w-[940px]">
        
              Did a tenant leave behind a mess? Did your weekend cleaning
              project get out of hand? Or do you just need that old couch gone
              before your new one arrives this afternoon? Sometimes, you
              can&apos;t wait for a scheduled appointment next week. At
              Balderas Demolition Inc., we prioritize &quot;on-call&quot; service
              for our neighbors. Abel Balderas and his team offer same day junk
              removal across Orange County to help you reclaim your space
              without the wait.
            </HeroSubheading>

            <HeroCtas
              className="mt-10 flex-wrap"
              primaryHref={telHref}
              primaryLabel="Call for Same Day Service"
              primaryButtonClassName="lg:w-[300px] xl:w-[340px]"
              secondaryHref="tel:+17143408108"
              secondaryLabel="(714) 340-8108"
              secondaryButtonClassName="md:min-w-[260px] md:w-[280px] lg:w-[340px] xl:w-[400px] 2xl:w-[440px]"
              showSecondaryArrow={false}
            />
          </div>
        </div>
        <DirectionButton
          onClick={scrollToNextSection}
          aria-label="Scroll to next section"
          className="absolute bottom-6 right-5 z-20 hidden lg:flex lg:bottom-24 lg:right-8"
        />
      </section>

      <section className="w-full bg-white py-24">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-20 px-6 lg:px-10 xl:gap-[120px]">
          <div className="w-full lg:hidden">
            <div className="relative h-[360px] w-full overflow-hidden">
              <Image
                src="https://balderas-assets.s3.amazonaws.com/images/junk_removal/img2.png"
                alt="Same day hauling and debris removal in Orange County"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ServiceDetailSection
            imageSrc="https://balderas-assets.s3.amazonaws.com/images/junk_removal/img2.png"
            imageAlt="Urgent junk removal and property cleanouts in Orange County"
            imageSide="right"
            hideImageOnSmallScreens
            title={`When "Tomorrow" Isn't Fast Enough`}
            intro={
              "We specialize in urgent hauling situations. If you call us in the morning, our goal is to have your junk loaded and gone by the afternoon."
            }
            items={[
              {
                heading: "Emergency Property Cleanouts:",
                text: 'Perfect for property managers or realtors needing a quick "trash-out" for a new tenant or an open house.',
              },
              {
                heading: "Last-Minute Move-Outs:",
                text: "Don't leave your security deposit to chance. We'll clear out the leftover items you couldn't fit in the moving truck.",
              },
              {
                heading: "Renovation Debris Pickups:",
                text: "Keep your contractors moving by clearing out demolition debris as it's created.",
              },
              {
                heading: "Hoarding & Estate Situations:",
                text: "When the job is overwhelming and needs immediate professional intervention.",
              },
            ]}
          />
        </div>
      </section>

      <section className="relative w-full overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://balderas-assets.s3.amazonaws.com/images/junk_removal/img4.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#06182C]/72" />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <p className="font-maison text-[26px] font-semibold text-white">
            Urgent Service
          </p>

          <div className="mt-8">
            <SplitHeroText
              title="Why Choose Abel Balderas for Urgent Hauling?"
              description={`In Orange County, "same day" can often mean "hidden fees" or "unreliable crews." Abel Balderas does things differently. We bring the same level of professional demolition-grade service to our express junk removal calls.`}
              titleClassName="text-white"
              descriptionClassName="text-white"
              leftWidthClassName="xl:max-w-[790px]"
              rightWidthClassName="xl:max-w-[500px]"
              rightTopOffsetClassName="xl:pt-[55px]"
            />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
            <GlassFeatureCard
              icon={<OnSiteConsultationIcon className="h-full w-full" />}
              title="Real-Time Communication:"
              description="When you call, you speak to a local professional, not a national call center. Abel knows OC traffic and schedules, so he'll give you an honest arrival window."
            />
            <GlassFeatureCard
              icon={<FullSiteClearanceIcon className="h-full w-full" />}
              title="Full-Service Loading:"
              description="You don't need to move your junk to the curb. We'll go into the garage, the backyard, or the second floor to get it."
            />
            <GlassFeatureCard
              icon={<NoHiddenFeesIcon className="h-full w-full" />}
              title="Transparent Pricing:"
              description='Even for same day calls, we provide a clear, volume-based quote before we start. No "emergency" surcharges—just fair, honest pricing.'
            />
            <GlassFeatureCard
              icon={<ControlledDemolitionIcon className="h-full w-full" />}
              title="Fully Equipped:"
              description="Our trucks are high-capacity and our crews come prepared with dollies, tools for disassembly, and cleaning supplies."
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-24">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-20 px-6 lg:px-10 xl:gap-[120px]">
          <div className="w-full lg:hidden">
            <div className="relative h-[360px] w-full overflow-hidden">
              <Image
                src="https://balderas-assets.s3.amazonaws.com/images/junk_removal/img1.png"
                alt="Junk removal truck serving Orange County neighborhoods"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ServiceIntroSection
            title="Service Areas for Same Day Pickups"
            description="When you call in the morning, our goal is to load and haul the same afternoon. Abel routes crews across Orange County for express junk pickup—prioritizing these corridors for same-day service."
            titleClassName="text-[#0b0300]"
            descriptionClassName="text-[#0b0300]"
          />

          <ServiceDetailSection
            imageSrc="https://balderas-assets.s3.amazonaws.com/images/junk_removal/img1.png"
            imageAlt="Junk removal truck serving Orange County neighborhoods"
            imageSide="right"
            hideImageOnSmallScreens
            textVerticalAlign="top"
            title="Where we prioritize same-day routes"
            intro="We prioritize same day requests in:"
            items={[
              {
                heading: "Tustin & Santa Ana:",
                text: "North and central OC routing for same-day dispatch when you call early.",
              },
              {
                heading: "Irvine & Costa Mesa:",
                text: "South County homes, rentals, and commercial pickups.",
              },
              {
                heading: "Newport Beach & Huntington Beach:",
                text: "Coastal neighborhoods and dense residential streets.",
              },
              {
                heading: "Orange & Anaheim:",
                text: "Core metro and Anaheim corridor haul-outs and cleanouts.",
              },
            ]}
          />

          <aside className="w-full border-t border-[#e8e8e8] pt-12 lg:pt-14">
            <SubHeading className="max-w-[900px] text-[#0b0300]">
              Don&apos;t see your neighborhood listed?
            </SubHeading>
            <BodyText className="mt-4 max-w-[820px] text-[17px] leading-[1.65] text-[#0b0300] md:mt-5 md:text-[18px] md:leading-[1.6]">
              Still call{" "}
              <a
                href={telHref}
                className="font-semibold text-[var(--color-brand-orange)] underline decoration-[var(--color-brand-orange)]/35 underline-offset-[5px] transition hover:decoration-[var(--color-brand-orange)]"
              >
                {SITE.telephone}
              </a>{" "}
              or text a photo of your pile. We regularly extend same-day junk
              removal into other Orange County cities when trucks and crew are
              available—ask Abel for an honest arrival window.
            </BodyText>
          </aside>
        </div>
      </section>

      <section className="w-full bg-white pb-20 xl:pb-28">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-14 px-6 lg:px-10">
          <div className="flex flex-col gap-12 xl:flex-row xl:items-start xl:h-[620px]">
            <div className="w-full xl:w-1/2">
              <div className="relative h-[340px] w-full overflow-hidden sm:h-[400px] md:h-[460px] xl:h-[620px]">
                <Image
                  src="https://balderas-assets.s3.amazonaws.com/images/junk_removal/img3.jpg"
                  alt="Same day junk hauling crew clearing a property quickly"
                  fill
                  sizes="(max-width: 1279px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full xl:w-1/2">
              <MainHeading className="text-[#0b0300]" as="h2">
                How to Get Same Day Service (3 Easy Steps)
              </MainHeading>

              <div className="mt-8 w-full space-y-6 xl:space-y-8">
                {STEPS_SAME_DAY.map((step) => (
                  <ProcessStepWithIcon key={step.title} {...step} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <InfoTicker className="border-y-0 bg-[var(--color-brand-orange)]" />

      <section className="relative w-full overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://balderas-assets.s3.amazonaws.com/images/junk_removal/img1.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#06182C]/58" />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col gap-14 lg:flex-row lg:items-start">
            <ContactCtaText
              className="w-full lg:max-w-[420px] xl:max-w-[444px]"
              titleWrapClassName="w-full lg:max-w-[420px] xl:max-w-[444px]"
              descriptionWrapClassName="mt-5 w-full lg:max-w-[420px] xl:max-w-[444px]"
              title={"Don't Wait—Let's Get It Done Today!"}
              description='Why spend another night with that clutter? Join the hundreds of OC residents who trust Abel Balderas for the fastest junk removal in the county.'
            />

            <ContactFormPanel
              className="w-full lg:max-w-[620px] xl:w-[780px] xl:max-w-[780px]"
              fields={sameDayContactFields}
              submitLabel="Submit"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
