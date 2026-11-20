import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import T from "@/components/T";
import KontaktFormular from "@/components/KontaktFormular";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Kontakt · WEMA Stahl- und Maschinenbau GmbH",
  description:
    "Kontakt zu WEMA in St. Wendel. Telefon, E-Mail, Anschrift und Anfahrt.",
};

export default function Kontakt() {
  const query = encodeURIComponent(
    `${SITE.strasse}, ${SITE.plz} ${SITE.ort}, ${SITE.land}`,
  );

  return (
    <>
      <section className="relative h-[75svh] min-h-[500px] w-full overflow-hidden bg-[#0a1522]">
        <Parallax
          src="/images/photos/rc-ueber-flur-03.jpg"
          alt="Beton-Recyclinganlage im Betrieb"
          className="absolute inset-0 h-full w-full"
          strength={80}
          priority
          overlay="linear-gradient(180deg, rgba(10,21,34,0.55) 0%, rgba(10,21,34,0.8) 100%)"
        />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 text-white md:px-10 md:pb-24">
          <Reveal>
            <div className="eyebrow text-white/70">
              <T de="Kontakt" en="Contact" />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display mt-6 max-w-4xl text-[36px] leading-[1.0] tracking-tight sm:text-[52px] md:text-[76px] lg:text-[100px]">
              <T de="Sprechen wir" en="Let's talk" />
              <br />
              <span className="italic text-white/85">
                <T de="über Ihr Werk." en="about your plant." />
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              <T
                de="Ob Anfrage, Ersatzteil oder komplette Neuplanung. Ein Anruf genügt. Wir hören zu und melden uns zurück."
                en="Whether an enquiry, a spare part or a complete new plant: one call is enough. We listen and get back to you."
              />
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-20 md:grid-cols-[1fr_1fr] md:px-10 md:py-28">
          <Reveal>
            <div className="border border-[color:var(--color-line)] bg-white p-10 md:p-12">
              <div className="eyebrow text-[color:var(--color-nav-2)]">
                <T de="Werk St. Wendel" en="Plant St. Wendel" />
              </div>
              <h2 className="font-display mt-6 text-3xl leading-tight text-[color:var(--color-ink)] md:text-4xl">
                {SITE.legal}
              </h2>
              <div className="mt-8 space-y-6 text-[color:var(--color-ink-soft)]">
                <div>
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
                    <T de="Geschäftsführer" en="Managing Director" />
                  </div>
                  <div>{SITE.geschaeftsfuehrer}</div>
                </div>
                <div>
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
                    <T de="Anschrift" en="Address" />
                  </div>
                  <div>
                    {SITE.strasse}
                    <br />
                    {SITE.plz} {SITE.ort}
                    <br />
                    <T de={SITE.land} en={SITE.landEn} />
                  </div>
                </div>
                <div>
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
                    <T de="Telefon" en="Phone" />
                  </div>
                  {SITE.telefon.map((t) => (
                    <div key={t}>
                      <a
                        href={`tel:${t.replace(/\s/g, "")}`}
                        className="hover:text-[color:var(--color-nav-2)]"
                      >
                        {t}
                      </a>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
                    <T de="Telefax" en="Fax" />
                  </div>
                  <div>{SITE.telefax}</div>
                </div>
                <div>
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
                    <T de="E-Mail" en="Email" />
                  </div>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-[color:var(--color-nav-2)] hover:underline"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full border border-[color:var(--color-line)] bg-white">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <iframe
                  title="Anfahrt WEMA"
                  className="h-full w-full grayscale"
                  loading="lazy"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=7.15,49.46,7.19,49.48&layer=mapnik&marker=49.4682,7.1668`}
                />
              </div>
              <div className="flex items-center justify-between p-6 text-xs uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
                <span>
                  <T de="Standort · St. Wendel" en="Location · St. Wendel" />
                </span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${query}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--color-nav-2)]"
                >
                  <T de="Route planen →" en="Plan route →" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#0a1522] text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <div className="eyebrow text-white/60">
              <T de="Anfrage" en="Enquiry" />
            </div>
            <h2 className="font-display mt-6 max-w-3xl text-4xl leading-[1.05] tracking-tight md:text-6xl">
              <T de="Schreiben Sie uns" en="Write to us" />
              <span className="italic text-white/80">
                <T de=" kurz, worum es geht." en=" and tell us what it's about." />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <KontaktFormular />
          </Reveal>
        </div>
      </section>
    </>
  );
}
