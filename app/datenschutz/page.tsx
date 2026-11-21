import T from "@/components/T";
import { SITE } from "@/lib/site";

import { SITE_URL } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der WEMA Stahl- und Maschinenbau GmbH, St. Wendel.",
  alternates: { canonical: `${SITE_URL}/datenschutz` },
  robots: { index: true, follow: false },
};

export default function Datenschutz() {
  return (
    <section>
      <div className="mx-auto max-w-[900px] px-6 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="eyebrow text-[color:var(--color-nav-2)]">
          <T de="Rechtliches" en="Legal" />
        </div>
        <h1 className="font-display mt-6 text-5xl leading-[1.05] tracking-tight text-[color:var(--color-ink)] md:text-7xl">
          <T de="Datenschutz" en="Privacy" />
        </h1>

        <div className="mt-12 grid gap-10 text-[color:var(--color-ink-soft)]">
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
              <T de="Verantwortlicher" en="Controller" />
            </div>
            <p>
              <T
                de={`${SITE.legal}, ${SITE.strasse}, ${SITE.plz} ${SITE.ort}. Vertreten durch den Geschäftsführer ${SITE.geschaeftsfuehrer}. Kontakt:`}
                en={`${SITE.legal}, ${SITE.strasse}, ${SITE.plz} ${SITE.ort}. Represented by Managing Director ${SITE.geschaeftsfuehrer}. Contact:`}
              />{" "}
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
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
              <T de="Allgemeines" en="General" />
            </div>
            <p>
              <T
                de="Wir behandeln personenbezogene Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Personenbezogene Daten werden ausschließlich dann erhoben, wenn Sie uns diese im Rahmen einer Anfrage freiwillig mitteilen."
                en="We treat personal data confidentially and in accordance with statutory data protection regulations and this privacy policy. Personal data is only collected if you provide it to us voluntarily as part of an enquiry."
              />
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
              <T de="Serverdaten" en="Server data" />
            </div>
            <p>
              <T
                de="Aus technischen Gründen werden beim Aufruf unserer Webseite Daten wie Zeitpunkt, aufgerufene Seite und der verwendete Browser vom Server automatisch erfasst. Eine Zusammenführung mit anderen Datenquellen findet nicht statt."
                en="For technical reasons, when our website is accessed, data such as the time, the page called and the browser used are automatically recorded by the server. This data is not combined with other data sources."
              />
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
              <T de="Kontaktaufnahme" en="Contacting us" />
            </div>
            <p>
              <T
                de="Wenn Sie uns per Formular, E-Mail oder Telefon kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter."
                en="If you contact us by form, email or phone, your details will be stored by us to handle your enquiry and for possible follow-up questions. We do not share this data without your consent."
              />
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2 text-[color:var(--color-nav-2)]">
              <T de="Ihre Rechte" en="Your rights" />
            </div>
            <p>
              <T
                de="Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung, Sperrung oder Löschung. Wenden Sie sich hierzu formlos an die im Impressum genannte Adresse."
                en="At any time you have the right to free information about your stored personal data as well as the right to correction, restriction or deletion. For this, please contact the address listed in the imprint."
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
