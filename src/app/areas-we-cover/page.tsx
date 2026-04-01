import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Areas We Cover",
  description:
    "Bespoke carpentry services across Bath, Bradford-on-Avon, Keynsham, and Frome.",
  path: "/areas-we-cover",
});

const areas = [
  { href: "/areas-we-cover/bath", name: "Bath" },
  { href: "/areas-we-cover/bradford-on-avon", name: "Bradford-on-Avon" },
  { href: "/areas-we-cover/keynsham", name: "Keynsham" },
  { href: "/areas-we-cover/frome", name: "Frome" },
];

export default function AreasWeCoverPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Areas We Cover", path: "/areas-we-cover" },
  ];

  return (
    <section className="space-y-8">
      <StructuredData
        data={getBreadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        badge="Local coverage"
        title="Areas We Cover"
        description="We provide bespoke carpentry, traditional joinery, and sash window work across Bath and nearby towns, with reliable local service and clear quotes."
        variant="tinted"
        actions={[
          { href: "/contact", label: "Get a quote", variant: "primary" },
          { href: "/services", label: "View services", variant: "secondary" },
        ]}
      />

      <ul className="grid gap-4 md:grid-cols-2">
        {areas.map((area) => (
          <li key={area.href} className="rounded-lg bg-white p-4 ring-1 ring-slate-200">
            <Link
              href={area.href}
              className="inline-flex min-h-11 items-center font-semibold text-[#A95345] underline underline-offset-4 hover:text-[#8C4337]"
            >
              Carpentry in {area.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
