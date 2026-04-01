"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  navLinks: NavLink[];
};

export function MobileMenu({ navLinks }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        onClick={() => setOpen(true)}
        className="rounded-md border border-[#E8E5E0] px-3 py-2 text-sm font-semibold text-[#24323D] hover:bg-[#F7F8F5]"
      >
        Menu
      </button>

      {open ? (
        <div className="fixed inset-0 z-[100]">
          <button
            type="button"
            aria-label="Close mobile menu"
            className="absolute inset-0 bg-black/45"
            onClick={() => setOpen(false)}
          />
          <aside
            id="mobile-nav-drawer"
            className="absolute inset-0 flex h-full w-full flex-col bg-white p-5 shadow-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#A95345]">Navigation</p>
              <button
                type="button"
                aria-label="Close mobile menu"
                onClick={() => setOpen(false)}
                className="rounded-md border border-[#E8E5E0] px-3 py-1 text-sm font-semibold text-[#24323D]"
              >
                Close
              </button>
            </div>

            <Link href="/" onClick={() => setOpen(false)} className="mb-4 flex items-center gap-3 text-[#24323D]">
              <Image
                src="/new-logo-dark.svg"
                alt="Bespoke Carpentry Bath logo"
                width={56}
                height={56}
                className="h-11 w-11 object-contain"
              />
              <span className="leading-tight">
                <span className="block text-sm font-bold tracking-wide">BESPOKE CARPENTRY BATH</span>
                <span className="block text-xs font-medium text-[#5F7382]">Handcrafted Joinery</span>
              </span>
            </Link>

            <nav className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition ${
                    pathname === link.href
                      ? "bg-[#8C4337]/15 text-[#8C4337]"
                      : "text-[#24323D] hover:bg-[#F7F8F5]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto space-y-3 pt-6">
              <a
                href="tel:+441225000000"
                className="block rounded-md border border-[#E8E5E0] px-4 py-3 text-center text-sm font-semibold text-[#24323D] hover:bg-[#F7F8F5]"
              >
                Call 01225 000000
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-[#8C4337] px-4 py-3 text-center text-sm font-semibold text-[#F7F8F5] hover:bg-[#73362D]"
              >
                Get a quote
              </Link>
            </div>
          </aside>
        </div>
      ) : null}
    </div>
  );
}
