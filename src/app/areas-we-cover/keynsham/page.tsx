import type { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBreadcrumbSchema, getFaqSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Carpenter in Keynsham",
  description:
    "Local bespoke carpentry services in Keynsham, including fitted furniture and timber repairs.",
  path: "/areas-we-cover/keynsham",
});

const keynshamFaqs = [
  {
    question: "Do you offer fitted furniture in Keynsham homes?",
    answer:
      "Yes. We design and build fitted storage and furniture around your room dimensions and layout needs.",
  },
  {
    question: "Can you help with timber repairs and restoration?",
    answer:
      "Yes. We carry out practical repair and restoration work to extend the life of existing timber features.",
  },
  {
    question: "Do you provide sash window work in Keynsham?",
    answer:
      "Yes. We support sash window repairs and related joinery work, with scope based on on-site condition.",
  },
  {
    question: "How do I start a project quote?",
    answer:
      "Share your project details through the contact form and we will respond with next steps and quoting guidance.",
  },
];

export default function KeynshamAreaPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Areas We Cover", path: "/areas-we-cover" },
    { name: "Keynsham", path: "/areas-we-cover/keynsham" },
  ];

  return (
    <section className="space-y-8 [&>nav[aria-label='Breadcrumb']+*]:mt-2">
      <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <StructuredData
        data={getServiceSchema({
          serviceName: "Bespoke Carpentry in Keynsham",
          description:
            "Fitted furniture, bespoke carpentry, and timber repairs in Keynsham.",
          path: "/areas-we-cover/keynsham",
          areaServed: ["Keynsham"],
        })}
      />
      <StructuredData data={getFaqSchema(keynshamFaqs)} />
      <PageHero
        badge="Area we cover"
        title="Carpentry in Keynsham"
        description="From fitted furniture to carpentry repairs, we support homeowners in Keynsham with practical, high-quality timber work."
        variant="tinted"
        actions={[
          { href: "/contact", label: "Get a quote", variant: "primary" },
          { href: "/areas-we-cover", label: "All areas", variant: "secondary" },
        ]}
      />
      <AreaPageTemplate
        areaName="Keynsham"
        introTitle="Practical bespoke carpentry for Keynsham homeowners"
        introParagraphs={[
          "Keynsham homes range from modern estates to older properties, so projects often combine storage optimisation with long-lasting timber detailing.",
          "Use this section to add local project context and explain what homeowners in Keynsham most often request.",
        ]}
        projectPlaceholders={[
          {
            title: "Project placeholder 1",
            locationHint: "Central Keynsham",
            problem: "Add the actual client need and room context.",
            workCompleted: "Add the bespoke carpentry scope delivered.",
            outcome: "Add the final practical result for the homeowner.",
          },
          {
            title: "Project placeholder 2",
            locationHint: "Residential estate",
            problem: "Add genuine issue or design brief.",
            workCompleted: "Add key tasks, materials, and finish details.",
            outcome: "Add how the finished work improved the space.",
          },
          {
            title: "Project placeholder 3",
            locationHint: "Nearby village approach",
            problem: "Add the challenge that required custom joinery.",
            workCompleted: "Add exact joinery and installation actions.",
            outcome: "Add durability or usability improvement.",
          },
        ]}
        timberIssues={[
          {
            title: "Worn high-use timber features",
            detail: "Frequently used doors, frames, and joinery can show wear that needs precise repair.",
            approach: "Replace with your standard assessment and repair method for high-use timber.",
          },
          {
            title: "Inefficient use of alcoves and wall recesses",
            detail: "Many homes have awkward spaces that work better with custom fitted joinery.",
            approach: "Add how you survey, design, and install fitted units to maximise usable storage.",
          },
          {
            title: "Minor movement and alignment issues",
            detail: "Seasonal movement can affect timber operation over time.",
            approach: "Add your practical correction approach and maintenance advice.",
          },
        ]}
        topServices={[
          { href: "/services/bespoke-carpentry", label: "Bespoke Carpentry" },
          { href: "/services/sash-windows", label: "Sash Windows" },
          { href: "/services/built-in-furniture", label: "Built-in Furniture" },
          { href: "/services/repairs-restoration", label: "Repairs and Restoration" },
        ]}
        faqs={keynshamFaqs}
      />
    </section>
  );
}
