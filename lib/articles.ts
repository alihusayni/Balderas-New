export type ArticleCategoryId =
  | "sales"
  | "services"
  | "company"
  | "industry"
  | "environmental";

export type ArticleBlock =
  | { type: "paragraph"; text: string; variant?: "book" | "bold" }
  | { type: "heading"; text: string; accent?: string }
  | {
      type: "list";
      items: Array<{ heading?: string; text: string }>;
      /** `prose` = one paragraph; `bullets` = disc list (Maison body size). */
      format?: "prose" | "bullets";
    }
  | { type: "image"; src: string; alt: string }
  | { type: "quote"; text: string; author?: string };

export type ArticleAuthor = {
  name: string;
  avatarSrc?: string;
};

export type Article = {
  slug: string;
  /** Visible page title (H1) and JSON-LD headline. */
  title: string;
  /** Meta description, OG description, and article cards. */
  description: string;
  /**
   * When set, used for `<title>` / Open Graph title only (e.g. SEO-optimized).
   * Defaults to `title`.
   */
  seoTitle?: string;
  /**
   * When set, this article is served only at this path (e.g. under `/demolition/`).
   * `/resources/[slug]` permanently redirects here.
   */
  canonicalPath?: string;
  imageSrc: string;
  imageAlt: string;
  categories: ArticleCategoryId[];
  author: ArticleAuthor;
  publishedDate: string;
  readTime: string;
  body: ArticleBlock[];
  cta?: {
    title: string;
    description: string;
    label: string;
    href: string;
    backgroundSrc: string;
  };
};

export const ARTICLES: Article[] = [
  {
    slug: "house-demolition-costs-process",
    canonicalPath: "/demolition/house-demolition-costs-process",
    seoTitle: "House Demolition Costs & Process Orange County (2026 Guide)",
    title:
      "The Ultimate Guide to House Demolition in Orange County: Process, Regulations, and 2026 Cost Expectations",
    description:
      "Planning a residential teardown? Learn the step-by-step house demolition process in Orange County, including 2026 cost factors, permits, and asbestos rules with Abel Balderas.",
    imageSrc: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/resources/6.jpg",
    imageAlt:
      "Excavator carefully demolishing a residential structure in Orange County",
    categories: ["industry", "services"],
    author: { name: "Abel Balderas" },
    publishedDate: "May 2, 2026",
    readTime: "14 min read",
    body: [
      {
        type: "paragraph",
        text:
          "Tearing down a house is often the first step toward building a dream. Whether you\u2019ve purchased a \u201Cfixer-upper\u201D in Floral Park that is beyond repair, or you\u2019re clearing a lot in Newport Beach for a modern custom build, residential demolition is a complex undertaking. It requires a blend of heavy machinery, surgical precision, and a deep understanding of California\u2019s stringent environmental and safety regulations.",
      },
      {
        type: "paragraph",
        text:
          "In this guide, Abel Balderas and the team at Balderas Demolition Inc. break down exactly what happens when a house comes down, the hurdles you\u2019ll face in Orange County, and what you should expect to invest in the process.",
      },
      { type: "heading", text: "Part 1: The Step-By-Step Demolition Process" },
      {
        type: "paragraph",
        text:
          "Demolition isn\u2019t just about a wrecking ball (in fact, wrecking balls are rarely used in modern residential demo). It is a highly choreographed sequence of events designed to protect the neighbors, the environment, and the future build site.",
      },
      {
        type: "heading",
        text: "1. The Site Assessment and Hazardous Materials Survey",
      },
      {
        type: "paragraph",
        text:
          "Before a single wall comes down, the home must be inspected. In Orange County, the most critical check is for Asbestos and Lead Paint. Homes built before 1980 frequently contain these materials in popcorn ceilings, floor tiles, and insulation.",
      },
      {
        type: "list",
        items: [
          {
            heading: "The Law:",
            text: "California law requires a certified inspector to test the property. If hazardous materials are found, a specialized abatement team must remove them before general demolition begins.",
          },
        ],
      },
      { type: "heading", text: "2. Permitting and Legal Clearances" },
      {
        type: "paragraph",
        text:
          "You cannot simply tear down a structure because you own the land. In OC, you must deal with:",
      },
      {
        type: "list",
        format: "bullets",
        items: [
          {
            heading: "The Local Building Department:",
            text: "Whether you are in Santa Ana, Irvine, or Anaheim, you need a specific Demolition Permit.",
          },
          {
            heading: "AQMD (Air Quality Management District):",
            text: "You must file a Notification of Demolition at least 10 business days before work starts. This ensures that dust and asbestos risks are managed.",
          },
          {
            heading: "DigAlert (811):",
            text: "We notify utility companies to mark underground lines for gas, water, and electricity.",
          },
        ],
      },
      { type: "heading", text: "3. Utility Disconnects" },
      {
        type: "paragraph",
        text:
          "A house must be \u201Ccapped.\u201D This means the gas line is shut off at the street, the electricity is pulled by Southern California Edison (SCE), and the sewer line is capped and inspected. Pro Tip: Utility companies can take 2\u20134 weeks to complete these disconnects, so plan ahead!",
      },
      {
        type: "heading",
        text: "4. Soft Demo (Stripping the Interior)",
      },
      {
        type: "paragraph",
        text:
          "Before the heavy machinery arrives, we perform a \u201Csoft demo.\u201D We remove all non-structural items: windows, doors, appliances, cabinets, and flooring. This allows us to sort materials for recycling\u2014a requirement for meeting California\u2019s Green Building Standards (CALGreen).",
      },
      { type: "heading", text: "5. Structural Demolition" },
      {
        type: "paragraph",
        text:
          "This is the \u201Cmain event.\u201D Using an excavator equipped with a \u201Cthumb\u201D or \u201Cgrapple,\u201D we systematically pull the house down. We usually start from the top and work our way in, ensuring the debris falls into the \u201Cfootprint\u201D of the home to protect nearby trees or neighboring houses.",
      },
      { type: "heading", text: "6. Foundation and Footing Removal" },
      {
        type: "paragraph",
        text:
          "Once the wood and drywall are gone, we dig out the concrete slab and footings. This is crucial for your new builder; any concrete left in the ground can interfere with the new foundation.",
      },
      { type: "heading", text: "7. Site Clearing and Grading" },
      {
        type: "paragraph",
        text:
          "The final step is hauling. We remove the last of the debris and \u201Crough grade\u201D the lot, leaving you with a flat, clean slate of dirt ready for the next chapter.",
      },
      { type: "heading", text: "Part 2: What Goes Into the Cost?" },
      {
        type: "paragraph",
        text:
          "When residents ask, \u201CHow much does it cost to demo a house in Orange County?\u201D the answer depends on several variables. In 2026, the average cost for a standard 1,500\u20132,000 square foot home ranges between $15,000 and $35,000, but here is what drives those numbers:",
      },
      {
        type: "heading",
        text: "1. Square Footage and Construction Type",
      },
      {
        type: "paragraph",
        text:
          "A 3,000-square-foot home costs more than a 1,000-square-foot bungalow simply due to the volume of debris. Additionally, a stucco-on-wood-frame house is cheaper to demo than a brick or concrete block home, which requires more heavy-duty equipment time.",
      },
      {
        type: "heading",
        text: "2. Presence of Hazardous Materials",
      },
      {
        type: "paragraph",
        text:
          "If your home requires asbestos abatement, expect to add $3,000 to $10,000 to your budget. This is a non-negotiable cost driven by health and safety laws.",
      },
      {
        type: "heading",
        text: "3. Location and Accessibility",
      },
      {
        type: "paragraph",
        text:
          "Orange County has many \u201Ctight\u201D neighborhoods. If we are working in a narrow canyon in Laguna Beach or a crowded street in Old Towne Orange, we have to use smaller equipment and be much more careful with debris management. This added labor can increase the price.",
      },
      {
        type: "heading",
        text: "4. Disposal and Recycling Fees",
      },
      {
        type: "paragraph",
        text:
          "California has some of the highest \u201Ctipping fees\u201D (the cost to dump debris) in the country. However, we offset some of these costs by recycling. Concrete, wood, and metal are hauled to specialized OC recycling centers rather than landfills.",
      },
      {
        type: "heading",
        text: "5. Foundation Depth",
      },
      {
        type: "paragraph",
        text:
          "If your home has a standard slab, removal is straightforward. If it has a deep crawlspace or an old basement (rare in OC but present in older areas), the excavation costs will rise.",
      },
      {
        type: "heading",
        text: "Part 3: Orange County Specific Expectations",
      },
      {
        type: "paragraph",
        text:
          "Living in OC comes with specific perks, but also specific rules for demolition.",
      },
      { type: "heading", text: "Dust Mitigation" },
      {
        type: "paragraph",
        text:
          "The Santa Ana winds are a major factor in our work. In Orange County, we are required to have a dedicated water source on-site to \u201Cwet down\u201D the debris as it falls. This prevents dust from blowing into your neighbor\u2019s pool or through their open windows.",
      },
      {
        type: "heading",
        text: "The \u201CNeighborhood Watch\u201D Factor",
      },
      {
        type: "paragraph",
        text:
          "Orange County residents value their peace and quiet. Most cities (like Irvine or Newport Beach) have strict \u201Cnoise ordinances.\u201D Typically, demolition can only occur between 7:00 AM and 5:00 PM on weekdays. At Balderas Demolition Inc., we prioritize being good neighbors, ensuring we don\u2019t start the loud machinery a minute before we\u2019re allowed.",
      },
      { type: "heading", text: "Permit Timelines" },
      {
        type: "paragraph",
        text:
          "In cities like Tustin or Costa Mesa, permit approval can take anywhere from 2 to 6 weeks. You should never hire a contractor who promises to start \u201Ctomorrow\u201D without a permit; the fines from the city can be thousands of dollars and can shut your project down for months.",
      },
      {
        type: "heading",
        text: "Part 4: Why Hire Abel Balderas and Balderas Demolition Inc.?",
      },
      {
        type: "paragraph",
        text:
          "There are plenty of companies with an excavator, but residential demolition in a place as refined as Orange County requires a specialized touch.",
      },
      {
        type: "list",
        format: "bullets",
        items: [
          {
            heading: "Personal Accountability:",
            text: "Abel Balderas doesn\u2019t just run the office; he oversees the site. You have a direct line to the owner, ensuring that your concerns are addressed immediately.",
          },
          {
            heading: "Surgical Precision:",
            text: "We specialize in \u201Ctight-access\u201D demo. If you\u2019re keeping your backyard pool but tearing down the house, we know how to protect your assets while removing the debris.",
          },
          {
            heading: "Honest, All-In Pricing:",
            text: "We don\u2019t believe in \u201Cchange orders.\u201D When we give you a quote for a house demo, it includes the permits, the labor, the hauling, and the final sweep.",
          },
        ],
      },
      {
        type: "image",
        src: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/article/2.jpg",
        alt: "Heavy equipment demolishing a building with water spray for dust control and crew on site in Orange County",
      },
      {
        type: "heading",
        text: "Summary: Your 2026 Demolition Checklist",
      },
      {
        type: "paragraph",
        text:
          "If you are planning a demolition this year, here is your quick-start checklist:",
      },
      {
        type: "list",
        format: "bullets",
        items: [
          {
            heading: "Survey:",
            text: "Get an asbestos/lead test (we can refer you to trusted OC inspectors).",
          },
          {
            heading: "Utilities:",
            text: "Call SCE and your gas provider to start the \u201Ckill-service\u201D process.",
          },
          {
            heading: "Trees:",
            text: "Identify any \u201Cprotected trees\u201D on your lot; OC cities are very strict about removing oaks or sycamores.",
          },
          {
            heading: "Contract:",
            text: "Hire a licensed, insured professional like Balderas Demolition Inc.",
          },
        ],
      },
      {
        type: "heading",
        text: "Ready to clear the way for your new home?",
      },
      {
        type: "paragraph",
        text:
          "Demolition is the end of one story and the beginning of another. Let Abel Balderas make sure it starts on the right foot.",
      },
      {
        type: "paragraph",
        text:
          "Contact Balderas Demolition Inc. today for a free on-site consultation and a transparent quote on your residential demolition project.",
      },
    ],
    cta: {
      title: "Get your transparent demolition quote",
      description:
        "Free on-site consultation for residential demolition across Orange County\u2014permits, labor, hauling, and final sweep, explained upfront.",
      label: "Contact Balderas Demolition Inc.",
      href: "/#contact",
      backgroundSrc: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/article/3.jpg",
    },
  },
  {
    slug: "hut-top-structure-removal",
    canonicalPath: "/demolition/hut-top-structure-removal",
    seoTitle:
      "Hut Top & Structure Removal Costs Orange County | Balderas Demolition Inc.",
    title:
      "Hut Top & Structure Removal in Orange County: 2026 Cost and Process Guide",
    description:
      "What does it cost to remove a backyard hut or top-down structure in OC? See our 2026 pricing guide for deconstruction and hauling with Abel Balderas.",
    imageSrc: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/services/img2.png",
    imageAlt:
      "Careful residential structure removal and demolition in Orange County",
    categories: ["services", "industry"],
    author: { name: "Abel Balderas" },
    publishedDate: "May 3, 2026",
    readTime: "8 min read",
    body: [
      {
        type: "paragraph",
        text:
          "Whether you are looking to remove a \u201Chut-style\u201D backyard structure or you\u2019re a property manager requiring a controlled Top-Down (Hut Top) deconstruction of an accessory building, navigating the costs in Orange County requires a bit of local know-how.",
      },
      {
        type: "paragraph",
        text:
          "In a region where property lines are tight and safety regulations are strict, Abel Balderas and Balderas Demolition Inc. provide the precision needed to clear these structures without damaging your main home or your neighbor\u2019s yard.",
      },
      { type: "heading", text: "What is \u201CHut Top\u201D Removal?" },
      {
        type: "paragraph",
        text:
          "In the demolition industry, \u201CHut Top\u201D generally refers to two specific types of projects common in Orange County:",
      },
      {
        type: "list",
        format: "bullets",
        items: [
          {
            heading: "Top-Down Deconstruction:",
            text: "A method where a structure is dismantled starting from the roof (the \u201Ctop\u201D) down to the foundation. This is used when there is no room for heavy machinery to \u201Cknock over\u201D a building safely.",
          },
          {
            heading: "Backyard \u201CHut\u201D Structures:",
            text: "The removal of large, built-in hot tub gazebos, heavy-duty garden huts, or detached ADU-style \u201Chuts\u201D that have become eyesores or safety hazards.",
          },
        ],
      },
      {
        type: "heading",
        text: "Estimated Hut Top Removal Costs in Orange County",
      },
      {
        type: "paragraph",
        text:
          "In 2026, the cost for these services in OC varies based on the material (wood vs. metal vs. concrete) and how much \u201Csurgical\u201D labor is required.",
      },
      { type: "heading", text: "What Influences Your Removal Price?" },
      {
        type: "heading",
        text: "1. Accessibility & \u201CThe OC Squeeze\u201D",
      },
      {
        type: "paragraph",
        text:
          "Orange County is known for beautiful homes on narrow lots. If Abel\u2019s crew can\u2019t get a Bobcat or a large truck into your backyard, the \u201CHut Top\u201D must be dismantled by hand and carried out piece-by-piece. This manual labor increases the time and cost but ensures your landscaping and fences stay intact.",
      },
      { type: "heading", text: "2. Utility Disconnects" },
      {
        type: "paragraph",
        text:
          "Many backyard huts or top-level structures have integrated lighting, heating, or plumbing.",
      },
      {
        type: "list",
        format: "bullets",
        items: [
          {
            heading: "Electrical:",
            text: "Must be safely capped at the breaker.",
          },
          {
            heading: "Gas:",
            text: "High-efficiency heaters in \u201Chuts\u201D require professional capping to prevent leaks.",
          },
          {
            heading: "Water:",
            text: "Drainage must be plugged to prevent soil erosion during the demo.",
          },
        ],
      },
      { type: "heading", text: "3. Material Weight and Disposal" },
      {
        type: "paragraph",
        text:
          "A cedar wood hut is much easier (and cheaper) to dispose of than one built with heavy shingles, stucco, or metal framing. In Orange County, disposal fees are calculated by weight, and we prioritize recycling metal and wood to keep your costs down.",
      },
      {
        type: "image",
        src: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/article/2.jpg",
        alt: "Controlled structure demolition with equipment and crew on a residential lot in Orange County",
      },
      {
        type: "heading",
        text: "The Balderas Demolition Inc. Process: Systematic \u201CHut\u201D Removal",
      },
      {
        type: "paragraph",
        text:
          "When Abel Balderas takes on a removal project, he follows a strict protocol to ensure safety:",
      },
      {
        type: "list",
        format: "bullets",
        items: [
          {
            heading: "Structural Assessment:",
            text: "We determine if the structure is \u201Cfree-standing\u201D or tied into your home\u2019s main foundation or deck.",
          },
          {
            heading: "Safety Zone Setup:",
            text: "We create a perimeter to protect your pool, windows, and plants from falling shingles or debris.",
          },
          {
            heading: "The \u201CTop-Down\u201D Tear:",
            text: "We remove the roof (the hut top) first to relieve pressure on the walls, preventing an uncontrolled collapse.",
          },
          {
            heading: "Broom-Clean Finish:",
            text: "We don\u2019t just haul the big pieces. We use magnetic rakes to pick up every screw and nail, leaving your yard safe for kids and pets.",
          },
        ],
      },
      {
        type: "heading",
        text: "Why Choose Abel Balderas for Your Removal?",
      },
      {
        type: "paragraph",
        text:
          "Many \u201Cjunk haulers\u201D will offer to tear down a hut, but they often lack the demolition insurance and structural knowledge to do it safely. Balderas Demolition Inc. provides:",
      },
      {
        type: "list",
        format: "bullets",
        items: [
          {
            heading: "Licensed Expertise:",
            text: "We understand how to handle load-bearing components.",
          },
          {
            heading: "Responsive Communication:",
            text: "Abel personally answers your questions and provides a clear, no-hidden-fee quote.",
          },
          {
            heading: "Local Reliability:",
            text: "Based in Tustin, we know the permit requirements for every city from Irvine to Huntington Beach.",
          },
        ],
      },
      {
        type: "heading",
        text: "Ready to clear that structure off your property?",
      },
      {
        type: "paragraph",
        text:
          "Don\u2019t let an old hut or roof-level structure hold up your backyard renovation. Get a professional, clean, and fast removal from the experts.",
      },
      {
        type: "paragraph",
        text:
          "Balderas Demolition Inc. serves all of Orange County, CA. Call Abel today: (714) 340-8108.",
      },
    ],
    cta: {
      title: "Request a free hut removal quote",
      description:
        "Tell us about your backyard hut, gazebo, or accessory structure\u2014we\u2019ll walk you through scope, permits, and a clear, upfront price.",
      label: "Request a Free Hut Removal Quote",
      href: "/#contact",
      backgroundSrc: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/article/3.jpg",
    },
  },
  {
    slug: "the-high-cost-of-cheap-why-a-licensed-demolition-contractor-is-non-negotionable",
    canonicalPath: "/demolition/the-high-cost-of-cheap-why-a-licensed-demolition-contractor-is-non-negotionable",
    title:
      "The High Cost of \u201CCheap\u201D: Why a Licensed Demolition Contractor is Non-Negotiable in Orange County",
    description:
      "Why hiring an unlicensed contractor for demolition in Orange County can cost you 10x what you saved\u2014and how a licensed C-21 team protects your property, your wallet, and your family.",
    imageSrc: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/article/1.jpg",
    imageAlt: "Yellow excavator demolishing a residential structure",
    categories: ["industry", "services"],
    author: { name: "Abel Balderas" },
    publishedDate: "April 16, 2026",
    readTime: "9 min read",
    body: [
      {
        type: "paragraph",
        text:
          "In the world of home improvement, the temptation to \u201Csave a few bucks\u201D by hiring an unlicensed handyman for a demolition job is real. However, in Orange County, where property values are high and regulations are tight, that small initial saving can quickly turn into a financial nightmare.",
      },
      {
        type: "paragraph",
        text:
          "Demolition isn\u2019t just about swinging a sledgehammer\u2014it\u2019s a regulated trade that requires a C-21 Building Moving/Demolition License in the State of California. Here is why hiring a licensed professional like the Balderas Demolition Inc. team is the only way to protect your biggest investment.",
      },
      { type: "heading", text: "1. Legal Compliance and Permitting Mastery" },
      {
        type: "paragraph",
        text:
          "Every city in Orange County, from Irvine to Huntington Beach, has its own set of building codes. A licensed contractor understands the specific \u201Cred tape\u201D required to keep your project legal:",
      },
      {
        type: "list",
        items: [
          {
            heading: "The C-21 License:",
            text: "In California, any job over $500 (labor and materials combined) must be performed by a licensed contractor. Hiring an unlicensed person for a $5,000 kitchen demo is a violation of state law.",
          },
          {
            heading: "SCAQMD Notifications:",
            text: "Demolition in OC requires notification to the South Coast Air Quality Management District. Licensed contractors handle these filings to ensure you aren\u2019t hit with massive environmental fines.",
          },
          {
            heading: "Permit Pulling:",
            text: "Most homeowners don\u2019t realize that they are legally responsible for work done on their property. If an unlicensed worker does unpermitted demo, the city can halt your entire remodel, force you to redo the work, and levy heavy fines.",
          },
        ],
      },
      {
        type: "heading",
        text: "2. Protection Against Massive Financial Liability",
      },
      {
        type: "paragraph",
        text:
          "This is the single biggest risk of hiring unlicensed labor. If a worker gets injured on your property and they don\u2019t have Workers\u2019 Compensation Insurance, you are legally considered their employer.",
      },
      {
        type: "list",
        items: [
          {
            heading: "Injury Claims:",
            text: "If an unlicensed worker falls off a ladder or cuts themselves on your site, they can sue you for medical bills, lost wages, and pain and suffering. Your standard Homeowners Insurance policy may refuse to cover claims resulting from illegal, unlicensed work.",
          },
          {
            heading: "Property Damage:",
            text: "If an unlicensed worker accidentally hits a main water line and floods your neighbor\u2019s yard, or severs a gas line, you are personally liable for the damages. A licensed contractor carries General Liability Insurance to ensure you never pay a dime for accidents.",
          },
        ],
      },
      {
        type: "heading",
        text: "3. Hazardous Material Management (Asbestos & Lead)",
      },
      {
        type: "paragraph",
        text:
          "Many Orange County homes built before 1980 contain asbestos in the drywall mud, floor tiles, or acoustic ceilings.",
      },
      {
        type: "list",
        items: [
          {
            heading: "The Licensed Advantage:",
            text: "A licensed contractor is trained to identify \u201Cred flag\u201D materials. We work with certified inspectors to test the site before demo starts.",
          },
          {
            heading: "The Unlicensed Risk:",
            text: "An unlicensed worker may unknowingly (or worse, knowingly) smash through asbestos-containing materials, releasing toxic fibers into your home\u2019s air vents. This creates a health hazard for your family and can cost tens of thousands of dollars in professional decontamination fees.",
          },
        ],
      },
      {
        type: "heading",
        text: "4. Strategic Waste Management (CALGreen Compliance)",
      },
      {
        type: "paragraph",
        text:
          "Orange County has strict \u201Cdiversion\u201D requirements. For most demolition projects, you are legally required to recycle or reuse at least 65% of the debris.",
      },
      {
        type: "list",
        items: [
          {
            heading: "Documented Hauling:",
            text: "Licensed contractors provide the \u201Cweight tickets\u201D and \u201Ctonnage reports\u201D required by the city to close out your permit.",
          },
          {
            heading: "Unlicensed \u201CFly-Dumping\u201D:",
            text: "Unlicensed haulers often \u201Cfly-dump\u201D debris in alleyways or commercial bins to avoid dump fees. If that debris is traced back to your address via old mail or discarded documents, you are the one who faces the criminal citation and the cleanup costs.",
          },
        ],
      },
      { type: "heading", text: "5. Protecting Your Future Resale Value" },
      {
        type: "paragraph",
        text:
          "When you eventually sell your Orange County home, you must provide a Transfer Disclosure Statement (TDS).",
      },
      {
        type: "list",
        items: [
          {
            heading: "The Paper Trail:",
            text: "Buyers today are savvy. Their inspectors will check if major renovations or demolitions were done with permits. If you cannot show that a licensed contractor performed the work, it can kill a deal or force you to drop your price significantly to cover the \u201Crisk\u201D the new buyer is taking.",
          },
        ],
      },
      {
        type: "image",
        src: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/article/2.jpg",
        alt: "Worker spraying water for dust suppression at a demolition site",
      },
      {
        type: "heading",
        text: "The Abel Balderas Difference:",
        accent: "Accountability",
      },
      {
        type: "paragraph",
        variant: "bold",
        text:
          "When you hire Balderas Demolition Inc., you aren\u2019t just getting a crew; you\u2019re getting the peace of mind that comes with a state-verified license.",
      },
      {
        type: "list",
        format: "bullets",
        items: [
          {
            heading: "Verified Experience:",
            text: "To get a C-21 license, the State of California requires 4 years of verified journey-level experience and a rigorous law and trade exam.",
          },
          {
            heading: "Bonded for Your Protection:",
            text: "We carry a contractor\u2019s bond that acts as a financial guarantee that the work will be completed as promised.",
          },
        ],
      },
      {
        type: "quote",
        text:
          "My license isn\u2019t just a piece of paper; it\u2019s my promise to the Orange County community that the job will be done safely, legally, and right the first time.",
        author: "Abel Balderas",
      },
    ],
    cta: {
      title: "Don\u2019t Roll the Dice with Your Home",
      description:
        "The \u201Csavings\u201D from hiring an unlicensed contractor are an illusion. One accident, one missed permit, or one asbestos exposure will cost you 10x what you saved.",
      label: "Verify Our License & Get a Quote",
      href: "/#contact",
      backgroundSrc: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/article/3.jpg",
    },
  },
  {
    slug: "affordable-dumpster-rental-and-demolition-services",
    canonicalPath: "/dumpster-rental/affordable-dumpster-rental-and-demolition-services",
    title:
      "Affordable Dumpster Rental and Demolition Services in Orange County: Get a Free Quote Today",
    description:
      "Flat-rate dumpster rentals and demolition services across Orange County. Driveway-safe containers, same-week delivery, zero hidden fees. Free quote from Balderas Demolition Inc.",
    imageSrc: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/resources/1.png",
    imageAlt:
      "Balderas Demolition Inc. dumpster trailer with phone number 714-340-8108",
    categories: ["sales", "services"],
    author: { name: "Marcus Hale" },
    publishedDate: "April 12, 2026",
    readTime: "6 min read",
    body: [
      {
        type: "paragraph",
        text:
          "Whether you\u2019re tackling a kitchen remodel, clearing out a rental property after a tenant moves out, or managing debris from a full residential teardown, two questions come up fast: \u201CWhere does all this stuff go?\u201D and \u201CHow much is this going to cost me?\u201D At Balderas Demolition Inc., we\u2019ve spent years answering both \u2014 with flat-rate dumpster rentals and full-service demolition that serves all of Orange County.",
      },
      {
        type: "paragraph",
        text:
          "The short version: we deliver a clean roll-off container to your property, you fill it on your schedule, and we haul it away when you\u2019re done. No weight guesswork, no surprise dump fees, and no sub-contractors you\u2019ve never met showing up at your door. Everything is quoted upfront, handled by our crew, and backed by a broom-clean guarantee.",
      },
      { type: "heading", text: "Why Orange County Homeowners Choose a Local Dumpster Rental" },
      {
        type: "paragraph",
        text:
          "There\u2019s a reason so many OC homeowners search \u201Cdumpster rental near me\u201D instead of calling one of the national chains. Local matters. A national company doesn\u2019t know that Irvine has strict placement ordinances, that many Laguna Beach properties require smaller containers due to steep driveways, or that some HOAs in Tustin require that the dumpster not be visible from the street. We do. We\u2019ve worked in every corner of Orange County \u2014 from Anaheim to Dana Point \u2014 and we navigate those local wrinkles as a standard part of the job.",
      },
      {
        type: "paragraph",
        text:
          "We also carry our own dumpsters rather than brokering them through a third party. That means you\u2019re talking directly to the company that owns the equipment and does the hauling \u2014 which makes scheduling faster, pricing more transparent, and problem-solving immediate when something unexpected comes up.",
      },
      { type: "heading", text: "What Projects Are Dumpster Rentals Best For?" },
      {
        type: "paragraph",
        text:
          "A roll-off dumpster is the right choice whenever you need to manage debris over several days or need a central collection point before a haul. Here are the projects we see most often in OC:",
      },
      {
        type: "list",
        format: "bullets",
        items: [
          {
            heading: "Kitchen and Bathroom Remodels:",
            text: "Cabinets, drywall, flooring, and old fixtures add up fast. A single dumpster keeps your jobsite organized and your contractor moving without repeated haul trips.",
          },
          {
            heading: "Estate and Whole-House Cleanouts:",
            text: "When a loved one passes or a property changes hands, clearing decades of belongings requires capacity. We can place a dumpster on-site and coordinate pickup once the cleanout is complete.",
          },
          {
            heading: "Landscaping and Hardscape Demo:",
            text: "Concrete, brick, pavers, and dirt are heavy \u2014 far heavier than most people expect. We size your container with weight limits in mind so you don\u2019t run into overflow charges.",
          },
          {
            heading: "Roof Replacements:",
            text: "Roofing contractors love having a dumpster directly on-site. Shingles and felt are dense; a properly sized container saves multiple trips to the transfer station.",
          },
          {
            heading: "Rental Property Turnover:",
            text: "Between tenants, landlords often face a full unit cleanout. Our flat-rate pricing makes budgeting predictable, and our same-week delivery keeps your vacancy window short.",
          },
        ],
      },
      { type: "heading", text: "How Our Flat-Rate Pricing Works \u2014 No Surprises" },
      {
        type: "paragraph",
        text:
          "The most common complaint homeowners have about dumpster rentals is hidden fees. Weight overage charges, extended rental penalties, and \u201Cfuel surcharges\u201D added after delivery are unfortunately common in this industry. We do things differently.",
      },
      {
        type: "paragraph",
        text:
          "When you call Balderas Demolition Inc. for a dumpster rental quote, we ask about your project type, the estimated debris volume, and any access constraints at your property. Based on that conversation, we give you an all-in price \u2014 container size, delivery, pickup, and disposal \u2014 before we arrive. If we under-estimate and a second haul is needed, we\u2019ll discuss that with you first, not after the fact.",
      },
      { type: "heading", text: "Dumpster + Demo: The Combination That Saves the Most Time" },
      {
        type: "paragraph",
        text:
          "One of the most efficient setups for OC renovation projects is combining dumpster rental with selective demolition. Instead of hiring a general contractor to manage separate vendors for demo and debris removal, we handle both. Our crew does the interior tearout \u2014 removing walls, cabinets, flooring, or fixtures \u2014 and loads everything into the container on-site. One call, one crew, one invoice.",
      },
      {
        type: "paragraph",
        text:
          "This bundled approach is especially popular for kitchen gut-outs and bathroom remodels across cities like Anaheim, Garden Grove, and Santa Ana, where homeowners are preparing older homes for sale or rental. You get a licensed demolition team doing the structural work safely, combined with efficient debris removal at a price that\u2019s competitive with hiring both services separately.",
      },
      { type: "heading", text: "Driveway-Safe Placement: Protecting Your Property" },
      {
        type: "paragraph",
        text:
          "A major concern for Orange County homeowners is damage to their driveway or pavers during dumpster placement. Heavy containers placed without proper precautions can crack concrete or leave ruts in soft soil. Our drivers use protective boards and placement guides to distribute weight evenly, and we always confirm the surface type with you before delivery. If your driveway can\u2019t safely support the container, we\u2019ll discuss street placement options and any permit requirements for your specific city.",
      },
      { type: "heading", text: "Eco-Responsible Hauling: Where Your Debris Goes" },
      {
        type: "paragraph",
        text:
          "California\u2019s CALGreen building standards require that at least 65% of construction and demolition debris be diverted from landfills. We take that seriously. Concrete, metal, clean wood, and cardboard from your container are sorted and sent to OC-area recycling facilities rather than the landfill. We provide documentation of disposal for projects that require it, and we\u2019re happy to discuss what materials are recyclable before you start filling the container.",
      },
      {
        type: "paragraph",
        text:
          "If you\u2019re ready to stop guessing about where your debris goes and start your project with a clear plan, call us at (714) 340-8108 or use the contact form below. We\u2019ll walk you through sizing, scheduling, and pricing in a single conversation.",
      },
    ],
    cta: {
      title: "Get your flat-rate dumpster rental quote",
      description:
        "Driveway-safe roll-off containers for OC homeowners, contractors, and landlords. Same-week delivery, zero hidden fees. Tell us about your project and we\u2019ll give you an all-in price.",
      label: "Get a Free Dumpster Quote",
      href: "/#contact",
      backgroundSrc: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/article/3.jpg",
    },
  },
  {
    slug: "top-reasons-to-hire-a-professional-junk-removal",
    canonicalPath: "/junk-removal/top-reasons-to-hire-a-professional-junk-removal",
    title: "Top Reasons to Hire a Professional Junk Removal Service",
    description:
      "Hiring a professional junk removal service in Orange County saves time, protects your body, and ensures eco-friendly disposal. Here\u2019s what sets licensed haulers apart.",
    imageSrc: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/resources/2.png",
    imageAlt: "Construction debris being loaded into a truck for junk removal",
    categories: ["services", "industry"],
    author: { name: "Marcus Hale" },
    publishedDate: "April 8, 2026",
    readTime: "7 min read",
    body: [
      {
        type: "paragraph",
        text:
          "It starts with a garage that\u2019s too full to park in. Then the spare bedroom becomes a holding area. Then the backyard fills up with furniture you keep meaning to deal with. At some point, you reach the moment every Orange County homeowner eventually faces: it\u2019s time to get this stuff out of here \u2014 but how?",
      },
      {
        type: "paragraph",
        text:
          "The temptation is to rent a truck, recruit some friends, and do it yourself. That\u2019s an understandable instinct. But before you commit to a full weekend of hauling, here are the real reasons why hiring a professional junk removal service saves most OC homeowners more time, money, and physical strain than the DIY route.",
      },
      { type: "heading", text: "1. You Don\u2019t Have to Lift a Thing" },
      {
        type: "paragraph",
        text:
          "The most immediate benefit is physical. Junk removal is hard on the body. Sectional sofas, refrigerators, mattresses, and concrete blocks are heavy, awkward, and genuinely dangerous to move without the right equipment and technique. Back injuries, dropped items, and pinched fingers are extremely common during DIY cleanouts.",
      },
      {
        type: "paragraph",
        text:
          "When you hire a professional team, you don\u2019t touch a single item. Our crew shows up with the right tools \u2014 dollies, furniture sliders, straps, and a truck with a hydraulic lift \u2014 and handles every piece from where it sits to where it ends up. You direct, we do the heavy lifting. Literally.",
      },
      { type: "heading", text: "2. The Speed Is in a Different League" },
      {
        type: "paragraph",
        text:
          "A typical DIY cleanout of a two-car garage takes a full weekend when you factor in renting the truck, loading it, driving to the dump, unloading, returning the truck, and cleaning up. A professional junk removal crew can complete the same job in two to four hours. We\u2019ve cleared entire estate properties \u2014 garages, guest rooms, sheds, and backyards \u2014 in a single day that homeowners estimated would take them a month to tackle on their own.",
      },
      {
        type: "paragraph",
        text:
          "Speed matters even more when you\u2019re on a deadline \u2014 a home sale, a rental turnover, or an estate settlement. We offer same-day service throughout Orange County for jobs booked before noon. No waiting for a weekend when your project is urgent.",
      },
      { type: "heading", text: "3. We Know What to Do With the Stuff (And What Not to Do)" },
      {
        type: "paragraph",
        text:
          "Disposing of junk responsibly is more complicated than most people realize. California has strict rules about what you can and cannot take to a landfill. E-waste (old TVs, computers, monitors) must go to a certified recycler. Mattresses cannot be landfilled without a recycling fee. Paint, chemicals, and batteries require hazardous waste disposal.",
      },
      {
        type: "paragraph",
        text:
          "A professional team knows the rules and the facilities. We sort your items on-site, separating recyclables from landfill-bound material, and donate usable goods to local Orange County charities when items are in acceptable condition. You don\u2019t have to research which items go where \u2014 we handle it as part of the service.",
      },
      { type: "heading", text: "4. Proper Disposal Protects You from Fines" },
      {
        type: "paragraph",
        text:
          "\u201CFly dumping\u201D \u2014 the practice of leaving items at the side of the road, in commercial dumpsters, or on vacant lots \u2014 is illegal in Orange County and carries significant fines. If discarded items contain mail or documents with your address and they\u2019re found by code enforcement, the citation comes back to you.",
      },
      {
        type: "paragraph",
        text:
          "Even well-intentioned DIY disposal can go wrong. Furniture left at the curb without a bulky-item pickup scheduled with your city\u2019s waste management is an ordinance violation in many OC cities. Hiring a licensed hauler eliminates all of this risk. Every load we take is disposed of legally, with documentation available upon request.",
      },
      { type: "heading", text: "5. Pricing Is More Transparent Than You Think" },
      {
        type: "paragraph",
        text:
          "Many OC homeowners assume professional junk removal is expensive. The reality is that once you factor in truck rental, fuel, dump fees, tipping fees, your time, and the physical toll, DIY often costs more \u2014 especially for larger jobs. A professional quote gives you one number that covers labor, loading, transportation, and disposal.",
      },
      {
        type: "paragraph",
        text:
          "At Balderas Demolition Inc., we price junk removal by volume \u2014 how much space your items take in our truck. We give you a firm quote on-site before we start, so there are no surprises on the invoice. For single items like a couch or a refrigerator, jobs typically start around $75\u2013$150. Full-truck loads for large cleanouts run $400\u2013$700 depending on distance and disposal requirements.",
      },
      { type: "heading", text: "6. We Handle Construction and Demo Debris, Too" },
      {
        type: "paragraph",
        text:
          "Not all junk is furniture and clutter. If you\u2019ve recently finished a renovation or a contractor left debris behind, we handle that as well. Drywall scraps, lumber, tile, concrete chunks, and old fixtures all require different handling than household junk. Our team is licensed for demolition debris hauling, meaning we can take loads that most \u201Cjunk haulers\u201D aren\u2019t equipped or permitted to handle.",
      },
      {
        type: "paragraph",
        text:
          "This is a significant advantage if you\u2019re managing a renovation in OC. Instead of coordinating two separate companies \u2014 one for the remodel debris and one for the household junk \u2014 you can call Balderas and have both handled in a single trip.",
      },
      { type: "heading", text: "Ready to Reclaim Your Space?" },
      {
        type: "paragraph",
        text:
          "If the clutter has been piling up and you\u2019re finally ready to deal with it, we make the process as easy as a single phone call. We serve all of Orange County \u2014 from Anaheim to San Clemente \u2014 with same-day and next-day availability. Call (714) 340-8108 or use the contact form to get a no-obligation quote.",
      },
    ],
    cta: {
      title: "Schedule your junk removal today",
      description:
        "Same-day and next-day junk removal across Orange County. We handle the loading, hauling, and eco-friendly disposal \u2014 you just point at what needs to go.",
      label: "Get a Free Junk Removal Quote",
      href: "/#contact",
      backgroundSrc: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/article/3.jpg",
    },
  },
  {
    slug: "systematic-project-control",
    canonicalPath: "/demolition/systematic-project-control",
    title: "How Balderas Demolition Keeps Every Project On Time and On Budget in Orange County",
    seoTitle: "Systematic Demolition Project Control | Balderas Demolition Orange County",
    description:
      "How Balderas Demolition Inc. manages permits, scheduling, and site coordination to keep every OC demolition project on time, on budget, and stress-free for homeowners.",
    imageSrc: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/resources/3.jpg",
    imageAlt: "Two crew members in safety vests reviewing demolition plans",
    categories: ["company", "services"],
    author: { name: "Marcus Hale" },
    publishedDate: "April 4, 2026",
    readTime: "6 min read",
    body: [
      {
        type: "paragraph",
        text:
          "Ask any Orange County homeowner who\u2019s been through a renovation gone wrong and they\u2019ll tell you the same thing: the problem usually wasn\u2019t the work itself \u2014 it was the coordination. Missed permit windows, subcontractors who showed up before the debris was cleared, debris haulers who showed up after the new build had already started. Construction delays compound, and every delay in OC costs real money.",
      },
      {
        type: "paragraph",
        text:
          "Demolition is particularly vulnerable to poor sequencing because it sits at the beginning of every project. If the demo runs long or the site isn\u2019t properly cleared, everything downstream shifts. This is why systematic project control isn\u2019t a buzzword at Balderas Demolition Inc. \u2014 it\u2019s the framework that every job runs on.",
      },
      { type: "heading", text: "Phase 1: Pre-Demo Planning and Permit Coordination" },
      {
        type: "paragraph",
        text:
          "Every project starts with a site visit, not a phone estimate. Abel Balderas personally walks the property to assess access constraints, neighboring structures, utility locations, and any site-specific risks. From that walk-through, we build a project sequence \u2014 a clear order of operations that determines what happens when, who\u2019s responsible for each step, and what dependencies exist between tasks.",
      },
      {
        type: "paragraph",
        text:
          "Permits are filed immediately after the site assessment. In Orange County, demolition permits can take anywhere from two to six weeks depending on the city. We file all required documentation \u2014 demolition permits, AQMD notifications, DigAlert (811) requests \u2014 in the correct order and track their status throughout the approval period so there\u2019s no gap between permit approval and crew scheduling.",
      },
      { type: "heading", text: "Phase 2: Utility Disconnects and Hazardous Material Clearance" },
      {
        type: "paragraph",
        text:
          "One of the most common sources of demolition delays in OC is utility disconnects. Southern California Edison, SoCalGas, and municipal water departments all have their own timelines for capping services \u2014 and those timelines are largely outside of our control. What we can control is how early we initiate the request.",
      },
      {
        type: "paragraph",
        text:
          "We submit utility disconnect requests at the earliest possible opportunity and build those lead times into the project schedule. For homes built before 1980, we also coordinate asbestos and lead-paint inspection in parallel with permit filing, so abatement clearance arrives before the demo crew is ready to mobilize \u2014 not after.",
      },
      { type: "heading", text: "Phase 3: Mobilization and Soft Demo" },
      {
        type: "paragraph",
        text:
          "Once permits are in hand and utilities are confirmed off, we mobilize. The first phase on-site is soft demolition \u2014 the manual removal of non-structural elements including doors, windows, appliances, cabinetry, and flooring. This is done before heavy equipment arrives for two reasons: it allows us to sort materials for recycling (required under CALGreen), and it protects neighboring structures from the vibration and debris generated by mechanical demo.",
      },
      { type: "heading", text: "Phase 4: Structural Demolition and Debris Control" },
      {
        type: "paragraph",
        text:
          "The structural teardown itself is the most visible part of the project, but it\u2019s also the most carefully controlled. We set up exclusion zones before equipment moves in, position water suppression systems to control dust (required by AQMD in OC), and establish a defined debris zone within the structure\u2019s footprint to protect adjacent property. Our operators are trained to pull materials inward rather than allowing outward collapse, which is critical on the tight lots common in cities like Anaheim, Tustin, and Santa Ana.",
      },
      { type: "heading", text: "Phase 5: Site Clearance and Final Inspection" },
      {
        type: "paragraph",
        text:
          "Once the structure is down, we remove the foundation and footings, rough-grade the lot, and sweep the site. Our final walk-through includes a magnetic sweep for hardware \u2014 nails, screws, and metal fragments that are invisible in the soil but dangerous for your next contractor\u2019s equipment or your kids\u2019 bare feet. We don\u2019t call a job done until the site is broom-clean and the required city inspection is scheduled.",
      },
      { type: "heading", text: "What \u201CSystematic\u201D Means for You as a Homeowner" },
      {
        type: "paragraph",
        text:
          "In practical terms, it means you always know where your project stands. We provide a written project schedule before work begins and update you when key milestones are hit \u2014 permit approved, utilities off, crew mobilized, debris cleared. You\u2019re never in the dark, and you\u2019re never chasing us for a status update. Abel is reachable directly, and he\u2019s on-site for every significant phase of every project.",
      },
      {
        type: "paragraph",
        text:
          "If you\u2019re planning a demolition project in Orange County and want a team that treats your timeline with the same urgency you do, call Balderas Demolition Inc. at (714) 340-8108 for a free on-site assessment and quote.",
      },
    ],
    cta: {
      title: "Get a project timeline with your quote",
      description:
        "Every Balderas Demolition quote includes a written project sequence. No surprises, no delays, no \u201Cwe\u2019ll figure it out when we get there.\u201D Call for a free on-site assessment.",
      label: "Request a Free Assessment",
      href: "/#contact",
      backgroundSrc: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/article/3.jpg",
    },
  },
  {
    slug: "fast-and-hassle-free-junk-removal",
    canonicalPath: "/junk-removal/fast-and-hassle-free-junk-removal",
    title: "Fast & Hassle-Free Junk Removal in Orange County: What to Expect",
    seoTitle: "Fast Junk Removal Orange County | Same-Day Service | Balderas",
    description:
      "What does same-day junk removal actually look like in Orange County? Here’s what to expect when you book Balderas Demolition Inc. — from call to broom-clean.",
    imageSrc: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/resources/4.jpg",
    imageAlt: "Workers loading household junk into a removal truck",
    categories: ["services"],
    author: { name: "Marcus Hale" },
    publishedDate: "March 30, 2026",
    readTime: "8 min read",
    body: [
      {
        type: "paragraph",
        text:
          "“Fast and hassle-free” is how every junk removal company describes themselves. But what does it actually mean when the truck shows up at your driveway? This guide breaks down exactly what happens when you book a junk removal job with Balderas Demolition Inc. — from the initial call to the moment your space is clear — so you know what to expect before you commit.",
      },
      { type: "heading", text: "Step 1: The Call (5 Minutes)" },
      {
        type: "paragraph",
        text:
          "When you call (714) 340-8108, you’re talking to a real person — not a call center or an automated booking system. We ask you a few quick questions: What are you removing? Where is it located in the property? Are there any access constraints (narrow gate, second floor, no elevator)? Based on your answers, we give you an estimated price range on the phone and confirm availability.",
      },
      {
        type: "paragraph",
        text:
          "For jobs booked before noon, we can typically schedule same-day service anywhere in Orange County. For larger jobs or specific time windows, next-day booking is standard. We send a confirmation text with your crew’s arrival window so you’re not waiting around all morning.",
      },
      { type: "heading", text: "Step 2: On-Site Assessment and Final Price (Before We Touch Anything)" },
      {
        type: "paragraph",
        text:
          "When our crew arrives, the first thing they do is walk through the space with you and confirm exactly what’s going. Nothing gets loaded until you’ve seen the final price and agreed to it. Our pricing is based on the volume of space your items occupy in our truck, which means you’re only paying for what we actually take.",
      },
      {
        type: "paragraph",
        text:
          "This is different from some services that charge by “item” or add fuel surcharges after the fact. With Balderas, the number you agree to on-site is the number on your invoice. No surprises.",
      },
      { type: "heading", text: "Step 3: The Loading (You Don’t Lift a Finger)" },
      {
        type: "paragraph",
        text:
          "Once you’ve approved the quote, we go to work. Our crew handles all the heavy lifting — moving items from wherever they are (garage, upstairs bedroom, backyard shed) to the truck. We bring our own dollies, furniture straps, and protective materials to avoid scratching floors or doorframes during the removal.",
      },
      {
        type: "paragraph",
        text:
          "For large items like sectional sofas, refrigerators, or hot tubs, we break them down as needed to get them through doorways safely. For outdoor items like patio furniture, sheds, or yard debris, we load from the backyard without requiring you to move anything to the curb first.",
      },
      { type: "heading", text: "What We Take: The Full List" },
      {
        type: "list",
        format: "bullets",
        items: [
          { text: "Furniture (sofas, beds, dressers, dining sets, office furniture)" },
          { text: "Appliances (refrigerators, washers, dryers, stoves, dishwashers)" },
          { text: "Mattresses and box springs" },
          { text: "Electronics and e-waste (TVs, computers, monitors)" },
          { text: "Yard waste and green material" },
          { text: "Construction debris (drywall, lumber, tile, concrete chunks)" },
          { text: "Exercise equipment and large recreational items" },
          { text: "Garage and storage cleanouts (mixed loads)" },
          { text: "Estate cleanout contents" },
        ],
      },
      {
        type: "paragraph",
        text:
          "We do not take hazardous materials including paint, chemicals, asbestos, batteries, propane tanks, or medical waste. If you’re unsure whether something qualifies, just ask when you call — we’ll point you to the right resource for those items.",
      },
      { type: "heading", text: "Step 4: Cleanup and Broom-Clean Finish" },
      {
        type: "paragraph",
        text:
          "After the last item is loaded, we sweep out the area we worked in. If the junk came from a garage, the floor gets swept. If it was in a room, we pick up any loose debris left behind. We don’t just haul the big pieces — we leave the space ready for whatever comes next, whether that’s storage, staging for a home sale, or handing the keys to a new tenant.",
      },
      { type: "heading", text: "Step 5: Responsible Disposal" },
      {
        type: "paragraph",
        text:
          "Once we’re off your property, we sort the load at our facility. Usable furniture and household items that are in good condition are donated to local OC charities when possible. Metals and electronics go to certified recyclers. What’s left goes to a licensed transfer station — never fly-dumped in an alley or an unauthorized site. This isn’t just the ethical approach; it’s required by California law, and it’s a standard we hold ourselves to on every job.",
      },
      {
        type: "paragraph",
        text:
          "If you’re ready to clear the space, call (714) 340-8108 or submit a contact request below. We’ll have a crew at your door as soon as today.",
      },
    ],
    cta: {
      title: "Book your same-day junk removal",
      description:
        "Orange County’s most straightforward junk removal service. You point, we load, we sweep. Call before noon for same-day service.",
      label: "Get Your Free Junk Removal Quote",
      href: "/#contact",
      backgroundSrc: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/article/3.jpg",
    },
  },
  {
    slug: "choose-the-right-dumpster-for-your-project",
    canonicalPath: "/dumpster-rental/choose-the-right-dumpster-for-your-project",
    title: "How to Choose the Right Dumpster Size for Your Orange County Project",
    seoTitle: "Choose the Right Dumpster Size Orange County | Balderas Demolition",
    description:
      "Picking the wrong dumpster size wastes money. This guide helps OC homeowners match the right roll-off container to their project before delivery day.",
    imageSrc: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/resources/5.jpg",
    imageAlt: "Green dumpster placed in front of a residential garage",
    categories: ["sales", "industry"],
    author: { name: "Marcus Hale" },
    publishedDate: "March 24, 2026",
    readTime: "6 min read",
    body: [
      {
        type: "paragraph",
        text:
          "Dumpster sizing is one of those decisions that seems straightforward until you get it wrong. Rent too small and you\u2019re paying for a second haul. Rent too large and you\u2019re paying for capacity you don\u2019t need. In Orange County, where properties range from compact condos with tight driveways to large estates with multiple structures, picking the right size up front makes a meaningful difference in both cost and logistics.",
      },
      {
        type: "paragraph",
        text:
          "This guide walks through the most common project types in OC and the container sizes that fit them best, along with the factors that affect which size actually works for your specific property.",
      },
      { type: "heading", text: "Understanding Dumpster Sizes: What the Numbers Mean" },
      {
        type: "paragraph",
        text:
          "Roll-off dumpsters are measured in cubic yards \u2014 a measure of volume, not weight. A 10-yard container holds approximately 10 cubic yards of debris, which is roughly equivalent to three full pickup truck loads. Common residential sizes are 10, 15, 20, and 30 cubic yards. Here\u2019s how they map to typical OC projects:",
      },
      {
        type: "list",
        format: "bullets",
        items: [
          {
            heading: "10-Yard Container:",
            text: "Best for small bathroom remodels, single-room cleanouts, or minor yard debris. Fits in most standard OC driveways with room to spare. Ideal for Irvine condos or Anaheim townhomes with limited access.",
          },
          {
            heading: "15-Yard Container:",
            text: "A versatile middle option for kitchen gut-outs, two-car garage cleanouts, or roofing projects on a mid-size home. This is the most commonly rented size for single-story OC ranch homes.",
          },
          {
            heading: "20-Yard Container:",
            text: "Right for larger renovation projects, estate cleanouts, or combined kitchen/bathroom remodels. Also common for concrete and tile removal, which is heavier than its volume suggests.",
          },
          {
            heading: "30-Yard Container:",
            text: "Reserved for full house cleanouts, multi-room renovations, or construction debris from larger structures. Requires a longer driveway or street placement (permit may apply depending on your city).",
          },
        ],
      },
      { type: "heading", text: "The Weight Factor: Why Volume Alone Isn\u2019t Enough" },
      {
        type: "paragraph",
        text:
          "Every dumpster rental has a weight limit, and exceeding it triggers overage fees. For most household debris \u2014 furniture, drywall, light construction material \u2014 volume is the limiting factor and the standard size recommendation holds. But some materials are deceptively heavy:",
      },
      {
        type: "list",
        format: "bullets",
        items: [
          {
            heading: "Concrete and Masonry:",
            text: "Concrete weighs roughly 4,000 lbs per cubic yard. A 10-yard dumpster filled with concrete would weigh 40,000 lbs \u2014 far over any weight limit. Concrete jobs require either a smaller container filled only with concrete or a separate haul specifically rated for heavy debris.",
          },
          {
            heading: "Tile and Stone:",
            text: "Ceramic tile and natural stone are significantly heavier than they look. A full bathroom tile tearout can push a small container over its weight limit even if the container appears less than half full.",
          },
          {
            heading: "Dirt and Soil:",
            text: "Landscaping projects that involve removing dirt, sod, or rocks require special handling. Clean fill dirt may be accepted at reduced rates at some facilities, but it must be kept separate from mixed debris.",
          },
        ],
      },
      {
        type: "paragraph",
        text:
          "When you call Balderas, we ask about the material types specifically so we can flag weight concerns before delivery. Avoiding an overage charge starts with an honest conversation about what you\u2019re throwing away.",
      },
      { type: "heading", text: "Driveway Constraints in Orange County" },
      {
        type: "paragraph",
        text:
          "OC properties vary enormously in driveway access. Newport Beach and Laguna Beach homes often have steep grades or sharp turns that limit container length. HOA communities in Irvine or Mission Viejo may restrict visible dumpsters or require placement within a specific window. Older neighborhoods in Santa Ana or Anaheim may have narrow driveways from a time when vehicles were smaller.",
      },
      {
        type: "paragraph",
        text:
          "We do a quick assessment of your property access before recommending a size. If your driveway can\u2019t safely accommodate the right container, we\u2019ll discuss street placement options and handle any required city encroachment permits as part of the rental. No surprises on delivery day.",
      },
      { type: "heading", text: "When in Doubt, Go One Size Up" },
      {
        type: "paragraph",
        text:
          "The most common mistake homeowners make is underestimating the volume of their debris. Items compress less than expected when loaded, and most people have more material than they realize once they start clearing a space. The cost difference between one container size and the next is usually modest \u2014 far less than the cost of a second haul trip.",
      },
      {
        type: "paragraph",
        text:
          "If you\u2019re unsure what size you need, call us at (714) 340-8108. We\u2019ll ask a few questions about your project and give you a recommendation before your delivery day. Getting the size right the first time is always cheaper than finding out you need more capacity after the container is already at your curb.",
      },
    ],
    cta: {
      title: "Not sure what size you need?",
      description:
        "Call us and we\u2019ll size your job in five minutes. Flat-rate dumpster rentals across Orange County \u2014 driveway-safe delivery, same-week scheduling, zero hidden fees.",
      label: "Get a Dumpster Rental Quote",
      href: "/#contact",
      backgroundSrc: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/article/3.jpg",
    },
  },
  {
    slug: "safe-controlled-demolition-process",
    canonicalPath: "/demolition/safe-controlled-demolition-process",
    title: "What Makes Demolition Safe? A Look at Balderas Demolition\u2019s Controlled Process",
    seoTitle: "Safe Controlled Demolition Process Orange County | Balderas Demolition",
    description:
      "What actually makes demolition safe in Orange County? Abel Balderas explains the controlled process his team uses to protect property, neighbors, and crew on every job.",
    imageSrc: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/resources/6.jpg",
    imageAlt: "Excavator carefully demolishing a residential structure",
    categories: ["services", "environmental", "industry"],
    author: { name: "Marcus Hale" },
    publishedDate: "March 18, 2026",
    readTime: "7 min read",
    body: [
      {
        type: "paragraph",
        text:
          "When people think of demolition, they picture something dramatic \u2014 walls caving in, dust clouds billowing, debris flying in every direction. In reality, professional demolition looks almost nothing like that. Controlled demolition is a disciplined, methodical process designed to protect the people on-site, the neighboring properties, and the environment. Chaos is not a feature; it\u2019s a red flag.",
      },
      {
        type: "paragraph",
        text:
          "At Balderas Demolition Inc., every project \u2014 from a backyard structure removal in Tustin to a full residential teardown in Newport Beach \u2014 follows the same controlled sequence. Here\u2019s what that actually looks like in practice.",
      },
      { type: "heading", text: "Pre-Demolition Safety Assessment" },
      {
        type: "paragraph",
        text:
          "Before any work begins, Abel Balderas personally walks the site. The assessment focuses on four areas: structural condition, hazardous materials, access constraints, and neighboring exposure. A structurally compromised wall or an unexpected load-bearing element can turn a planned interior demo into a dangerous collapse if it\u2019s not identified first. We map the structure before we touch it.",
      },
      {
        type: "paragraph",
        text:
          "Hazardous material screening is non-negotiable for any home built before 1980. Asbestos in popcorn ceilings, floor tile adhesive, and insulation must be confirmed or ruled out by a certified inspector before demo begins. We coordinate that inspection and will not mobilize a crew until clearance documentation is in hand.",
      },
      { type: "heading", text: "Site Preparation and Exclusion Zones" },
      {
        type: "paragraph",
        text:
          "Once the pre-demo assessment is complete and permits are in place, we prepare the site before equipment arrives. This includes establishing physical exclusion zones around the work area \u2014 flagging, fencing, or barrier tape depending on the site \u2014 to keep curious neighbors, pets, and pedestrians out of the danger perimeter.",
      },
      {
        type: "paragraph",
        text:
          "In OC\u2019s dense residential neighborhoods, this step is particularly important. Many of our projects in cities like Anaheim, Garden Grove, and Santa Ana involve structures that are within feet of adjacent homes. We identify those proximity risks early and build protective measures \u2014 debris shields, spotter positions, and restricted swing zones for equipment \u2014 into the demolition plan.",
      },
      { type: "heading", text: "Water Suppression: The Invisible Safety Layer" },
      {
        type: "paragraph",
        text:
          "Orange County\u2019s South Coast AQMD requires active dust suppression during demolition. We maintain a dedicated water supply on every demo site and wet down debris as it falls. This isn\u2019t just regulatory compliance \u2014 it\u2019s a practical safety measure. Wet debris stays where it falls. Dry demolition debris, especially in Santa Ana wind conditions, can travel significant distances and create hazards far beyond the immediate work zone.",
      },
      { type: "heading", text: "Controlled Mechanical Demolition: Pulling Inward, Not Outward" },
      {
        type: "paragraph",
        text:
          "When the excavator goes to work, our operators follow a specific pulling protocol. Structural elements are pulled inward \u2014 into the building\u2019s own footprint \u2014 rather than knocked outward. This \u201Cinward collapse\u201D technique keeps the debris stack contained within a predictable zone, protects neighboring fences and landscaping, and prevents material from spilling into adjacent lots or the public right-of-way.",
      },
      {
        type: "paragraph",
        text:
          "For projects requiring selective demolition \u2014 where we\u2019re removing one wall or structure while leaving the rest of a building intact \u2014 operators work with spotters who watch the structural behavior of adjacent elements in real time. Selective demo requires a higher level of precision and patience than full teardowns, and we staff and plan accordingly.",
      },
      { type: "heading", text: "Post-Demo Site Security" },
      {
        type: "paragraph",
        text:
          "After the structural demolition is complete, the site enters its most overlooked safety phase: clearance. Exposed foundations, rebar, and debris piles are active hazards. We remove foundation concrete and footings, level the lot, and perform a magnetic sweep to collect all metal fasteners before we release the site. The final walk-through with the city inspector confirms that the site meets code requirements for closure.",
      },
      { type: "heading", text: "Safety Documentation and Compliance" },
      {
        type: "paragraph",
        text:
          "Every controlled demolition project generates a paper trail: AQMD notification, demolition permit, utility disconnect confirmations, asbestos clearance documentation (if applicable), and weight tickets for debris disposal. We retain copies of all compliance documentation and can provide them to you, your insurer, or your future contractor as needed. This documentation matters at permit closeout and again when you eventually sell the property.",
      },
      {
        type: "paragraph",
        text:
          "If you\u2019re planning a demolition project in Orange County and want to work with a team that treats safety as the foundation of every decision \u2014 not an afterthought \u2014 call Abel Balderas at (714) 340-8108 for a free on-site consultation.",
      },
    ],
    cta: {
      title: "Get a controlled demolition quote",
      description:
        "Safe, compliant demolition across Orange County. Permits, dust control, hazardous material coordination, and a broom-clean finish \u2014 included in every quote.",
      label: "Request a Free Consultation",
      href: "/#contact",
      backgroundSrc: "https://qxwyml8xuwxdgws0.public.blob.vercel-storage.com/balderas-assets/images/article/3.jpg",
    },
  },
];

export const ARTICLE_CATEGORIES: { id: ArticleCategoryId | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "sales", label: "Sales" },
  { id: "services", label: "Services" },
  { id: "company", label: "Company" },
  { id: "industry", label: "Industry" },
  { id: "environmental", label: "Environmental" },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

/** Public URL for an article (resources hub or a dedicated canonical path). */
export function getArticleHref(article: Article): string {
  return article.canonicalPath ?? `/resources/${article.slug}`;
}

export function articlePublishedToIso(value: string): string | undefined {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString();
}
