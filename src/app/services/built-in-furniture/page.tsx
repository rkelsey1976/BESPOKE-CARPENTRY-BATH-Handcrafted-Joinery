import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { ServiceDetailTemplate } from "@/components/service-detail-template";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBreadcrumbSchema, getFaqSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Built-in Furniture Bath",
  description:
    "Built-in furniture and fitted storage in Bath, including alcove cabinets, wardrobes, and media units.",
  path: "/services/built-in-furniture",
});

const builtInFurnitureFaqs = [
  {
    question: "Can you design fitted furniture for awkward alcoves and sloped walls?",
    answer:
      "Yes. We design around the room as it is, including uneven walls, chimney breasts, and non-standard dimensions common in Bath homes.",
  },
  {
    question: "Do you build wardrobes and storage for specific room layouts?",
    answer:
      "Yes. We tailor internal storage and external style to suit your daily routine, room use, and finish preferences.",
  },
  {
    question: "Can built-in furniture match period interiors?",
    answer:
      "Yes. We can align proportions and detailing with existing character features so fitted pieces sit naturally in older properties.",
  },
  {
    question: "Do you cover fitted furniture projects outside Bath?",
    answer:
      "Yes. We work across Bath and nearby towns including Bradford-on-Avon, Keynsham, and Frome.",
  },
];

export default function BuiltInFurniturePage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Built-in Furniture", path: "/services/built-in-furniture" },
  ];

  return (
    <section className="space-y-8">
      <StructuredData
        data={getBreadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <StructuredData
        data={getServiceSchema({
          serviceName: "Built-in Furniture in Bath",
          description:
            "Custom fitted furniture and storage for homes in Bath and nearby areas.",
          path: "/services/built-in-furniture",
          areaServed: ["Bath", "Bradford-on-Avon", "Keynsham", "Frome"],
        })}
      />
      <StructuredData data={getFaqSchema(builtInFurnitureFaqs)} />
      <PageHero
        badge="Service"
        title="Built-in Furniture in Bath"
        description="Tailored storage and furniture, from alcove cabinets to wardrobes and media units, designed to maximise space and deliver a clean finish."
        variant="tinted"
        actions={[
          { href: "/contact", label: "Get a quote", variant: "primary" },
          { href: "/services", label: "All services", variant: "secondary" },
        ]}
      />
      <ServiceDetailTemplate
        suitabilityPoints={[
          "You need fitted storage that uses alcoves, recesses, or underused wall space effectively.",
          "You want built-in furniture designed around how your household actually uses the room.",
          "You prefer made-to-measure wardrobes or cabinetry over modular off-the-shelf options.",
          "You need a local carpenter to handle survey, build, fitting, and final detailing.",
        ]}
        processSteps={[
          {
            title: "Room survey and planning",
            description:
              "We measure the space, confirm storage priorities, and identify practical constraints before design decisions are locked in.",
          },
          {
            title: "Layout and finish specification",
            description:
              "We define internal storage layout, external style, and finish choices so the fitted furniture suits your home and usage.",
          },
          {
            title: "Build, fit, and final adjustment",
            description:
              "Units are built and installed with precise fitting, alignment checks, and final detailing ready for handover.",
          },
        ]}
        includedItems={[
          "On-site survey and fitted furniture planning",
          "Custom storage layout and material/finish scope",
          "Bespoke build and installation",
          "Final adjustments and completion checks",
        ]}
        excludedItems={[
          "Electrical work, lighting integration, or re-wiring",
          "Plastering and decorating by other trades unless agreed",
          "Major wall/structural alterations outside furniture scope",
        ]}
        localIssues={[
          {
            title: "Limited storage in period room layouts",
            detail:
              "Bath homes often need tailored alcove and wall-to-wall solutions to add practical storage without compromising flow.",
          },
          {
            title: "Non-standard dimensions in older properties",
            detail:
              "Irregular walls and floors make accurate measuring and scribing essential for a clean built-in finish.",
          },
          {
            title: "Balancing storage with character",
            detail:
              "Many homeowners want fitted furniture that feels intentional and practical while still fitting period interior style.",
          },
        ]}
        projectProof={[
          {
            title: "Alcove Cabinets and Shelving",
            location: "Bear Flat",
            summary:
              "Created fitted alcove storage with a layout designed for daily use and a finish aligned with the room style.",
            href: "/portfolio/alcove-cabinets-bear-flat",
          },
          {
            title: "Wardrobe Fit-Out",
            location: "Keynsham",
            summary:
              "Built and installed a made-to-measure wardrobe interior with practical zoning and durable detailing.",
            href: "/portfolio/wardrobe-fit-out-keynsham",
          },
          {
            title: "Georgian Sash Renovation",
            location: "Bath",
            summary:
              "Included coordinated timber detailing work to ensure new joinery sat consistently with existing features.",
            href: "/portfolio/georgian-sash-renovation-bath",
          },
        ]}
        relatedLinks={[
          { label: "Bespoke Carpentry", href: "/services/bespoke-carpentry" },
          { label: "Sash Window Services", href: "/services/sash-windows" },
          { label: "Repairs and Restoration", href: "/services/repairs-restoration" },
          { label: "Areas We Cover", href: "/areas-we-cover" },
        ]}
        faqs={builtInFurnitureFaqs}
      />
    </section>
  );
}
