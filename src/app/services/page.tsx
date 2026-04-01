import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Carpentry and Joinery Services Bath",
  description:
    "Bespoke carpentry and joinery services in Bath: fitted furniture, sash window repairs, custom timber joinery, and restoration.",
  path: "/services",
});

const services = [
  {
    title: "Bespoke Carpentry",
    summary: "Made-to-measure joinery for kitchens, living spaces, and home offices.",
    href: "/services/bespoke-carpentry",
    image: "/service-turning-1.webp",
    highlight: "Made to measure",
  },
  {
    title: "Sash Windows",
    summary: "Repair, restoration, and replacement support for traditional timber sash windows.",
    href: "/services/sash-windows",
    image: "/service-tools-flatlay.webp",
    highlight: "Period-home focused",
  },
  {
    title: "Built-in Furniture",
    summary: "Storage and furniture built around your room dimensions and daily needs.",
    href: "/services/built-in-furniture",
    image: "/service-turning-2.webp",
    highlight: "Space-optimised",
  },
  {
    title: "Repairs & Restoration",
    summary: "Sensitive restoration and practical repairs for worn timber features.",
    href: "/services/repairs-restoration",
    image: "/gallery-turning-3.webp",
    highlight: "Repair-first",
  },
];

export default function ServicesPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];

  return (
    <section className="space-y-8">
      <StructuredData
        data={getBreadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        badge="Our services"
        title="Carpentry and joinery services in Bath"
        description="Practical, well-crafted bespoke carpentry and traditional joinery for homes in Bath and nearby towns."
        variant="image"
        imageSrc="/service-tools-flatlay.webp"
        imageAlt="Selection of carpentry hand tools"
        actions={[
          { href: "/contact", label: "Get a quote", variant: "primary" },
          { href: "/areas-we-cover", label: "Areas we cover", variant: "secondary" },
        ]}
      />
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative">
              <Image
                src={service.image}
                alt={`${service.title} completed by carpenter and joiner in Bath`}
                width={1200}
                height={700}
                className="h-44 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24323D]/55 via-transparent to-transparent" />
              <p className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#8C4337]">
                {service.highlight}
              </p>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-2 text-sm text-slate-700">{service.summary}</p>
              <Link
                href={service.href}
                className="cta-pop mt-4 inline-flex min-h-11 items-center rounded-md bg-[#8C4337] px-4 py-2 text-sm font-semibold text-[#F7F8F5] hover:bg-[#73362D]"
              >
                Explore {service.title}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
