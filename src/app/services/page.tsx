import Link from "next/link";
import type { Metadata } from "next";
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
  },
  {
    title: "Sash Windows",
    summary: "Repair, restoration, and replacement support for traditional timber sash windows.",
    href: "/services/sash-windows",
  },
  {
    title: "Built-in Furniture",
    summary: "Storage and furniture built around your room dimensions and daily needs.",
    href: "/services/built-in-furniture",
  },
  {
    title: "Repairs & Restoration",
    summary: "Sensitive restoration and practical repairs for worn timber features.",
    href: "/services/repairs-restoration",
  },
];

export default function ServicesPage() {
  return (
    <section className="space-y-8">
      <StructuredData
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
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
          <article key={service.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{service.summary}</p>
            <Link
              href={service.href}
              className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#A95345] underline underline-offset-4 hover:text-[#8C4337]"
            >
              Learn more
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
