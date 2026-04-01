import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBreadcrumbSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Bespoke Carpentry Bath",
  description:
    "Made-to-measure bespoke carpentry in Bath, including fitted joinery, storage, and custom timber features.",
  path: "/services/bespoke-carpentry",
});

export default function BespokeCarpentryPage() {
  return (
    <section className="space-y-8">
      <StructuredData
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Bespoke Carpentry", path: "/services/bespoke-carpentry" },
        ])}
      />
      <StructuredData
        data={getServiceSchema({
          serviceName: "Bespoke Carpentry in Bath",
          description:
            "Custom carpentry made to suit your home, including fitted joinery, shelving, and cabinetry.",
          path: "/services/bespoke-carpentry",
          areaServed: ["Bath", "Bradford-on-Avon", "Keynsham", "Frome"],
        })}
      />
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
    </section>
  );
}
