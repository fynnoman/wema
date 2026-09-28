import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0a1522] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(1400px 700px at 15% -10%, rgba(79,172,255,0.32), transparent 55%), radial-gradient(900px 500px at 100% 0%, rgba(79,172,255,0.22), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 pb-16 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-4xl leading-none tracking-tight md:text-5xl">
              WEMA
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              Stahl- und Maschinenbau aus dem Saarland. Familiengeführt in
              St. Wendel. Gebaut für die Beton produzierende Industrie.
              Seit {SITE.gruendung}.
            </p>
            <div className="mt-8 text-[11px] uppercase tracking-[0.28em] text-white/50">
              Weiskircher · seit {SITE.gruendung}
            </div>
          </div>

          <div>
            <div className="eyebrow mb-4 text-white/50">Anschrift</div>
            <address className="not-italic text-sm leading-relaxed text-white/75">
              {SITE.legal}
              <br />
              Geschäftsführer: {SITE.geschaeftsfuehrer}
              <br />
              {SITE.strasse}
              <br />
              {SITE.plz} {SITE.ort}
              <br />
              {SITE.land}
            </address>
          </div>

          <div>
            <div className="eyebrow mb-4 text-white/50">Kontakt</div>
            <ul className="space-y-1 text-sm text-white/75">
              {SITE.telefon.map((t) => (
                <li key={t}>
                  <a
                    href={`tel:${t.replace(/\s/g, "")}`}
                    className="hover:text-white"
                  >
                    Telefon {t}
                  </a>
                </li>
              ))}
              <li>Telefax {SITE.telefax}</li>
              <li className="pt-2">
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4 text-white/50">Rechtliches</div>
            <ul className="space-y-1 text-sm text-white/75">
              <li><Link href="/impressum" className="hover:text-white">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white">Datenschutz</Link></li>
              <li><Link href="/sitemap" className="hover:text-white">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.24em] text-white/45 md:flex-row md:items-center">
          <div>© {year} {SITE.legal}. Alle Rechte vorbehalten.</div>
          <div>St. Wendel · Saarland · Deutschland</div>
        </div>
      </div>
    </footer>
  );
}
