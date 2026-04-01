import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CallLink } from "@/components/call-link";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBreadcrumbSchema, getFaqSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Carpentry and Joinery Services Bath",
  description:
    "Bespoke carpentry and joinery services in Bath: fitted furniture, sash window repairs, custom timber joinery, and restoration.",
  path: "/services",
});

const services = [
  {
    title: "Bespoke Carpentry",
    summary: "Made-to-measure joinery for kitchens, living spaces, and home offices.",
    href: "/services/bespoke-carpentry",
    image: "/service-turning-1.webp",
    highlight: "Made to measure",
  },
  {
    title: "Sash Windows",
    summary: "Repair, restoration, and replacement support for traditional timber sash windows.",
    href: "/services/sash-windows",
    image: "/service-tools-flatlay.webp",
    highlight: "Period-home focused",
  },
  {
    title: "Built-in Furniture",
    summary: "Storage and furniture built around your room dimensions and daily needs.",
    href: "/services/built-in-furniture",
    image: "/service-turning-2.webp",
    highlight: "Space-optimised",
  },
  {
    title: "Repairs & Restoration",
    summary: "Sensitive restoration and practical repairs for worn timber features.",
    href: "/services/repairs-restoration",
    image: "/gallery-turning-3.webp",
    highlight: "Repair-first",
  },
];

const serviceHubFaqs = [
  {
    question: "Which carpentry service should I start with?",
    answer:
      "If you are unsure, start with your main problem (storage, sash windows, or repair needs). We can advise the best scope and direct you to the right service page.",
  },
  {
    question: "Do you cover areas outside Bath?",
    answer:
      "Yes. We work across Bath, Bradford-on-Avon, Keynsham, and Frome for bespoke carpentry, joinery, and restoration projects.",
  },
  {
    question: "Can I call first before filling in the quote form?",
    answer:
      "Yes. You can call first to discuss your project and then share photos or details for a clearer quote process.",
  },
  {
    question: "Do you offer repairs as well as new joinery?",
    answer:
      "Yes. We provide both repair-first restoration and new bespoke carpentry, depending on the condition and your goals.",
  },
];

export default function ServicesPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];

  return (
    <section className="space-y-8 [&>nav[aria-label='Breadcrumb']+*]:mt-2">
      <StructuredData
        data={getBreadcrumbSchema(breadcrumbItems)}
      />
      <StructuredData data={getFaqSchema(serviceHubFaqs)} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        badge="Our services"
        title="Carpentry and joinery services in Bath"
        description="Practical, well-crafted bespoke carpentry and traditional joinery for homes in Bath and nearby towns."
        variant="image"
        imageSrc="/service-tools-flatlay.webp"
        imageAlt="Selection of carpentry hand tools"
        actions={[
          { href: "/contact", label: "Get a quote", variant: "primary" },
          { href: "/areas-we-cover", label: "Areas we cover", variant: "secondary" },
        ]}
      />
      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
        <h2 className="text-2xl font-bold text-stone-900">Choose the right service for your home</h2>
        <p className="mt-2 text-sm text-stone-700">
          Whether you need a local joiner in Bath for fitted furniture, sash window work, or carpentry repairs, this
          page helps you find the right route and next step quickly.
        </p>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          <li className="rounded-lg bg-[#F7F8F5] p-4 text-sm text-stone-700 ring-1 ring-[#E8E5E0]">
            Need made-to-measure joinery for awkward layouts or period details.
          </li>
          <li className="rounded-lg bg-[#F7F8F5] p-4 text-sm text-stone-700 ring-1 ring-[#E8E5E0]">
            Need sash window repair advice before considering full replacement.
          </li>
          <li className="rounded-lg bg-[#F7F8F5] p-4 text-sm text-stone-700 ring-1 ring-[#E8E5E0]">
            Need storage solutions like alcove units, wardrobes, or fitted cabinetry.
          </li>
          <li className="rounded-lg bg-[#F7F8F5] p-4 text-sm text-stone-700 ring-1 ring-[#E8E5E0]">
            Need practical timber repairs and restoration for worn joinery.
          </li>
        </ul>
      </section>
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative">
              <Image
                src={service.image}
                alt={`${service.title} completed by carpenter and joiner in Bath`}
                width={1200}
                height={700}
                className="h-44 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24323D]/55 via-transparent to-transparent" />
              <p className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#8C4337]">
                {service.highlight}
              </p>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-2 text-sm text-slate-700">{service.summary}</p>
              <Link
                href={service.href}
                className="cta-pop mt-4 inline-flex min-h-11 items-center rounded-md bg-[#8C4337] px-4 py-2 text-sm font-semibold text-[#F7F8F5] hover:bg-[#73362D]"
              >
                Explore {service.title}
              </Link>
            </div>
          </article>
        ))}
      </div>
      <section className="rounded-2xl bg-[#F7F8F5] p-6 shadow-sm ring-1 ring-[#E8E5E0]">
        <h2 className="text-2xl font-bold text-stone-900">How projects usually run</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <article className="rounded-lg bg-white p-4 ring-1 ring-stone-200">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#A95345]">Step 1</p>
            <h3 className="mt-2 text-base font-semibold text-stone-900">Initial call or enquiry</h3>
            <p className="mt-2 text-sm text-stone-700">
              We confirm your goals, property context, and which service route is likely to fit best.
            </p>
          </article>
          <article className="rounded-lg bg-white p-4 ring-1 ring-stone-200">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#A95345]">Step 2</p>
            <h3 className="mt-2 text-base font-semibold text-stone-900">Survey and clear scope</h3>
            <p className="mt-2 text-sm text-stone-700">
              We assess the details on site and set out practical recommendations and next actions.
            </p>
          </article>
          <article className="rounded-lg bg-white p-4 ring-1 ring-stone-200">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#A95345]">Step 3</p>
            <h3 className="mt-2 text-base font-semibold text-stone-900">Build, fit, and handover</h3>
            <p className="mt-2 text-sm text-stone-700">
              Work is delivered with careful finishing, function checks, and a practical handover.
            </p>
          </article>
        </div>
      </section>
      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
        <h2 className="text-2xl font-bold text-stone-900">Service coverage across Bath and nearby towns</h2>
        <p className="mt-2 text-sm text-stone-700">
          We provide bespoke carpentry Bath homeowners rely on, plus joinery support in Bradford-on-Avon, Keynsham,
          and Frome. Use these area pages for location-specific project context.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/areas-we-cover/bath"
            className="inline-flex min-h-11 items-center rounded-md border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-50"
          >
            Carpentry in Bath
          </Link>
          <Link
            href="/areas-we-cover/bradford-on-avon"
            className="inline-flex min-h-11 items-center rounded-md border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-50"
          >
            Carpentry in Bradford-on-Avon
          </Link>
          <Link
            href="/areas-we-cover/keynsham"
            className="inline-flex min-h-11 items-center rounded-md border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-50"
          >
            Carpentry in Keynsham
          </Link>
          <Link
            href="/areas-we-cover/frome"
            className="inline-flex min-h-11 items-center rounded-md border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-50"
          >
            Carpentry in Frome
          </Link>
        </div>
      </section>
      <section className="rounded-2xl bg-[#F7F8F5] p-6 shadow-sm ring-1 ring-[#E8E5E0]">
        <h2 className="text-2xl font-bold text-stone-900">Service FAQs</h2>
        <div className="mt-4">
          <FaqAccordion items={serviceHubFaqs} />
        </div>
      </section>
      <section className="rounded-2xl bg-[#24323D] p-6 text-[#F7F8F5] shadow-sm ring-1 ring-[#1a252d]">
        <h2 className="text-2xl font-bold">Need help choosing the right service?</h2>
        <p className="mt-2 text-sm text-[#F7F8F5]">
          Call now for quick guidance, or send your project details for a clear quote route.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <CallLink
            phoneNumber="01225000000"
            displayNumber="01225 000000"
            location="services_hub_final_cta"
            className="cta-pop inline-flex min-h-11 items-center rounded-md bg-[#8C4337] px-4 py-2 text-sm font-semibold text-[#F7F8F5] hover:bg-[#73362D]"
          />
          <Link
            href="/contact"
            className="cta-pop inline-flex min-h-11 items-center rounded-md border border-white/45 bg-white/10 px-4 py-2 text-sm font-semibold text-[#F7F8F5] hover:bg-white/20"
          >
            Get a quote
          </Link>
        </div>
      </section>
    </section>
  );
}
