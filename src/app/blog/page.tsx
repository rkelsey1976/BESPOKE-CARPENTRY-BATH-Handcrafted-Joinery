import type { Metadata } from "next";
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

  return (
    <section className="space-y-8">
      <StructuredData
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
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
