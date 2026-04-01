import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { projectCaseStudies } from "@/lib/projects";

export default function PortfolioPage() {
  return (
    <section className="space-y-8">
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
