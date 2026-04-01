import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { buildMetadata, getArticleSchema, getBreadcrumbSchema, getFaqSchema } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Blog post not found",
      description: "The requested blog post could not be found.",
      path: "/blog",
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <section className="space-y-8">
      <StructuredData
        data={getBreadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <StructuredData
        data={getArticleSchema({
          headline: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          datePublished: post.publishedAt,
          keywords: [post.primaryKeyword, ...post.secondaryKeywords],
        })}
      />
      {post.faq ? <StructuredData data={getFaqSchema(post.faq)} /> : null}

      <PageHero
        badge={post.category}
        title={post.title}
        description={post.description}
        variant="image"
        imageSrc={post.heroImage}
        imageAlt={post.heroAlt}
        actions={[
          { href: post.ctaHref, label: post.ctaLabel, variant: "primary" },
          { href: "/blog", label: "Back to blog", variant: "secondary" },
        ]}
      />

      <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span>{post.publishedAt}</span>
          <span aria-hidden="true">•</span>
          <span>{post.readTime}</span>
          <span aria-hidden="true">•</span>
          <span>Primary keyword: {post.primaryKeyword}</span>
        </div>

        <div className="space-y-6">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold text-stone-900">{section.heading}</h2>
              <div className="mt-3 space-y-3 text-base text-stone-700">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>

      <section className="rounded-2xl bg-[#F7F8F5] p-6 shadow-sm ring-1 ring-[#E8E5E0]">
        <h2 className="text-xl font-bold text-stone-900">Related links</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
          <Link href="/services" className="text-amber-700 hover:text-amber-600">
            Explore services
          </Link>
          <Link href="/areas-we-cover" className="text-amber-700 hover:text-amber-600">
            Areas we cover
          </Link>
          <Link href="/contact" className="text-amber-700 hover:text-amber-600">
            Get a quote
          </Link>
        </div>
      </section>
    </section>
  );
}

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}
