import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LandingTemplate from "@/components/LandingTemplate";
import { SITE_URL, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const URL = `${SITE_URL}/tellerzwangsmischer`;

const FAQ = [
  {
    frageDe: "Was ist ein Tellerzwangsmischer?",
    frageEn: "What is a pan (forced) mixer?",
    antwortDe:
      "Ein Tellerzwangsmischer mischt Beton, Mörtel oder Erdfeuchtmassen in einem stehenden runden Teller. Werkzeuge an einer zentralen oder exzentrischen Welle führen die Mischung zwangsgeführt durch den Mischraum, dadurch wird auch zäher und erdfeuchter Beton zuverlässig homogen.",
    antwortEn:
      "A pan mixer blends concrete, mortar or earth-moist mixes in an upright circular pan. Tools on a central or eccentric shaft force the material through the mixing chamber, so even stiff and earth-moist concrete becomes reliably homogeneous.",
  },
  {
    frageDe: "Welche Größen fertigt WEMA Weiskircher?",
    frageEn: "Which sizes does WEMA Weiskircher manufacture?",
    antwortDe:
      "Tellerzwangsmischer von WEMA gibt es im Nutzvolumen von 50 Litern bis 6.000 Litern. Für größere Fertigteilwerke bauen wir ergänzend Planetenmischer von 500 bis 3.000 Litern, dazu Doppelwellen-, Freifall- und Kipptrommelmischer.",
    antwortEn:
      "WEMA pan mixers come with a useful volume from 50 litres up to 6,000 litres. For larger precast works we also build planetary mixers from 500 to 3,000 litres, plus twin-shaft, free-fall and tilting drum mixers.",
  },
  {
    frageDe: "Seit wann baut WEMA Betonmischer?",
    frageEn: "How long has WEMA been building concrete mixers?",
    antwortDe:
      "Erfahrung im Mischerbau reicht bei WEMA bis 1965 zurück. Anfang der 1980er Jahre wurde die eigene Marke WZM Weiskircher Zwangs-Mischer eingeführt und etablierte sich schnell als Kernkompetenz.",
    antwortEn:
      "WEMA's experience in mixer engineering goes back to 1965. In the early 1980s the brand WZM Weiskircher Zwangs-Mischer was introduced and quickly became a core competence.",
  },
  {
    frageDe: "Gibt es Ersatz- und Verschleißteile?",
    frageEn: "Are spare and wear parts available?",
    antwortDe:
      "Ja. Ersatz- und Verschleißteile für Zwangsmischer werden in St. Wendel in eigener Fertigung produziert. Kurze Reaktionszeiten sind möglich, auch für Anlagen, die seit vielen Jahren laufen.",
    antwortEn:
      "Yes. Spare and wear parts for forced mixers are produced in-house in St. Wendel. Short response times are possible, also for plants that have been running for many years.",
  },
  {
    frageDe: "Lässt sich ein WZM-Mischer in bestehende Anlagen integrieren?",
    frageEn: "Can a WZM mixer be integrated into existing plants?",
    antwortDe:
      "Ja. Die Antriebe, Entleerklappen und Steuerungsschnittstellen werden auf die bestehende Anlage abgestimmt. WEMA plant und montiert den Austausch oder die Nachrüstung.",
    antwortEn:
      "Yes. Drives, discharge gates and control interfaces are matched to the existing plant. WEMA plans and installs the replacement or retrofit.",
  },
];

export const metadata: Metadata = {
  title: "Tellerzwangsmischer von 50 bis 6.000 Litern · WEMA Weiskircher",
  description:
    "Tellerzwangsmischer der Marke WZM Weiskircher Zwangs-Mischer. Nutzvolumen von 50 Litern bis 6.000 Litern. Ersatz- und Verschleißteile aus eigener Fertigung in St. Wendel. Erfahrung im Mischerbau seit 1965.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Tellerzwangsmischer · WEMA Weiskircher",
    description:
      "Nutzvolumen 50 l bis 6.000 l. WZM Weiskircher Zwangs-Mischer, gebaut in St. Wendel seit 1965.",
    url: URL,
    images: [{ url: "/images/photos/betonmischer-01.png" }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Start", url: "/" },
            { name: "Tellerzwangsmischer", url: "/tellerzwangsmischer" },
          ]),
          faqJsonLd(FAQ.map((f) => ({ question: f.frageDe, answer: f.antwortDe }))),
        ]}
      />
      <LandingTemplate
        eyebrowDe="Tellerzwangsmischer · WZM"
        eyebrowEn="Pan mixer · WZM"
        h1De={
          <>
            Tellerzwangsmischer
            <br />
            <span className="italic text-white/85">50 l bis 6.000 l.</span>
          </>
        }
        h1En={
          <>
            Pan mixers
            <br />
            <span className="italic text-white/85">50 l up to 6,000 l.</span>
          </>
        }
        leadDe="Unter der Marke WZM Weiskircher Zwangs-Mischer baut WEMA Tellerzwangsmischer für Betonwerke, Mörtelwerke und Fertigteilwerke. Vom kleinen Labormischer bis zum 6.000-Liter-Mischer für hohe Taktfrequenzen, in St. Wendel gefertigt und auf Dauerbetrieb ausgelegt."
        leadEn="Under the WZM Weiskircher Zwangs-Mischer brand, WEMA builds pan mixers for concrete, mortar and precast works. From small laboratory mixers up to 6,000-litre mixers for high throughput, manufactured in St. Wendel and designed for continuous operation."
        heroImage="/images/photos/betonmischer-01.png"
        heroAlt="WEMA Tellerzwangsmischer der Marke WZM Weiskircher Zwangs-Mischer"
        factsDe={[
          "Nutzvolumen von 50 Litern bis 6.000 Litern.",
          "Marke WZM Weiskircher Zwangs-Mischer seit den 1980er Jahren.",
          "Planetenmischer von 500 bis 3.000 Litern ergänzen das Programm.",
          "Freifall- und Kipptrommelmischer für flexible Anwendungen.",
          "Ersatz- und Verschleißteile aus eigener Fertigung in St. Wendel.",
        ]}
        factsEn={[
          "Useful volume from 50 litres up to 6,000 litres.",
          "WZM Weiskircher Zwangs-Mischer brand since the 1980s.",
          "Planetary mixers from 500 to 3,000 litres complete the range.",
          "Free-fall and tilting drum mixers for flexible applications.",
          "Spare and wear parts from our own production in St. Wendel.",
        ]}
        features={[
          {
            eyebrowDe: "Mischprinzip",
            eyebrowEn: "Mixing principle",
            titelDe: "Zwangsgeführte Mischung, homogen auch bei zäher Masse.",
            titelEn: "Forced mixing, homogeneous even with stiff mixes.",
            textDe:
              "Werkzeuge an einer zentralen oder exzentrischen Welle führen das Material durch den Mischraum. Das Ergebnis ist eine homogene Mischung in kurzer Zeit, auch bei erdfeuchtem Beton oder faserbewehrten Rezepturen.",
            textEn:
              "Tools on a central or eccentric shaft guide material through the mixing chamber. The result is a homogeneous mix in a short time, also with earth-moist concrete or fibre-reinforced recipes.",
          },
          {
            eyebrowDe: "Dauerbetrieb",
            eyebrowEn: "Continuous operation",
            titelDe: "Antrieb, Verschleißteile und Dichtungen auf Langlebigkeit ausgelegt.",
            titelEn: "Drive, wear parts and seals built for a long service life.",
            textDe:
              "Antriebe sind so dimensioniert, dass auch bei dauerhaftem Taktbetrieb Reserven bleiben. Verschleißteile wie Panzerungen, Werkzeuge und Dichtungen werden in St. Wendel passend zum vorhandenen Mischer hergestellt.",
            textEn:
              "Drives are dimensioned so reserves remain even under permanent cycle operation. Wear parts such as armour plates, tools and seals are produced in St. Wendel to match the existing mixer.",
          },
          {
            eyebrowDe: "Integration",
            eyebrowEn: "Integration",
            titelDe: "Austausch oder Nachrüstung in bestehende Mischanlagen.",
            titelEn: "Replacement or retrofit in existing mixing plants.",
            textDe:
              "Schnittstellen zu Steuerung, Dosierung und Beschickungsaufzug lassen sich auf das bestehende Werk anpassen. Ein kompletter Mischeraustausch ist in geplanten Stillstandsfenstern möglich.",
            textEn:
              "Interfaces to control, dosing and loading lifts can be adapted to the existing plant. A full mixer replacement is possible within planned shutdown windows.",
          },
          {
            eyebrowDe: "Service",
            eyebrowEn: "Service",
            titelDe: "Nähe zum Betreiber auch Jahre nach der Inbetriebnahme.",
            titelEn: "Close to the operator years after commissioning.",
            textDe:
              "Viele WZM-Mischer laufen seit Jahrzehnten. Verschleißteile, Umbauten und Beratung bleiben direkt aus St. Wendel verfügbar, ohne dazwischen geschaltete Händler.",
            textEn:
              "Many WZM mixers have been running for decades. Wear parts, conversions and advice stay available directly from St. Wendel, without resellers in between.",
          },
        ]}
        bullets={[
          { de: "Tellerzwangsmischer 50 l bis 6.000 l.", en: "Pan mixers 50 l to 6,000 l." },
          { de: "Planetenmischer 500 l bis 3.000 l.", en: "Planetary mixers 500 l to 3,000 l." },
          { de: "Doppelwellenmischer für große Durchsätze.", en: "Twin-shaft mixers for high throughput." },
          { de: "Freifall- und Kipptrommelmischer.", en: "Free-fall and tilting drum mixers." },
          { de: "Austauschmischer für bestehende Werke.", en: "Replacement mixers for existing plants." },
          { de: "Verschleißteile aus eigener Fertigung.", en: "Wear parts from our own workshop." },
        ]}
        bulletsHeadingDe="Unser Mischerprogramm."
        bulletsHeadingEn="Our mixer range."
        faqs={FAQ}
        related={[
          {
            href: "/leistungen/betonmischer",
            titelDe: "Betonmischer im Programm",
            titelEn: "Concrete mixers in the programme",
            textDe: "Alle Mischertypen von WEMA Weiskircher auf einen Blick.",
            textEn: "All mixer types by WEMA Weiskircher at a glance.",
          },
          {
            href: "/mischanlagen-hersteller",
            titelDe: "Mischanlagen-Hersteller",
            titelEn: "Mixing plant manufacturer",
            textDe: "Vom Mischer zur kompletten Mischanlage.",
            textEn: "From mixer to complete mixing plant.",
          },
        ]}
        ctaKicker={{
          de: "Austauschmischer oder Neubau? Wir rechnen Ihnen den passenden Weg.",
          en: "Replacement mixer or new build? We work out the right path with you.",
        }}
      />
    </>
  );
}
