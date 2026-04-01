"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProcessStep = {
  step: string;
  title: string;
  summary: string;
  detail: string;
  timeframe: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
};

type ProcessStepsInteractiveProps = {
  steps: ProcessStep[];
};

export function ProcessStepsInteractive({ steps }: ProcessStepsInteractiveProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-2">
        {steps.map((item, index) => {
          const active = index === activeIndex;
          return (
            <button
              key={`${item.step}-pill`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show step ${item.step}`}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition md:px-4 md:py-2 md:text-sm min-h-11 ${
                active
                  ? "bg-[#8C4337] text-[#F7F8F5]"
                  : "border border-[#E8E5E0] bg-white text-[#24323D] hover:bg-[#F7F8F5]"
              }`}
            >
              Step {item.step}
            </button>
          );
        })}
      </div>

      <article className="mt-4 rounded-xl border border-[#E8E5E0] bg-white p-5">
        <div className="grid gap-4 md:grid-cols-[minmax(220px,340px)_1fr] md:items-start">
          <div className="overflow-hidden rounded-lg border border-[#E8E5E0]">
            <Image
              src={steps[activeIndex]?.imageSrc ?? "/service-tools-flatlay.webp"}
              alt={steps[activeIndex]?.imageAlt ?? "Carpentry process step image"}
              width={1400}
              height={800}
              className="h-40 w-full object-cover md:h-56"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#A95345]">
              Step {steps[activeIndex]?.step}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{steps[activeIndex]?.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700 md:hidden">{steps[activeIndex]?.summary}</p>
            <p className="mt-3 hidden text-sm leading-6 text-slate-700 md:block">{steps[activeIndex]?.detail}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#EEF3F1] px-3 py-1 text-xs font-semibold text-[#8C4337]">
                {steps[activeIndex]?.timeframe}
              </span>
              <Link
                href={steps[activeIndex]?.ctaHref ?? "/contact"}
                className="inline-flex min-h-11 items-center rounded-md bg-[#8C4337] px-4 py-2 text-sm font-semibold text-[#F7F8F5] hover:bg-[#73362D]"
              >
                {steps[activeIndex]?.ctaLabel}
              </Link>
              <button
                type="button"
                onClick={() => setActiveIndex((activeIndex + 1) % steps.length)}
                className="rounded-md border border-[#E8E5E0] px-4 py-2 text-sm font-semibold text-[#24323D] hover:bg-[#F7F8F5]"
              >
                Next step
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
