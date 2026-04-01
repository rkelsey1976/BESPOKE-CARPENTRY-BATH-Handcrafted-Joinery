import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BlogList } from "@/components/blog-list";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { getAllBlogPosts } from "@/lib/blog";
import { buildMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Carpentry Blog Bath | Long-Tail Guides and Advice",
  description:
    "Local carpentry and joinery guides for Bath homeowners, covering bespoke joinery, sash windows, restoration, and hiring advice.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <section className="space-y-8 [&>nav[aria-label='Breadcrumb']+*]:mt-2">
      <StructuredData
        data={getBreadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        badge="Local advice"
        title="Bath carpentry and joinery blog"
        description="Practical guides for period homes, bespoke joinery projects, timber repairs, and confident hiring decisions."
        variant="tinted"
        actions={[
          { href: "/contact", label: "Get a quote", variant: "primary" },
          { href: "/services", label: "View services", variant: "secondary" },
        ]}
      />
      <BlogList posts={posts} />
    </section>
  );
}
