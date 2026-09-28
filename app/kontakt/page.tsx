import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
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
          src="/images/beton-recycling-2.jpg"
          alt="Beton läuft aus der Anlage"
          className="absolute inset-0 h-full w-full"
          strength={80}
          priority
          overlay="linear-gradient(180deg, rgba(10,21,34,0.55) 0%, rgba(10,21,34,0.8) 100%)"
        />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 text-white md:px-10 md:pb-24">
          <Reveal>
            <div className="eyebrow text-white/70">Kontakt</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display mt-6 max-w-4xl text-[36px] leading-[1.0] tracking-tight sm:text-[52px] md:text-[76px] lg:text-[100px]">
              Sprechen wir
              <br />
              <span className="italic text-white/85">über Ihr Werk.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Ob Anfrage, Ersatzteil oder komplette Neuplanung. Ein Anruf
              genügt. Wir hören zu und melden uns zurück.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-20 md:grid-cols-[1fr_1fr] md:px-10 md:py-28">
          <Reveal>
            <div className="border border-[color:var(--color-line)] bg-white p-10 md:p-12">
              <div className="eyebrow text-[color:var(--color-nav-2)]">Werk St. Wendel</div>
              <h2 className="font-display mt-6 text-3xl leading-tight text-[color:var(--color-ink)] md:text-4xl">
                {SITE.legal}
              </h2>
              <div className="mt-8 space-y-6 text-[color:var(--color-ink-soft)]">
                <div>
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Geschäftsführer</div>
                  <div>{SITE.geschaeftsfuehrer}</div>
                </div>
                <div>
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Anschrift</div>
                  <div>
                    {SITE.strasse}
                    <br />
                    {SITE.plz} {SITE.ort}
                    <br />
                    {SITE.land}
                  </div>
                </div>
                <div>
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Telefon</div>
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
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Telefax</div>
                  <div>{SITE.telefax}</div>
                </div>
                <div>
                  <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">E-Mail</div>
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
                <span>Standort · St. Wendel</span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${query}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--color-nav-2)]"
                >
                  Route planen →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#0a1522] text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <div className="eyebrow text-white/60">Anfrage</div>
            <h2 className="font-display mt-6 max-w-3xl text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Schreiben Sie uns
              <span className="italic text-white/80"> kurz, worum es geht.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <form
              action={`mailto:${SITE.email}`}
              method="post"
              encType="text/plain"
              className="mt-14 grid gap-8 md:grid-cols-2"
            >
              <Field label="Name" name="name" required />
              <Field label="Unternehmen" name="unternehmen" />
              <Field label="E-Mail" name="email" type="email" required />
              <Field label="Telefon" name="telefon" type="tel" />
              <label className="flex flex-col gap-3 text-sm md:col-span-2">
                <span className="eyebrow text-white/60">Nachricht</span>
                <textarea
                  name="nachricht"
                  rows={6}
                  required
                  className="border-b border-white/30 bg-transparent py-3 text-lg text-white placeholder:text-white/40 outline-none focus:border-white"
                />
              </label>
              <div className="md:col-span-2">
                <button type="submit" className="btn-primary">
                  Anfrage senden <span aria-hidden>→</span>
                </button>
                <p className="mt-6 text-xs text-white/50">
                  Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer
                  Anfrage verwendet. Weitere Hinweise in unserer{" "}
                  <a href="/datenschutz" className="underline hover:text-white">
                    Datenschutzerklärung
                  </a>
                  .
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-3 text-sm">
      <span className="eyebrow text-white/60">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="border-b border-white/30 bg-transparent py-3 text-lg text-white placeholder:text-white/40 outline-none focus:border-white"
      />
    </label>
  );
}
