import Link from "next/link";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import StickySection from "@/components/StickySection";
import ScrollWord from "@/components/ScrollWord";
import CountUp from "@/components/CountUp";
import PinnedTimeline from "@/components/PinnedTimeline";
import ZoomShowcase from "@/components/ZoomShowcase";
import T from "@/components/T";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unternehmen",
  description:
    "WEMA Stahl- und Maschinenbau GmbH aus St. Wendel. Familiengeführtes Unternehmen seit 1953. Produktion, Fertigung und Montage für die Beton produzierende Industrie in Deutschland und Europa.",
  alternates: { canonical: `${SITE_URL}/unternehmen` },
  openGraph: {
    title: "Unternehmen · WEMA Weiskircher",
    description:
      "Familiengeführter Stahl- und Maschinenbau aus St. Wendel. Seit 1953 im Dienst der Beton-Industrie.",
    url: `${SITE_URL}/unternehmen`,
  },
};

export default function Unternehmen() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", url: "/" },
          { name: "Unternehmen", url: "/unternehmen" },
        ])}
      />
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
            <div className="eyebrow text-white/70">
              <T de="Das Unternehmen" en="The Company" />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display mt-6 max-w-4xl text-[36px] leading-[1.0] tracking-tight sm:text-[52px] md:text-[80px] lg:text-[104px]">
              <T de="Kompetenz" en="Expertise" />
              <br />
              <span className="italic text-white/85">
                <T de={`seit ${SITE.gruendung}.`} en={`since ${SITE.gruendung}.`} />
              </span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
            <div>
              <Reveal>
                <div className="eyebrow text-[color:var(--color-nav-2)]">
                  <T de="Standort" en="Location" />
                </div>
              </Reveal>
              <ScrollWord
                as="h2"
                className="font-display mt-6 text-4xl leading-[1.05] tracking-tight text-[color:var(--color-ink)] md:text-6xl"
                text="Alles unter einem Dach."
                textEn="Everything under one roof."
                intensity={0.9}
              />
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
              <ScrollWord
                as="p"
                className="text-lg leading-relaxed text-[color:var(--color-ink-soft)] md:text-2xl"
                text="Die WEMA Stahl- und Maschinenbau GmbH ist ein mittelständisches Unternehmen mit Sitz in St. Wendel. Gearbeitet wird in einer Produktionshalle von tausend Quadratmetern, ausgestattet mit zwei Zehn-Tonnen-Krananlagen und einer eigenen Lackierhalle."
                textEn="WEMA Stahl- und Maschinenbau GmbH is a medium-sized company based in St. Wendel. The work takes place in a production hall of one thousand square metres, equipped with two ten-ton cranes and an in-house paint shop."
                intensity={0.85}
              />
              <ScrollWord
                as="p"
                className="text-base leading-relaxed text-[color:var(--color-ink-soft)] md:text-lg"
                text="Konstruktion, Fertigung, Oberflächenbehandlung und Montage entstehen im eigenen Haus. Der kurze Weg zwischen Zeichnung und Werkstatt sichert die Qualität, die im Werk jeden Tag zählt."
                textEn="Engineering, manufacturing, surface treatment and assembly all happen in-house. The short path from drawing to workshop secures the quality that matters every day."
                intensity={0.85}
              />
              <Reveal>
                <div className="grid gap-8 border-t border-[color:var(--color-line)] pt-10 sm:grid-cols-3">
                  <Kenn
                    label={<T de="Halle" en="Shop floor" />}
                    value={<><CountUp to={1000} /> m²</>}
                  />
                  <Kenn
                    label={<T de="Krananlagen" en="Cranes" />}
                    value={<>2 × <CountUp to={10} /> t</>}
                  />
                  <Kenn
                    label={<T de="Lackierung" en="Painting" />}
                    value={<T de="Eigene Halle" en="In-house bay" />}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <StickySection
        src="/images/photos/mischanlage-01.jpg"
        alt="Detail einer Mischanlage"
        overlay="linear-gradient(90deg, rgba(10,21,34,0.85) 0%, rgba(10,21,34,0.35) 65%, rgba(10,21,34,0.1) 100%)"
        minHeight="180vh"
      >
        <div className="max-w-3xl text-white">
          <div className="eyebrow text-white/60">
            <T de="Programm" en="Programme" />
          </div>
          <h2 className="font-display mt-6 text-[32px] leading-[1.0] tracking-tight sm:text-[44px] md:text-[64px] lg:text-[80px]">
            <T de="Was wir bauen." en="What we build." />
            <br />
            <span className="italic text-white/80">
              <T de="Ohne Umweg." en="No detours." />
            </span>
          </h2>
          <ul className="mt-10 grid gap-2 text-sm text-white/85 md:grid-cols-2 md:text-base">
            {[
              {
                de: "Recyclinganlagen für Restbeton und Spülwasserverwertung",
                en: "Recycling plants for residual concrete and wash water",
              },
              { de: "Tellerzwangsmischer von 50 l bis 6.000 l", en: "Pan mixers from 50 l to 6,000 l" },
              { de: "Planetenmischer von 500 l bis 3.000 l", en: "Planetary mixers from 500 l to 3,000 l" },
              { de: "Freifall- und Kipptrommelmischer", en: "Free-fall and tilting drum mixers" },
              { de: "Mischanlagen für Transportbeton", en: "Mixing plants for ready-mix concrete" },
              { de: "Mischanlagen für Fertigteilwerke", en: "Mixing plants for precast works" },
              { de: "Mischanlagen in Sonderausführungen", en: "Custom mixing plants" },
              { de: "Ersatz- und Verschleißteile für Zwangsmischer", en: "Spare and wear parts for forced mixers" },
              { de: "Behälterbau", en: "Tank construction" },
              { de: "Allgemeiner Stahlbau", en: "General steel construction" },
            ].map((item, i) => (
              <li
                key={item.de}
                className="flex items-baseline gap-4 border-b border-white/15 py-3"
              >
                <span className="mono text-xs text-white/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <T de={item.de} en={item.en} />
                </span>
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
            titelEn: "The beginning in St. Wendel.",
            text: "Gründung der WEMA. Beginn im Maschinenbau. Ein Standort, ein Name, eine klare Ausrichtung. Familiengeführt vom ersten Tag an.",
            textEn: "WEMA is founded. The beginning in mechanical engineering. One site, one name, one clear direction. Family-run from day one.",
            bild: "/images/hero-halle.jpg",
            bildAlt: "Blick in eine Werkshalle",
          },
          {
            jahr: "1965",
            titel: "Einstieg in den Mischerbau.",
            titelEn: "Entry into mixer engineering.",
            text: "Erste Erfahrungen im Bereich Mischer. Aus dem Werk in St. Wendel entsteht die technische Basis, auf der später ein ganzes Programm aufbaut.",
            textEn: "First experience in mixer engineering. From the St. Wendel workshop, the technical foundation emerges on which a whole programme is later built.",
            bild: "/images/photos/betonmischer-02.png",
            bildAlt: "WEMA Tellerzwangsmischer",
          },
          {
            jahr: "1980er",
            titel: "WZM Weiskircher Zwangs-Mischer.",
            titelEn: "WZM Weiskircher forced mixers.",
            text: "Vertrieb unserer Tellermischer unter dem eigenen Markennamen. Zwangsmischer werden zu einer Kernkompetenz des Hauses.",
            textEn: "We start selling our pan mixers under our own brand. Forced mixers become a core competence.",
            bild: "/images/photos/betonmischer-01.png",
            bildAlt: "WEMA Tellerzwangsmischer in der Fertigung",
          },
          {
            jahr: "1985",
            titel: "Komplette Mischanlagen.",
            titelEn: "Complete mixing plants.",
            text: "Von der Projektierung bis zur Montage. Anlagen für Transportbeton und Fertigteilwerke werden fester Bestandteil des Programms.",
            textEn: "From planning to installation. Plants for ready-mix and precast become a permanent part of the programme.",
            bild: "/images/photos/mischanlage-02.jpg",
            bildAlt: "Betonmischanlage",
          },
          {
            jahr: "Heute",
            titel: "Über 1.000 Recyclinganlagen im Einsatz.",
            titelEn: "Over 1,000 recycling plants in operation.",
            text: "Ein europäisches Vertriebsnetz. Referenzen bei den großen Namen der Branche. Weiter familiengeführt. Weiter aus St. Wendel.",
            textEn: "A European sales network. References at the big names in the industry. Still family-run. Still from St. Wendel.",
            bild: "/images/photos/ueberflur-02.jpg",
            bildAlt: "Beton-Recyclinganlage im Werk",
          },
        ]}
      />

      <ZoomShowcase
        src="/images/hero-beton.jpg"
        alt="Beton fließt aus der Anlage"
        overlay="linear-gradient(180deg, rgba(10,21,34,0.4) 0%, rgba(10,21,34,0.85) 100%)"
      >
        <div className="max-w-3xl text-white">
          <div className="eyebrow text-white/60">
            <T de="Referenzen" en="References" />
          </div>
          <ScrollWord
            as="h2"
            className="font-display mt-6 text-[34px] leading-[1.0] tracking-tight sm:text-[46px] md:text-[70px] lg:text-[88px]"
            text="Vertrauen aus der Branche."
            textEn="Trusted by the industry."
            intensity={0.7}
          />
        </div>
      </ZoomShowcase>

      <section className="relative bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="max-w-2xl text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
              <T
                de="Zu unseren Kunden zählen neben vielen kleineren Werken auch die großen Namen der Branche. Auf Anfrage nennen wir gerne weitere Referenzen."
                en="Our customers include many smaller plants as well as the big names in the industry. We are happy to share further references on request."
              />
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
                <T de="Anfrage? Ersatzteil?" en="Enquiry? Spare part?" />
                <br />
                <span className="italic text-white/75">
                  <T de="Kompletter Werksneubau?" en="Complete new plant?" />
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/kontakt" className="btn-primary">
                <T de="Kontakt aufnehmen" en="Get in touch" /> <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Kenn({
  label,
  value,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
}) {
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
