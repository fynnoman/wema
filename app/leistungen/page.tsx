import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import ScrollWord from "@/components/ScrollWord";
import CountUp from "@/components/CountUp";
import T from "@/components/T";
import ProduktKarte from "@/components/ProduktKarte";
import JsonLd from "@/components/JsonLd";
import { PRODUKTE } from "@/lib/site";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Was wir bieten · Beton-Recyclinganlagen, Mischer und Mischanlagen",
  description:
    "Fünf Bereiche für die Beton produzierende Industrie: Beton-Recyclinganlagen, Tellerzwangsmischer und weitere Betonmischer, Beschickungsaufzüge, komplette Mischanlagen und Hydrozyklon-Technik. Planung, Fertigung und Montage aus einer Hand.",
  alternates: { canonical: `${SITE_URL}/leistungen` },
  openGraph: {
    title: "Was wir bieten · WEMA Weiskircher",
    description:
      "Beton-Recyclinganlagen, Zwangsmischer, Beschickungsaufzüge, Mischanlagen, Hydrozyklon-Technik.",
    url: `${SITE_URL}/leistungen`,
  },
};

export default function Leistungen() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", url: "/" },
          { name: "Was wir bieten", url: "/leistungen" },
        ])}
      />
      <section className="relative h-[75svh] min-h-[500px] w-full overflow-hidden bg-[#0a1522]">
        <Parallax
          src="/images/photos/mischanlage-01.jpg"
          alt="Große Mischanlage in einem Betonwerk"
          className="absolute inset-0 h-full w-full"
          strength={80}
          priority
          overlay="linear-gradient(180deg, rgba(10,21,34,0.5) 0%, rgba(10,21,34,0.75) 100%)"
        />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 text-white md:px-10 md:pb-24">
          <Reveal>
            <div className="eyebrow text-white/70">
              <T de="Was wir bieten" en="What we build" />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display mt-6 max-w-4xl text-[36px] leading-[1.0] tracking-tight sm:text-[52px] md:text-[80px] lg:text-[104px]">
              <T de="Unsere Lösungen," en="Our solutions," />
              <br />
              <span className="italic text-white/85">
                <T
                  de="wenn es um Beton geht."
                  en="when it comes to concrete."
                />
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              <T
                de="Fünf Bereiche für die Beton produzierende Industrie. Einzeln lieferbar, gemeinsam gedacht. Planung, Fertigung und Montage aus einer Hand."
                en="Five fields for the concrete producing industry. Available separately, designed to work together. Planning, manufacturing and assembly from one source."
              />
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
              textEn="Five fields. One standard. From one source since nineteen-fifty-three."
              intensity={0.9}
            />
            <Reveal>
              <div className="grid grid-cols-2 gap-8">
                <MetricPage
                  label={<T de="Bereiche" en="Fields" />}
                  value={<CountUp to={5} />}
                />
                <MetricPage
                  label={<T de="Recyclinganlagen" en="Recycling plants" />}
                  value={<><CountUp to={1000} />+</>}
                />
                <MetricPage
                  label={<T de="Jahre" en="Years" />}
                  value={<><CountUp to={new Date().getFullYear() - 1953} />+</>}
                />
                <MetricPage
                  label={<T de="Länder" en="Countries" />}
                  value={<CountUp to={7} />}
                />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-6">
            {PRODUKTE.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.04}>
                <ProduktKarte produkt={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MetricPage({
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
