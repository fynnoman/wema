import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { LanguageProvider, type Lang } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "WEMA Stahl- und Maschinenbau · Beton-Recyclinganlagen · Saarland",
  description:
    "WEMA Stahl- und Maschinenbau GmbH aus St. Wendel. Seit 1953 Anlagen für die Beton produzierende Industrie: Beton-Recycling, Mischer, Beschickungsaufzüge, Mischanlagen und Zyklontechnik.",
  metadataBase: new URL("https://wema-weiskircher.de"),
  openGraph: {
    title: "WEMA Stahl- und Maschinenbau GmbH",
    description:
      "Anlagen für die Beton produzierende Industrie. Familiengeführt in St. Wendel seit 1953.",
    locale: "de_DE",
    type: "website",
  },
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
