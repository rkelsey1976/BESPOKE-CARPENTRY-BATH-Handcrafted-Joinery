import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
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
    <section className="space-y-8">
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
          <article key={project.slug} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-stone-200">
            <h2 className="text-base font-semibold text-stone-900">
              {project.title} - {project.location}
            </h2>
            <p className="mt-2 text-sm text-stone-700">{project.summary}</p>
            <Link
              href={`/portfolio/${project.slug}`}
              className="mt-3 inline-block text-sm font-semibold text-amber-700"
            >
              View case study
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
