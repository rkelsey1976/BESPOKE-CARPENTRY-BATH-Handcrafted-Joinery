import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";
import { SitewideCtaStrip } from "@/components/sitewide-cta-strip";
import { StructuredData } from "@/components/structured-data";
import { BUSINESS_NAME, SITE_URL, getBusinessSchema, getWebsiteSchema } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bespoke Carpentry Bath | Sash Windows & Joinery",
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "Bespoke carpentry in Bath and nearby areas. Handmade joinery, sash window repairs, built-in furniture, and restoration work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/areas-we-cover", label: "Areas" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <html lang="en-GB" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body className="theme-shell min-h-full flex flex-col">
        <header className="border-b border-[#E8E5E0] bg-white">
          <div className="border-b border-[#3A4A57] bg-[#24323D] text-[#F7F8F5]">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-2 text-xs">
              <p>Serving Bath, Bradford-on-Avon, Keynsham, and Frome</p>
              <p>Mon-Fri 8:00-17:30</p>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3 text-[#24323D]">
              <Image
                src="/new-logo-dark.svg"
                alt="Bespoke Carpentry Bath logo"
                width={64}
                height={64}
                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                priority
              />
              <span className="leading-tight">
                <span className="block text-sm font-bold tracking-wide sm:text-xl">BESPOKE CARPENTRY BATH</span>
                <span className="block text-xs font-medium text-[#5F7382] sm:text-base">Handcrafted Joinery</span>
              </span>
            </Link>
            <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-[#4B5E6C] underline-offset-4 transition-colors hover:text-[#A95345] hover:underline focus-visible:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden items-center gap-2 md:flex">
              <a
                href="tel:+441225000000"
                className="inline-flex min-h-11 items-center rounded-md border border-[#E8E5E0] px-3 py-2 text-xs font-semibold text-[#24323D] hover:bg-[#F7F8F5] sm:text-sm"
              >
                01225 000000
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center rounded-md bg-[#8C4337] px-3 py-2 text-xs font-semibold text-[#F7F8F5] hover:bg-[#73362D] sm:text-sm"
              >
                Get a quote
              </Link>
            </div>
            <MobileMenu navLinks={navLinks} />
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl flex-1 px-6">{children}</main>
        <StructuredData data={getBusinessSchema()} />
        <StructuredData data={getWebsiteSchema()} />

        <SitewideCtaStrip />

        <footer className="bg-[#24323D] text-[#F7F8F5] [&_a]:text-[#F7F8F5] [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-[#E4BB97]">
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-10 md:grid-cols-3">
            <div>
              <Image
                src="/new-logo-light.svg"
                alt="Bespoke Carpentry Bath logo"
                width={52}
                height={52}
                className="h-10 w-10 object-contain"
              />
              <h2 className="text-base font-semibold">Bath Bespoke Carpentry</h2>
              <p className="mt-2 text-sm text-[#D0D5DD]">
                Bespoke joinery, sash windows, and restoration work across Bath and nearby areas.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold">Contact</h2>
              <p className="mt-2 text-sm text-[#D0D5DD]">01225 000000</p>
              <p className="text-sm text-[#D0D5DD]">hello@bathcarpentry.co.uk</p>
            </div>
            <div>
              <h2 className="text-base font-semibold">Areas</h2>
              <p className="mt-2 text-sm text-[#D0D5DD]">
                Bath, Bradford-on-Avon, Keynsham, and Frome.
              </p>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 text-xs text-[#D0D5DD]">
              <p>© {new Date().getFullYear()} Bath Bespoke Carpentry</p>
              <p>
                Website design by{" "}
                <a
                  href="https://seo-kings.co.uk"
                  className="inline-flex min-h-11 items-center text-[#F7F8F5] underline underline-offset-4 hover:text-[#E4BB97]"
                >
                  seo-kings.co.uk
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
