import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBreadcrumbSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Built-in Furniture Bath",
  description:
    "Built-in furniture and fitted storage in Bath, including alcove cabinets, wardrobes, and media units.",
  path: "/services/built-in-furniture",
});

export default function BuiltInFurniturePage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Built-in Furniture", path: "/services/built-in-furniture" },
  ];

  return (
    <section className="space-y-8">
      <StructuredData
        data={getBreadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <StructuredData
        data={getServiceSchema({
          serviceName: "Built-in Furniture in Bath",
          description:
            "Custom fitted furniture and storage for homes in Bath and nearby areas.",
          path: "/services/built-in-furniture",
          areaServed: ["Bath", "Bradford-on-Avon", "Keynsham", "Frome"],
        })}
      />
      <PageHero
        badge="Service"
        title="Built-in Furniture in Bath"
        description="Tailored storage and furniture, from alcove cabinets to wardrobes and media units, designed to maximise space and deliver a clean finish."
        variant="tinted"
        actions={[
          { href: "/contact", label: "Get a quote", variant: "primary" },
          { href: "/services", label: "All services", variant: "secondary" },
        ]}
      />
    </section>
  );
}
