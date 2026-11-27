import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LandingTemplate from "@/components/LandingTemplate";
import { SITE_URL, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const URL = `${SITE_URL}/beton-recyclinganlage-hersteller`;

const FAQ = [
  {
    frageDe: "Was macht eine Beton-Recyclinganlage im Betonwerk?",
    frageEn: "What does a concrete recycling plant do at a concrete plant?",
    antwortDe:
      "Sie trennt Restbeton aus Fahrmischern, Pumpenresten und Reinigungswasser in seine Bestandteile. Die Zuschläge Sand und Kies werden sauber ausgetragen und können neu verarbeitet werden, der Zementschlamm und das Spülwasser werden abgeschieden und in den Produktionskreislauf zurückgeführt.",
    antwortEn:
      "It separates residual concrete from truck mixers, pump residues and cleaning water into its parts. Aggregates like sand and gravel are cleanly discharged and can be reused, while the cement slurry and wash water are separated and fed back into the production loop.",
  },
  {
    frageDe: "Welche Bauformen sind lieferbar?",
    frageEn: "Which designs are available?",
    antwortDe:
      "WEMA Weiskircher baut vier bewährte Ausführungen: Überflur und Unterflur für stationäre Werke, eine Variante mit Aufgabetisch für die direkte Entleerung aus dem Fahrmischer und eine Ausführung mit Kippkübel für Werke ohne direkte Zufahrt. Jede Ausführung wird auf das bestehende Werk und den gewünschten Durchsatz angepasst.",
    antwortEn:
      "WEMA Weiskircher builds four proven designs: above-ground and below-ground for stationary plants, a variant with feed table for direct discharge from the truck mixer and a design with tipping skip for plants without direct access. Each design is adapted to the existing plant and the required throughput.",
  },
  {
    frageDe: "Wie viele WEMA-Recyclinganlagen sind im Einsatz?",
    frageEn: "How many WEMA recycling plants are in use?",
    antwortDe:
      "Seit der Entwicklung sind über 1.000 Recyclinganlagen von WEMA in Transportbeton- und Fertigteilwerken im Einsatz. Referenzen bestehen unter anderem bei Holcim, Schwenk Beton, Godel Beton, Heidelberger Zement und Dyckerhoff.",
    antwortEn:
      "Since the development, more than 1,000 WEMA recycling plants have been installed in ready-mix and precast concrete plants. References include Holcim, Schwenk Beton, Godel Beton, Heidelberger Zement and Dyckerhoff.",
  },
  {
    frageDe: "Wird die Anlage auch montiert?",
    frageEn: "Is the plant also installed on site?",
    antwortDe:
      "Ja. Konstruktion, Fertigung, Lackierung und Montage erfolgen bei WEMA aus einer Hand. Das Team stellt die Anlage im Werk des Betreibers auf und begleitet die Inbetriebnahme.",
    antwortEn:
      "Yes. At WEMA, engineering, manufacturing, painting and installation all come from one source. The team sets up the plant at the operator's site and supports commissioning.",
  },
  {
    frageDe: "In welchen Ländern ist WEMA aktiv?",
    frageEn: "Which countries does WEMA serve?",
    antwortDe:
      "WEMA Weiskircher liefert aus St. Wendel im Saarland nach Deutschland, Frankreich, Belgien, in die Niederlande, nach Tschechien, in die Slowakei und nach Russland.",
    antwortEn:
      "From St. Wendel in the Saarland, WEMA Weiskircher supplies Germany, France, Belgium, the Netherlands, the Czech Republic, Slovakia and Russia.",
  },
];

export const metadata: Metadata = {
  title: "Beton-Recyclinganlage: Hersteller aus dem Saarland · über 1.000 Anlagen im Einsatz",
  description:
    "Beton-Recyclinganlagen vom Hersteller WEMA Weiskircher. Trennt Restbeton und Spülwasser in Sekunden. Über 1.000 Anlagen im Einsatz in Transportbeton- und Fertigteilwerken. Planung, Fertigung und Montage aus St. Wendel.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Beton-Recyclinganlage Hersteller · WEMA Weiskircher",
    description:
      "Über 1.000 Recyclinganlagen im Einsatz. Überflur, Unterflur, mit Aufgabetisch, mit Kippkübel. Aus St. Wendel, europaweit geliefert.",
    url: URL,
    images: [{ url: "/images/photos/ueberflur-01.jpg" }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Start", url: "/" },
            { name: "Beton-Recyclinganlage Hersteller", url: "/beton-recyclinganlage-hersteller" },
          ]),
          faqJsonLd(
            FAQ.map((f) => ({ question: f.frageDe, answer: f.antwortDe })),
          ),
        ]}
      />
      <LandingTemplate
        eyebrowDe="Beton-Recyclinganlage · Hersteller"
        eyebrowEn="Concrete recycling plant · Manufacturer"
        h1De={
          <>
            Beton-Recyclinganlagen
            <br />
            <span className="italic text-white/85">vom Hersteller.</span>
          </>
        }
        h1En={
          <>
            Concrete recycling plants
            <br />
            <span className="italic text-white/85">straight from the maker.</span>
          </>
        }
        leadDe="WEMA Weiskircher baut seit Jahrzehnten Beton-Recyclinganlagen für Transportbeton- und Fertigteilwerke. Über tausend Anlagen trennen Zuschläge, Zementschlamm und Spülwasser zuverlässig und führen Wasser und Material in den Produktionskreislauf zurück."
        leadEn="WEMA Weiskircher has been building concrete recycling plants for ready-mix and precast concrete works for decades. More than one thousand plants reliably separate aggregates, cement slurry and wash water and feed material and water back into the production loop."
        heroImage="/images/photos/ueberflur-01.jpg"
        heroAlt="Beton-Recyclinganlage über Flur von WEMA Weiskircher"
        factsDe={[
          "Entwickelt in St. Wendel, über 1.000 Installationen in Europa.",
          "Vier Ausführungen: Überflur, Unterflur, mit Aufgabetisch, mit Kippkübel.",
          "Rückführung des Spülwassers in den Produktionskreislauf.",
          "Referenzen: Holcim, Schwenk Beton, Godel Beton, Heidelberger Zement, Dyckerhoff.",
          "Projektierung, Fertigung, Lackierung und Montage im eigenen Werk.",
        ]}
        factsEn={[
          "Developed in St. Wendel, with over 1,000 installations across Europe.",
          "Four designs: above-ground, below-ground, with feed table, with tipping skip.",
          "Wash water is returned into the production loop.",
          "References: Holcim, Schwenk Beton, Godel Beton, Heidelberger Zement, Dyckerhoff.",
          "Engineering, manufacturing, painting and installation in-house.",
        ]}
        features={[
          {
            eyebrowDe: "Prozess",
            eyebrowEn: "Process",
            titelDe: "Vollständige Trennung von Zuschlägen und Zementschlamm.",
            titelEn: "Full separation of aggregates and cement slurry.",
            textDe:
              "Der Fahrmischer entleert direkt in den Aufgabetisch. Die Anlage trennt Zuschläge von Zementschlamm und Wasser, Sand und Kies werden sauber ausgetragen und können wieder in die Betonproduktion einfließen.",
            textEn:
              "The truck mixer discharges directly onto the feed table. The plant separates aggregates from cement slurry and water; sand and gravel are cleanly discharged and can re-enter concrete production.",
          },
          {
            eyebrowDe: "Umwelt",
            eyebrowEn: "Environment",
            titelDe: "Spülwasser bleibt im Kreislauf, Restbeton verlässt das Werk nicht.",
            titelEn: "Wash water stays in the loop, residual concrete does not leave the plant.",
            textDe:
              "Das aufbereitete Wasser wird zur Trommelreinigung oder als Zugabewasser in die Betonproduktion zurückgeführt. Das reduziert Frischwasserverbrauch, Entsorgungskosten und Belastung der Umwelt.",
            textEn:
              "Treated water is returned to drum cleaning or as batch water in concrete production. That reduces fresh-water use, disposal costs and environmental impact.",
          },
          {
            eyebrowDe: "Integration",
            eyebrowEn: "Integration",
            titelDe: "Einbau in bestehende Werke, ohne Umplanung der Umgebung.",
            titelEn: "Integration into existing plants, without re-planning the surroundings.",
            textDe:
              "Jede Ausführung ist auf die räumliche Situation angepasst. Überflur oder Unterflur, mit Aufgabetisch oder Kippkübel, die Anlage passt sich dem Werk an statt umgekehrt.",
            textEn:
              "Each design is adapted to the spatial situation. Above-ground or below-ground, with feed table or tipping skip, the plant adapts to the facility rather than the other way around.",
          },
          {
            eyebrowDe: "Dauerbetrieb",
            eyebrowEn: "Continuous operation",
            titelDe: "Ausgelegt auf den harten Alltag im Betonwerk.",
            titelEn: "Built for the hard daily routine of a concrete plant.",
            textDe:
              "Robuste Stahlkonstruktion, wartungsarme Komponenten und Verschleißteile aus eigener Fertigung sorgen dafür, dass die Anlage dort läuft, wo Stillstand teuer wird.",
            textEn:
              "Robust steel construction, low-maintenance components and wear parts from our own production ensure the plant keeps running where downtime is expensive.",
          },
        ]}
        bullets={[
          { de: "Durchsatzmengen von kleinen Werken bis zu Hochleistungsanlagen.", en: "Throughput from small plants up to high-capacity operations." },
          { de: "Aufgabetisch für direkte Entleerung aus dem Fahrmischer.", en: "Feed table for direct discharge from truck mixers." },
          { de: "Sedimentation und Rückführung von Zementschlamm und Wasser.", en: "Sedimentation and recirculation of cement slurry and water." },
          { de: "Optional ergänzt durch Hydrozyklon zur Feinstoffabscheidung.", en: "Optionally complemented by a hydrocyclone for fines separation." },
          { de: "Ersatz- und Verschleißteile direkt aus St. Wendel.", en: "Spare and wear parts shipped directly from St. Wendel." },
          { de: "Dokumentation und Begleitung bei der Inbetriebnahme.", en: "Documentation and support during commissioning." },
        ]}
        bulletsHeadingDe="Was unsere Recyclinganlagen leisten."
        bulletsHeadingEn="What our recycling plants deliver."
        faqs={FAQ}
        related={[
          {
            href: "/leistungen/beton-recycling",
            titelDe: "Beton-Recycling im Programm",
            titelEn: "Concrete recycling in the programme",
            textDe: "Detailseite mit allen Varianten der Recyclinganlage.",
            textEn: "Detail page with every recycling plant variant.",
          },
          {
            href: "/restbeton-und-spuelwasser-recycling",
            titelDe: "Restbeton- und Spülwasser-Recycling",
            titelEn: "Residual concrete and wash water recycling",
            textDe: "Wie der gesamte Kreislauf im Werk funktioniert.",
            textEn: "How the full loop works in the plant.",
          },
        ]}
        ctaKicker={{
          de: "Welche Anlage passt in Ihr Werk? Wir prüfen und melden uns.",
          en: "Which plant fits your site? We review and get back to you.",
        }}
      />
    </>
  );
}
