import { SITE } from "./site";

export const SITE_URL = "https://wema-weiskircher.de";

export const KEYWORDS_DE = [
  "WEMA",
  "WEMA Weiskircher",
  "Stahl- und Maschinenbau",
  "Beton-Recyclinganlagen",
  "Restbeton Aufbereitung",
  "Spülwasser Recycling",
  "Tellerzwangsmischer",
  "Zwangsmischer",
  "Planetenmischer",
  "Doppelwellenmischer",
  "Betonmischer Hersteller",
  "Beschickungsaufzug",
  "Mischanlage Transportbeton",
  "Mischanlage Fertigteilwerk",
  "Zyklon Feinstoffabscheidung",
  "Hydrozyklon Beton",
  "St. Wendel",
  "Saarland",
  "Maschinenbau Saarland",
  "Beton produzierende Industrie",
];

export const KEYWORDS_EN = [
  "WEMA",
  "WEMA Weiskircher",
  "steel and mechanical engineering",
  "concrete recycling plants",
  "residual concrete recovery",
  "wash water recycling",
  "pan mixer",
  "forced mixer",
  "planetary mixer",
  "twin-shaft mixer",
  "concrete mixer manufacturer",
  "loading lift",
  "ready-mix mixing plant",
  "precast concrete plant",
  "hydrocyclone fines separation",
  "St. Wendel",
  "Saarland",
  "Germany",
];

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE.legal,
    alternateName: "WEMA Weiskircher",
    legalName: SITE.legal,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    foundingDate: `${SITE.gruendung}-01-01`,
    founder: {
      "@type": "Person",
      name: "Weiskircher",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.strasse,
      postalCode: SITE.plz,
      addressLocality: SITE.ort,
      addressRegion: "Saarland",
      addressCountry: "DE",
    },
    contactPoint: SITE.telefon.map((t) => ({
      "@type": "ContactPoint",
      telephone: t,
      contactType: "sales",
      areaServed: ["DE", "FR", "BE", "NL", "CZ", "SK", "RU"],
      availableLanguage: ["de", "en"],
    })),
    email: SITE.email,
    faxNumber: SITE.telefax,
    sameAs: [],
    areaServed: ["DE", "FR", "BE", "NL", "CZ", "SK", "RU"],
    knowsAbout: [
      "Beton-Recyclinganlagen",
      "Restbeton Aufbereitung",
      "Spülwasserverwertung",
      "Tellerzwangsmischer",
      "Planetenmischer",
      "Doppelwellenmischer",
      "Kipptrommelmischer",
      "Beschickungsaufzüge",
      "Mischanlagen für Transportbeton",
      "Mischanlagen für Fertigteilwerke",
      "Hydrozyklontechnik",
      "Stahlbau",
      "Behälterbau",
    ],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE.legal,
    url: SITE_URL,
    telephone: SITE.telefon[0],
    faxNumber: SITE.telefax,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.strasse,
      postalCode: SITE.plz,
      addressLocality: SITE.ort,
      addressRegion: "Saarland",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.4682,
      longitude: 7.1668,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    priceRange: "€€€",
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
}

export function productJsonLd(p: {
  slug: string;
  titel: string;
  kurz: string;
  intro: string;
  bild: string;
  varianten: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/leistungen/${p.slug}#product`,
    name: p.titel,
    description: `${p.kurz} ${p.intro}`,
    brand: {
      "@type": "Brand",
      name: "WEMA Weiskircher",
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
    image: `${SITE_URL}${p.bild}`,
    category: "Beton-Industrieanlagen",
    additionalProperty: p.varianten.map((v) => ({
      "@type": "PropertyValue",
      name: "Ausführung",
      value: v,
    })),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      price: "0",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      seller: {
        "@id": `${SITE_URL}/#organization`,
      },
      url: `${SITE_URL}/leistungen/${p.slug}`,
    },
  };
}

export function faqJsonLd(
  items: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
      },
    })),
  };
}

