import Link from "next/link";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import T from "@/components/T";
import { SITE } from "@/lib/site";

export type LandingFaq = {
  frageDe: string;
  frageEn: string;
  antwortDe: string;
  antwortEn: string;
};

export type LandingFeature = {
  eyebrowDe: string;
  eyebrowEn: string;
  titelDe: string;
  titelEn: string;
  textDe: string;
  textEn: string;
};

export type LandingBullet = {
  de: string;
  en: string;
};

export type LandingRelated = {
  href: string;
  titelDe: string;
  titelEn: string;
  textDe: string;
  textEn: string;
};

export type LandingProps = {
  eyebrowDe: string;
  eyebrowEn: string;
  h1De: React.ReactNode;
  h1En: React.ReactNode;
  leadDe: string;
  leadEn: string;
  heroImage: string;
  heroAlt: string;
  factsDe: string[];
  factsEn: string[];
  features: LandingFeature[];
  bullets?: LandingBullet[];
  bulletsHeadingDe?: string;
  bulletsHeadingEn?: string;
  faqs: LandingFaq[];
  related: LandingRelated[];
  ctaKicker?: { de: string; en: string };
};

export default function LandingTemplate(props: LandingProps) {
  return (
    <>
      <section className="relative h-[85svh] min-h-[560px] w-full overflow-hidden bg-[#0a1522]">
        <Parallax
          src={props.heroImage}
          alt={props.heroAlt}
          className="absolute inset-0 h-full w-full"
          strength={90}
          priority
          overlay="linear-gradient(180deg, rgba(10,21,34,0.5) 0%, rgba(10,21,34,0.8) 100%)"
        />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 text-white md:px-10 md:pb-24">
          <Reveal>
            <div className="eyebrow text-white/70">
              <T de={props.eyebrowDe} en={props.eyebrowEn} />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display mt-6 max-w-5xl text-[36px] leading-[1.0] tracking-tight sm:text-[52px] md:text-[76px] lg:text-[96px]">
              <T de={props.h1De} en={props.h1En} />
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              <T de={props.leadDe} en={props.leadEn} />
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-12 border-t border-[color:var(--color-line)] pt-12 md:grid-cols-[1fr_1.4fr] md:gap-20 md:pt-16">
            <Reveal>
              <div className="eyebrow text-[color:var(--color-nav-2)]">
                <T de="Fakten auf einen Blick" en="Facts at a glance" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="grid gap-5">
                {props.factsDe.map((fact, i) => (
                  <li
                    key={fact}
                    className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-[color:var(--color-line)] pb-5 text-[color:var(--color-ink)] md:text-lg"
                  >
                    <span className="mono text-xs text-[color:var(--color-muted)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <T de={fact} en={props.factsEn[i] ?? fact} />
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative bg-[#0a1522] text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2 className="font-display max-w-3xl text-4xl leading-[1.05] tracking-tight md:text-6xl">
              <T
                de="Was uns die Industrie seit Jahrzehnten abnimmt."
                en="What the industry has relied on us for decades."
              />
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-14">
            {props.features.map((f, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <article className="border-l-2 border-[color:var(--color-nav-4)] pl-8 md:pl-10">
                  <div className="eyebrow text-white/50">
                    <T de={f.eyebrowDe} en={f.eyebrowEn} />
                  </div>
                  <h3 className="font-display mt-4 text-2xl leading-tight tracking-tight text-white md:text-3xl">
                    <T de={f.titelDe} en={f.titelEn} />
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
                    <T de={f.textDe} en={f.textEn} />
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {props.bullets && props.bullets.length > 0 && (
        <section className="relative bg-white">
          <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
            {props.bulletsHeadingDe && (
              <Reveal>
                <h2 className="font-display max-w-3xl text-4xl leading-[1.05] tracking-tight text-[color:var(--color-ink)] md:text-5xl">
                  <T
                    de={props.bulletsHeadingDe}
                    en={props.bulletsHeadingEn ?? props.bulletsHeadingDe}
                  />
                </h2>
              </Reveal>
            )}
            <ul className="mt-12 grid gap-2 md:grid-cols-2 md:gap-y-3">
              {props.bullets.map((b, i) => (
                <li
                  key={b.de}
                  className="flex items-baseline gap-4 border-b border-[color:var(--color-line)] py-4 text-[color:var(--color-ink)]"
                >
                  <span className="mono text-xs text-[color:var(--color-muted)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <T de={b.de} en={b.en} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="relative bg-white">
        <div className="mx-auto max-w-[1000px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <div className="eyebrow text-[color:var(--color-nav-2)]">
              <T de="Häufige Fragen" en="Frequently asked" />
            </div>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight text-[color:var(--color-ink)] md:text-6xl">
              <T de="Antworten aus dem Werk." en="Answers from the workshop." />
            </h2>
          </Reveal>
          <div className="mt-14 space-y-10 md:mt-20">
            {props.faqs.map((f, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="grid gap-4 border-t border-[color:var(--color-line)] pt-8">
                  <h3 className="font-display text-xl leading-tight tracking-tight text-[color:var(--color-ink)] md:text-2xl">
                    <T de={f.frageDe} en={f.frageEn} />
                  </h3>
                  <p className="text-[color:var(--color-ink-soft)] md:text-lg">
                    <T de={f.antwortDe} en={f.antwortEn} />
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f6f4]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow text-[color:var(--color-nav-2)]">
            <T de="Weiter im Programm" en="Further programme" />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {props.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group block border border-[color:var(--color-line)] bg-white p-8 transition-colors hover:border-[color:var(--color-ink)] md:p-10"
              >
                <div className="font-display text-2xl leading-tight tracking-tight text-[color:var(--color-ink)] md:text-3xl">
                  <T de={r.titelDe} en={r.titelEn} />
                </div>
                <p className="mt-3 text-sm text-[color:var(--color-ink-soft)] md:text-base">
                  <T de={r.textDe} en={r.textEn} />
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-nav-2)]">
                  <T de="Mehr erfahren" en="Learn more" />
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a1522] text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <Reveal>
              <h2 className="font-display max-w-2xl text-3xl leading-[1.05] tracking-tight md:text-5xl">
                <T
                  de={props.ctaKicker?.de ?? "Ein kurzer Anruf genügt."}
                  en={props.ctaKicker?.en ?? "A short call is enough."}
                />
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${SITE.telefon[0].replace(/\s/g, "")}`}
                  className="btn-primary"
                >
                  {SITE.telefon[0]} <span aria-hidden>→</span>
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="btn-ghost"
                >
                  <T de="E-Mail schreiben" en="Write email" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
