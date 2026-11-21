import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LandingTemplate from "@/components/LandingTemplate";
import { SITE_URL, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const URL = `${SITE_URL}/restbeton-und-spuelwasser-recycling`;

const FAQ = [
  {
    frageDe: "Was versteht man unter Restbeton-Recycling?",
    frageEn: "What does residual concrete recycling mean?",
    antwortDe:
      "Restbeton-Recycling bezeichnet das Trennen und Wiederverwerten von nicht verbautem Beton aus Fahrmischern, Pumpenresten und Rücklaufchargen. In einer WEMA-Recyclinganlage werden Zuschläge, Zementschlamm und Wasser voneinander separiert und zurück in die Produktion geführt.",
    antwortEn:
      "Residual concrete recycling is the separation and reuse of unused concrete from truck mixers, pump residues and returned batches. In a WEMA recycling plant, aggregates, cement slurry and water are separated from each other and fed back into production.",
  },
  {
    frageDe: "Wie funktioniert die Spülwasseraufbereitung?",
    frageEn: "How does the wash water treatment work?",
    antwortDe:
      "Das Spülwasser aus der Reinigung von Fahrmischern und Pumpen wird im Absetzbecken oder über einen Hydrozyklon geklärt. Grobe Zuschläge werden ausgetragen, das geklärte Wasser steht als Prozesswasser für die nächste Charge oder zum Reinigen zur Verfügung.",
    antwortEn:
      "Wash water from truck mixer and pump cleaning is clarified in the settling basin or via a hydrocyclone. Coarse aggregates are discharged, the clarified water becomes available as process water for the next batch or for cleaning.",
  },
  {
    frageDe: "Welche Vorteile bringt der Kreislauf im Werk?",
    frageEn: "What benefits does the loop deliver on site?",
    antwortDe:
      "Restbeton verlässt das Werk nicht mehr als Abfall. Das reduziert Entsorgungskosten und Transporte. Die wiedergewonnenen Zuschläge und das aufbereitete Prozesswasser senken Material- und Frischwasserverbrauch, die Umweltbilanz des Werks verbessert sich messbar.",
    antwortEn:
      "Residual concrete no longer leaves the plant as waste. That cuts disposal costs and transport. Recovered aggregates and treated process water lower material and fresh-water use, measurably improving the plant's environmental balance.",
  },
  {
    frageDe: "Lässt sich eine Recyclinganlage nachträglich einbauen?",
    frageEn: "Can a recycling plant be retrofitted?",
    antwortDe:
      "Ja. WEMA passt die Ausführung an das bestehende Werk an. Über Flur, Unter Flur, Transportabel oder mit Kippkübel lässt sich für fast jede Gegebenheit eine Lösung projektieren, ohne die Produktion dauerhaft zu stören.",
    antwortEn:
      "Yes. WEMA adapts the design to the existing plant. Above-ground, below-ground, mobile or with a tipping skip, a solution can be engineered for almost every situation without permanently disrupting production.",
  },
  {
    frageDe: "Wie viele Werke nutzen das WEMA-System bereits?",
    frageEn: "How many plants already use the WEMA system?",
    antwortDe:
      "Seit Einführung sind über 1.000 Recyclinganlagen von WEMA installiert worden, in Transportbeton- und Fertigteilwerken quer durch Europa, unter anderem bei Holcim, Schwenk Beton, Godel Beton, Heidelberger Zement und Dyckerhoff.",
    antwortEn:
      "Since its introduction, more than 1,000 WEMA recycling plants have been installed in ready-mix and precast concrete works across Europe, including Holcim, Schwenk Beton, Godel Beton, Heidelberger Zement and Dyckerhoff.",
  },
];

export const metadata: Metadata = {
  title: "Restbeton- und Spülwasser-Recycling · Kreislauf im Betonwerk · WEMA",
  description:
    "Restbeton- und Spülwasser-Recycling für Transportbeton- und Fertigteilwerke. Trennung von Zuschlägen, Zementschlamm und Prozesswasser im geschlossenen Kreislauf. Über 1.000 Anlagen im Einsatz. WEMA Weiskircher aus St. Wendel.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Restbeton- und Spülwasser-Recycling · WEMA Weiskircher",
    description:
      "Kreislauf im Werk: Zuschläge zurück, Spülwasser zurück, Entsorgung spürbar runter.",
    url: URL,
    images: [{ url: "/images/photos/rc-ueber-flur-02.jpg" }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Start", url: "/" },
            { name: "Restbeton- und Spülwasser-Recycling", url: "/restbeton-und-spuelwasser-recycling" },
          ]),
          faqJsonLd(FAQ.map((f) => ({ question: f.frageDe, answer: f.antwortDe }))),
        ]}
      />
      <LandingTemplate
        eyebrowDe="Restbeton · Spülwasser · Kreislauf"
        eyebrowEn="Residual concrete · Wash water · Loop"
        h1De={
          <>
            Kein Restbeton
            <br />
            <span className="italic text-white/85">verlässt das Werk.</span>
          </>
        }
        h1En={
          <>
            No residual concrete
            <br />
            <span className="italic text-white/85">leaves the plant.</span>
          </>
        }
        leadDe="WEMA Weiskircher baut den geschlossenen Kreislauf im Betonwerk: Restbeton aus Fahrmischern und Pumpen wird in seine Bestandteile getrennt, Spülwasser wird aufbereitet und zurückgeführt. Weniger Abfall, weniger Transport, geringere Entsorgungs- und Wasserkosten."
        leadEn="WEMA Weiskircher closes the loop in the concrete plant: residual concrete from truck mixers and pumps is separated into its parts, wash water is treated and returned. Less waste, less transport, lower disposal and water costs."
        heroImage="/images/photos/rc-ueber-flur-02.jpg"
        heroAlt="Restbeton- und Spülwasserrecycling am Betonwerk mit WEMA-Anlage"
        factsDe={[
          "Trennung von Zuschlägen, Zementschlamm und Wasser.",
          "Rückführung von Zuschlägen in die Betonproduktion.",
          "Aufbereitetes Prozesswasser für Reinigung und Zugabewasser.",
          "Optionaler Hydrozyklon für zusätzliche Feinstoffabscheidung.",
          "Lösung auch für bestehende Werke, ohne Komplettumbau.",
        ]}
        factsEn={[
          "Separation of aggregates, cement slurry and water.",
          "Return of aggregates into concrete production.",
          "Treated process water for cleaning and as batch water.",
          "Optional hydrocyclone for additional fines separation.",
          "Solution for existing plants too, without a full rebuild.",
        ]}
        features={[
          {
            eyebrowDe: "Kreislauf",
            eyebrowEn: "Loop",
            titelDe: "Material bleibt im Werk, nicht auf der Deponie.",
            titelEn: "Material stays at the plant, not in landfill.",
            textDe:
              "Die Trennung im Recyclingsystem liefert saubere Zuschläge und geklärtes Wasser zurück in die Produktion. Rückläufer werden zur Ressource, nicht mehr zur Last.",
            textEn:
              "Separation in the recycling system returns clean aggregates and clarified water into production. Returns become a resource instead of a burden.",
          },
          {
            eyebrowDe: "Wasser",
            eyebrowEn: "Water",
            titelDe: "Spülwasser als Prozesswasser, nicht als Abwasser.",
            titelEn: "Wash water as process water, not as waste water.",
            textDe:
              "Das Spülwasser aus der Reinigung von Fahrmischern und Pumpen wird geklärt und steht als Zugabe- oder Reinigungswasser wieder zur Verfügung. Frischwasserverbrauch und Abwassergebühren sinken.",
            textEn:
              "Wash water from truck mixer and pump cleaning is clarified and returned as batch or cleaning water. Fresh-water use and sewage fees go down.",
          },
          {
            eyebrowDe: "Umwelt",
            eyebrowEn: "Environment",
            titelDe: "Weniger Entsorgung, weniger Transport, bessere Bilanz.",
            titelEn: "Less disposal, less transport, a better balance sheet.",
            textDe:
              "Da Restbeton das Werk nicht mehr als Abfall verlässt, fallen Entsorgungstransporte weg und die CO2- und Umweltbilanz des Werks verbessert sich spürbar.",
            textEn:
              "Because residual concrete no longer leaves the plant as waste, disposal transport is avoided and the plant's CO2 and environmental balance improves noticeably.",
          },
          {
            eyebrowDe: "Technik",
            eyebrowEn: "Technology",
            titelDe: "Auf Dauerbetrieb ausgelegt, wartungsarm, erweiterbar.",
            titelEn: "Designed for continuous operation, low-maintenance, extendable.",
            textDe:
              "Die mechanischen Komponenten sind für den rauen Werksalltag dimensioniert. Zusätzlich lässt sich eine Hydrozyklon-Stufe zur feineren Trennung integrieren, wenn es die Rezepturen verlangen.",
            textEn:
              "Mechanical components are dimensioned for tough daily operation. A hydrocyclone stage for finer separation can be added when the recipes require it.",
          },
        ]}
        bullets={[
          { de: "Aufbereitung von Restbeton aus Fahrmischern.", en: "Processing of residual concrete from truck mixers." },
          { de: "Verwertung von Pumpenresten und Rückläufern.", en: "Recovery of pump residues and returns." },
          { de: "Klärung des Spülwassers im Absetzbecken.", en: "Clarification of wash water in the settling basin." },
          { de: "Integration eines Hydrozyklons für Feinststoffe.", en: "Integration of a hydrocyclone for ultra-fines." },
          { de: "Rücknahme aufbereiteten Materials in die Chargenproduktion.", en: "Return of treated material into batch production." },
          { de: "Dokumentation für Nachweise gegenüber Behörden und Auditoren.", en: "Documentation for evidence towards authorities and auditors." },
        ]}
        bulletsHeadingDe="Was im Werk konkret passiert."
        bulletsHeadingEn="What actually happens at the plant."
        faqs={FAQ}
        related={[
          {
            href: "/beton-recyclinganlage-hersteller",
            titelDe: "Beton-Recyclinganlage Hersteller",
            titelEn: "Concrete recycling plant manufacturer",
            textDe: "Die passende Anlage für Ihr Werk.",
            textEn: "The right plant for your site.",
          },
          {
            href: "/leistungen/zyklon",
            titelDe: "Hydrozyklon-Technik",
            titelEn: "Hydrocyclone technology",
            textDe: "Feinststoffabscheidung im Prozesswasser.",
            textEn: "Ultra-fines separation in process water.",
          },
        ]}
        ctaKicker={{
          de: "Welche Kreislauflösung passt in Ihr Werk? Wir melden uns zurück.",
          en: "Which loop solution fits your plant? We get back to you.",
        }}
      />
    </>
  );
}
