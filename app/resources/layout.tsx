import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import {
  getBreadcrumbJsonLd,
  getFaqJsonLd,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title:
    "Demolition & Junk Removal Resources Orange County | Demolition OC",
  description:
    "Guides, FAQs, and 2026 cost articles on demolition, dumpster rentals, and junk removal in Orange County. Tips and answers from Demolition OC.",
  path: "/resources",
  image: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/resources/top-bg.png",
  imageAlt:
    "Demolition OC resources, guides, and FAQs about demolition in Orange County",
  keywords: [
    "demolition guide Orange County",
    "house demolition cost",
    "junk removal tips",
    "dumpster rental guide",
    "C-21 licensed demolition",
    "Demolition OC blog",
  ],
});

/**
 * Mirror the FAQ list rendered in `app/resources/page.tsx` so the structured
 * data stays in sync with what the user sees on the page.
 */
const RESOURCES_FAQ = [
  {
    question: "What services does Demolition OC offer?",
    answer:
      "We offer interior and exterior residential demolition, structural demolition, dumpster rentals, and full-service junk removal across Orange County.",
  },
  {
    question: "How quickly can I get a dumpster delivered?",
    answer:
      "In most Orange County cities we can deliver a dumpster within 24–48 hours of booking. Same-day delivery is often available — call us to check current availability.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes. From single-room kitchen tear-outs to commercial site clearance, our licensed C-21 team is equipped to handle projects of every size and scope.",
  },
  {
    question: "What happens to the debris and waste you remove?",
    answer:
      "We sort materials on-site so concrete, wood, metal, and green waste can be diverted to recycling centers. Anything that can’t be recycled is disposed of at permitted facilities.",
  },
  {
    question: "How do I know which dumpster size is right for my project?",
    answer:
      "Tell us a bit about your project — square footage, the type of debris, and your timeline — and we’ll recommend the most cost-effective dumpster size so you don’t pay for space you won’t use.",
  },
  {
    question: "Do you provide demolition services on short notice?",
    answer:
      "Whenever possible, yes. Reach out with your project details and we’ll do our best to fit you into the schedule, including emergency demolition or site clearance.",
  },
];

const resourcesFaqJsonLd = getFaqJsonLd(RESOURCES_FAQ);
const resourcesBreadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
]);

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd id="ld-resources-faq" data={resourcesFaqJsonLd} />
      <JsonLd
        id="ld-resources-breadcrumb"
        data={resourcesBreadcrumbJsonLd}
      />
      {children}
    </>
  );
}
