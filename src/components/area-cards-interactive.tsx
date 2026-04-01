"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type InteractiveAreaCard = {
  name: string;
  href: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  services: string[];
  localHighlight: string;
};

type AreaCardsInteractiveProps = {
  items: InteractiveAreaCard[];
};

export function AreaCardsInteractive({ items }: AreaCardsInteractiveProps) {
  const [activeArea, setActiveArea] = useState(items[0]?.name ?? "");

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((area) => {
        const isActive = activeArea === area.name;
        return (
          <article
            key={area.name}
            className={`rounded-xl p-5 ring-1 transition ${
              isActive
                ? "bg-white ring-[#D8C7C3] shadow-sm"
                : "bg-[#F7F8F5] ring-[#E8E5E0] hover:bg-white hover:ring-[#D8C7C3]"
            }`}
          >
            <button
              type="button"
              onClick={() => setActiveArea(area.name)}
              className="w-full text-left"
              aria-expanded={isActive}
            >
              <div className="mb-3 overflow-hidden rounded-lg ring-1 ring-[#E8E5E0]">
                <Image
                  src={area.imageSrc}
                  alt={area.imageAlt}
                  width={1200}
                  height={700}
                  className="h-36 w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-900">{area.name}</h3>
                <span
                  className={`inline-flex h-7 min-w-7 items-center justify-center rounded-full text-xs font-bold ${
                    isActive ? "bg-[#8C4337] text-[#F7F8F5]" : "bg-[#EEF3F1] text-[#8C4337]"
                  }`}
                  aria-hidden
                >
                  {isActive ? "−" : "+"}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-700">{area.summary}</p>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isActive ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
              aria-hidden={!isActive}
            >
              <div className="space-y-4 border-t border-[#E8E5E0] pt-4">
                <p className="text-sm text-slate-700">{area.localHighlight}</p>
                <div className="flex flex-wrap gap-2">
                  {area.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-[#EEF3F1] px-3 py-1 text-xs font-semibold text-[#8C4337]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <Link
                  href={area.href}
                  tabIndex={isActive ? 0 : -1}
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-[#A95345] underline underline-offset-4 hover:text-[#8C4337]"
                >
                  View {area.name} page
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
