import Link from "next/link";
import { FaqAccordion } from "@/components/faq-accordion";

type ProjectPlaceholder = {
  title: string;
  locationHint: string;
  problem: string;
  workCompleted: string;
  outcome: string;
};

type TimberIssue = {
  title: string;
  detail: string;
  approach: string;
};

type AreaFaq = {
  question: string;
  answer: string;
};

type AreaPageTemplateProps = {
  areaName: string;
  introTitle: string;
  introParagraphs: string[];
  projectPlaceholders: ProjectPlaceholder[];
  timberIssues: TimberIssue[];
  topServices: Array<{ href: string; label: string }>;
  faqs: AreaFaq[];
};

export function AreaPageTemplate({
  areaName,
  introTitle,
  introParagraphs,
  projectPlaceholders,
  timberIssues,
  topServices,
  faqs,
}: AreaPageTemplateProps) {
  return (
    <>
      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-bold text-slate-900">{introTitle}</h2>
        <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
          {introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-bold text-slate-900">Recent projects in {areaName}</h2>
        <p className="mt-2 text-sm text-slate-600">
          Template placeholders below. Replace each card with real local project summaries when available.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {projectPlaceholders.map((project) => (
            <article key={project.title} className="rounded-xl bg-[#F7F8F5] p-4 ring-1 ring-[#E8E5E0]">
              <h3 className="text-base font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#A95345]">
                {project.locationHint}
              </p>
              <p className="mt-3 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Problem:</span> {project.problem}
              </p>
              <p className="mt-2 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Work completed:</span> {project.workCompleted}
              </p>
              <p className="mt-2 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Outcome:</span> {project.outcome}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-[#F7F8F5] p-6 shadow-sm ring-1 ring-[#E8E5E0]">
        <h2 className="text-2xl font-bold text-slate-900">Common timber issues in {areaName}</h2>
        <div className="mt-5 space-y-4">
          {timberIssues.map((issue) => (
            <article key={issue.title} className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
              <h3 className="text-base font-semibold text-slate-900">{issue.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{issue.detail}</p>
              <p className="mt-2 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">How we handle it:</span> {issue.approach}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-bold text-slate-900">Most requested services in {areaName}</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {topServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="rounded-md border border-[#E8E5E0] bg-white px-4 py-2 text-sm font-semibold text-[#24323D] hover:bg-[#F7F8F5]"
            >
              {service.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-[#EEF3F1] p-6 shadow-sm ring-1 ring-[#E8E5E0]">
        <h2 className="text-2xl font-bold text-slate-900">FAQs for {areaName}</h2>
        <div className="mt-4">
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
