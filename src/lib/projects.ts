export type BeforeAfterPair = {
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  location: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  scope: string[];
  gallery: { src: string; alt: string }[];
  beforeAfter: BeforeAfterPair[];
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "georgian-sash-renovation-bath",
    title: "Georgian Sash Renovation",
    location: "Bath",
    summary:
      "Full sash window restoration for a period property, including repairs, draught-proofing, and finish upgrades.",
    heroImage: "/service-tools-flatlay.webp",
    heroAlt: "Traditional carpentry tools prepared for sash window renovation",
    scope: [
      "Survey and condition report for all front elevation windows",
      "Timber repairs and replacement of damaged sections",
      "Draught-proofing and sash cord replacement",
      "Surface preparation, priming, and heritage-appropriate paint finish",
    ],
    gallery: [
      { src: "/proj-workbench.webp", alt: "Workbench setup before sash restoration" },
      { src: "/proj-measure-frame.webp", alt: "Measuring frame components for accurate fit" },
      { src: "/proj-chisel-work.webp", alt: "Careful chisel work on timber details" },
      { src: "/proj-marking-closeup.webp", alt: "Marking timber repair sections" },
      { src: "/proj-drill-tools.webp", alt: "Joinery tools used during restoration" },
      { src: "/proj-mitre-saw.webp", alt: "Precision cutting for sash replacement parts" },
    ],
    beforeAfter: [
      {
        title: "Front Sash Window",
        beforeImage: "/proj-marking-closeup.webp",
        afterImage: "/proj-spray-finish.webp",
        beforeAlt: "Before restoration with worn timber surfaces",
        afterAlt: "After restoration with clean repaired timber finish",
      },
      {
        title: "Frame and Hardware",
        beforeImage: "/proj-workbench.webp",
        afterImage: "/proj-measure-board.webp",
        beforeAlt: "Before condition showing weathered frame details",
        afterAlt: "After condition with restored frame and hardware",
      },
    ],
  },
  {
    slug: "alcove-cabinets-bear-flat",
    title: "Alcove Cabinets and Shelving",
    location: "Bear Flat",
    summary:
      "Bespoke fitted alcove cabinets and shelving designed to maximise storage while complementing period interior features.",
    heroImage: "/service-turning-2.webp",
    heroAlt: "Bespoke joinery process for fitted cabinetry",
    scope: [
      "Room survey and design proposal with storage layout",
      "Workshop build of painted cabinet carcasses and solid timber tops",
      "On-site fitting, scribing, and final adjustment",
      "Paint-ready finish and handover",
    ],
    gallery: [
      { src: "/proj-nailer.webp", alt: "Fixing cabinet components with nailer" },
      { src: "/proj-measure-frame.webp", alt: "Frame alignment and measuring checks" },
      { src: "/proj-pencil-layout.webp", alt: "Layout marking before assembly" },
      { src: "/proj-workbench.webp", alt: "Workshop bench with prepared timber" },
      { src: "/proj-chisel-work.webp", alt: "Refining joinery edges by hand" },
      { src: "/proj-drill-tools.webp", alt: "Tools and drilling setup for installation" },
    ],
    beforeAfter: [
      {
        title: "Left Alcove",
        beforeImage: "/proj-measure-board.webp",
        afterImage: "/proj-nailer.webp",
        beforeAlt: "Empty alcove before built-in cabinetry",
        afterAlt: "Completed built-in alcove cabinet and shelves",
      },
      {
        title: "Right Alcove",
        beforeImage: "/proj-pencil-layout.webp",
        afterImage: "/proj-spray-finish.webp",
        beforeAlt: "Bare wall and alcove before work",
        afterAlt: "Finished right alcove with matching cabinetry",
      },
    ],
  },
  {
    slug: "wardrobe-fit-out-keynsham",
    title: "Wardrobe Fit-Out",
    location: "Keynsham",
    summary:
      "Made-to-measure wardrobe interior and doors with improved storage, clean lines, and durable finish.",
    heroImage: "/hero-carpenter.webp",
    heroAlt: "Carpenter installing bespoke wardrobe components",
    scope: [
      "Internal layout planning for hanging and shelving zones",
      "Bespoke carcass and door build",
      "Soft-close hardware installation",
      "Final alignment, detailing, and snag completion",
    ],
    gallery: [
      { src: "/proj-mitre-saw.webp", alt: "Cutting wardrobe components to size" },
      { src: "/proj-marking-closeup.webp", alt: "Detailed marking and joinery checks" },
      { src: "/proj-measure-board.webp", alt: "Measuring shelves and door sections" },
      { src: "/proj-chisel-work.webp", alt: "Fine detail chisel work for finishing" },
      { src: "/proj-drill-tools.webp", alt: "Tools used for final fixings" },
      { src: "/proj-workbench.webp", alt: "Prepared wardrobe panels in workshop" },
    ],
    beforeAfter: [
      {
        title: "Wardrobe Interior",
        beforeImage: "/proj-measure-frame.webp",
        afterImage: "/proj-spray-finish.webp",
        beforeAlt: "Old wardrobe interior before upgrade",
        afterAlt: "New wardrobe interior with custom storage layout",
      },
      {
        title: "Door and Finish",
        beforeImage: "/proj-pencil-layout.webp",
        afterImage: "/proj-mitre-saw.webp",
        beforeAlt: "Existing wardrobe doors before replacement",
        afterAlt: "New fitted wardrobe doors and finish details",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projectCaseStudies.find((project) => project.slug === slug);
}
