import type { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBreadcrumbSchema, getFaqSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Carpenter in Bradford-on-Avon",
  description:
    "Bespoke carpentry and joinery services in Bradford-on-Avon, including sash window and fitted furniture work.",
  path: "/areas-we-cover/bradford-on-avon",
});

const bradfordOnAvonFaqs = [
  {
    question: "Do you work on older homes in Bradford-on-Avon?",
    answer:
      "Yes. We tailor joinery and repair work to suit period homes while keeping practical performance and longevity in mind.",
  },
  {
    question: "Can you provide bespoke storage for compact rooms?",
    answer:
      "Yes. We design fitted joinery around your room dimensions to improve storage without losing usable floor space.",
  },
  {
    question: "Do you handle sash window repairs locally?",
    answer:
      "Yes. We carry out sash window repair and restoration work, with recommendations based on condition and budget.",
  },
  {
    question: "How do I get a quote for Bradford-on-Avon?",
    answer:
      "Send your project details using the contact form and we will confirm next steps and quoting timescales.",
  },
];

export default function BradfordOnAvonAreaPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Areas We Cover", path: "/areas-we-cover" },
    { name: "Bradford-on-Avon", path: "/areas-we-cover/bradford-on-avon" },
  ];

  return (
    <section className="space-y-8 [&>nav[aria-label='Breadcrumb']+*]:mt-2">
      <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <StructuredData
        data={getServiceSchema({
          serviceName: "Bespoke Carpentry in Bradford-on-Avon",
          description:
            "Bespoke carpentry, sash window support, and fitted joinery for homes in Bradford-on-Avon.",
          path: "/areas-we-cover/bradford-on-avon",
          areaServed: ["Bradford-on-Avon"],
        })}
      />
      <StructuredData data={getFaqSchema(bradfordOnAvonFaqs)} />
      <PageHero
        badge="Area we cover"
        title="Carpentry in Bradford-on-Avon"
        description="We deliver bespoke carpentry, sash window support, and fitted joinery for homes in Bradford-on-Avon."
        variant="tinted"
        actions={[
          { href: "/contact", label: "Get a quote", variant: "primary" },
          { href: "/areas-we-cover", label: "All areas", variant: "secondary" },
        ]}
      />
      <AreaPageTemplate
        areaName="Bradford-on-Avon"
        introTitle="Local carpentry support for Bradford-on-Avon properties"
        introParagraphs={[
          "Bradford-on-Avon includes a mix of older stone homes and modern family properties, so carpentry work often needs a balance of character and function.",
          "Use this section to add area-specific context, including common project types you complete in Bradford-on-Avon.",
        ]}
        projectPlaceholders={[
          {
            title: "Project placeholder 1",
            locationHint: "Town centre",
            problem: "Add real homeowner requirement for this project.",
            workCompleted: "Add fitted joinery, sash repair, or restoration scope.",
            outcome: "Add practical result for the household.",
          },
          {
            title: "Project placeholder 2",
            locationHint: "Near the river / canal",
            problem: "Add genuine timber issue found on site.",
            workCompleted: "Add details of materials and method used.",
            outcome: "Add durability and usability improvement.",
          },
          {
            title: "Project placeholder 3",
            locationHint: "Residential area",
            problem: "Add project constraints and goals.",
            workCompleted: "Add exact carpentry tasks delivered.",
            outcome: "Add homeowner-focused finish outcome.",
          },
        ]}
        timberIssues={[
          {
            title: "Moisture-related timber wear",
            detail: "Some homes experience timber movement or weathering that needs careful repair planning.",
            approach: "Replace this with your real process for assessing and treating moisture-related joinery issues.",
          },
          {
            title: "Ageing joinery in period properties",
            detail: "Original details can be worn but still worth preserving where possible.",
            approach: "Add your repair-first approach and when you recommend partial replacement.",
          },
          {
            title: "Storage pressure in smaller rooms",
            detail: "Older layouts often benefit from tailored fitted furniture and alcove solutions.",
            approach: "Describe your measuring, design, and installation process for compact spaces.",
          },
        ]}
        topServices={[
          { href: "/services/bespoke-carpentry", label: "Bespoke Carpentry" },
          { href: "/services/sash-windows", label: "Sash Windows" },
          { href: "/services/built-in-furniture", label: "Built-in Furniture" },
          { href: "/services/repairs-restoration", label: "Repairs and Restoration" },
        ]}
        faqs={bradfordOnAvonFaqs}
      />
    </section>
  );
}
