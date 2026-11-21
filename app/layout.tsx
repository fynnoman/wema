import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";
import { LanguageProvider, type Lang } from "@/components/LanguageProvider";
import { KEYWORDS_DE, SITE_URL, orgJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "WEMA Stahl- und Maschinenbau · Beton-Recyclinganlagen seit 1953 · St. Wendel",
    template: "%s · WEMA Weiskircher · St. Wendel",
  },
  description:
    "WEMA Stahl- und Maschinenbau GmbH aus St. Wendel. Seit 1953 Hersteller von Beton-Recyclinganlagen, Tellerzwangsmischern, Beschickungsaufzügen, Mischanlagen und Hydrozyklon-Technik für die Beton produzierende Industrie.",
  keywords: KEYWORDS_DE,
  applicationName: "WEMA Weiskircher",
  authors: [{ name: "WEMA Stahl- und Maschinenbau GmbH" }],
  creator: "WEMA Stahl- und Maschinenbau GmbH",
  publisher: "WEMA Stahl- und Maschinenbau GmbH",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "WEMA Stahl- und Maschinenbau GmbH · Anlagen für die Beton-Industrie",
    description:
      "Seit 1953 fertigt WEMA in St. Wendel Beton-Recyclinganlagen, Zwangsmischer, Beschickungsaufzüge und komplette Mischanlagen. Familiengeführt. Europaweit im Einsatz.",
    url: SITE_URL,
    siteName: "WEMA Weiskircher",
    locale: "de_DE",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/images/hero-halle.jpg",
        width: 1600,
        height: 900,
        alt: "WEMA Stahl- und Maschinenbau in St. Wendel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEMA Weiskircher · Anlagen für die Beton-Industrie",
    description:
      "Beton-Recyclinganlagen, Zwangsmischer und komplette Mischanlagen aus St. Wendel. Seit 1953.",
    images: ["/images/hero-halle.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Industriemaschinenbau",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1522",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("wema-lang")?.value;
  const initialLang: Lang = cookieLang === "en" ? "en" : "de";

  return (
    <html lang={initialLang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <JsonLd data={orgJsonLd()} />
      </head>
      <body>
        <LanguageProvider initialLang={initialLang}>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
