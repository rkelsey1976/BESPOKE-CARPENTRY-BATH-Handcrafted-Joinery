import Link from "next/link";
import { CallLink } from "@/components/call-link";
import { FaqAccordion } from "@/components/faq-accordion";

type ServiceProcessStep = {
  title: string;
  description: string;
};

type ServiceLocalIssue = {
  title: string;
  detail: string;
};

type ServiceProjectProof = {
  title: string;
  location: string;
  summary: string;
  href: string;
};

type ServiceLinkItem = {
  label: string;
  href: string;
};

type ServiceFaq = {
  question: string;
  answer: string;
};

type ServiceDetailTemplateProps = {
  suitabilityPoints: string[];
  processSteps: ServiceProcessStep[];
  includedItems: string[];
  excludedItems: string[];
  localIssues: ServiceLocalIssue[];
  projectProof: ServiceProjectProof[];
  relatedLinks: ServiceLinkItem[];
  faqs: ServiceFaq[];
};

export function ServiceDetailTemplate({
  suitabilityPoints,
  processSteps,
  includedItems,
  excludedItems,
  localIssues,
  projectProof,
  relatedLinks,
  faqs,
}: ServiceDetailTemplateProps) {
  return (
    <>
      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
        <h2 className="text-2xl font-bold text-stone-900">Is this service right for your home?</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {suitabilityPoints.map((point) => (
            <li key={point} className="rounded-lg bg-[#F7F8F5] p-4 text-sm text-stone-700 ring-1 ring-[#E8E5E0]">
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl bg-[#F7F8F5] p-6 shadow-sm ring-1 ring-[#E8E5E0]">
        <h2 className="text-2xl font-bold text-stone-900">How the service works</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-lg bg-white p-4 ring-1 ring-stone-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#A95345]">Step {index + 1}</p>
              <h3 className="mt-2 text-base font-semibold text-stone-900">{step.title}</h3>
              <p className="mt-2 text-sm text-stone-700">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
          <h2 className="text-xl font-bold text-stone-900">What is included</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-stone-700">
            {includedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
          <h2 className="text-xl font-bold text-stone-900">What is not included</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-stone-700">
            {excludedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
        <h2 className="text-2xl font-bold text-stone-900">Common issues in Bath homes</h2>
        <p className="mt-2 text-sm text-stone-700">
          We regularly complete this work across Bath, Bradford-on-Avon, Keynsham, and Frome, and these are the
          patterns we see most often in local properties.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {localIssues.map((issue) => (
            <article key={issue.title} className="rounded-lg bg-[#F7F8F5] p-4 ring-1 ring-[#E8E5E0]">
              <h3 className="text-base font-semibold text-stone-900">{issue.title}</h3>
              <p className="mt-2 text-sm text-stone-700">{issue.detail}</p>
            </article>
          ))}
        </div>
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
        <h2 className="text-2xl font-bold text-stone-900">Recent local project examples</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {projectProof.map((project) => (
            <article key={project.title} className="rounded-lg bg-white p-4 ring-1 ring-stone-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#A95345]">{project.location}</p>
              <h3 className="mt-2 text-base font-semibold text-stone-900">{project.title}</h3>
              <p className="mt-2 text-sm text-stone-700">{project.summary}</p>
              <Link
                href={project.href}
                className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-[#8C4337] underline underline-offset-4 hover:text-[#73362D]"
              >
                View case study
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
        <h2 className="text-2xl font-bold text-stone-900">Related services and guides</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {relatedLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="inline-flex min-h-11 items-center rounded-md border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-50"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-[#F7F8F5] p-6 shadow-sm ring-1 ring-[#E8E5E0]">
        <h2 className="text-2xl font-bold text-stone-900">Service FAQs</h2>
        <div className="mt-4">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="rounded-2xl bg-[#24323D] p-6 text-[#F7F8F5] shadow-sm ring-1 ring-[#1a252d]">
        <h2 className="text-2xl font-bold">Ready to discuss your project?</h2>
        <p className="mt-2 text-sm text-[#F7F8F5]">
          Send a quick summary for a clear next step, or call now if you want to talk through your options first.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <CallLink
            phoneNumber="01225000000"
            displayNumber="01225 000000"
            location="service_page_final_cta"
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
    </>
  );
}
