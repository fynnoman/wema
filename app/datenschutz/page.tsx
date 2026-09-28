import { SITE } from "@/lib/site";

export const metadata = {
  title: "Datenschutz · WEMA Stahl- und Maschinenbau GmbH",
};

export default function Datenschutz() {
  return (
    <section>
      <div className="mx-auto max-w-[900px] px-6 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="eyebrow text-[color:var(--color-nav-2)]">Rechtliches</div>
        <h1 className="font-display mt-6 text-5xl leading-[1.05] tracking-tight text-[color:var(--color-ink)] md:text-7xl">
          Datenschutz
        </h1>

        <div className="mt-12 grid gap-10 text-[color:var(--color-ink-soft)]">
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Verantwortlicher</div>
            <p>
              {SITE.legal}, {SITE.strasse}, {SITE.plz} {SITE.ort}. Vertreten
              durch den Geschäftsführer {SITE.geschaeftsfuehrer}. Kontakt:{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-[color:var(--color-nav-2)] hover:underline"
              >
                {SITE.email}
              </a>
              .
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Allgemeines</div>
            <p>
              Wir behandeln personenbezogene Daten vertraulich und
              entsprechend der gesetzlichen Datenschutzvorschriften sowie
              dieser Datenschutzerklärung. Personenbezogene Daten werden
              ausschließlich dann erhoben, wenn Sie uns diese im Rahmen einer
              Anfrage freiwillig mitteilen.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Serverdaten</div>
            <p>
              Aus technischen Gründen werden beim Aufruf unserer Webseite
              Daten wie Zeitpunkt, aufgerufene Seite und der verwendete
              Browser vom Server automatisch erfasst. Eine Zusammenführung
              mit anderen Datenquellen findet nicht statt.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Kontaktaufnahme</div>
            <p>
              Wenn Sie uns per Formular, E-Mail oder Telefon kontaktieren,
              werden Ihre Angaben zur Bearbeitung der Anfrage und für den
              Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
              wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">Ihre Rechte</div>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
              Ihre gespeicherten personenbezogenen Daten sowie ein Recht auf
              Berichtigung, Sperrung oder Löschung. Wenden Sie sich hierzu
              formlos an die im Impressum genannte Adresse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
