import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
