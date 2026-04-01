import type { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBreadcrumbSchema, getFaqSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Carpenter in Frome",
  description:
    "Bespoke carpentry and timber restoration services in Frome for period and modern homes.",
  path: "/areas-we-cover/frome",
});

const fromeFaqs = [
  {
    question: "What types of carpentry projects do you handle in Frome?",
    answer:
      "We cover bespoke carpentry, fitted furniture, sash window support, and timber repair or restoration work.",
  },
  {
    question: "Can you match existing timber details in older homes?",
    answer:
      "Yes. We aim to match profiles and finishes where practical so new work sits naturally with existing joinery.",
  },
  {
    question: "Do you offer site visits in and around Frome?",
    answer:
      "Yes. Contact us with your project details and location and we will confirm availability and next steps.",
  },
  {
    question: "Can you quote from photos first?",
    answer:
      "Photos are useful for initial guidance. For accurate pricing, we usually confirm details after a site assessment.",
  },
];

export default function FromeAreaPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Areas We Cover", path: "/areas-we-cover" },
    { name: "Frome", path: "/areas-we-cover/frome" },
  ];

  return (
    <section className="space-y-8">
      <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <StructuredData
        data={getServiceSchema({
          serviceName: "Bespoke Carpentry in Frome",
          description:
            "Bespoke carpentry and timber restoration services in Frome.",
          path: "/areas-we-cover/frome",
          areaServed: ["Frome"],
        })}
      />
      <StructuredData data={getFaqSchema(fromeFaqs)} />
      <PageHero
        badge="Area we cover"
        title="Carpentry in Frome"
        description="We provide bespoke carpentry and timber restoration services in Frome, with a focus on durable finish and careful detailing."
        variant="tinted"
        actions={[
          { href: "/contact", label: "Get a quote", variant: "primary" },
          { href: "/areas-we-cover", label: "All areas", variant: "secondary" },
        ]}
      />
      <AreaPageTemplate
        areaName="Frome"
        introTitle="Bespoke joinery and restoration for Frome homes"
        introParagraphs={[
          "Frome properties often combine character features with practical modern living requirements, making bespoke carpentry a strong fit for many projects.",
          "Use this section to add Frome-specific project context and explain how your joinery approach supports long-term durability.",
        ]}
        projectPlaceholders={[
          {
            title: "Project placeholder 1",
            locationHint: "Frome town area",
            problem: "Add a real local client challenge.",
            workCompleted: "Add the exact joinery or repair works completed.",
            outcome: "Add clear before-and-after result for the home.",
          },
          {
            title: "Project placeholder 2",
            locationHint: "Residential streets",
            problem: "Add authentic issue encountered on this job.",
            workCompleted: "Add your delivered carpentry scope and finish.",
            outcome: "Add measurable comfort or storage improvement.",
          },
          {
            title: "Project placeholder 3",
            locationHint: "Nearby area",
            problem: "Add the property and timber condition context.",
            workCompleted: "Add what was repaired, replaced, or custom built.",
            outcome: "Add the practical benefit and final quality outcome.",
          },
        ]}
        timberIssues={[
          {
            title: "Weathered external joinery",
            detail: "External timber can degrade over time and may need selective restoration.",
            approach: "Replace with your repair strategy and finish system for exposed timber.",
          },
          {
            title: "Draft and comfort issues around older windows",
            detail: "Timber windows may require adjustment, repair, and sealing improvements.",
            approach: "Add your inspection-first process and the upgrade options you usually offer.",
          },
          {
            title: "Storage gaps in lived-in family spaces",
            detail: "Homes often benefit from bespoke storage designed around daily routines.",
            approach: "Describe your planning, build, and installation process for fitted furniture.",
          },
        ]}
        topServices={[
          { href: "/services/bespoke-carpentry", label: "Bespoke Carpentry" },
          { href: "/services/sash-windows", label: "Sash Windows" },
          { href: "/services/built-in-furniture", label: "Built-in Furniture" },
          { href: "/services/repairs-restoration", label: "Repairs and Restoration" },
        ]}
        faqs={fromeFaqs}
      />
    </section>
  );
}
