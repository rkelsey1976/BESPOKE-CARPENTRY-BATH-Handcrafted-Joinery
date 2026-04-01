import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { getProjectBySlug, projectCaseStudies } from "@/lib/projects";
import { buildMetadata, getBreadcrumbSchema } from "@/lib/seo";

type PortfolioCaseStudyProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PortfolioCaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildMetadata({
      title: "Project not found",
      description: "The requested project case study could not be found.",
      path: "/portfolio",
    });
  }

  return buildMetadata({
    title: `${project.title} Case Study`,
    description: project.summary,
    path: `/portfolio/${project.slug}`,
  });
}

export default async function PortfolioCaseStudyPage({ params }: PortfolioCaseStudyProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: project.title, path: `/portfolio/${project.slug}` },
  ];

  return (
    <section className="space-y-8">
      <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        badge="Case study"
        title={`${project.title} - ${project.location}`}
        description={project.summary}
        variant="tinted"
        actions={[
          { href: "/portfolio", label: "Back to portfolio", variant: "secondary" },
          { href: "/contact", label: "Start your project", variant: "primary" },
        ]}
      />

      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
        <h2 className="text-2xl font-bold text-stone-900">Project Scope</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-stone-700">
          {project.scope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl bg-[#F7F8F5] p-6 shadow-sm ring-1 ring-[#E8E5E0]">
        <h2 className="text-2xl font-bold text-stone-900">Before and After</h2>
        <div className="mt-5 space-y-6">
          {project.beforeAfter.map((pair) => (
            <article key={pair.title} className="rounded-xl bg-white p-4 ring-1 ring-stone-200">
              <h3 className="text-lg font-semibold text-stone-900">{pair.title}</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#A95345]">
                    Before
                  </p>
                  <Image
                    src={pair.beforeImage}
                    alt={pair.beforeAlt}
                    width={1200}
                    height={800}
                    className="h-64 w-full rounded-lg object-cover"
                  />
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#A95345]">
                    After
                  </p>
                  <Image
                    src={pair.afterImage}
                    alt={pair.afterAlt}
                    width={1200}
                    height={800}
                    className="h-64 w-full rounded-lg object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
        <h2 className="text-2xl font-bold text-stone-900">Project Gallery</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.gallery.map((image) => (
            <Image
              key={image.src + image.alt}
              src={image.src}
              alt={image.alt}
              width={1200}
              height={800}
              className="h-56 w-full rounded-lg object-cover"
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export function generateStaticParams() {
  return projectCaseStudies.map((project) => ({ slug: project.slug }));
}
