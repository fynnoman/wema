import { SITE } from "@/lib/site";

export const metadata = {
  title: "Impressum · WEMA Stahl- und Maschinenbau GmbH",
};

export default function Impressum() {
  return (
    <section>
      <div className="mx-auto max-w-[900px] px-6 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="eyebrow text-[color:var(--color-nav-2)]">Rechtliches</div>
        <h1 className="font-display mt-6 text-5xl leading-[1.05] tracking-tight text-[color:var(--color-ink)] md:text-7xl">
          Impressum
        </h1>

        <div className="mt-12 grid gap-10 text-[color:var(--color-ink-soft)]">
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Anbieter</div>
            <p>
              {SITE.legal}
              <br />
              {SITE.strasse}
              <br />
              {SITE.plz} {SITE.ort}
              <br />
              {SITE.land}
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Vertretungsberechtigt</div>
            <p>Geschäftsführer: {SITE.geschaeftsfuehrer}</p>
          </div>
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Kontakt</div>
            <p>
              Telefon: {SITE.telefon.join(" · ")}
              <br />
              Telefax: {SITE.telefax}
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-[color:var(--color-nav-2)] hover:underline"
              >
                {SITE.email}
              </a>
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Verantwortlich für den Inhalt</div>
            <p>
              {SITE.geschaeftsfuehrer}, Anschrift wie oben.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Haftung für Inhalte</div>
            <p>
              Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß den allgemeinen Gesetzen für eigene Inhalte auf
              diesen Seiten verantwortlich.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Haftung für Links</div>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber verantwortlich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
