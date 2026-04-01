"use client";

import { useState } from "react";
import Image from "next/image";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
};

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  title,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const inputId = `compare-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <article className="rounded-xl bg-white p-4 ring-1 ring-stone-200">
      <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
      <div className="relative mt-4 overflow-hidden rounded-lg">
        <Image src={beforeImage} alt={beforeAlt} width={1200} height={800} className="h-64 w-full object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image src={afterImage} alt={afterAlt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
        <div
          className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-[#24323D]/80 px-3 py-1 text-xs font-semibold text-[#F7F8F5]"
          aria-hidden
        >
          Before
        </div>
        <div
          className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-[#8C4337]/85 px-3 py-1 text-xs font-semibold text-[#F7F8F5]"
          aria-hidden
        >
          After
        </div>
        <div
          className="pointer-events-none absolute bottom-0 top-0 w-0.5 bg-white/90 shadow-[0_0_0_1px_rgba(36,50,61,0.15)]"
          style={{ left: `${position}%` }}
          aria-hidden
        />
      </div>
      <label htmlFor={inputId} className="mt-4 block text-sm font-medium text-stone-700">
        Drag to compare before and after
      </label>
      <input
        id={inputId}
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="mt-2 w-full accent-[#8C4337]"
      />
    </article>
  );
}
