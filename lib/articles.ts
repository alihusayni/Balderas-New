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
    seoTitle: "House Demolition Costs & Process Orange County (2026 Guide)",
    title:
      "The Ultimate Guide to House Demolition in Orange County: Process, Regulations, and 2026 Cost Expectations",
    description:
      "Planning a residential teardown? Learn the step-by-step house demolition process in Orange County, including 2026 cost factors, permits, and asbestos rules with Abel Balderas.",
    imageSrc: "/images/resources/6.jpg",
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
        src: "/images/article/2.jpg",
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
      href: "/contact",
      backgroundSrc: "/images/article/3.jpg",
    },
  },
  {
    slug: "hut-top-structure-removal",
    seoTitle:
      "Hut Top & Structure Removal Costs Orange County | Balderas Demolition Inc.",
    title:
      "Hut Top & Structure Removal in Orange County: 2026 Cost and Process Guide",
    description:
      "What does it cost to remove a backyard hut or top-down structure in OC? See our 2026 pricing guide for deconstruction and hauling with Abel Balderas.",
    imageSrc: "/images/services/img2.png",
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
        src: "/images/article/2.jpg",
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
      href: "/contact",
      backgroundSrc: "/images/article/3.jpg",
    },
  },
  {
    slug: "the-high-cost-of-cheap-why-a-licensed-demolition-contractor-is-non-negotionable",
    title:
      "The High Cost of \u201CCheap\u201D: Why a Licensed Demolition Contractor is Non-Negotiable in Orange County",
    description:
      "Why hiring an unlicensed contractor for demolition in Orange County can cost you 10x what you saved\u2014and how a licensed C-21 team protects your property, your wallet, and your family.",
    imageSrc: "/images/article/1.jpg",
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
        src: "/images/article/2.jpg",
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
      href: "/contact",
      backgroundSrc: "/images/article/3.jpg",
    },
  },
  {
    slug: "affordable-dumpster-rental-and-demolition-services",
    title:
      "Affordable Dumpster Rental and Demolition Services in Orange County: Get a Free Quote Today",
    description:
      "Discover how to save time and money with our affordable dumpster rental and demolition services available throughout Orange County...",
    imageSrc: "/images/resources/1.png",
    imageAlt:
      "Balderas Demolition Inc. dumpster trailer with phone number 714-340-8108",
    categories: ["sales", "services"],
    author: { name: "Marcus Hale" },
    publishedDate: "April 12, 2026",
    readTime: "3 min read",
    body: [
      {
        type: "paragraph",
        text:
          "Whether you\u2019re tackling a kitchen remodel or clearing out a rental property, our flat-rate dumpster rentals and demolition services help Orange County homeowners save time, money, and stress.",
      },
    ],
  },
  {
    slug: "top-reasons-to-hire-a-professional-junk-removal",
    title: "Top Reasons to Hire a Professional Junk Removal Service",
    description:
      "When you\u2019re dealing with unwanted clutter in your home or business, hiring a professional junk removal company can save you time, effort, and stress...",
    imageSrc: "/images/resources/2.png",
    imageAlt: "Construction debris being loaded into a truck for junk removal",
    categories: ["services", "industry"],
    author: { name: "Marcus Hale" },
    publishedDate: "April 8, 2026",
    readTime: "4 min read",
    body: [
      {
        type: "paragraph",
        text:
          "From whole-house cleanouts to construction debris hauling, a licensed junk removal team takes the heavy lifting off your plate so you can focus on what comes next.",
      },
    ],
  },
  {
    slug: "systematic-project-control",
    title: "Systematic Project Control",
    description:
      "Every step is planned and executed with precision to keep your project on track and stress-free.",
    imageSrc: "/images/resources/3.jpg",
    imageAlt: "Two crew members in safety vests reviewing demolition plans",
    categories: ["company", "services"],
    author: { name: "Marcus Hale" },
    publishedDate: "April 4, 2026",
    readTime: "3 min read",
    body: [
      {
        type: "paragraph",
        text:
          "Our systematic project-control framework keeps every demolition transparent, predictable, and on schedule \u2014 from kickoff through final walk-through.",
      },
    ],
  },
  {
    slug: "fast-and-hassle-free-junk-removal",
    title: "Fast & Hassle-Free Junk Removal",
    description:
      "From old furniture to construction debris, we handle all the heavy lifting so you don\u2019t have to. See more",
    imageSrc: "/images/resources/4.jpg",
    imageAlt: "Workers loading household junk into a removal truck",
    categories: ["services"],
    author: { name: "Marcus Hale" },
    publishedDate: "March 30, 2026",
    readTime: "2 min read",
    body: [
      {
        type: "paragraph",
        text:
          "If it\u2019s taking up space, we\u2019ll take it away. Our junk removal process is fast, transparent, and eco-friendly.",
      },
    ],
  },
  {
    slug: "choose-the-right-dumpster-for-your-project",
    title: "Choose the Right Dumpster for Your Project",
    description:
      "Learn how selecting the right dumpster size can save you money and keep your cleanup running smoothly. See more",
    imageSrc: "/images/resources/5.jpg",
    imageAlt: "Green dumpster placed in front of a residential garage",
    categories: ["sales", "industry"],
    author: { name: "Marcus Hale" },
    publishedDate: "March 24, 2026",
    readTime: "3 min read",
    body: [
      {
        type: "paragraph",
        text:
          "Choosing the right dumpster size up front saves money, avoids re-haul fees, and keeps your jobsite organized from day one.",
      },
    ],
  },
  {
    slug: "safe-controlled-demolition-process",
    title: "Safe, Controlled Demolition Process",
    description:
      "Our systematic approach ensures every project is handled with precision, safety, and minimal disruption.",
    imageSrc: "/images/resources/6.jpg",
    imageAlt: "Excavator carefully demolishing a residential structure",
    categories: ["services", "environmental", "industry"],
    author: { name: "Marcus Hale" },
    publishedDate: "March 18, 2026",
    readTime: "4 min read",
    body: [
      {
        type: "paragraph",
        text:
          "A safe demolition is a planned demolition. Our controlled process protects your property, your neighbors, and our crew at every step.",
      },
    ],
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
