import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import ScrollWord from "@/components/ScrollWord";
import CountUp from "@/components/CountUp";
import { PRODUKTE } from "@/lib/site";

export const metadata = {
  title: "Was wir bieten · WEMA Stahl- und Maschinenbau GmbH",
  description:
    "Beton-Recyclinganlagen, Betonmischer, Beschickungsaufzüge, Mischanlagen und Zyklontechnik. Aus einer Hand, seit 1953.",
};

export default function Leistungen() {
  return (
    <>
      <section className="relative h-[75svh] min-h-[500px] w-full overflow-hidden bg-[#0a1522]">
        <Parallax
          src="/images/mischanlagen-2.jpg"
          alt="Große Mischanlage in einem Betonwerk"
          className="absolute inset-0 h-full w-full"
          strength={80}
          priority
          overlay="linear-gradient(180deg, rgba(10,21,34,0.5) 0%, rgba(10,21,34,0.75) 100%)"
        />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 text-white md:px-10 md:pb-24">
          <Reveal>
            <div className="eyebrow text-white/70">Was wir bieten</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display mt-6 max-w-4xl text-[36px] leading-[1.0] tracking-tight sm:text-[52px] md:text-[80px] lg:text-[104px]">
              Unsere Lösungen,
              <br />
              <span className="italic text-white/85">wenn es um Beton geht.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Fünf Bereiche für die Beton produzierende Industrie. Einzeln
              lieferbar, gemeinsam gedacht. Planung, Fertigung und Montage
              aus einer Hand.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 pt-24 md:px-10 md:pt-32">
          <div className="grid gap-14 md:grid-cols-[1fr_1fr]">
            <ScrollWord
              as="h2"
              className="font-display text-4xl leading-[1.02] tracking-tight text-[color:var(--color-ink)] md:text-6xl"
              text="Fünf Bereiche. Ein Anspruch. Aus einer Hand seit neunzehnhundertdreiundfünfzig."
              intensity={0.9}
            />
            <Reveal>
              <div className="grid grid-cols-2 gap-8">
                <MetricPage label="Bereiche" value={<CountUp to={5} />} />
                <MetricPage label="Recyclinganlagen" value={<><CountUp to={1000} />+</>} />
                <MetricPage label="Jahre" value={<><CountUp to={new Date().getFullYear() - 1953} />+</>} />
                <MetricPage label="Länder" value={<CountUp to={7} />} />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-6">
            {PRODUKTE.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.04}>
                <Link
                  href={`/leistungen/${p.slug}`}
                  className="group relative grid overflow-hidden bg-[#0a1522] md:grid-cols-[1.2fr_1fr]"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-auto md:min-h-[420px]">
                    <Image
                      src={p.bild}
                      alt={p.bildAlt}
                      fill
                      sizes="(min-width: 768px) 60vw, 100vw"
                      className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(10,21,34,0.1) 0%, rgba(10,21,34,0.5) 100%)",
                      }}
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-6 p-6 text-white md:gap-8 md:p-14">
                    <div className="flex items-baseline gap-4 md:gap-6">
                      <span className="mono text-[10px] uppercase tracking-[0.28em] text-white/60 md:text-xs">
                        {String(i + 1).padStart(2, "0")} / 05
                      </span>
                      <span className="eyebrow text-white/60">Programm</span>
                    </div>
                    <div>
                      <h2 className="font-display text-[28px] leading-[1.0] tracking-tight sm:text-4xl md:text-5xl">
                        {p.titel}
                      </h2>
                      <p className="mt-4 max-w-md text-white/80 md:text-lg">
                        {p.kurz}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {p.varianten.map((v) => (
                          <li
                            key={v}
                            className="border border-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/80"
                          >
                            {v}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="link-arrow text-white">
                      Zum Bereich <span className="arrow">→</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MetricPage({ label, value }: { label: string; value: React.ReactNode }) {
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
