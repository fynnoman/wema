import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LandingTemplate from "@/components/LandingTemplate";
import { SITE_URL, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const URL = `${SITE_URL}/mischanlagen-hersteller`;

const FAQ = [
  {
    frageDe: "Welche Mischanlagen-Typen baut WEMA?",
    frageEn: "Which mixing plant types does WEMA build?",
    antwortDe:
      "WEMA Weiskircher baut Sternanlagen, Turmanlagen und Reihendoseuranlagen. Darüber hinaus entstehen Sonderausführungen, wenn Grundstück, Material oder Rezeptur eine individuelle Lösung verlangen.",
    antwortEn:
      "WEMA Weiskircher builds radial, tower and in-line mixing plants. In addition, custom builds are developed when the site, material or recipe requires an individual solution.",
  },
  {
    frageDe: "Was bedeutet 'aus einer Hand' im Mischanlagenbau?",
    frageEn: "What does 'from one source' mean in mixing plant construction?",
    antwortDe:
      "Projektierung, Konstruktion, Fertigung in Stahl, Lackierung und Montage vor Ort erfolgen bei WEMA im eigenen Haus. Der Betreiber hat einen Ansprechpartner von der ersten Zeichnung bis zur Inbetriebnahme.",
    antwortEn:
      "At WEMA, planning, engineering, steel fabrication, painting and on-site installation are all handled in-house. The operator has a single point of contact from the first drawing to commissioning.",
  },
  {
    frageDe: "Für wen baut WEMA Mischanlagen?",
    frageEn: "Who does WEMA build mixing plants for?",
    antwortDe:
      "Für Transportbetonwerke, Fertigteilwerke und Sonderanwendungen. Zu den Kunden zählen neben vielen mittelständischen Werken auch Holcim, Schwenk Beton, Godel Beton, Heidelberger Zement und Dyckerhoff.",
    antwortEn:
      "For ready-mix plants, precast works and special applications. Customers include many medium-sized plants as well as Holcim, Schwenk Beton, Godel Beton, Heidelberger Zement and Dyckerhoff.",
  },
  {
    frageDe: "Wie lange baut WEMA schon komplette Mischanlagen?",
    frageEn: "How long has WEMA been building complete mixing plants?",
    antwortDe:
      "Seit 1985 gehören komplette Mischanlagen zum Programm. Davor baute WEMA Mischer, davor allgemeinen Maschinen- und Stahlbau, gegründet 1953.",
    antwortEn:
      "Complete mixing plants have been part of the programme since 1985. Before that WEMA built mixers, and before that general mechanical and steel engineering. Founded in 1953.",
  },
  {
    frageDe: "Werden Bestandsanlagen umgebaut oder erweitert?",
    frageEn: "Are existing plants rebuilt or extended?",
    antwortDe:
      "Ja. WEMA plant und baut Erweiterungen, zusätzliche Silos, neue Dosierstrecken oder einen Mischerwechsel in bestehende Anlagen ein. Ziel sind möglichst kurze Stillstandzeiten.",
    antwortEn:
      "Yes. WEMA plans and installs extensions, additional silos, new dosing lines or a mixer replacement into existing plants. The goal is to keep downtime as short as possible.",
  },
];

export const metadata: Metadata = {
  title: "Mischanlagen-Hersteller für Transportbeton und Fertigteilwerke · WEMA Weiskircher",
  description:
    "Komplette Mischanlagen für Transportbeton und Fertigteilwerke. Sternanlagen, Turmanlagen, Reihendoseuranlagen und Sonderausführungen. Planung, Fertigung, Montage aus einer Hand, aus St. Wendel.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Mischanlagen-Hersteller · WEMA Weiskircher",
    description:
      "Transportbeton- und Fertigteilwerk-Mischanlagen. Komplett aus einer Hand, seit 1985.",
    url: URL,
    images: [{ url: "/images/photos/mischanlage-01.jpg" }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Start", url: "/" },
            { name: "Mischanlagen-Hersteller", url: "/mischanlagen-hersteller" },
          ]),
          faqJsonLd(FAQ.map((f) => ({ question: f.frageDe, answer: f.antwortDe }))),
        ]}
      />
      <LandingTemplate
        eyebrowDe="Mischanlagen · Hersteller"
        eyebrowEn="Mixing plants · Manufacturer"
        h1De={
          <>
            Mischanlagen für
            <br />
            <span className="italic text-white/85">Transportbeton und Fertigteil.</span>
          </>
        }
        h1En={
          <>
            Mixing plants for
            <br />
            <span className="italic text-white/85">ready-mix and precast concrete.</span>
          </>
        }
        leadDe="WEMA Weiskircher plant, fertigt und montiert komplette Mischanlagen für Transportbeton- und Fertigteilwerke. Von der ersten Projektierung bis zur Inbetriebnahme ein Ansprechpartner aus St. Wendel, ergänzt um Beton-Recycling, Zwangsmischer und Beschickungsaufzüge aus dem eigenen Programm."
        leadEn="WEMA Weiskircher plans, manufactures and installs complete mixing plants for ready-mix and precast concrete works. From initial engineering to commissioning, one point of contact in St. Wendel, complemented by concrete recycling, forced mixers and loading lifts from the same programme."
        heroImage="/images/photos/mischanlage-01.jpg"
        heroAlt="Komplette Mischanlage von WEMA für Transportbeton und Fertigteilwerke"
        factsDe={[
          "Komplettanbieter seit 1985.",
          "Sternanlagen, Turmanlagen, Reihendoseuranlagen, Sonderbauten.",
          "Projektierung, Fertigung, Lackierung und Montage im eigenen Haus.",
          "Kunden im In- und Ausland, von mittelständischen Werken bis zu großen Namen.",
          "Mischer, Beschickungsaufzüge und Recyclinganlage aus einer Hand.",
        ]}
        factsEn={[
          "Full-service provider since 1985.",
          "Radial, tower and in-line mixing plants, plus custom builds.",
          "Engineering, manufacturing, painting and installation in-house.",
          "Customers in Germany and abroad, from medium-sized plants to major names.",
          "Mixer, loading lifts and recycling plant from a single source.",
        ]}
        features={[
          {
            eyebrowDe: "Planung",
            eyebrowEn: "Planning",
            titelDe: "Projektierung auf das vorhandene Grundstück.",
            titelEn: "Engineering tailored to the existing site.",
            textDe:
              "Jede Mischanlage wird für den konkreten Standort geplant. Gefälle, Anfahrtswege, Silohöhen, Materialfluss und Nachbarbebauung fließen in die Lösung ein, bevor der erste Stahl entsteht.",
            textEn:
              "Every mixing plant is engineered for the specific site. Slope, access routes, silo heights, material flow and neighbouring buildings feed into the solution before the first steel is cut.",
          },
          {
            eyebrowDe: "Programm",
            eyebrowEn: "Programme",
            titelDe: "Ein Haus für Mischer, Aufzüge, Recycling und Zyklon.",
            titelEn: "One manufacturer for mixers, lifts, recycling and hydrocyclone.",
            textDe:
              "WZM-Zwangsmischer, Beschickungsaufzüge, Beton-Recyclinganlagen und Hydrozyklontechnik lassen sich innerhalb einer WEMA-Mischanlage als abgestimmtes System konfigurieren.",
            textEn:
              "WZM forced mixers, loading lifts, concrete recycling plants and hydrocyclone technology can be configured as a coordinated system within a WEMA mixing plant.",
          },
          {
            eyebrowDe: "Umbau",
            eyebrowEn: "Retrofit",
            titelDe: "Erweiterungen und Mischertausch in bestehende Anlagen.",
            titelEn: "Extensions and mixer replacement in existing plants.",
            textDe:
              "Zusätzliche Silos, neue Dosierstrecken oder ein kompletter Mischertausch werden in geplanten Stillstandsfenstern umgesetzt. Ziel bleibt die kürzest mögliche Betriebspause.",
            textEn:
              "Additional silos, new dosing lines or a complete mixer replacement are implemented in planned shutdown windows. The target remains the shortest possible interruption.",
          },
          {
            eyebrowDe: "Qualität",
            eyebrowEn: "Quality",
            titelDe: "Fertigung in St. Wendel, kein Zwischenhandel.",
            titelEn: "Manufacturing in St. Wendel, no reseller in between.",
            textDe:
              "Konstruktion und Fertigung sitzen im gleichen Werk. Rückfragen zur Zeichnung werden am selben Tag geklärt, Änderungen fließen direkt in die Fertigung ein. Das bleibt auch nach der Inbetriebnahme so.",
            textEn:
              "Engineering and manufacturing sit in the same workshop. Questions on drawings are resolved the same day and changes flow directly into production. That continues after commissioning.",
          },
        ]}
        bullets={[
          { de: "Sternanlagen für klassische Transportbetonwerke.", en: "Radial plants for classic ready-mix works." },
          { de: "Turmanlagen für platzsparende Lösungen.", en: "Tower plants for space-saving solutions." },
          { de: "Reihendoseuranlagen für hohe Taktfrequenz.", en: "In-line plants for high cycle rates." },
          { de: "Sonderbauten für individuelle Anwendungen.", en: "Custom builds for individual applications." },
          { de: "Dosierungen und Silos nach Rezeptur konfiguriert.", en: "Dosing and silos configured to the recipe." },
          { de: "Steuerung und Schnittstellen auf das Werk abgestimmt.", en: "Control and interfaces matched to the plant." },
        ]}
        bulletsHeadingDe="Welche Mischanlage für welches Werk."
        bulletsHeadingEn="Which mixing plant for which site."
        faqs={FAQ}
        related={[
          {
            href: "/leistungen/mischanlagen",
            titelDe: "Mischanlagen im Programm",
            titelEn: "Mixing plants in the programme",
            textDe: "Detailseite der WEMA-Mischanlagen.",
            textEn: "Detail page for WEMA mixing plants.",
          },
          {
            href: "/tellerzwangsmischer",
            titelDe: "Tellerzwangsmischer",
            titelEn: "Pan mixers",
            textDe: "Der Mischer im Herzen jeder WEMA-Mischanlage.",
            textEn: "The mixer at the heart of every WEMA plant.",
          },
        ]}
        ctaKicker={{
          de: "Neubau oder Erweiterung? Beschreiben Sie Ihr Werk, wir prüfen.",
          en: "New build or extension? Describe your plant, we take it from there.",
        }}
      />
    </>
  );
}
