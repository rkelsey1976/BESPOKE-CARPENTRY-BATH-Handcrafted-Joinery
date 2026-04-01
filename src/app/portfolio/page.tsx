import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { PortfolioProjectCard } from "@/components/portfolio-project-card";
import { StructuredData } from "@/components/structured-data";
import { projectCaseStudies } from "@/lib/projects";
import { buildMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Carpentry Portfolio Bath",
  description:
    "View recent bespoke carpentry, joinery, and restoration case studies completed across Bath and nearby areas.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <section className="space-y-8 [&>nav[aria-label='Breadcrumb']+*]:mt-2">
      <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        badge="Portfolio"
        title="Recent carpentry projects"
        description="A selection of bespoke carpentry and restoration projects completed across Bath and nearby areas."
        variant="tinted"
        actions={[
          { href: "/contact", label: "Get a quote", variant: "primary" },
          { href: "/services", label: "View services", variant: "secondary" },
        ]}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {projectCaseStudies.map((project) => (
          <PortfolioProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
