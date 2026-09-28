import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import { PRODUKTE, SITE } from "@/lib/site";

export function generateStaticParams() {
  return PRODUKTE.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = PRODUKTE.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.titel} · WEMA Stahl- und Maschinenbau GmbH`,
    description: p.kurz,
  };
}

export default async function ProduktSeite({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = PRODUKTE.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();
  const p = PRODUKTE[idx];
  const prev = PRODUKTE[(idx - 1 + PRODUKTE.length) % PRODUKTE.length];
  const next = PRODUKTE[(idx + 1) % PRODUKTE.length];

  return (
    <>
      <section className="relative h-[85svh] min-h-[560px] w-full overflow-hidden bg-[#0a1522]">
        <Parallax
          src={p.bild}
          alt={p.bildAlt}
          className="absolute inset-0 h-full w-full"
          strength={90}
          priority
          overlay="linear-gradient(180deg, rgba(10,21,34,0.35) 0%, rgba(10,21,34,0.75) 100%)"
        />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-between px-6 pt-32 pb-16 text-white md:px-10 md:pt-40 md:pb-24">
          <Reveal>
            <Link
              href="/leistungen"
              className="text-[11px] uppercase tracking-[0.28em] text-white/70 hover:text-white"
            >
              ← Was wir bieten
            </Link>
          </Reveal>
          <div className="max-w-4xl">
            <Reveal>
              <div className="eyebrow text-white/60">
                Programm · {String(idx + 1).padStart(2, "0")} / 05
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display mt-6 text-[38px] leading-[1.0] tracking-tight sm:text-[54px] md:text-[80px] lg:text-[104px]">
                {p.titel}.
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
                {p.intro}
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <ul className="mt-10 flex flex-wrap gap-2">
                {p.varianten.map((v) => (
                  <li
                    key={v}
                    className="border border-white/25 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/90"
                  >
                    {v}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-14 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div className="eyebrow text-[color:var(--color-nav-2)]">Merkmale</div>
              <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight text-[color:var(--color-ink)] md:text-5xl">
                Worauf es im Werk
                <span className="italic text-[color:var(--color-nav-2)]"> ankommt.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="grid gap-2">
                {p.details.map((d, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-[color:var(--color-line)] py-5 text-[color:var(--color-ink)] md:text-lg"
                  >
                    <span className="mono text-xs text-[color:var(--color-muted)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative">
        <Parallax
          src="/images/funken.jpg"
          alt="Fertigung in der Werkstatt"
          className="h-[65vh] min-h-[420px] w-full"
          strength={90}
          overlay="linear-gradient(180deg, rgba(10,21,34,0.55) 0%, rgba(10,21,34,0.85) 100%)"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
            <Reveal>
              <div className="max-w-2xl text-white">
                <div className="eyebrow text-white/60">Gefertigt in St. Wendel</div>
                <div className="font-display mt-6 text-[30px] leading-[1.0] tracking-tight sm:text-[40px] md:text-[56px] lg:text-[68px]">
                  Aus einer Hand.
                  <br />
                  <span className="italic text-white/80">Wie seit 1953.</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-28">
          <div className="grid gap-10 border border-[color:var(--color-line)] p-10 md:grid-cols-[1.2fr_1fr] md:p-16">
            <Reveal>
              <div className="eyebrow text-[color:var(--color-nav-2)]">Anfrage</div>
              <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight text-[color:var(--color-ink)] md:text-5xl">
                Interesse an
                <span className="italic text-[color:var(--color-nav-2)]"> {p.titel}?</span>
              </h2>
              <p className="mt-6 max-w-md text-[color:var(--color-ink-soft)] md:text-lg">
                Beschreiben Sie uns Ihre Anwendung, Ihren Standort und die
                gewünschte Kapazität. Wir prüfen und melden uns zurück.
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
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Direkt</div>
                  {SITE.telefon[0]}
                </div>
                <div>
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">E-Mail</div>
                  <a href={`mailto:${SITE.email}`} className="text-[color:var(--color-nav-2)] hover:underline">
                    {SITE.email}
                  </a>
                </div>
                <div>
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Werk</div>
                  {SITE.strasse}, {SITE.plz} {SITE.ort}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <Link
              href={`/leistungen/${prev.slug}`}
              className="group relative block overflow-hidden bg-[#0a1522]"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={prev.bild}
                  alt={prev.bildAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,21,34,0.15) 0%, rgba(10,21,34,0.75) 100%)",
                  }}
                />
                <div className="absolute inset-0 p-8 text-white flex flex-col justify-between">
                  <div className="eyebrow text-white/70">← Zurück</div>
                  <div className="font-display text-3xl leading-none tracking-tight md:text-4xl">
                    {prev.titel}
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href={`/leistungen/${next.slug}`}
              className="group relative block overflow-hidden bg-[#0a1522]"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={next.bild}
                  alt={next.bildAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,21,34,0.15) 0%, rgba(10,21,34,0.75) 100%)",
                  }}
                />
                <div className="absolute inset-0 p-8 text-white flex flex-col justify-between items-end text-right">
                  <div className="eyebrow text-white/70">Weiter →</div>
                  <div className="font-display text-3xl leading-none tracking-tight md:text-4xl">
                    {next.titel}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
