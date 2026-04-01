import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { ServiceDetailTemplate } from "@/components/service-detail-template";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBreadcrumbSchema, getFaqSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Bespoke Carpentry Bath",
  description:
    "Made-to-measure bespoke carpentry in Bath, including fitted joinery, storage, and custom timber features.",
  path: "/services/bespoke-carpentry",
});

const bespokeCarpentryFaqs = [
  {
    question: "Do you design bespoke carpentry to fit uneven walls and alcoves?",
    answer:
      "Yes. We measure and template to suit non-standard openings in Bath homes, including period properties where walls and floors are rarely perfectly square.",
  },
  {
    question: "Can you match existing joinery styles in older Bath properties?",
    answer:
      "Yes. We can match profiles, proportions, and finishes where practical so new fitted work sits naturally with existing joinery.",
  },
  {
    question: "Do you only cover Bath city centre?",
    answer:
      "No. We also work across Bradford-on-Avon, Keynsham, and Frome, with clear quoting and scheduling before work starts.",
  },
  {
    question: "Can I call first and then send photos for a quote?",
    answer:
      "Yes. A quick call can help clarify scope, and photos are useful for initial advice before a detailed site survey.",
  },
];

export default function BespokeCarpentryPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Bespoke Carpentry", path: "/services/bespoke-carpentry" },
  ];

  return (
    <section className="space-y-8 [&>nav[aria-label='Breadcrumb']+*]:mt-2">
      <StructuredData
        data={getBreadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <StructuredData
        data={getServiceSchema({
          serviceName: "Bespoke Carpentry in Bath",
          description:
            "Custom carpentry made to suit your home, including fitted joinery, shelving, and cabinetry.",
          path: "/services/bespoke-carpentry",
          areaServed: ["Bath", "Bradford-on-Avon", "Keynsham", "Frome"],
        })}
      />
      <StructuredData data={getFaqSchema(bespokeCarpentryFaqs)} />
      <PageHero
        badge="Service"
        title="Bespoke Carpentry in Bath"
        description="Custom carpentry made to suit your home and style. We build fitted joinery, shelving, cabinetry, and timber features that blend with period or modern interiors."
        variant="image"
        imageSrc="/service-turning-1.webp"
        imageAlt="Woodturning craftsmanship for bespoke carpentry"
        actions={[
          { href: "/contact", label: "Get a quote", variant: "primary" },
          { href: "/services", label: "All services", variant: "secondary" },
        ]}
      />
      <ServiceDetailTemplate
        suitabilityPoints={[
          "You need made-to-measure joinery for awkward room layouts, alcoves, or period details.",
          "You want fitted storage that feels built-in rather than off-the-shelf.",
          "You are updating a key room and need practical carpentry with a long-lasting finish.",
          "You want one carpenter to survey, scope, and deliver a clear joinery plan.",
        ]}
        processSteps={[
          {
            title: "Survey and brief",
            description:
              "We review your room, measurements, and priorities, then confirm what the joinery needs to achieve day to day.",
          },
          {
            title: "Scope and design decisions",
            description:
              "We set out layout, materials, and finish options clearly so you can approve the build direction with confidence.",
          },
          {
            title: "Build and fit",
            description:
              "Joinery is built and fitted carefully on site, with adjustment and finishing completed for a clean final handover.",
          },
        ]}
        includedItems={[
          "On-site survey and practical suitability check",
          "Made-to-measure carpentry scope with clear finish intent",
          "Bespoke joinery build and installation",
          "Final adjustments, detailing, and handover walk-through",
        ]}
        excludedItems={[
          "Electrical, plumbing, and decoration by other trades",
          "Structural alterations outside agreed carpentry scope",
          "Specialist listed-building permissions or consultant fees",
        ]}
        localIssues={[
          {
            title: "Uneven walls and non-standard openings",
            detail:
              "Many Bath period homes need templated, bespoke joinery that accounts for movement, variation, and original construction tolerances.",
          },
          {
            title: "Storage pressure in family living spaces",
            detail:
              "Homes in Bath and nearby towns often benefit from fitted alcove units, wardrobes, and integrated shelving planned around daily use.",
          },
          {
            title: "Matching original details",
            detail:
              "For traditional interiors, new work often needs careful profile and proportion choices so joinery feels consistent with the property.",
          },
        ]}
        projectProof={[
          {
            title: "Alcove Cabinets and Shelving",
            location: "Bear Flat",
            summary:
              "Designed and fitted storage to improve usable space while keeping period character and clean visual lines.",
            href: "/portfolio/alcove-cabinets-bear-flat",
          },
          {
            title: "Wardrobe Fit-Out",
            location: "Keynsham",
            summary:
              "Built a made-to-measure wardrobe interior and doors with practical zoning for daily use.",
            href: "/portfolio/wardrobe-fit-out-keynsham",
          },
          {
            title: "Georgian Sash Renovation",
            location: "Bath",
            summary:
              "Delivered repair-led joinery work focused on preserving original timber character and improving performance.",
            href: "/portfolio/georgian-sash-renovation-bath",
          },
        ]}
        relatedLinks={[
          { label: "Sash Window Services", href: "/services/sash-windows" },
          { label: "Built-in Furniture", href: "/services/built-in-furniture" },
          { label: "Repairs and Restoration", href: "/services/repairs-restoration" },
          { label: "Areas We Cover", href: "/areas-we-cover" },
        ]}
        faqs={bespokeCarpentryFaqs}
      />
    </section>
  );
}
