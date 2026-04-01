import type { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBreadcrumbSchema, getFaqSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Carpenter in Bath",
  description:
    "Local carpentry and joinery services in Bath, including bespoke carpentry, sash windows, and restoration.",
  path: "/areas-we-cover/bath",
});

const bathFaqs = [
  {
    question: "Do you work on period homes in Bath?",
    answer:
      "Yes. We regularly work on period properties and tailor carpentry details to suit original character while improving day-to-day practicality.",
  },
  {
    question: "Can you repair sash windows rather than replacing them?",
    answer:
      "In many cases yes. We assess timber condition, movement, and draught issues first, then recommend repair-focused work where viable.",
  },
  {
    question: "How quickly can you quote in Bath?",
    answer:
      "For most enquiries we can arrange an initial review and provide a clear next-step quote timeline shortly after first contact.",
  },
  {
    question: "Do you cover areas outside central Bath?",
    answer:
      "Yes. We cover Bath and nearby locations. If you are unsure, send your postcode and we will confirm quickly.",
  },
];

export default function BathAreaPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Areas We Cover", path: "/areas-we-cover" },
    { name: "Bath", path: "/areas-we-cover/bath" },
  ];

  return (
    <section className="space-y-8">
      <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <StructuredData
        data={getServiceSchema({
          serviceName: "Bespoke Carpentry in Bath",
          description:
            "Bespoke carpentry, sash window work, and restoration for homes in Bath.",
          path: "/areas-we-cover/bath",
          areaServed: ["Bath"],
        })}
      />
      <StructuredData data={getFaqSchema(bathFaqs)} />
      <PageHero
        badge="Area we cover"
        title="Carpentry in Bath"
        description="We provide bespoke carpentry, sash window work, and restoration throughout Bath."
        variant="image"
        imageSrc="/hero-carpenter.webp"
        imageAlt="Carpenter at work in Bath area"
        actions={[
          { href: "/contact", label: "Get a quote", variant: "primary" },
          { href: "/areas-we-cover", label: "All areas", variant: "secondary" },
        ]}
      />
      <AreaPageTemplate
        areaName="Bath"
        introTitle="Bespoke carpentry for Bath homes"
        introParagraphs={[
          "Bath includes Georgian terraces, listed buildings, and modern family homes, each with different carpentry requirements. This template gives you a structure to add truly local examples and details.",
          "Use this section to explain how your approach changes by property type, room usage, and joinery finish expectations in Bath.",
        ]}
        projectPlaceholders={[
          {
            title: "Project placeholder 1",
            locationHint: "Bath city centre",
            problem: "Add real client challenge for this project.",
            workCompleted: "Add the exact carpentry or sash window work completed.",
            outcome: "Add practical outcome and client-facing result.",
          },
          {
            title: "Project placeholder 2",
            locationHint: "Lansdown / Weston",
            problem: "Add real issue found on site.",
            workCompleted: "Add scope and materials used.",
            outcome: "Add measurable or visual improvement.",
          },
          {
            title: "Project placeholder 3",
            locationHint: "Oldfield Park / Bear Flat",
            problem: "Add project context and constraints.",
            workCompleted: "Add joinery tasks completed.",
            outcome: "Add final homeowner benefit.",
          },
        ]}
        timberIssues={[
          {
            title: "Draughty or sticking sash windows",
            detail: "Common in older Bath properties where timber movement and paint build-up affect operation.",
            approach: "Record the real inspection and repair approach you use before recommending replacement.",
          },
          {
            title: "Worn external timber details",
            detail: "Exposed joinery can suffer from weathering and moisture-related wear over time.",
            approach: "Describe your repair-first process and the finish specification you normally use.",
          },
          {
            title: "Uneven original walls and openings",
            detail: "Period interiors often need careful measuring and templating for fitted work.",
            approach: "Explain how you template and fit bespoke joinery accurately in non-standard spaces.",
          },
        ]}
        topServices={[
          { href: "/services/bespoke-carpentry", label: "Bespoke Carpentry" },
          { href: "/services/sash-windows", label: "Sash Windows" },
          { href: "/services/built-in-furniture", label: "Built-in Furniture" },
          { href: "/services/repairs-restoration", label: "Repairs and Restoration" },
        ]}
        faqs={bathFaqs}
      />
    </section>
  );
}
