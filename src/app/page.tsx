import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { AreaCardsInteractive } from "@/components/area-cards-interactive";
import { FaqAccordion } from "@/components/faq-accordion";
import { ProcessStepsInteractive } from "@/components/process-steps-interactive";
import { ServicesCarousel } from "@/components/services-carousel";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBreadcrumbSchema, getFaqSchema, getServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Carpenter Bath | Bespoke Carpentry and Joinery",
  description:
    "Trusted carpenter in Bath for bespoke carpentry, joinery, sash windows, and fitted furniture across Bath, Keynsham, Frome, and Bradford-on-Avon.",
  path: "/",
});

export default function Home() {
  const homeFaqs = [
    {
      question: "Do you provide bespoke carpentry in Bath?",
      answer:
        "Yes. We provide bespoke carpentry and joinery in Bath, including fitted storage, sash window work, and custom timber projects.",
    },
    {
      question: "Which areas do you cover near Bath?",
      answer: "We work across Bath, Bradford-on-Avon, Keynsham, and Frome.",
    },
    {
      question: "Can I request a quote by phone?",
      answer: "Yes. You can call us directly or submit the quote form for a fast response.",
    },
    {
      question: "How much does bespoke carpentry cost in Bath?",
      answer:
        "Project costs vary by scope, materials, and finish. We provide a clear written quote after discussing your requirements and site details.",
    },
  ];

  const services = [
    {
      title: "Bespoke Carpentry",
      description:
        "Handmade joinery tailored to your home, from shelving and cabinetry to complete room features.",
      href: "/services/bespoke-carpentry",
      image: "/service-turning-1.webp",
    },
    {
      title: "Sash Windows",
      description:
        "Traditional sash window repairs, draught-proofing, and restoration for period properties.",
      href: "/services/sash-windows",
      image: "/service-tools-flatlay.webp",
    },
    {
      title: "Built-in Furniture",
      description:
        "Alcove units, wardrobes, media walls, and storage designed to fit your space perfectly.",
      href: "/services/built-in-furniture",
      image: "/service-turning-2.webp",
    },
  ];
  const googleReviewsUrl =
    process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ??
    "https://www.google.com/maps/search/carpenter+Bath";
  const googleReviewsEmbedUrl = process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_EMBED_URL;

  const processSteps = [
    {
      step: "01",
      title: "Get in touch",
      summary: "Share ideas, goals, and photos so we can guide you quickly.",
      detail:
        "Share your project ideas, photos, and priorities. We provide practical guidance and an initial budget direction.",
      timeframe: "Initial reply in 1-2 working days",
      ctaLabel: "Send project details",
      ctaHref: "/contact",
      imageSrc: "/service-tools-flatlay.webp",
      imageAlt: "Carpentry tools ready for a new project",
    },
    {
      step: "02",
      title: "Design and quote",
      summary: "We shape the scope and produce a clear written quote.",
      detail:
        "We refine scope, materials, and finish details, then issue a clear quote and realistic project timeline.",
      timeframe: "Design and quote usually 3-7 days",
      ctaLabel: "See our services",
      ctaHref: "/services",
      imageSrc: "/about-workshop.webp",
      imageAlt: "Workshop planning and design preparation",
    },
    {
      step: "03",
      title: "Build and fit",
      summary: "Your joinery is crafted and fitted neatly on site.",
      detail:
        "Your joinery is prepared with care and installed neatly on site, with attention to final finish and usability.",
      timeframe: "Installation timing depends on scope",
      ctaLabel: "Book your quote",
      ctaHref: "/contact",
      imageSrc: "/service-turning-1.webp",
      imageAlt: "Bespoke joinery craftsmanship during build",
    },
  ];

  const areaLinks = [
    {
      name: "Bath",
      href: "/areas-we-cover/bath",
      summary: "Bespoke carpentry and sash window work for period and modern homes.",
      imageSrc: "/hero-carpenter.webp",
      imageAlt: "Carpentry work in Bath period home setting",
      services: ["Sash window repairs", "Bespoke joinery", "Built-in furniture"],
      localHighlight: "Popular for Georgian and Victorian properties needing repair-first timber upgrades.",
    },
    {
      name: "Bradford-on-Avon",
      href: "/areas-we-cover/bradford-on-avon",
      summary: "Tailored fitted joinery and practical timber repairs for local properties.",
      imageSrc: "/about-workshop.webp",
      imageAlt: "Joinery workshop craftsmanship for Bradford-on-Avon homes",
      services: ["Alcove units", "Timber repairs", "Fitted storage"],
      localHighlight: "Common requests include alcove storage and period-home timber restoration.",
    },
    {
      name: "Keynsham",
      href: "/areas-we-cover/keynsham",
      summary: "Custom storage, joinery upgrades, and repair-first timber work.",
      imageSrc: "/service-turning-2.webp",
      imageAlt: "Bespoke fitted furniture preparation for Keynsham projects",
      services: ["Wardrobes", "Shelving", "Joinery upgrades"],
      localHighlight: "Frequent projects focus on smart storage for family homes and loft spaces.",
    },
    {
      name: "Frome",
      href: "/areas-we-cover/frome",
      summary: "Restoration and bespoke timber features with a durable finish.",
      imageSrc: "/gallery-turning-3.webp",
      imageAlt: "Timber restoration work for Frome homes",
      services: ["Restoration", "Bespoke cabinetry", "Carpentry repairs"],
      localHighlight: "Often selected for restoration-led work that keeps original character details.",
    },
  ];

  return (
    <div className="space-y-0 pb-16 md:pb-0">
      <StructuredData
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
        ])}
      />
      <StructuredData
        data={getServiceSchema({
          serviceName: "Bespoke Carpentry",
          description:
            "Bespoke carpentry services in Bath including fitted joinery, sash windows, and built-in furniture.",
          path: "/",
          areaServed: ["Bath", "Bradford-on-Avon", "Keynsham", "Frome"],
        })}
      />
      <StructuredData
        data={getFaqSchema(homeFaqs)}
      />
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden text-[#F7F8F5]">
        <Image
          src="/hero-carpenter.webp"
          alt="Bespoke carpentry craftsman working on sash window repair in Bath Somerset"
          fill
          priority
          fetchPriority="high"
          loading="eager"
          sizes="100vw"
          quality={72}
          className="object-cover grayscale"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(36, 50, 61, 0.82) 0%, rgba(58, 74, 87, 0.72) 35%, rgba(200, 107, 90, 0.52) 70%, rgba(169, 83, 69, 0.62) 100%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-6 pb-8 pt-10 md:grid-cols-2 md:items-center md:pt-14">
          <div className="hero-content-shade">
            <p className="hero-badge">
              Carpenter Bath | Joiner Bath
            </p>
            <h1 className="hero-title max-w-2xl">
              Carpenter Bath | Bespoke Carpentry and Joinery in Bath, Somerset
            </h1>
            <p className="hero-copy max-w-xl text-base md:text-lg">
              Handmade joinery, fitted furniture, and sash window work across Bath, Bradford-on-Avon,
              Keynsham, and Frome.
            </p>
            <p className="mt-3 max-w-xl text-sm text-[#F7F8F5]">
              Trusted joiners in Bath Somerset, with practical advice from a local carpenter in Bath.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="hero-btn-primary inline-flex items-center gap-2"
              >
                Get a quote
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="hero-btn-secondary inline-flex items-center gap-2"
              >
                View carpentry services
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#24323D]/66 px-3 py-1 text-xs font-semibold text-[#F7F8F5] ring-1 ring-white/15">
                Family run
              </span>
              <span className="rounded-full bg-[#24323D]/66 px-3 py-1 text-xs font-semibold text-[#F7F8F5] ring-1 ring-white/15">
                Bath local
              </span>
            </div>
          </div>
          <div className="hidden overflow-hidden rounded-xl bg-transparent p-2 sm:p-4 md:block">
            <Image
              src="/new-logo-light.svg"
              alt="Bespoke Carpentry Bath logo mark"
              width={720}
              height={720}
              className="hero-logo-twist hero-logo-watermark sm:w-[68%]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-white py-14">
        <div className="relative mx-auto w-full max-w-6xl px-6">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#E8E5E0] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#A95345]">Our process</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              A clear 3-step route from idea to completed fit
            </h2>
            <div className="mt-7">
              <ProcessStepsInteractive steps={processSteps} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#EEF3F1] py-14">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#E8E5E0] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#A95345]">Our services</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#24323D] md:text-4xl">
              A comprehensive set of services
            </h2>
            <p className="mt-3 max-w-3xl text-[#5F7382]">
              Bespoke carpentry, traditional joinery Bath, timber windows Bath, and fitted furniture tailored to
              period and modern homes in Bath, including practical carpentry repairs Bath when needed.
            </p>
            <div className="mt-6">
              <ServicesCarousel services={services} />
            </div>
            <div className="mt-6">
              <Link
                href="/services"
                className="cta-pop rounded-md bg-[#8C4337] px-5 py-3 text-sm font-semibold text-[#F7F8F5] hover:bg-[#73362D]"
              >
                Browse services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#F7F8F5] py-14">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#E8E5E0]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#A95345]">Areas we cover</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Local carpentry across Bath and nearby towns</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
              We cover Bath, Bradford-on-Avon, Keynsham, and Frome with bespoke carpentry, sash window work, and
              fitted joinery tailored to your home, with carpentry services near Bath for surrounding areas.
            </p>
            <div className="mt-6">
              <AreaCardsInteractive items={areaLinks} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-white py-14">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#E8E5E0]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#A95345]">Our standards</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Why homeowners choose us</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
              Built for long-term quality, practical upgrades, and tidy delivery from first visit to final fit.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-5 md:items-stretch">
              <div className="overflow-hidden rounded-xl ring-1 ring-[#E8E5E0] md:col-span-2">
                <Image
                  src="/about-workshop.webp"
                  alt="Bespoke carpentry craftsmanship in a Bath workshop"
                  width={1400}
                  height={900}
                  className="h-full min-h-[240px] w-full object-cover"
                />
              </div>
              <div className="grid gap-4 md:col-span-3 md:grid-cols-1">
            <article className="rounded-xl bg-[#F7F8F5] p-5 ring-1 ring-[#E8E5E0]">
              <div className="flex items-start gap-4">
                <div className="shrink-0 overflow-hidden rounded-lg ring-1 ring-[#E8E5E0]">
                  <Image
                    src="/service-turning-1.webp"
                    alt="Detailed carpentry craftsmanship and finishing"
                    width={120}
                    height={120}
                    className="h-16 w-16 object-cover"
                  />
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#A95345]/15 text-[#8C4337]">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                        <path
                          d="M12 3l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3zm-3 9l2 2 4-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Craft-led build quality
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Every project is made with long-term use in mind, with careful material and finish choices.
                  </p>
                </div>
              </div>
            </article>
            <article className="rounded-xl bg-[#F7F8F5] p-5 ring-1 ring-[#E8E5E0]">
              <div className="flex items-start gap-4">
                <div className="shrink-0 overflow-hidden rounded-lg ring-1 ring-[#E8E5E0]">
                  <Image
                    src="/gallery-turning-3.webp"
                    alt="Timber repair and restoration work in progress"
                    width={120}
                    height={120}
                    className="h-16 w-16 object-cover"
                  />
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#A95345]/15 text-[#8C4337]">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                        <path
                          d="M4 12h5l2-4 3 8 2-4h4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Repair-first mindset
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Where possible, we prioritise restoration and targeted upgrades before recommending full replacement.
                  </p>
                </div>
              </div>
            </article>
            <article className="rounded-xl bg-[#F7F8F5] p-5 ring-1 ring-[#E8E5E0]">
              <div className="flex items-start gap-4">
                <div className="shrink-0 overflow-hidden rounded-lg ring-1 ring-[#E8E5E0]">
                  <Image
                    src="/service-tools-flatlay.webp"
                    alt="Organised carpentry tools laid out in a tidy workspace"
                    width={120}
                    height={120}
                    className="h-16 w-16 object-cover"
                  />
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#A95345]/15 text-[#8C4337]">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                        <path
                          d="M12 20c4-4 6-7 6-10a6 6 0 10-12 0c0 3 2 6 6 10z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 10.5c1.2 0 2.2-.9 2.2-2s-1-2-2.2-2-2.2.9-2.2 2 1 2 2.2 2z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Low-waste workshop approach
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    We plan efficiently, use materials carefully, and keep site work tidy and respectful of your home.
                  </p>
                </div>
              </div>
            </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#F7F8F5] py-14">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-2xl bg-[#F7F8F5] p-8 shadow-sm ring-1 ring-[#E8E5E0]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#A95345]">Google reviews</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">What homeowners say on Google</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
              Read independent reviews from customers across Bath and nearby towns.
            </p>
            <div className="mt-5">
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-pop inline-flex min-h-11 items-center rounded-md bg-[#24323D] px-4 py-2 text-sm font-semibold text-[#F7F8F5] hover:bg-[#1C2730]"
              >
                View all Google reviews
              </a>
            </div>
            {googleReviewsEmbedUrl ? (
              <iframe
                title="Google reviews for Bath Bespoke Carpentry"
                src={googleReviewsEmbedUrl}
                loading="lazy"
                className="mt-5 h-80 w-full rounded-xl border border-slate-200 bg-white"
              />
            ) : (
              <p className="mt-5 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                Add <code>NEXT_PUBLIC_GOOGLE_REVIEWS_EMBED_URL</code> to show the Google reviews widget here.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#EEF3F1] py-14">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-2xl bg-[#EEF3F1] p-8 shadow-sm ring-1 ring-[#E8E5E0]">
            <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
            <div className="mt-5">
              <FaqAccordion items={homeFaqs} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-14">
        <Image
          src="/wood-grain-hero.webp"
          alt="Wood grain background texture for bespoke carpentry section"
          fill
          sizes="100vw"
          quality={68}
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(200, 107, 90, 0.78) 0%, rgba(200, 107, 90, 0.68) 45%, rgba(169, 83, 69, 0.76) 100%)",
          }}
          aria-hidden
        />
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid overflow-hidden rounded-2xl bg-[#B66050]/78 text-[#F7F8F5] shadow-sm ring-1 ring-white/20 backdrop-blur-[1px] md:grid-cols-2">
            <div className="relative min-h-[240px]">
              <Image
                src="/service-turning-2.webp"
                alt="Bespoke joinery build in progress"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#A95345]/35 to-transparent" />
            </div>
            <div className="p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F7F8F5]/80">Start your project</p>
              <h2 className="mt-3 text-3xl font-bold">Ready to start your project?</h2>
              <p className="mt-3 max-w-2xl text-[#F7F8F5]">
                Tell us about your home and we will provide practical advice, a clear scope, and a quote you can
                trust.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                className="cta-pop rounded-md bg-[#8C4337] px-5 py-3 text-sm font-semibold text-[#F7F8F5] hover:bg-[#73362D]"
                >
                  Get a quote
                </Link>
                <Link
                  href="/portfolio"
                className="cta-pop rounded-md border border-[#8C4337] bg-[#8C4337]/22 px-5 py-3 text-sm font-semibold text-[#F7F8F5] hover:bg-[#8C4337]/35"
                >
                  View projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#E8E5E0] bg-white/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-6xl gap-2">
          <a
            href="tel:+441225000000"
            className="w-1/2 rounded-md border border-[#E8E5E0] px-4 py-3 text-center text-sm font-semibold text-[#24323D]"
          >
            Call now
          </a>
          <Link
            href="/contact"
            className="w-1/2 rounded-md bg-[#8C4337] px-4 py-3 text-center text-sm font-semibold text-[#F7F8F5]"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </div>
  );
}
