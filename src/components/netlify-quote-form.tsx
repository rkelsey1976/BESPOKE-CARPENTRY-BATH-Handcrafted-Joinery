"use client";

import { trackEvent } from "@/lib/analytics";

export function NetlifyQuoteForm() {
  return (
    <form
      name="quote-request"
      method="POST"
      action="/thank-you"
      onSubmit={() => trackEvent("quote_form_submit", { source: "contact_page" })}
      className="max-w-xl space-y-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
    >
      <input type="hidden" name="form-name" value="quote-request" />
      <input type="hidden" name="company" />
      <input
        required
        name="name"
        placeholder="Name"
        className="w-full rounded-md border border-slate-300 px-3 py-2"
      />
      <input
        required
        name="phone"
        placeholder="Phone"
        className="w-full rounded-md border border-slate-300 px-3 py-2"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-full rounded-md border border-slate-300 px-3 py-2"
      />
      <textarea
        required
        name="project"
        rows={5}
        placeholder="Tell us about your project"
        className="w-full rounded-md border border-slate-300 px-3 py-2"
      />
      <button
        type="submit"
        className="rounded-md bg-slate-800 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
      >
        Send quote request
      </button>
    </form>
  );
}
