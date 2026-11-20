import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import StickySection from "@/components/StickySection";
import ScrollWord from "@/components/ScrollWord";
import CountUp from "@/components/CountUp";
import HorizontalProgram from "@/components/HorizontalProgram";
import StackCards from "@/components/StackCards";
import T from "@/components/T";
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
                <div className="eyebrow text-[color:var(--color-nav-2)]">
                  <T de="Wer wir sind" en="Who we are" />
                </div>
              </Reveal>
              <ScrollWord
                as="h2"
                className="font-display mt-6 text-4xl leading-[1.02] tracking-tight text-[color:var(--color-ink)] md:text-6xl"
                text="Ein saarländisches Familienunternehmen, das die Branche kennt."
                textEn="A family-run company from the Saarland that knows the industry."
              />
            </div>
            <div>
              <ScrollWord
                as="p"
                className="text-lg leading-relaxed text-[color:var(--color-ink-soft)] md:text-2xl"
                text="Wir bauen Anlagen, die jeden Tag im Werk laufen. Konstruiert, gefertigt, lackiert und montiert in St. Wendel. Seit neunzehnhundertdreiundfünfzig."
                textEn="We build plants that run every day in the field. Engineered, manufactured, painted and assembled in St. Wendel. Since nineteen-fifty-three."
                intensity={0.85}
              />

              <div className="mt-14 grid grid-cols-2 gap-6 border-t border-[color:var(--color-line)] pt-10">
                <Metric
                  label={<T de="Gegründet" en="Founded" />}
                  value={<CountUp to={SITE.gruendung} />}
                />
                <Metric
                  label={<T de="Recyclinganlagen" en="Recycling plants" />}
                  value={<><CountUp to={1000} />+</>}
                />
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
              textEn="No brochure. No marketing. Just plants that have kept operations running for decades."
              intensity={0.9}
            />
            <div className="flex flex-col justify-end gap-8">
              <Reveal>
                <div className="grid grid-cols-2 gap-8">
                  <Metric
                    label={<T de="Jahre Erfahrung" en="Years of experience" />}
                    value={<><CountUp to={new Date().getFullYear() - SITE.gruendung} />+</>}
                  />
                  <Metric
                    label={<T de="Länder Vertrieb" en="Sales countries" />}
                    value={<CountUp to={7} />}
                  />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <Link href="/unternehmen" className="link-arrow text-[color:var(--color-nav-2)]">
                  <T de="Über WEMA" en="About WEMA" /> <span className="arrow">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <StackCards
        subtitle="Ausrichtung"
        subtitleEn="Approach"
        title="Wie wir arbeiten."
        titleEn="How we work."
        items={[
          {
            eyebrow: "Prinzip 01",
            eyebrowEn: "Principle 01",
            titel: "Alles aus einer Hand.",
            titelEn: "Everything from one source.",
            text: "Konstruktion, Fertigung, Lackierung und Montage. Ein Werk, ein Team, ein Ansprechpartner. Der kurze Weg zwischen Zeichnung und Werkstatt sichert die Qualität, die im Werk jeden Tag zählt.",
            textEn: "Engineering, manufacturing, painting and assembly. One site, one team, one point of contact. The short path from drawing to workshop secures the quality that matters every day.",
            bild: "/images/halle-innen.jpg",
            bildAlt: "Blick in die Halle mit Krananlage",
          },
          {
            eyebrow: "Prinzip 02",
            eyebrowEn: "Principle 02",
            titel: "Gebaut für den Dauerbetrieb.",
            titelEn: "Built for continuous operation.",
            text: "Wir bauen für Werke, in denen Stillstand teurer ist als jedes Bauteil. Robust dimensioniert, wartungsarm, ausgelegt auf jahrzehntelangen Einsatz.",
            textEn: "We build for plants where downtime is more expensive than any part. Robustly dimensioned, low-maintenance, designed for decades of service.",
            bild: "/images/stahl-detail.jpg",
            bildAlt: "Detail einer Stahlkonstruktion",
          },
          {
            eyebrow: "Prinzip 03",
            eyebrowEn: "Principle 03",
            titel: "Ersatzteile aus eigener Fertigung.",
            titelEn: "Spare parts from our own workshop.",
            text: "Verschleißteile für unsere Zwangsmischer entstehen im eigenen Werk. Kurze Reaktionszeiten, wenn es im Betrieb darauf ankommt. Auch für Anlagen, die seit Jahrzehnten laufen.",
            textEn: "Wear parts for our forced mixers are made in-house. Short response times when operations depend on it. Also for plants that have been running for decades.",
            bild: "/images/photos/ersatzteile-01.jpg",
            bildAlt: "Ersatzteile aus eigener Fertigung",
          },
          {
            eyebrow: "Prinzip 04",
            eyebrowEn: "Principle 04",
            titel: "Nah am Betreiber.",
            titelEn: "Close to the operator.",
            text: "Wir hören zu, bevor wir konstruieren. Jede Anlage entsteht in Abstimmung mit den Menschen, die sie später täglich bedienen.",
            textEn: "We listen before we design. Every plant is built in coordination with the people who operate it every day.",
            bild: "/images/photos/aufzug-02.jpg",
            bildAlt: "Beschickungsaufzug einer Betonanlage",
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
          <div className="eyebrow text-white/60">
            <T de="Vertrieb" en="Distribution" />
          </div>
          <ScrollWord
            as="h2"
            className="font-display mt-6 text-[32px] leading-[1.0] tracking-tight sm:text-[44px] md:text-[68px] lg:text-[88px]"
            text="Zuhause im Saarland. Zuhause in Europa."
            textEn="At home in the Saarland. At home in Europe."
            intensity={0.7}
          />
          <div className="mt-10 grid grid-cols-2 gap-y-3 text-sm text-white/80 md:grid-cols-3">
            {[
              { de: "Deutschland", en: "Germany" },
              { de: "Frankreich", en: "France" },
              { de: "Belgien", en: "Belgium" },
              { de: "Niederlande", en: "Netherlands" },
              { de: "Russland", en: "Russia" },
              { de: "Tschechien", en: "Czech Republic" },
              { de: "Slowakei", en: "Slovakia" },
            ].map((l) => (
              <div key={l.de} className="flex items-baseline gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                <T de={l.de} en={l.en} />
              </div>
            ))}
          </div>
        </div>
      </StickySection>

      <section className="relative bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 border border-[color:var(--color-line)] p-10 md:grid-cols-[1.2fr_1fr] md:p-16">
            <Reveal>
              <div className="eyebrow text-[color:var(--color-nav-2)]">
                <T de="Kontakt" en="Contact" />
              </div>
              <ScrollWord
                as="h2"
                className="font-display mt-6 text-4xl leading-[1.02] tracking-tight text-[color:var(--color-ink)] md:text-6xl"
                text="Sprechen wir über Ihr Werk."
                textEn="Let's talk about your plant."
                intensity={0.8}
              />
              <p className="mt-6 max-w-md text-[color:var(--color-ink-soft)] md:text-lg">
                <T
                  de="Anfrage, Ersatzteil oder komplette Neuplanung. Wir hören zu und melden uns."
                  en="Enquiry, spare part or complete new planning. We listen and get back to you."
                />
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/kontakt" className="btn-primary-inverse">
                  <T de="Kontakt aufnehmen" en="Get in touch" /> <span aria-hidden>→</span>
                </Link>
                <a href={`tel:${SITE.telefon[0].replace(/\s/g, "")}`} className="btn-outline-dark">
                  {SITE.telefon[0]}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-6 text-sm text-[color:var(--color-ink-soft)]">
                <div>
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
                    <T de="Anschrift" en="Address" />
                  </div>
                  {SITE.legal}
                  <br />
                  {SITE.strasse}, {SITE.plz} {SITE.ort}
                </div>
                <div>
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
                    <T de="Telefon" en="Phone" />
                  </div>
                  {SITE.telefon.map((t) => <div key={t}>{t}</div>)}
                </div>
                <div>
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
                    <T de="E-Mail" en="Email" />
                  </div>
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
  label: React.ReactNode;
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
