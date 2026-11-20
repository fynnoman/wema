import T from "@/components/T";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Impressum · WEMA Stahl- und Maschinenbau GmbH",
};

export default function Impressum() {
  return (
    <section>
      <div className="mx-auto max-w-[900px] px-6 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="eyebrow text-[color:var(--color-nav-2)]">
          <T de="Rechtliches" en="Legal" />
        </div>
        <h1 className="font-display mt-6 text-5xl leading-[1.05] tracking-tight text-[color:var(--color-ink)] md:text-7xl">
          <T de="Impressum" en="Imprint" />
        </h1>

        <div className="mt-12 grid gap-10 text-[color:var(--color-ink-soft)]">
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
              <T de="Anbieter" en="Provider" />
            </div>
            <p>
              {SITE.legal}
              <br />
              {SITE.strasse}
              <br />
              {SITE.plz} {SITE.ort}
              <br />
              <T de={SITE.land} en={SITE.landEn} />
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
              <T de="Vertretungsberechtigt" en="Authorised representative" />
            </div>
            <p>
              <T de="Geschäftsführer:" en="Managing Director:" /> {SITE.geschaeftsfuehrer}
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
              <T de="Kontakt" en="Contact" />
            </div>
            <p>
              <T de="Telefon:" en="Phone:" /> {SITE.telefon.join(" · ")}
              <br />
              <T de="Telefax:" en="Fax:" /> {SITE.telefax}
              <br />
              <T de="E-Mail:" en="Email:" />{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-[color:var(--color-nav-2)] hover:underline"
              >
                {SITE.email}
              </a>
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
              <T de="Verantwortlich für den Inhalt" en="Responsible for content" />
            </div>
            <p>
              <T
                de={`${SITE.geschaeftsfuehrer}, Anschrift wie oben.`}
                en={`${SITE.geschaeftsfuehrer}, address as above.`}
              />
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
              <T de="Haftung für Inhalte" en="Liability for content" />
            </div>
            <p>
              <T
                de="Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich."
                en="The content of these pages was created with the greatest care. However, we cannot guarantee the accuracy, completeness and timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with general law."
              />
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
              <T de="Haftung für Links" en="Liability for links" />
            </div>
            <p>
              <T
                de="Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich."
                en="Our website contains links to external third-party websites whose content we have no control over. The respective provider or operator of the pages is always responsible for the content of linked pages."
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
