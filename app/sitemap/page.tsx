import Link from "next/link";
import T from "@/components/T";
import SitemapProdukte from "@/components/SitemapProdukte";
import { PRODUKTE } from "@/lib/site";

import { SITE_URL } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Übersicht aller Seiten der WEMA-Website.",
  alternates: { canonical: `${SITE_URL}/sitemap` },
};

export default function Sitemap() {
  return (
    <section>
      <div className="mx-auto max-w-[1000px] px-6 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="eyebrow text-[color:var(--color-nav-2)]">
          <T de="Übersicht" en="Overview" />
        </div>
        <h1 className="font-display mt-6 text-5xl leading-[1.05] tracking-tight text-[color:var(--color-ink)] md:text-7xl">
          Sitemap
        </h1>
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <div>
            <div className="eyebrow mb-6 text-[color:var(--color-nav-2)]">
              <T de="Hauptbereiche" en="Main sections" />
            </div>
            <ul className="space-y-4 text-lg">
              <li>
                <Link href="/" className="hover:text-[color:var(--color-nav-2)]">
                  <T de="Start" en="Home" />
                </Link>
              </li>
              <li>
                <Link href="/unternehmen" className="hover:text-[color:var(--color-nav-2)]">
                  <T de="Unternehmen" en="Company" />
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="hover:text-[color:var(--color-nav-2)]">
                  <T de="Was wir bieten" en="What we build" />
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-[color:var(--color-nav-2)]">
                  <T de="Kontakt" en="Contact" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-6 text-[color:var(--color-nav-2)]">
              <T de="Programm" en="Programme" />
            </div>
            <SitemapProdukte produkte={PRODUKTE} />
          </div>
          <div>
            <div className="eyebrow mb-6 text-[color:var(--color-nav-2)]">
              <T de="Rechtliches" en="Legal" />
            </div>
            <ul className="space-y-4 text-lg">
              <li>
                <Link href="/impressum" className="hover:text-[color:var(--color-nav-2)]">
                  <T de="Impressum" en="Imprint" />
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-[color:var(--color-nav-2)]">
                  <T de="Datenschutz" en="Privacy" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
