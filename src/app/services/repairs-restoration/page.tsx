import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBreadcrumbSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Carpentry Repairs and Restoration Bath",
  description:
    "Carpentry repairs and timber restoration in Bath for period and modern homes.",
  path: "/services/repairs-restoration",
});

export default function RepairsRestorationPage() {
  return (
    <section className="space-y-8">
      <StructuredData
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Repairs and Restoration", path: "/services/repairs-restoration" },
        ])}
      />
      <StructuredData
        data={getServiceSchema({
          serviceName: "Carpentry Repairs and Restoration in Bath",
          description:
            "Sympathetic timber repair and restoration work for homes around Bath.",
          path: "/services/repairs-restoration",
          areaServed: ["Bath", "Bradford-on-Avon", "Keynsham", "Frome"],
        })}
      />
      <PageHero
        badge="Service"
        title="Repairs and Restoration in Bath"
        description="Timber repairs and sympathetic restoration for worn or damaged carpentry in homes around Bath. We focus on preserving original details and improving longevity."
        variant="tinted"
        actions={[
          { href: "/contact", label: "Get a quote", variant: "primary" },
          { href: "/services", label: "All services", variant: "secondary" },
        ]}
      />
    </section>
  );
}
