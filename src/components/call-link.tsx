"use client";

import { trackEvent } from "@/lib/analytics";

type CallLinkProps = {
  phoneNumber: string;
  displayNumber: string;
  location: string;
  className?: string;
};

export function CallLink({ phoneNumber, displayNumber, location, className }: CallLinkProps) {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className={className}
      onClick={() => trackEvent("phone_call_click", { location, phone: displayNumber })}
    >
      Call {displayNumber}
    </a>
  );
}
