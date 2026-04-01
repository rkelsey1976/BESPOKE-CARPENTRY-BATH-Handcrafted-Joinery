import Link from "next/link";
import { CallLink } from "@/components/call-link";
import { PageHero } from "@/components/page-hero";

export default function ThankYouPage() {
  return (
    <section className="space-y-8">
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
