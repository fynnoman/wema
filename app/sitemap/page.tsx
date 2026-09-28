import Link from "next/link";
import { PRODUKTE } from "@/lib/site";

export const metadata = {
  title: "Sitemap · WEMA Stahl- und Maschinenbau GmbH",
};

export default function Sitemap() {
  return (
    <section>
      <div className="mx-auto max-w-[1000px] px-6 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="eyebrow text-[color:var(--color-nav-2)]">Übersicht</div>
        <h1 className="font-display mt-6 text-5xl leading-[1.05] tracking-tight text-[color:var(--color-ink)] md:text-7xl">
          Sitemap
        </h1>
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <div>
            <div className="eyebrow mb-6 text-[color:var(--color-nav-2)]">Hauptbereiche</div>
            <ul className="space-y-4 text-lg">
              <li><Link href="/" className="hover:text-[color:var(--color-nav-2)]">Start</Link></li>
              <li><Link href="/unternehmen" className="hover:text-[color:var(--color-nav-2)]">Unternehmen</Link></li>
              <li><Link href="/leistungen" className="hover:text-[color:var(--color-nav-2)]">Was wir bieten</Link></li>
              <li><Link href="/kontakt" className="hover:text-[color:var(--color-nav-2)]">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-6 text-[color:var(--color-nav-2)]">Programm</div>
            <ul className="space-y-4 text-lg">
              {PRODUKTE.map((p) => (
                <li key={p.slug}>
                  <Link href={`/leistungen/${p.slug}`} className="hover:text-[color:var(--color-nav-2)]">
                    {p.titel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-6 text-[color:var(--color-nav-2)]">Rechtliches</div>
            <ul className="space-y-4 text-lg">
              <li><Link href="/impressum" className="hover:text-[color:var(--color-nav-2)]">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-[color:var(--color-nav-2)]">Datenschutz</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
