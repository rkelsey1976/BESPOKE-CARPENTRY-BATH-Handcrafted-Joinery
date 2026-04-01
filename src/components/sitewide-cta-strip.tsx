"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CallLink } from "@/components/call-link";

export function SitewideCtaStrip() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <section className="border-y border-[#E8E5E0] bg-[#EEF3F1]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-medium text-[#24323D]">Need a quote for bespoke carpentry in Bath?</p>
        <div className="flex flex-wrap gap-3">
          <CallLink
            phoneNumber="+441225000000"
            displayNumber="01225 000000"
            location="sitewide_cta_strip"
            className="rounded-md bg-[#24323D] px-4 py-2 text-sm font-semibold text-white hover:bg-[#3A4A57]"
          />
          <Link
            href="/contact"
            className="rounded-md border border-[#E8E5E0] bg-white px-4 py-2 text-sm font-semibold text-[#24323D] hover:bg-[#F7F8F5]"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
