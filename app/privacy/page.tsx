import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy & Environmental Policy | Balderas Demolition Inc.",
  description:
    "Learn how Balderas Demolition Inc. protects your personal information and our commitment to environmentally responsible demolition and disposal in Orange County.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-[860px] px-5 py-24 sm:py-32 md:px-8">
      <h1 className="font-anton text-3xl uppercase tracking-wide text-[var(--color-brand-navy)] sm:text-4xl md:text-5xl">
        Privacy &amp; Environmental Policy
      </h1>
      <p className="mt-4 font-maison text-sm text-gray-500">
        Last updated: May 1, 2026
      </p>

      <div className="mt-10 space-y-8 font-maison text-[15px] leading-relaxed text-gray-700 sm:text-base">
        {/* ───── PRIVACY POLICY ───── */}
        <h2 className="!mt-0 font-anton text-2xl uppercase tracking-wide text-[var(--color-brand-navy)] sm:text-3xl">
          Privacy Policy
        </h2>

        <section>
          <h3 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            1. Information We Collect
          </h3>
          <p>When you interact with our website or contact us for a quote, we may collect the following information:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Personal Information:</strong> Name, phone number, email address, and property address provided through our contact forms or direct communication.</li>
            <li><strong>Project Information:</strong> Details about your demolition, junk removal, or dumpster rental needs that you share with us.</li>
            <li><strong>Usage Data:</strong> Anonymized data about how you interact with our website, including pages visited, time spent, and referring sources. This data is collected through Google Analytics.</li>
            <li><strong>Device Information:</strong> Browser type, operating system, and screen resolution for the purpose of optimizing your website experience.</li>
          </ul>
        </section>

        <section>
          <h3 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            2. How We Use Your Information
          </h3>
          <p>We use the information we collect to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Respond to your inquiries and provide accurate project estimates.</li>
            <li>Schedule consultations and coordinate demolition or hauling services.</li>
            <li>Improve our website content and user experience.</li>
            <li>Send follow-up communications related to your project (we will never send unsolicited marketing emails).</li>
            <li>Comply with legal obligations under California law.</li>
          </ul>
        </section>

        <section>
          <h3 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            3. Information Sharing
          </h3>
          <p>
            Balderas Demolition Inc. does <strong>not</strong> sell, trade, or
            rent your personal information to third parties. We may share
            information only in the following circumstances:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Service Providers:</strong> With trusted partners who assist in operating our website or conducting our business (e.g., analytics providers), under strict confidentiality agreements.</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental regulation.</li>
            <li><strong>Safety:</strong> To protect the rights, property, or safety of Balderas Demolition Inc., our clients, or the public.</li>
          </ul>
        </section>

        <section>
          <h3 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            4. Cookies and Tracking Technologies
          </h3>
          <p>
            Our website uses cookies and similar technologies (such as Google
            Analytics and CallRail) to understand how visitors use our site. You
            can control cookie preferences through your browser settings. Disabling
            cookies may affect certain features of the website.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            5. California Consumer Privacy Act (CCPA)
          </h3>
          <p>
            As a California-based business, we respect your rights under the
            California Consumer Privacy Act. You have the right to:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Request disclosure of the categories and specific pieces of personal information we have collected about you.</li>
            <li>Request deletion of your personal information.</li>
            <li>Opt out of the sale of your personal information (note: we do not sell personal information).</li>
            <li>Not be discriminated against for exercising your privacy rights.</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us at
            <strong> (714) 340-8108</strong>.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            6. Data Security
          </h3>
          <p>
            We implement commercially reasonable security measures to protect
            your personal information from unauthorized access, alteration,
            disclosure, or destruction. However, no method of electronic
            transmission or storage is 100% secure, and we cannot guarantee
            absolute security.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            7. Children&apos;s Privacy
          </h3>
          <p>
            Our website is not intended for individuals under the age of 18. We
            do not knowingly collect personal information from children. If you
            believe a child has provided us with personal information, please
            contact us so we can promptly delete it.
          </p>
        </section>

        {/* ───── ENVIRONMENTAL POLICY ───── */}
        <div className="!mt-16 h-px w-full bg-gray-200" />

        <h2 className="font-anton text-2xl uppercase tracking-wide text-[var(--color-brand-navy)] sm:text-3xl">
          Environmental Policy
        </h2>

        <section>
          <h3 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            Our Commitment to Orange County
          </h3>
          <p>
            At Balderas Demolition Inc., we believe that demolition and
            environmental responsibility go hand in hand. As an Orange County
            business, we are committed to protecting the communities, landscapes,
            and ecosystems that make this region special.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            CALGreen Compliance
          </h3>
          <p>
            We adhere to California&apos;s Green Building Standards Code
            (CALGreen), which requires a minimum 65% diversion rate for
            construction and demolition debris. Our on-site sorting process
            ensures that recyclable materials — including concrete, wood, metal,
            and green waste — are directed to specialized recycling facilities
            rather than landfills.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            Debris Recycling &amp; Diversion
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Concrete &amp; Masonry:</strong> Transported to local crushing facilities where it is reprocessed into road base and aggregate.</li>
            <li><strong>Wood &amp; Lumber:</strong> Clean wood is separated for recycling into mulch, composite materials, or biomass energy.</li>
            <li><strong>Metals:</strong> Rebar, copper, aluminum, and other metals are sorted and sent to scrap recycling centers.</li>
            <li><strong>Donations:</strong> Usable fixtures, appliances, and furniture from estate cleanouts are donated to local Orange County charities whenever possible.</li>
          </ul>
        </section>

        <section>
          <h3 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            Hazardous Materials Management
          </h3>
          <p>
            We take hazardous material management seriously. Before any
            demolition project, we coordinate with certified inspectors to test
            for asbestos, lead paint, and other regulated substances. When
            hazardous materials are identified, we work with licensed abatement
            contractors to ensure safe removal in full compliance with SCAQMD
            (South Coast Air Quality Management District) regulations.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            Dust &amp; Air Quality
          </h3>
          <p>
            We maintain dedicated water sources on every job site to suppress
            dust during demolition — a critical measure during Orange County&apos;s
            Santa Ana wind season. Our crews follow strict AQMD protocols to
            protect air quality for neighboring homes and businesses.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            Contact Us
          </h3>
          <p>
            Questions about our privacy practices or environmental policies?
            We&apos;re happy to discuss them with you.
          </p>
          <ul className="mt-3 space-y-1 pl-6">
            <li><strong>Balderas Demolition Inc.</strong></li>
            <li>Phone: (714) 340-8108</li>
            <li>Website: demolitionoc.com</li>
            <li>Serving all of Orange County, CA</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
