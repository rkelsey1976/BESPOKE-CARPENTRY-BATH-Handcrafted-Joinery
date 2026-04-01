import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { ServiceDetailTemplate } from "@/components/service-detail-template";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBreadcrumbSchema, getFaqSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sash Window Repairs Bath",
  description:
    "Sash window repair and restoration in Bath for traditional timber windows, including draught-proofing.",
  path: "/services/sash-windows",
});

const sashWindowsFaqs = [
  {
    question: "Do you repair sash windows before recommending full replacement?",
    answer:
      "Yes. We follow a repair-first approach where possible, assessing timber condition, operation, and draught points before recommending replacement.",
  },
  {
    question: "Can you help with draughty windows in older Bath homes?",
    answer:
      "Yes. We regularly improve comfort through targeted sash window repairs, alignment work, and draught-reduction measures.",
  },
  {
    question: "Do you work on listed or period-style properties?",
    answer:
      "Yes. We can adapt the scope to suit period details and preserve character where practical, with clear recommendations before work starts.",
  },
  {
    question: "Do you cover areas outside Bath?",
    answer:
      "Yes. We also provide sash window services in Bradford-on-Avon, Keynsham, and Frome.",
  },
];

export default function SashWindowsPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Sash Windows", path: "/services/sash-windows" },
  ];

  return (
    <section className="space-y-8 [&>nav[aria-label='Breadcrumb']+*]:mt-2">
      <StructuredData
        data={getBreadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <StructuredData
        data={getServiceSchema({
          serviceName: "Sash Window Services in Bath",
          description:
            "Timber sash window repairs, draught-proofing, and restoration for period homes in Bath.",
          path: "/services/sash-windows",
          areaServed: ["Bath", "Bradford-on-Avon", "Keynsham", "Frome"],
        })}
      />
      <StructuredData data={getFaqSchema(sashWindowsFaqs)} />
      <PageHero
        badge="Service"
        title="Sash Window Services in Bath"
        description="Specialist timber sash window services including repair, draught-proofing, and restoration to preserve character while improving operation and comfort."
        variant="tinted"
        actions={[
          { href: "/contact", label: "Get a quote", variant: "primary" },
          { href: "/services", label: "All services", variant: "secondary" },
        ]}
      />
      <ServiceDetailTemplate
        suitabilityPoints={[
          "Your sash windows stick, rattle, or feel difficult to operate.",
          "You have draughts and want better comfort without losing period character.",
          "You want practical timber repair options before considering replacement.",
          "You need a local joiner in Bath with experience in traditional sash window detailing.",
        ]}
        processSteps={[
          {
            title: "Window condition survey",
            description:
              "We check frames, sashes, movement, and visible timber condition to define the most practical repair-first scope.",
          },
          {
            title: "Scope and method",
            description:
              "We explain repair items, likely outcomes, and any replacement exceptions so you can decide with clear information.",
          },
          {
            title: "Repair and finishing",
            description:
              "We complete agreed sash window work, test operation, and hand over with maintenance guidance for longevity.",
          },
        ]}
        includedItems={[
          "Initial sash window condition review",
          "Timber repairs and operational improvements where viable",
          "Draught-reduction focused adjustments",
          "Final function checks and practical handover advice",
        ]}
        excludedItems={[
          "Specialist glazing replacement outside joinery scope",
          "Scaffold or access services unless separately agreed",
          "Decoration by third-party painters unless specified",
        ]}
        localIssues={[
          {
            title: "Paint build-up and sticking sashes",
            detail:
              "Bath period homes often show movement and paint-related friction that affects smooth window operation over time.",
          },
          {
            title: "Draught and comfort issues in older frames",
            detail:
              "Traditional timber windows can lose performance as seals, cords, and fit tolerances degrade with age.",
          },
          {
            title: "Partial decay in exposed timber sections",
            detail:
              "Weather-facing details can deteriorate unevenly, making selective repair the most practical route in many cases.",
          },
        ]}
        projectProof={[
          {
            title: "Georgian Sash Renovation",
            location: "Bath",
            summary:
              "Delivered timber repairs, draught-proofing, and finish upgrades to improve operation while preserving character.",
            href: "/portfolio/georgian-sash-renovation-bath",
          },
          {
            title: "Alcove Cabinets and Shelving",
            location: "Bear Flat",
            summary:
              "Included coordinated joinery detailing to align new fitted work with existing period window features.",
            href: "/portfolio/alcove-cabinets-bear-flat",
          },
          {
            title: "Wardrobe Fit-Out",
            location: "Keynsham",
            summary:
              "Completed precision joinery and finishing work with careful on-site adjustment and snag completion.",
            href: "/portfolio/wardrobe-fit-out-keynsham",
          },
        ]}
        relatedLinks={[
          { label: "Bespoke Carpentry", href: "/services/bespoke-carpentry" },
          { label: "Repairs and Restoration", href: "/services/repairs-restoration" },
          { label: "Built-in Furniture", href: "/services/built-in-furniture" },
          { label: "Areas We Cover", href: "/areas-we-cover" },
        ]}
        faqs={sashWindowsFaqs}
      />
    </section>
  );
}
