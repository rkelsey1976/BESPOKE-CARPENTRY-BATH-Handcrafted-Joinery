export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  publishedAt: string;
  readTime: string;
  category: "Bespoke Joinery" | "Sash and Timber Windows" | "Repairs and Restoration" | "Hiring and Costs";
  heroImage: string;
  heroAlt: string;
  ctaLabel: string;
  ctaHref: string;
  sections: BlogSection[];
  faq?: Array<{ question: string; answer: string }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "bespoke-joinery-services-bath-guide",
    title: "Bespoke Joinery Services in Bath: What to Expect From Design to Install",
    description:
      "A practical guide to bespoke joinery services in Bath, including process, timelines, and how to prepare for a smooth installation.",
    primaryKeyword: "bespoke joinery services in Bath",
    secondaryKeywords: ["bespoke joinery Bath", "custom joinery Bath", "joinery Bath"],
    publishedAt: "2026-04-01",
    readTime: "8 min read",
    category: "Bespoke Joinery",
    heroImage: "/service-tools-flatlay.webp",
    heroAlt: "Joinery tools arranged for bespoke project planning",
    ctaLabel: "Get a quote for bespoke joinery",
    ctaHref: "/contact",
    sections: [
      {
        heading: "Bespoke joinery services in Bath: local context first",
        paragraphs: [
          "Bath homes range from Georgian terraces to modern extensions, and each property type creates different joinery constraints. Older homes often need careful scribing, sympathetic detailing, and practical moisture planning before any fabrication begins.",
          "If you are comparing bespoke joinery services in Bath, ask how the design will be adapted to your exact walls, floors, and existing trims rather than relying on generic dimensions.",
        ],
      },
      {
        heading: "Start with a site survey and practical brief",
        paragraphs: [
          "Most bespoke joinery projects in Bath begin with a home visit, measurements, and a conversation about how the space needs to work day to day.",
          "A strong brief covers style, storage needs, finish preferences, and any constraints in older properties, including uneven walls and existing features.",
          "At this stage, include access limits, parking considerations, and preferred installation windows so the plan fits local Bath streets and typical home layouts.",
        ],
      },
      {
        heading: "Design and specification before build",
        paragraphs: [
          "Once dimensions are confirmed, the design stage turns ideas into clear joinery details so materials, hardware, and finishes can be agreed up front.",
          "This stage reduces delays later and helps set realistic expectations on lead times and installation sequence.",
          "A detailed specification should also confirm paint grade or timber finish, hinge and runner standards, and any required tolerance allowances for period walls.",
        ],
      },
      {
        heading: "Workshop build and quality checks",
        paragraphs: [
          "A workshop-first process keeps site time shorter and gives better control over joinery accuracy, surface prep, and final fit.",
          "Dry fitting and tolerance checks help ensure smooth installation in period homes where dimensions are rarely perfect.",
          "For painted cabinetry, workshop priming and controlled finishing usually deliver a cleaner result than full site finishing.",
        ],
      },
      {
        heading: "Installation and aftercare",
        paragraphs: [
          "On-site installation includes careful scribing, alignment, and final adjustments so units sit cleanly against existing walls and floors.",
          "Ask for simple care guidance at handover so painted and timber surfaces stay in good condition for the long term.",
          "Before sign-off, check opening clearances, alignment, and any snag list items so the finished joinery performs as well as it looks.",
        ],
      },
      {
        heading: "When to book and how to request a quote",
        paragraphs: [
          "For most bespoke projects, booking early is best, especially before larger decorating or flooring works are scheduled. A clear sequence prevents damage and avoids avoidable rework.",
          "If you want advice on bespoke joinery, fitted furniture, or sash-related joinery in Bath, call 01225 000000 or request a quote via the contact page with photos and rough dimensions.",
        ],
      },
    ],
    faq: [
      {
        question: "How long do bespoke joinery projects take in Bath?",
        answer:
          "Timescales vary by complexity, but a proper survey and specification stage usually shortens installation time and reduces surprises.",
      },
      {
        question: "Can bespoke joinery be matched to period interiors?",
        answer:
          "Yes. Profile, proportion, and finish choices can be tailored to suit Georgian and Victorian interiors while still improving day-to-day usability.",
      },
    ],
  },
  {
    slug: "custom-timber-windows-bath-repair-vs-replace",
    title: "Custom Timber Windows in Bath: Repair, Replace, or Upgrade?",
    description:
      "Learn when custom timber windows in Bath should be repaired, upgraded, or replaced, with practical checks for period homes.",
    primaryKeyword: "custom timber windows Bath",
    secondaryKeywords: ["timber windows Bath", "traditional joinery Bath"],
    publishedAt: "2026-04-08",
    readTime: "8 min read",
    category: "Sash and Timber Windows",
    heroImage: "/hero-carpenter.webp",
    heroAlt: "Carpenter assessing timber window condition",
    ctaLabel: "Book a sash window assessment",
    ctaHref: "/services/sash-windows",
    sections: [
      {
        heading: "Custom timber windows in Bath: start with condition, not assumptions",
        paragraphs: [
          "Many homeowners are told to replace windows too early. In Bath, a large number of sash and timber windows can be improved through localised repair, draught reduction, and selective upgrades.",
          "A careful inspection should check moisture ingress points, movement, paint failure, and the condition of key structural sections before deciding the best route.",
        ],
      },
      {
        heading: "When repair is usually the best option",
        paragraphs: [
          "If rot is localised and the window remains structurally sound, targeted timber repairs often restore performance without full replacement.",
          "This approach is common in Bath period homes where preserving original details is important.",
          "Repair-first work is often the most cost-effective when decay is limited to cills, lower rails, or isolated joints.",
        ],
      },
      {
        heading: "When upgrades make sense",
        paragraphs: [
          "Upgrades like draught-proofing, cord replacement, and hardware improvements can improve comfort and operation with minimal visual change.",
          "For many homes, upgrades provide strong value when full replacement is not yet necessary.",
          "These upgrades can also improve day-to-day usability, especially where sticking sashes or poor balancing make windows hard to open safely.",
        ],
      },
      {
        heading: "When replacement is justified",
        paragraphs: [
          "Replacement is usually considered when decay is widespread, components are unstable, or previous repairs have reached end of life.",
          "A like-for-like design helps maintain character while improving long-term reliability.",
          "Where replacement is necessary, matching sightlines and moulding details is key to preserving street-facing character in older Bath homes.",
        ],
      },
      {
        heading: "Practical next step for Bath homeowners",
        paragraphs: [
          "If you are unsure whether repair or replacement is right, request a window-by-window assessment with photos and a clear recommendation per opening.",
          "For custom timber windows and sash advice in Bath and nearby areas, call 01225 000000 or use the contact form to arrange a quote.",
        ],
      },
    ],
    faq: [
      {
        question: "Can old timber windows in Bath be repaired instead of replaced?",
        answer:
          "Yes, in many cases they can be repaired if damage is local and key structural parts remain sound.",
      },
      {
        question: "Do upgrades reduce draughts in sash windows?",
        answer:
          "Yes, draught-proofing and properly adjusted moving parts can make a noticeable difference to comfort.",
      },
      {
        question: "How do I know when replacement is unavoidable?",
        answer:
          "Replacement is typically considered when decay is widespread or key structural components can no longer be safely repaired.",
      },
    ],
  },
  {
    slug: "joinery-repairs-historic-homes-bath",
    title: "Joinery Repairs for Historic Homes in Bath: Common Timber Problems and Fixes",
    description:
      "A local guide to joinery repairs in historic Bath homes, covering rot, movement, failed paint systems, and practical repair approaches.",
    primaryKeyword: "joinery repairs historic homes Bath",
    secondaryKeywords: ["carpentry repairs Bath", "traditional woodwork Bath Somerset"],
    publishedAt: "2026-04-15",
    readTime: "8 min read",
    category: "Repairs and Restoration",
    heroImage: "/proj-chisel-work.webp",
    heroAlt: "Traditional joinery repair work in progress",
    ctaLabel: "Discuss your repair project",
    ctaHref: "/services/repairs-restoration",
    sections: [
      {
        heading: "Joinery repairs in historic Bath homes: preserve first, replace only when needed",
        paragraphs: [
          "Historic properties often benefit from a repair-first approach because original timber details are difficult to replicate exactly and usually worth retaining.",
          "The goal is to remove failed sections, stabilise sound timber, and restore performance without unnecessary loss of original character.",
        ],
      },
      {
        heading: "Moisture-related decay in external timber",
        paragraphs: [
          "Repeated wetting around sills, lower rails, and exposed edges is one of the most common causes of decay in older Bath properties.",
          "Repair-first work typically removes only damaged sections and preserves as much original fabric as possible.",
          "Early intervention usually lowers total repair scope and reduces the chance of hidden decay spreading into adjacent components.",
        ],
      },
      {
        heading: "Movement, sticking and failed joints",
        paragraphs: [
          "Historic timber often moves seasonally. Where movement affects operation, careful adjustment and selective repair usually restore performance.",
          "Joint failures are best addressed early before damage spreads to surrounding sections.",
          "In many Bath homes, repeated paint build-up and moisture cycling are both contributors, so repairs should address cause as well as symptom.",
        ],
      },
      {
        heading: "Surface failure and maintenance cycles",
        paragraphs: [
          "Peeling or brittle coatings can trap moisture and accelerate timber breakdown if left untreated.",
          "A proper preparation and breathable paint system supports long-term durability.",
          "After repair, planned maintenance intervals are essential to protect the investment and keep future works smaller.",
        ],
      },
      {
        heading: "When to bring in a specialist joiner",
        paragraphs: [
          "If you notice soft timber, recurring paint failure, or sticking windows and doors, booking an inspection early helps avoid larger structural repairs later.",
          "For joinery repairs on historic homes in Bath, Bradford-on-Avon, Keynsham, or Frome, call 01225 000000 or request a quote with photos of affected areas.",
        ],
      },
    ],
    faq: [
      {
        question: "Are repairs suitable for listed or period homes?",
        answer:
          "Repairs are often the preferred route because they retain original joinery details while resolving local defects.",
      },
      {
        question: "What are the most common timber issues in Bath period homes?",
        answer:
          "Moisture-related decay, sticking components, failed joints, and paint system breakdown are among the most common recurring issues.",
      },
    ],
  },
  {
    slug: "how-to-choose-local-carpenter-bath",
    title: "How to Choose a Local Carpenter in Bath for Bespoke Home Projects",
    description:
      "A clear checklist for choosing a local carpenter in Bath, from project fit and workmanship to quote clarity and communication.",
    primaryKeyword: "local carpenter Bath",
    secondaryKeywords: ["local joiner Bath", "best carpenter in Bath", "recommended joiner Bath"],
    publishedAt: "2026-04-22",
    readTime: "5 min read",
    category: "Hiring and Costs",
    heroImage: "/proj-workbench.webp",
    heroAlt: "Carpentry workspace ready for bespoke build",
    ctaLabel: "Request a clear quote",
    ctaHref: "/contact",
    sections: [
      {
        heading: "Check for relevant project experience",
        paragraphs: [
          "Ask to see examples that match your project type, such as sash repairs, fitted cabinetry, or period-detail restoration.",
          "Relevant experience often matters more than volume of portfolio images.",
        ],
      },
      {
        heading: "Compare quotes by scope, not only price",
        paragraphs: [
          "A useful quote explains materials, prep, fitting, finish level, and what is excluded.",
          "Clear scope reduces disputes and makes alternatives easier to compare.",
        ],
      },
      {
        heading: "Assess communication and process",
        paragraphs: [
          "Good communication on timings, decisions, and site access is often the biggest factor in a smooth project.",
          "Look for practical timelines rather than over-promising.",
        ],
      },
    ],
  },
  {
    slug: "bespoke-cabinetry-bath-options",
    title: "Bespoke Cabinetry in Bath: Best Options for Kitchens, Alcoves and Storage",
    description:
      "Explore bespoke cabinetry options in Bath for kitchens, alcoves, and awkward spaces with practical design tips and finish guidance.",
    primaryKeyword: "bespoke cabinetry Bath",
    secondaryKeywords: ["fitted cabinetry Bath", "storage solutions Bath", "shelving Bath"],
    publishedAt: "2026-05-01",
    readTime: "6 min read",
    category: "Bespoke Joinery",
    heroImage: "/service-turning-2.webp",
    heroAlt: "Crafting bespoke cabinetry components",
    ctaLabel: "View built-in furniture service",
    ctaHref: "/services/built-in-furniture",
    sections: [
      {
        heading: "Alcove storage that fits period layouts",
        paragraphs: [
          "Alcove cabinetry can add significant storage while keeping chimney breasts and original room proportions visually balanced.",
          "Shallow upper shelving with deeper base units is often the most flexible layout.",
        ],
      },
      {
        heading: "Kitchen-adjacent cabinetry and utility spaces",
        paragraphs: [
          "Custom units help use narrow utility areas and awkward corners where off-the-shelf options underperform.",
          "Material and finish choices should align with moisture, heat, and day-to-day wear.",
        ],
      },
      {
        heading: "Choosing doors, internals, and hardware",
        paragraphs: [
          "Door style, drawer systems, and internal storage inserts have a major effect on usability over time.",
          "A workshop-built approach improves consistency and installation speed on site.",
        ],
      },
    ],
  },
  {
    slug: "fitted-cabinetry-bath-period-homes",
    title: "Fitted Cabinetry in Bath: Smart Storage Ideas for Period Homes",
    description:
      "Smart fitted cabinetry ideas for Bath period homes, with practical solutions for alcoves, eaves, and underused corners.",
    primaryKeyword: "fitted cabinetry Bath",
    secondaryKeywords: ["fitted furniture Bath", "alcove units Bath", "alcove cupboards Bath"],
    publishedAt: "2026-05-08",
    readTime: "5 min read",
    category: "Bespoke Joinery",
    heroImage: "/proj-pencil-layout.webp",
    heroAlt: "Planning layout for fitted cabinetry",
    ctaLabel: "Plan your fitted storage",
    ctaHref: "/contact",
    sections: [
      {
        heading: "Design around awkward geometry",
        paragraphs: [
          "Period homes often include out-of-square walls and changing floor levels, so cabinetry should be designed from measured site conditions.",
          "This avoids filler-heavy installs and creates a cleaner finished look.",
        ],
      },
      {
        heading: "Use mixed-depth storage",
        paragraphs: [
          "Combining shallow display shelving with deeper concealed storage gives better daily usability in living rooms and bedrooms.",
          "Internal shelves, pull-outs, and hanging zones should be planned around real use.",
        ],
      },
      {
        heading: "Keep finishes coherent with existing features",
        paragraphs: [
          "Paint colour, ironmongery, and moulding details should support original architectural character without copying it blindly.",
          "A balanced design helps new cabinetry feel integrated rather than added on.",
        ],
      },
    ],
  },
  {
    slug: "carpenter-loft-conversion-bath-checklist",
    title: "Carpenter for Loft Conversion in Bath: Joinery Checklist Before You Build",
    description:
      "A practical pre-build joinery checklist for loft conversions in Bath, including stair details, storage planning, and finish choices.",
    primaryKeyword: "carpenter for loft conversion Bath",
    secondaryKeywords: ["carpentry services near Bath", "bespoke carpentry Bath"],
    publishedAt: "2026-05-15",
    readTime: "7 min read",
    category: "Hiring and Costs",
    heroImage: "/proj-measure-frame.webp",
    heroAlt: "Measuring timber framing components",
    ctaLabel: "Talk through your loft project",
    ctaHref: "/contact",
    sections: [
      {
        heading: "Plan fixed joinery early",
        paragraphs: [
          "Stair geometry, balustrades, and eaves storage should be coordinated early to avoid design compromises late in the build.",
          "Joinery decisions affect both usable floor area and final visual quality.",
        ],
      },
      {
        heading: "Specify storage and access points",
        paragraphs: [
          "Built-in storage around eaves and dormers can transform how the room works, but only if access and depths are planned correctly.",
          "Early planning also helps avoid awkward door swings and unusable voids.",
        ],
      },
      {
        heading: "Confirm finishing standards and sequencing",
        paragraphs: [
          "Clarify whether surfaces are paint-ready, fully finished, or left for later trade stages.",
          "A clear sequence with other trades keeps site work efficient and reduces rework.",
        ],
      },
    ],
    faq: [
      {
        question: "When should I involve a carpenter in a loft conversion?",
        answer:
          "As early as possible during design so staircase details, storage options, and joinery scope are coordinated before build starts.",
      },
    ],
  },
  {
    slug: "carpentry-services-near-bath-joiner-vs-carpenter",
    title: "Carpentry Services Near Bath: Which Jobs Need a Joiner vs a Carpenter?",
    description:
      "Understand the difference between joiner and carpenter roles for homes in and near Bath, and when each skillset is needed.",
    primaryKeyword: "carpentry services near Bath",
    secondaryKeywords: ["carpenter Bath", "joiner Bath", "carpenters in Bath"],
    publishedAt: "2026-05-22",
    readTime: "5 min read",
    category: "Hiring and Costs",
    heroImage: "/proj-drill-tools.webp",
    heroAlt: "Joinery and carpentry tools on site",
    ctaLabel: "Explore all services",
    ctaHref: "/services",
    sections: [
      {
        heading: "Joinery vs carpentry in practical terms",
        paragraphs: [
          "Joinery usually refers to workshop-made timber components, while carpentry often focuses on installation and site-based work.",
          "Many residential projects need both, especially where bespoke units are built off site and fitted in home.",
        ],
      },
      {
        heading: "Jobs that lean joinery",
        paragraphs: [
          "Fitted cabinetry, wardrobes, and detailed timber window components generally benefit from workshop precision.",
          "This improves finish consistency and can shorten on-site disruption.",
        ],
      },
      {
        heading: "Jobs that lean carpentry",
        paragraphs: [
          "Structural first-fix, trim fitting, and adaptation to existing site conditions are more heavily site-led.",
          "In older Bath properties, site skill is critical because no two spaces are truly identical.",
        ],
      },
    ],
  },
  {
    slug: "traditional-woodwork-bath-somerset-period-details",
    title: "Traditional Woodwork in Bath Somerset: Matching Existing Period Details",
    description:
      "How to match traditional woodwork details in Bath and Somerset homes while balancing authenticity, durability, and modern use.",
    primaryKeyword: "traditional woodwork Bath Somerset",
    secondaryKeywords: ["traditional joinery Bath", "joinery Bath Somerset"],
    publishedAt: "2026-06-01",
    readTime: "6 min read",
    category: "Repairs and Restoration",
    heroImage: "/proj-marking-closeup.webp",
    heroAlt: "Detail marking for traditional timber work",
    ctaLabel: "View restoration services",
    ctaHref: "/services/repairs-restoration",
    sections: [
      {
        heading: "Survey details before replacement work",
        paragraphs: [
          "Profiles, mouldings, and proportions should be recorded before any component is removed or remade.",
          "Small differences in profile can significantly change the character of period interiors and exteriors.",
        ],
      },
      {
        heading: "Material and finish selection",
        paragraphs: [
          "Timber species and coating systems should be selected for the exposure level and intended maintenance cycle.",
          "Durability, repairability, and visual fit should be considered together.",
        ],
      },
      {
        heading: "Repair-first where practical",
        paragraphs: [
          "Retaining sound original fabric often gives better authenticity and lower waste than full replacement.",
          "Targeted repairs combined with careful finishing can extend service life significantly.",
        ],
      },
    ],
  },
  {
    slug: "affordable-carpenter-bath-quote-comparison",
    title: "Affordable Carpenter in Bath: How to Compare Quotes Without Losing Quality",
    description:
      "A practical method to compare carpenter quotes in Bath, focusing on scope clarity, quality standards, and long-term value.",
    primaryKeyword: "affordable carpenter Bath",
    secondaryKeywords: ["best carpenter in Bath", "carpentry Bath"],
    publishedAt: "2026-06-08",
    readTime: "5 min read",
    category: "Hiring and Costs",
    heroImage: "/proj-measure-board.webp",
    heroAlt: "Comparing measurements and project scope",
    ctaLabel: "Get a transparent quote",
    ctaHref: "/contact",
    sections: [
      {
        heading: "Compare scope line by line",
        paragraphs: [
          "A lower headline price can exclude prep, disposal, finishing, or final adjustments that are essential to quality results.",
          "Use a checklist to compare inclusions directly across quotes.",
        ],
      },
      {
        heading: "Review materials and hardware standards",
        paragraphs: [
          "Material quality, board type, paint systems, and ironmongery grade all affect performance and lifespan.",
          "Specify these clearly so alternatives are genuinely comparable.",
        ],
      },
      {
        heading: "Consider lifecycle value",
        paragraphs: [
          "Well-made joinery often costs less over time due to better durability and easier maintenance.",
          "Price matters, but value is tied to fit, finish, and expected service life.",
        ],
      },
    ],
  },
  {
    slug: "recommended-joiner-bath-questions-to-ask",
    title: "Recommended Joiner in Bath: 9 Questions to Ask Before Hiring",
    description:
      "Nine essential questions to ask before hiring a joiner in Bath, so project scope, quality, and timelines are clear from day one.",
    primaryKeyword: "recommended joiner Bath",
    secondaryKeywords: ["local joiner Bath", "joiners Bath Somerset"],
    publishedAt: "2026-06-15",
    readTime: "5 min read",
    category: "Hiring and Costs",
    heroImage: "/proj-nailer.webp",
    heroAlt: "Joinery installation tools and fixings",
    ctaLabel: "Speak to a local joiner",
    ctaHref: "/contact",
    sections: [
      {
        heading: "Questions about scope and outcomes",
        paragraphs: [
          "Confirm exactly what is included, expected finish level, and who handles each stage of the work.",
          "This prevents assumptions and keeps the project aligned with your priorities.",
        ],
      },
      {
        heading: "Questions about process and timings",
        paragraphs: [
          "Ask how long each phase takes, what can affect lead times, and how variations are handled.",
          "Clear process communication is often the strongest predictor of project experience.",
        ],
      },
      {
        heading: "Questions about quality and aftercare",
        paragraphs: [
          "Check material choices, tolerances, snagging approach, and any aftercare guidance at handover.",
          "A quality-focused process should include practical support after installation.",
        ],
      },
    ],
  },
  {
    slug: "joinery-workshop-bath-why-off-site-build",
    title: "Joinery Workshop in Bath: Why Off-Site Crafting Improves Finish Quality",
    description:
      "See how workshop-built joinery in Bath improves finish quality, consistency, and installation speed for bespoke projects.",
    primaryKeyword: "joinery workshop Bath",
    secondaryKeywords: ["bespoke joinery Bath", "custom joinery Bath"],
    publishedAt: "2026-06-22",
    readTime: "6 min read",
    category: "Bespoke Joinery",
    heroImage: "/proj-spray-finish.webp",
    heroAlt: "Workshop finishing process for bespoke joinery",
    ctaLabel: "Start your bespoke project",
    ctaHref: "/contact",
    sections: [
      {
        heading: "Precision and consistency",
        paragraphs: [
          "Workshop conditions allow better tool setup, repeatability, and quality checks than most live site environments.",
          "This is especially valuable for painted cabinetry and detailed joinery where finish quality is highly visible.",
        ],
      },
      {
        heading: "Reduced disruption at home",
        paragraphs: [
          "With more fabrication done off site, installation is typically faster and less disruptive to day-to-day home use.",
          "Site time can then focus on fitting accuracy and final detailing.",
        ],
      },
      {
        heading: "Better planning and outcomes",
        paragraphs: [
          "A workshop-first workflow encourages earlier decisions on design, hardware, and finish.",
          "This improves delivery reliability and reduces mid-project changes.",
        ],
      },
    ],
  },
];

export function getAllBlogPosts() {
  return [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
