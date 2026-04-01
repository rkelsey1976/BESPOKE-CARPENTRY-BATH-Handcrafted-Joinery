import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { ServiceDetailTemplate } from "@/components/service-detail-template";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBreadcrumbSchema, getFaqSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Carpentry Repairs and Restoration Bath",
  description:
    "Carpentry repairs and timber restoration in Bath for period and modern homes.",
  path: "/services/repairs-restoration",
});

const repairsRestorationFaqs = [
  {
    question: "Do you focus on repairs before suggesting full replacement?",
    answer:
      "Yes. We prioritise repair-first options where practical, especially for period joinery and character timber details.",
  },
  {
    question: "What kind of timber issues do you commonly fix?",
    answer:
      "We regularly address worn edges, localised decay, movement-related fit issues, and damaged timber sections in doors, windows, and internal joinery.",
  },
  {
    question: "Can you work sympathetically in older Bath homes?",
    answer:
      "Yes. Our restoration approach aims to preserve original character while improving durability and day-to-day function.",
  },
  {
    question: "Do you also cover restoration projects in nearby towns?",
    answer:
      "Yes. We provide repairs and restoration in Bath, Bradford-on-Avon, Keynsham, and Frome.",
  },
];

export default function RepairsRestorationPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Repairs and Restoration", path: "/services/repairs-restoration" },
  ];

  return (
    <section className="space-y-8 [&>nav[aria-label='Breadcrumb']+*]:mt-2">
      <StructuredData
        data={getBreadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <StructuredData
        data={getServiceSchema({
          serviceName: "Carpentry Repairs and Restoration in Bath",
          description:
            "Sympathetic timber repair and restoration work for homes around Bath.",
          path: "/services/repairs-restoration",
          areaServed: ["Bath", "Bradford-on-Avon", "Keynsham", "Frome"],
        })}
      />
      <StructuredData data={getFaqSchema(repairsRestorationFaqs)} />
      <PageHero
        badge="Service"
        title="Repairs and Restoration in Bath"
        description="Timber repairs and sympathetic restoration for worn or damaged carpentry in homes around Bath. We focus on preserving original details and improving longevity."
        variant="tinted"
        actions={[
          { href: "/contact", label: "Get a quote", variant: "primary" },
          { href: "/services", label: "All services", variant: "secondary" },
        ]}
      />
      <ServiceDetailTemplate
        suitabilityPoints={[
          "Timber joinery is worn or damaged and you want to preserve it where possible.",
          "You need practical carpentry repairs that improve use without unnecessary full replacement.",
          "You are maintaining a period property and need sympathetic restoration decisions.",
          "You want clear advice on what can be repaired now and what may need future work.",
        ]}
        processSteps={[
          {
            title: "Condition assessment",
            description:
              "We inspect affected timber areas, identify likely causes, and separate urgent repairs from non-urgent recommendations.",
          },
          {
            title: "Repair-first scope",
            description:
              "We define practical restoration and repair actions, including where selective replacement is needed for durability.",
          },
          {
            title: "Repair delivery and checks",
            description:
              "Work is completed carefully with final checks for fit, finish, and function before handover.",
          },
        ]}
        includedItems={[
          "On-site inspection and repair planning",
          "Targeted timber repairs and restoration detailing",
          "Selective replacement where repair is not viable",
          "Final fit/finish checks with practical maintenance advice",
        ]}
        excludedItems={[
          "Full building refurbishment outside carpentry scope",
          "Specialist damp remediation by third-party contractors",
          "Decoration and painting by others unless agreed",
        ]}
        localIssues={[
          {
            title: "Weathered external timber",
            detail:
              "Bath and nearby areas see recurring wear in exposed timber details, often requiring selective repair before damage spreads.",
          },
          {
            title: "Wear from long-term use",
            detail:
              "High-use doors, frames, and fitted joinery can drift out of alignment and need practical correction and reinforcement.",
          },
          {
            title: "Historic joinery needing careful intervention",
            detail:
              "Period homes benefit from repair approaches that preserve original profiles and avoid unnecessary loss of character.",
          },
        ]}
        projectProof={[
          {
            title: "Georgian Sash Renovation",
            location: "Bath",
            summary:
              "Completed repair-led sash and frame restoration with draught-focused improvements and sympathetic finishing.",
            href: "/portfolio/georgian-sash-renovation-bath",
          },
          {
            title: "Wardrobe Fit-Out",
            location: "Keynsham",
            summary:
              "Delivered targeted carpentry corrections and final alignment to improve long-term function and finish quality.",
            href: "/portfolio/wardrobe-fit-out-keynsham",
          },
          {
            title: "Alcove Cabinets and Shelving",
            location: "Bear Flat",
            summary:
              "Integrated repair and preparation work before bespoke installation for a cleaner long-term result.",
            href: "/portfolio/alcove-cabinets-bear-flat",
          },
        ]}
        relatedLinks={[
          { label: "Sash Window Services", href: "/services/sash-windows" },
          { label: "Bespoke Carpentry", href: "/services/bespoke-carpentry" },
          { label: "Built-in Furniture", href: "/services/built-in-furniture" },
          { label: "Areas We Cover", href: "/areas-we-cover" },
        ]}
        faqs={repairsRestorationFaqs}
      />
    </section>
  );
}
