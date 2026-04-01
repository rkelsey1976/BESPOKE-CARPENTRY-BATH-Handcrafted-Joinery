"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type ServiceItem = {
  title: string;
  description: string;
  href: string;
  image: string;
};

type ServicesCarouselProps = {
  services: ServiceItem[];
  intervalMs?: number;
};

export function ServicesCarousel({ services, intervalMs = 5000 }: ServicesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || services.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [intervalMs, paused, services.length]);

  const active = services[activeIndex];

  return (
    <div
      className="rounded-2xl border border-[#E8E5E0] bg-white p-5 shadow-sm md:p-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <Image
          src={active.image}
          alt={active.title}
          width={1100}
          height={700}
          className="h-64 w-full rounded-xl object-cover"
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#A95345]">
            Service {activeIndex + 1} / {services.length}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-[#24323D]">{active.title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#5F7382]">{active.description}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={active.href}
              className="inline-flex min-h-11 items-center rounded-md bg-[#8C4337] px-4 py-2 text-sm font-semibold text-[#F7F8F5] transition hover:bg-[#73362D]"
            >
              View service
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-[#E8E5E0] px-4 py-2 text-sm font-semibold text-[#24323D] transition hover:bg-[#F7F8F5]"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {services.map((service, index) => (
            <button
              key={service.href}
              type="button"
              aria-label={`Go to ${service.title}`}
              onClick={() => setActiveIndex(index)}
              className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition ${
                index === activeIndex ? "bg-[#8C4337]/12" : "bg-[#D7D0D5]/35"
              }`}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  index === activeIndex ? "bg-[#8C4337]" : "bg-[#BBAFB8]"
                }`}
                aria-hidden
              />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setActiveIndex((activeIndex - 1 + services.length) % services.length)}
            className="rounded-md border border-[#E8E5E0] px-3 py-2 text-xs font-semibold text-[#24323D] transition hover:bg-[#F7F8F5]"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => setActiveIndex((activeIndex + 1) % services.length)}
            className="rounded-md border border-[#E8E5E0] px-3 py-2 text-xs font-semibold text-[#24323D] transition hover:bg-[#F7F8F5]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
