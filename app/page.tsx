import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import StickySection from "@/components/StickySection";
import Marquee from "@/components/Marquee";
import ScrollWord from "@/components/ScrollWord";
import CountUp from "@/components/CountUp";
import HorizontalProgram from "@/components/HorizontalProgram";
import PinnedTimeline from "@/components/PinnedTimeline";
import StackCards from "@/components/StackCards";
import ZoomShowcase from "@/components/ZoomShowcase";
import { SITE } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="relative bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-40">
          <div className="grid gap-14 md:grid-cols-[1fr_1.5fr]">
            <div>
              <Reveal>
                <div className="eyebrow text-[color:var(--color-nav-2)]">Wer wir sind</div>
              </Reveal>
              <ScrollWord
                as="h2"
                className="font-display mt-6 text-4xl leading-[1.02] tracking-tight text-[color:var(--color-ink)] md:text-6xl"
                text="Ein saarländisches Familienunternehmen, das die Branche kennt."
              />
            </div>
            <div>
              <ScrollWord
                as="p"
                className="text-lg leading-relaxed text-[color:var(--color-ink-soft)] md:text-2xl"
                text="Wir bauen keine Prospekt-Maschinen. Wir bauen Anlagen, die jeden Tag im Werk laufen. Konstruiert, gefertigt, lackiert und montiert von rund zwanzig Menschen in St. Wendel. Aus einer Halle mit zwei Krananlagen zu je zehn Tonnen. Seit neunzehnhundertdreiundfünfzig."
                intensity={0.85}
              />

              <div className="mt-14 grid grid-cols-3 gap-6 border-t border-[color:var(--color-line)] pt-10">
                <Metric label="Gegründet" value={<CountUp to={SITE.gruendung} />} />
                <Metric
                  label="Recyclinganlagen"
                  value={<><CountUp to={1000} />+</>}
                />
                <Metric label="Mitarbeiter" value={<>ca. <CountUp to={SITE.mitarbeiter} /></>} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <HorizontalProgram />

      <section className="relative bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
          <div className="grid gap-14 md:grid-cols-[1.2fr_1fr]">
            <ScrollWord
              as="h2"
              className="font-display text-4xl leading-[1.02] tracking-tight text-[color:var(--color-ink)] md:text-7xl"
              text="Kein Prospekt. Kein Marketing. Nur Anlagen, die Betriebe seit Jahrzehnten am Laufen halten."
              intensity={0.9}
            />
            <div className="flex flex-col justify-end gap-8">
              <Reveal>
                <div className="grid grid-cols-2 gap-8">
                  <Metric
                    label="Jahre Erfahrung"
                    value={<><CountUp to={new Date().getFullYear() - SITE.gruendung} />+</>}
                  />
                  <Metric
                    label="Länder Vertrieb"
                    value={<CountUp to={7} />}
                  />
                  <Metric
                    label="Halle"
                    value={<>{SITE.produktionshalle}</>}
                  />
                  <Metric
                    label="Krananlagen"
                    value={<>2 × <CountUp to={10} /> t</>}
                  />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <Link href="/unternehmen" className="link-arrow text-[color:var(--color-nav-2)]">
                  Über WEMA <span className="arrow">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

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

      <section className="relative overflow-hidden bg-[#0a1522] text-white">
        <div className="grain absolute inset-0" />
        <div className="relative py-10">
          <Marquee
            words={[
              "Holcim",
              "Schwenk Beton",
              "Godel Beton",
              "Heidelberger Zement",
              "Dyckerhoff",
            ]}
            className="text-white/85"
            duration={38}
          />
        </div>
      </section>

      <ZoomShowcase
        src="/images/funken.jpg"
        alt="Funken in der Stahlfertigung"
        overlay="linear-gradient(180deg, rgba(10,21,34,0.5) 0%, rgba(10,21,34,0.85) 100%)"
      >
        <div className="max-w-3xl text-white">
          <div className="eyebrow text-white/60">Referenzen</div>
          <ScrollWord
            as="h2"
            className="font-display mt-6 text-[34px] leading-[1.0] tracking-tight sm:text-[46px] md:text-[72px] lg:text-[92px]"
            text="Über 1.000 Recyclinganlagen im Einsatz."
            intensity={0.7}
          />
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Seit der Entwicklung unserer Recyclinganlage für Restbeton und
            Spülwasserverwertung eingesetzt in Transportbeton und
            Fertigteilwerken. In Deutschland und in ganz Europa.
          </p>
        </div>
      </ZoomShowcase>

      <StackCards
        subtitle="Ausrichtung"
        title="Fünf Wege, wie wir arbeiten."
        items={[
          {
            eyebrow: "Prinzip 01",
            titel: "Alles aus einer Hand.",
            text: "Konstruktion, Fertigung, Lackierung und Montage. Ein Werk, ein Team, ein Ansprechpartner. Der kurze Weg zwischen Zeichnung und Werkstatt sichert die Qualität, die im Werk jeden Tag zählt.",
            bild: "/images/halle-innen.jpg",
            bildAlt: "Blick in die Halle mit Krananlage",
          },
          {
            eyebrow: "Prinzip 02",
            titel: "Gebaut für den Dauerbetrieb.",
            text: "Wir bauen für Werke, in denen Stillstand teurer ist als jedes Bauteil. Robust dimensioniert, wartungsarm, ausgelegt auf jahrzehntelangen Einsatz.",
            bild: "/images/stahl-detail.jpg",
            bildAlt: "Detail einer Stahlkonstruktion",
          },
          {
            eyebrow: "Prinzip 03",
            titel: "Ersatzteile aus eigener Fertigung.",
            text: "Verschleißteile für unsere Zwangsmischer entstehen im eigenen Werk. Kurze Reaktionszeiten, wenn es im Betrieb darauf ankommt. Auch für Anlagen, die seit Jahrzehnten laufen.",
            bild: "/images/werker.jpg",
            bildAlt: "Handwerkliche Fertigung",
          },
          {
            eyebrow: "Prinzip 04",
            titel: "Nah am Betreiber.",
            text: "Wir hören zu, bevor wir konstruieren. Jede Anlage entsteht in Abstimmung mit den Menschen, die sie später täglich bedienen.",
            bild: "/images/beschickungsaufzuege.jpg",
            bildAlt: "Beschickungsaufzug einer Betonanlage",
          },
          {
            eyebrow: "Prinzip 05",
            titel: "In Europa zu Hause.",
            text: "Vertretungen in Frankreich, Belgien, den Niederlanden, Russland, Tschechien und der Slowakei. Aus St. Wendel für den europäischen Werksalltag.",
            bild: "/images/mischanlagen-2.jpg",
            bildAlt: "Betonmischanlage mit Silos",
          },
        ]}
      />

      <StickySection
        src="/images/hero-beton.jpg"
        alt="Beton fließt aus der Mischanlage"
        overlay="linear-gradient(90deg, rgba(10,21,34,0.85) 0%, rgba(10,21,34,0.35) 60%, rgba(10,21,34,0.1) 100%)"
        minHeight="160vh"
      >
        <div className="max-w-2xl text-white">
          <div className="eyebrow text-white/60">Vertrieb</div>
          <ScrollWord
            as="h2"
            className="font-display mt-6 text-[32px] leading-[1.0] tracking-tight sm:text-[44px] md:text-[68px] lg:text-[88px]"
            text="Zuhause im Saarland. Zuhause in Europa."
            intensity={0.7}
          />
          <div className="mt-10 grid grid-cols-2 gap-y-3 text-sm text-white/80 md:grid-cols-3">
            {["Deutschland", "Frankreich", "Belgien", "Niederlande", "Russland", "Tschechien", "Slowakei"].map((l) => (
              <div key={l} className="flex items-baseline gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                {l}
              </div>
            ))}
          </div>
        </div>
      </StickySection>

      <section className="relative bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 border border-[color:var(--color-line)] p-10 md:grid-cols-[1.2fr_1fr] md:p-16">
            <Reveal>
              <div className="eyebrow text-[color:var(--color-nav-2)]">Kontakt</div>
              <ScrollWord
                as="h2"
                className="font-display mt-6 text-4xl leading-[1.02] tracking-tight text-[color:var(--color-ink)] md:text-6xl"
                text="Sprechen wir über Ihr Werk."
                intensity={0.8}
              />
              <p className="mt-6 max-w-md text-[color:var(--color-ink-soft)] md:text-lg">
                Anfrage, Ersatzteil oder komplette Neuplanung. Wir hören zu
                und melden uns.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/kontakt" className="btn-primary-inverse">
                  Kontakt aufnehmen <span aria-hidden>→</span>
                </Link>
                <a href={`tel:${SITE.telefon[0].replace(/\s/g, "")}`} className="btn-outline-dark">
                  {SITE.telefon[0]}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-6 text-sm text-[color:var(--color-ink-soft)]">
                <div>
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Anschrift</div>
                  {SITE.legal}
                  <br />
                  {SITE.strasse}, {SITE.plz} {SITE.ort}
                </div>
                <div>
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Telefon</div>
                  {SITE.telefon.map((t) => <div key={t}>{t}</div>)}
                </div>
                <div>
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">E-Mail</div>
                  <a href={`mailto:${SITE.email}`} className="text-[color:var(--color-nav-2)] hover:underline">
                    {SITE.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <div className="font-display text-3xl leading-none text-[color:var(--color-ink)] md:text-5xl">
        {value}
      </div>
      <div className="mt-3 text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
        {label}
      </div>
    </div>
  );
}
