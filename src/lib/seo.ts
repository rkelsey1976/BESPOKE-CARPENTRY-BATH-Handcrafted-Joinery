import type { Metadata } from "next";

export const SITE_URL = "https://www.bathbespokecarpentry.co.uk";
export const BUSINESS_NAME = "Bath Bespoke Carpentry";
export const BUSINESS_PHONE = "+44 1225 000000";
export const BUSINESS_EMAIL = "hello@bathcarpentry.co.uk";
export const BUSINESS_MAP_URL = "https://www.google.com/maps?q=Bath%2C%20Somerset";

const AREA_NAMES = ["Bath", "Bradford-on-Avon", "Keynsham", "Frome"];

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: BUSINESS_NAME,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function getBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    email: BUSINESS_EMAIL,
    telephone: BUSINESS_PHONE,
    priceRange: "$$",
    hasMap: BUSINESS_MAP_URL,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:30",
      },
    ],
    areaServed: AREA_NAMES.map((name) => ({ "@type": "City", name })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bath",
      addressRegion: "Somerset",
      addressCountry: "GB",
    },
    sameAs: [],
    serviceType: ["Bespoke carpentry", "Joinery", "Sash window repairs", "Fitted furniture"],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS_NAME,
    inLanguage: "en-GB",
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function getServiceSchema({
  serviceName,
  description,
  path,
  areaServed,
}: {
  serviceName: string;
  description: string;
  path: string;
  areaServed: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    areaServed: areaServed.map((name) => ({ "@type": "City", name })),
    provider: { "@id": `${SITE_URL}/#business` },
    url: `${SITE_URL}${path}`,
  };
}

export function getFaqSchema(
  questions: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getArticleSchema({
  headline,
  description,
  path,
  datePublished,
  keywords,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  keywords: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified: datePublished,
    mainEntityOfPage: `${SITE_URL}${path}`,
    author: {
      "@type": "Organization",
      name: BUSINESS_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_NAME,
    },
    keywords,
  };
}
