import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use | Balderas Demolition Inc.",
  description:
    "Review the terms and conditions governing your use of the Balderas Demolition Inc. website and services across Orange County, CA.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-[860px] px-5 py-24 sm:py-32 md:px-8">
      <h1 className="font-anton text-3xl uppercase tracking-wide text-[var(--color-brand-navy)] sm:text-4xl md:text-5xl">
        Terms of Use
      </h1>
      <p className="mt-4 font-maison text-sm text-gray-500">
        Last updated: May 1, 2026
      </p>

      <div className="mt-10 space-y-8 font-maison text-base leading-relaxed text-gray-700 sm:text-base">
        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using the Balderas Demolition Inc. website
            (&quot;demolitionoc.com&quot;), you agree to be bound by these Terms
            of Use. If you do not agree with any part of these terms, please do
            not use our website. These terms apply to all visitors, users, and
            others who access or use the site.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            2. Description of Services
          </h2>
          <p>
            Balderas Demolition Inc. provides demolition, junk removal, dumpster
            rental, and hauling services across Orange County, California. This
            website is intended to provide general information about our services
            and to facilitate contact between prospective clients and our team.
            Content on this website does not constitute a binding offer,
            contract, or guarantee of service availability.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            3. Use of Website
          </h2>
          <p>You agree to use this website only for lawful purposes and in a manner that does not infringe upon or restrict the rights of others. Specifically, you agree not to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Use the site in any way that violates applicable local, state, or federal law.</li>
            <li>Attempt to gain unauthorized access to any portion of the site or its related systems.</li>
            <li>Transmit any material that is defamatory, offensive, or otherwise objectionable.</li>
            <li>Use any automated tools, bots, or scrapers to access or collect data from the site without prior written consent.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            4. Intellectual Property
          </h2>
          <p>
            All content on this website — including text, images, logos, design
            elements, and graphics — is the property of Balderas Demolition Inc.
            and is protected by applicable copyright and trademark laws. You may
            not reproduce, distribute, or create derivative works from any
            content without our express written permission.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            5. Estimates and Pricing
          </h2>
          <p>
            Any pricing information, cost estimates, or quotes mentioned on this
            website are for general informational purposes only. Actual project
            costs are determined after an on-site evaluation by Abel Balderas or
            an authorized representative. Written quotes provided directly to
            you supersede any general pricing information found on this website.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            6. Limitation of Liability
          </h2>
          <p>
            Balderas Demolition Inc. makes every effort to ensure the accuracy of
            information on this site, but we do not warrant that the content is
            error-free, complete, or current. To the fullest extent permitted by
            California law, Balderas Demolition Inc. shall not be liable for any
            direct, indirect, incidental, or consequential damages arising from
            your use of this website or reliance on any information provided
            herein.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            7. Third-Party Links
          </h2>
          <p>
            This website may contain links to third-party websites for your
            convenience. Balderas Demolition Inc. does not endorse, control, or
            assume responsibility for the content, privacy policies, or
            practices of any third-party sites. You access linked sites at your
            own risk.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            8. Indemnification
          </h2>
          <p>
            You agree to indemnify, defend, and hold harmless Balderas Demolition
            Inc., its owner, employees, and agents from any claims, damages,
            losses, or expenses (including reasonable attorney fees) arising out
            of your use of this website or violation of these Terms of Use.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            9. Changes to These Terms
          </h2>
          <p>
            We reserve the right to modify these Terms of Use at any time.
            Changes will be posted on this page with an updated revision date.
            Your continued use of the website after any changes constitutes
            acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            10. Governing Law
          </h2>
          <p>
            These Terms of Use are governed by and construed in accordance with
            the laws of the State of California. Any disputes arising from these
            terms shall be subject to the exclusive jurisdiction of the courts in
            Orange County, California.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[var(--color-brand-navy)] sm:text-xl">
            11. Contact Information
          </h2>
          <p>
            If you have questions about these Terms of Use, please contact us:
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
