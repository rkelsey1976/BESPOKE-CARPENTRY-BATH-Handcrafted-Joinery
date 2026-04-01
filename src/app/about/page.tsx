import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Family Run Carpenter and Joiner in Bath",
  description:
    "Family run carpenter and joiner in Bath offering bespoke carpentry, traditional joinery, fitted furniture, and sash window restoration.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="space-y-10">
      <PageHero
        badge="About our company"
        title="Family run carpenter and joiner in Bath"
        description="We are a family run carpentry business based in Bath, delivering bespoke carpentry and joinery across Bath, Bradford-on-Avon, Keynsham, and Frome."
        variant="image"
        imageSrc="/about-workshop.webp"
        imageAlt="Family-run carpentry team in workshop"
        actions={[
          { href: "/contact", label: "Get a quote", variant: "primary" },
          { href: "/services", label: "View services", variant: "secondary" },
        ]}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">What we do</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            As local carpenters in Bath, we provide bespoke joinery services including fitted furniture,
            alcove cupboards, bespoke wardrobes, timber windows, and carpentry repairs. We also support
            period properties with sash window restoration and traditional woodwork.
          </p>
        </article>

        <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">How we work</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Every project starts with a practical consultation and a clear quote. We focus on quality
            materials, neat installation, and a finish that fits your home. Whether it is custom joinery
            or a full fitted furniture project, we keep you informed from first visit to completion.
          </p>
        </article>
      </div>

      <article className="rounded-xl bg-amber-50 p-6 ring-1 ring-amber-100">
        <h2 className="text-xl font-semibold text-slate-900">Why homeowners choose us</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Family run business with local knowledge of Bath homes and period properties.</li>
          <li>Bespoke carpentry and joinery tailored to your exact space and requirements.</li>
          <li>Professional service, clear timelines, and consistent workmanship.</li>
        </ul>
      </article>

      <section className="rounded-2xl bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-bold">Planning a bespoke carpentry project?</h2>
        <p className="mt-3 max-w-2xl text-slate-200">
          Speak to our family team for practical advice and a clear quote on joinery, fitted furniture, or
          sash window restoration.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400"
          >
            Get a quote
          </Link>
          <Link
            href="/services"
            className="rounded-md border border-slate-500 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            View services
          </Link>
        </div>
      </section>
    </section>
  );
}
