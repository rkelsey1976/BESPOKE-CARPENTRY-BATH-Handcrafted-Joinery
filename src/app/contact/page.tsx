import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CallLink } from "@/components/call-link";
import { NetlifyQuoteForm } from "@/components/netlify-quote-form";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact a Carpenter in Bath",
  description:
    "Request a quote from a local Bath carpenter and joiner for bespoke carpentry, fitted furniture, sash windows, and restoration.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];
  const googleReviewsUrl =
    process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ??
    "https://www.google.com/maps/search/carpenter+Bath";
  const googleReviewsEmbedUrl = process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_EMBED_URL;
  const googleMapEmbedUrl =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ??
    "https://www.google.com/maps?q=Bath%2C%20Somerset&output=embed";

  return (
    <section className="space-y-8 [&>nav[aria-label='Breadcrumb']+*]:mt-2">
      <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        badge="Contact us"
        title="Get a carpentry quote"
        description="Share your project details and we will get back to you with practical next steps and a clear quote."
        variant="image"
        imageSrc="/hero-carpenter.webp"
        imageAlt="Carpenter with tools ready for a project"
        actions={[
          { href: "/services", label: "View services", variant: "secondary" },
          { href: "/areas-we-cover", label: "Areas we cover", variant: "secondary" },
        ]}
      />
      <NetlifyQuoteForm />
      <p className="text-sm">
        Prefer to call?{" "}
        <CallLink
          phoneNumber="+441225000000"
          displayNumber="01225 000000"
          location="contact_page"
          className="font-semibold text-amber-700 hover:text-amber-600"
        />
      </p>
      <Link href="/" className="inline-block text-sm font-semibold text-slate-700 hover:text-slate-900">
        Back to homepage
      </Link>

      <div className="grid gap-6 pt-4 lg:grid-cols-2">
        <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-bold text-slate-900">Google Reviews</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Read what local homeowners say about our bespoke carpentry and joinery work in Bath.
          </p>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-md bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            View Google reviews
          </a>
          {googleReviewsEmbedUrl ? (
            <iframe
              title="Google reviews"
              src={googleReviewsEmbedUrl}
              loading="lazy"
              className="mt-4 h-72 w-full rounded-md border border-slate-200"
            />
          ) : (
            <p className="mt-4 text-xs text-slate-600">
              Add `NEXT_PUBLIC_GOOGLE_REVIEWS_EMBED_URL` to show an embedded reviews widget.
            </p>
          )}
        </article>

        <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-bold text-slate-900">Our Coverage Area</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            We cover Bath, Bradford-on-Avon, Keynsham, and Frome for bespoke carpentry projects.
          </p>
          <iframe
            title="Map of Bath and surrounding areas"
            src={googleMapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-4 h-72 w-full rounded-md border border-slate-200"
          />
        </article>
      </div>
    </section>
  );
}
