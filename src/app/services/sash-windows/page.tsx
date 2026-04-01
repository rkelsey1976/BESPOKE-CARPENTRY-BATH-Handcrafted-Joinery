import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBreadcrumbSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sash Window Repairs Bath",
  description:
    "Sash window repair and restoration in Bath for traditional timber windows, including draught-proofing.",
  path: "/services/sash-windows",
});

export default function SashWindowsPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Sash Windows", path: "/services/sash-windows" },
  ];

  return (
    <section className="space-y-8">
      <StructuredData
        data={getBreadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <StructuredData
        data={getServiceSchema({
          serviceName: "Sash Window Services in Bath",
          description:
            "Timber sash window repairs, draught-proofing, and restoration for period homes in Bath.",
          path: "/services/sash-windows",
          areaServed: ["Bath", "Bradford-on-Avon", "Keynsham", "Frome"],
        })}
      />
      <PageHero
        badge="Service"
        title="Sash Window Services in Bath"
        description="Specialist timber sash window services including repair, draught-proofing, and restoration to preserve character while improving operation and comfort."
        variant="tinted"
        actions={[
          { href: "/contact", label: "Get a quote", variant: "primary" },
          { href: "/services", label: "All services", variant: "secondary" },
        ]}
      />
    </section>
  );
}
