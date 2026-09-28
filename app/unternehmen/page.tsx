import Link from "next/link";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import StickySection from "@/components/StickySection";
import ScrollWord from "@/components/ScrollWord";
import CountUp from "@/components/CountUp";
import PinnedTimeline from "@/components/PinnedTimeline";
import ZoomShowcase from "@/components/ZoomShowcase";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Unternehmen · WEMA Stahl- und Maschinenbau GmbH",
  description:
    "WEMA Stahl- und Maschinenbau aus St. Wendel. Familiengeführt seit 1953. Kompetenz für die Beton produzierende Industrie.",
};

export default function Unternehmen() {
  return (
    <>
      <section className="relative h-[85svh] min-h-[520px] w-full overflow-hidden bg-[#0a1522]">
        <Parallax
          src="/images/halle-innen.jpg"
          alt="Blick in eine Werkshalle"
          className="absolute inset-0 h-full w-full"
          strength={80}
          priority
          overlay="linear-gradient(180deg, rgba(10,21,34,0.55) 0%, rgba(10,21,34,0.7) 100%)"
        />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 text-white md:px-10 md:pb-24">
          <Reveal>
            <div className="eyebrow text-white/70">Das Unternehmen</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display mt-6 max-w-4xl text-[36px] leading-[1.0] tracking-tight sm:text-[52px] md:text-[80px] lg:text-[104px]">
              Kompetenz
              <br />
              <span className="italic text-white/85">seit {SITE.gruendung}.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
            <div>
              <Reveal>
                <div className="eyebrow text-[color:var(--color-nav-2)]">Standort</div>
              </Reveal>
              <ScrollWord
                as="h2"
                className="font-display mt-6 text-4xl leading-[1.05] tracking-tight text-[color:var(--color-ink)] md:text-6xl"
                text="Alles unter einem Dach."
                intensity={0.9}
              />
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
              <ScrollWord
                as="p"
                className="text-lg leading-relaxed text-[color:var(--color-ink-soft)] md:text-2xl"
                text="Die WEMA Stahl- und Maschinenbau GmbH ist ein mittelständisches Unternehmen mit Sitz in St. Wendel. Rund zwanzig Menschen arbeiten in einer Produktionshalle von tausend Quadratmetern, ausgestattet mit zwei Zehn-Tonnen-Krananlagen und einer eigenen Lackierhalle."
                intensity={0.85}
              />
              <ScrollWord
                as="p"
                className="text-base leading-relaxed text-[color:var(--color-ink-soft)] md:text-lg"
                text="Konstruktion, Fertigung, Oberflächenbehandlung und Montage entstehen im eigenen Haus. Der kurze Weg zwischen Zeichnung und Werkstatt sichert die Qualität, die im Werk jeden Tag zählt."
                intensity={0.85}
              />
              <Reveal>
                <div className="grid gap-8 border-t border-[color:var(--color-line)] pt-10 sm:grid-cols-3">
                  <Kenn label="Halle" value={<><CountUp to={1000} /> m²</>} />
                  <Kenn label="Krananlagen" value={<>2 × <CountUp to={10} /> t</>} />
                  <Kenn label="Lackierung" value="Eigene Halle" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <StickySection
        src="/images/stahl-detail.jpg"
        alt="Detail einer Stahlkonstruktion"
        overlay="linear-gradient(90deg, rgba(10,21,34,0.85) 0%, rgba(10,21,34,0.35) 65%, rgba(10,21,34,0.1) 100%)"
        minHeight="180vh"
      >
        <div className="max-w-3xl text-white">
          <div className="eyebrow text-white/60">Programm</div>
          <h2 className="font-display mt-6 text-[32px] leading-[1.0] tracking-tight sm:text-[44px] md:text-[64px] lg:text-[80px]">
            Was wir bauen.
            <br />
            <span className="italic text-white/80">Ohne Umweg.</span>
          </h2>
          <ul className="mt-10 grid gap-2 text-sm text-white/85 md:grid-cols-2 md:text-base">
            {[
              "Recyclinganlagen für Restbeton und Spülwasserverwertung",
              "Tellerzwangsmischer von 50 l bis 6.000 l",
              "Planetenmischer von 500 l bis 3.000 l",
              "Freifall- und Kipptrommelmischer",
              "Mischanlagen für Transportbeton",
              "Mischanlagen für Fertigteilwerke",
              "Mischanlagen in Sonderausführungen",
              "Ersatz- und Verschleißteile für Zwangsmischer",
              "Behälterbau",
              "Allgemeiner Stahlbau",
            ].map((item, i) => (
              <li key={item} className="flex items-baseline gap-4 border-b border-white/15 py-3">
                <span className="mono text-xs text-white/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </StickySection>

      <PinnedTimeline
        items={[
          {
            jahr: "1953",
            titel: "Der Anfang in St. Wendel.",
            text: "Gründung der WEMA. Beginn im Maschinenbau. Ein Standort, ein Name, eine klare Ausrichtung. Familiengeführt vom ersten Tag an.",
            bild: "/images/hero-halle.jpg",
            bildAlt: "Blick in eine Werkshalle",
          },
          {
            jahr: "1965",
            titel: "Einstieg in den Mischerbau.",
            text: "Erste Erfahrungen im Bereich Mischer. Aus dem Werk in St. Wendel entsteht die technische Basis, auf der später ein ganzes Programm aufbaut.",
            bild: "/images/betonmischer-2.jpg",
            bildAlt: "Betonmischer-Detail",
          },
          {
            jahr: "1980er",
            titel: "WZM Weiskircher Zwangs-Mischer.",
            text: "Vertrieb unserer Tellermischer unter dem eigenen Markennamen. Zwangsmischer werden zu einer Kernkompetenz des Hauses.",
            bild: "/images/betonmischer.jpg",
            bildAlt: "Betonmischer im Einsatz",
          },
          {
            jahr: "1985",
            titel: "Komplette Mischanlagen.",
            text: "Von der Projektierung bis zur Montage. Anlagen für Transportbeton und Fertigteilwerke werden fester Bestandteil des Programms.",
            bild: "/images/mischanlagen.jpg",
            bildAlt: "Betonmischanlage",
          },
          {
            jahr: "Heute",
            titel: "Über 1.000 Recyclinganlagen im Einsatz.",
            text: "Ein europäisches Vertriebsnetz. Referenzen bei den großen Namen der Branche. Weiter familiengeführt. Weiter aus St. Wendel.",
            bild: "/images/beton-recycling.jpg",
            bildAlt: "Betonwerk mit Recyclingzone",
          },
        ]}
      />

      <ZoomShowcase
        src="/images/hero-beton.jpg"
        alt="Beton fließt aus der Anlage"
        overlay="linear-gradient(180deg, rgba(10,21,34,0.4) 0%, rgba(10,21,34,0.85) 100%)"
      >
        <div className="max-w-3xl text-white">
          <div className="eyebrow text-white/60">Referenzen</div>
          <ScrollWord
            as="h2"
            className="font-display mt-6 text-[34px] leading-[1.0] tracking-tight sm:text-[46px] md:text-[70px] lg:text-[88px]"
            text="Vertrauen aus der Branche."
            intensity={0.7}
          />
        </div>
      </ZoomShowcase>

      <section className="relative bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="max-w-2xl text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
              Zu unseren Kunden zählen neben vielen kleineren Werken auch die
              großen Namen der Branche. Auf Anfrage nennen wir gerne weitere
              Referenzen.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-14 grid grid-cols-2 items-center gap-y-10 border-t border-[color:var(--color-line)] pt-14 md:grid-cols-5">
              {["Holcim", "Schwenk Beton", "Godel Beton", "Heidelberger Zement", "Dyckerhoff"].map((name) => (
                <div
                  key={name}
                  className="font-display text-2xl text-[color:var(--color-ink)] md:text-3xl text-center"
                >
                  {name}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-[#0a1522] text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Reveal>
              <h2 className="font-display max-w-2xl text-3xl leading-[1.05] tracking-tight md:text-5xl">
                Anfrage? Ersatzteil?
                <br />
                <span className="italic text-white/75">Kompletter Werksneubau?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/kontakt" className="btn-primary">
                Kontakt aufnehmen <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Kenn({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-2xl leading-none text-[color:var(--color-ink)]">
        {value}
      </div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
        {label}
      </div>
    </div>
  );
}
