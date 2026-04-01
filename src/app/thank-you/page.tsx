import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CallLink } from "@/components/call-link";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Thank You",
  description: "Thanks for your quote request. We will review your details and get back to you shortly.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Thank You", path: "/thank-you" },
  ];

  return (
    <section className="space-y-8 [&>nav[aria-label='Breadcrumb']+*]:mt-2">
      <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        badge="Thank you"
        title="Your quote request has been received"
        description="Thanks for contacting us. Our team will review your details and get back to you as soon as possible."
        variant="minimal"
        actions={[{ href: "/services", label: "View services", variant: "secondary" }]}
      />
      <CallLink
        phoneNumber="+441225000000"
        displayNumber="01225 000000"
        location="thank_you_page"
        className="inline-flex min-h-11 items-center rounded-md bg-[#8C4337] px-5 py-3 text-sm font-semibold text-[#F7F8F5] hover:bg-[#73362D]"
      />
      <div>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-[#A95345] underline underline-offset-4 hover:text-[#8C4337]"
        >
          Return to homepage
        </Link>
      </div>
    </section>
  );
}
