"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProjectCaseStudy } from "@/lib/projects";

type PortfolioProjectCardProps = {
  project: ProjectCaseStudy;
};

export function PortfolioProjectCard({ project }: PortfolioProjectCardProps) {
  const firstPair = project.beforeAfter[0];
  const [viewMode, setViewMode] = useState<"before" | "after">("before");

  const imageSrc =
    firstPair ? (viewMode === "before" ? firstPair.beforeImage : firstPair.afterImage) : project.heroImage;
  const imageAlt = firstPair ? (viewMode === "before" ? firstPair.beforeAlt : firstPair.afterAlt) : project.heroAlt;

  return (
    <article
      className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-0.5 hover:shadow-md"
      onMouseEnter={() => {
        if (firstPair) {
          setViewMode("after");
        }
      }}
      onMouseLeave={() => {
        if (firstPair) {
          setViewMode("before");
        }
      }}
    >
      <div className="relative">
        <Image
          src={imageSrc}
          alt={`${imageAlt} in ${project.location}`}
          width={1200}
          height={800}
          className="h-52 w-full object-cover transition-opacity duration-300 motion-reduce:transition-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#24323D]/55 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 inline-flex rounded-full bg-white/92 p-1 text-xs font-semibold text-[#8C4337] shadow-sm ring-1 ring-stone-200">
          <button
            type="button"
            aria-pressed={viewMode === "before"}
            onClick={() => setViewMode("before")}
            className={`min-h-9 rounded-full px-3 ${
              viewMode === "before" ? "bg-[#8C4337] text-[#F7F8F5]" : "text-[#8C4337] hover:bg-stone-100"
            }`}
          >
            Before
          </button>
          <button
            type="button"
            aria-pressed={viewMode === "after"}
            onClick={() => setViewMode("after")}
            className={`min-h-9 rounded-full px-3 ${
              viewMode === "after" ? "bg-[#8C4337] text-[#F7F8F5]" : "text-[#8C4337] hover:bg-stone-100"
            }`}
          >
            After
          </button>
        </div>
        {firstPair ? (
          <p className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#8C4337]">
            {firstPair.title}
          </p>
        ) : null}
      </div>

      <div className="p-5">
        <h2 className="text-base font-semibold text-stone-900">
          {project.title} - {project.location}
        </h2>
        <p className="mt-2 text-sm text-stone-700">{project.summary}</p>
        <Link
          href={`/portfolio/${project.slug}`}
          className="cta-pop mt-3 inline-flex min-h-11 items-center rounded-md bg-[#8C4337] px-4 py-2 text-sm font-semibold text-[#F7F8F5] hover:bg-[#73362D]"
        >
          View case study
        </Link>
      </div>
    </article>
  );
}
