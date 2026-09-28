export const SITE = {
  name: "WEMA",
  legal: "WEMA Stahl- und Maschinenbau GmbH",
  claim: "Stahl- und Maschinenbau · Beton-Recyclinganlagen · Saarland",
  gruendung: 1953,
  mitarbeiter: 20,
  produktionshalle: "1.000 m²",
  geschaeftsfuehrer: "Michael Weiskircher",
  strasse: "Essener Str. 11",
  plz: "66606",
  ort: "St. Wendel",
  land: "Deutschland",
  telefon: ["+49 6851 4057", "+49 6851 4058", "+49 6851 4061"],
  telefax: "+49 6851 4197",
  email: "WEMA-Weiskircher@t-online.de",
};

export const NAV = [
  { href: "/", label: "Start" },
  { href: "/unternehmen", label: "Unternehmen" },
  { href: "/leistungen", label: "Was wir bieten" },
  { href: "/kontakt", label: "Kontakt" },
];

export type Produkt = {
  slug: string;
  titel: string;
  kurz: string;
  intro: string;
  varianten: string[];
  details: string[];
  bild: string;
  bildAlt: string;
};

export const PRODUKTE: Produkt[] = [
  {
    slug: "beton-recycling",
    titel: "Beton-Recycling",
    kurz: "Anlagen für die Verwertung von Restbeton und Spülwasser.",
    intro:
      "Unsere Recyclinganlagen für Restbeton und Spülwasserverwertung sind seit ihrer Entwicklung über 1.000 Mal in Transportbeton und Fertigteilwerken eingesetzt worden. Sie arbeiten robust, wartungsarm und passen sich in bestehende Werke ein.",
    varianten: ["Über Flur", "Unter Flur", "Transportabel", "Kippkübel"],
    details: [
      "Vollständige Trennung von Zuschlägen und Zementschlamm.",
      "Rückführung des Spülwassers in den Produktionskreislauf.",
      "Ausführungen für stationären und mobilen Einsatz.",
      "Referenzen bei Holcim, Schwenk Beton, Godel Beton, Heidelberger Zement und Dyckerhoff.",
    ],
    bild: "/images/beton-recycling.jpg",
    bildAlt: "Betonwerk mit Recyclingzone",
  },
  {
    slug: "betonmischer",
    titel: "Betonmischer",
    kurz: "Zwangs-, Doppelwellen-, Planeten- und Kipptrommelmischer.",
    intro:
      "Im Bereich Mischerbau reicht unsere Erfahrung bis in das Jahr 1965 zurück. Anfang der 1980er Jahre begann der Vertrieb unserer Tellermischer unter dem Markennamen WZM Weiskircher Zwangs-Mischer.",
    varianten: ["Tellerzwangsmischer", "Doppelwellenmischer", "Planetenmischer", "Kipptrommelmischer"],
    details: [
      "Tellerzwangsmischer von 50 Liter bis 6.000 Liter.",
      "Planetenmischer von 500 Liter bis 3.000 Liter.",
      "Freifall- und Kipptrommelmischer für flexible Anwendungen.",
      "Ersatz- und Verschleißteile für Zwangsmischer aus eigener Fertigung.",
    ],
    bild: "/images/betonmischer.jpg",
    bildAlt: "Betonmischer im Einsatz",
  },
  {
    slug: "beschickungsaufzuege",
    titel: "Beschickungsaufzüge",
    kurz: "Bodenentleerer, Kippkübel und Senkrechtaufzüge.",
    intro:
      "Beschickungsaufzüge sind das Bindeglied zwischen Lagerung und Mischer. Wir fertigen die passende Ausführung für die räumliche Situation und den Materialdurchsatz jeder Anlage.",
    varianten: ["Bodenentleerer", "Kippkübel", "Senkrechtaufzüge"],
    details: [
      "Robuste Stahlkonstruktion aus eigener Fertigung.",
      "Antriebe und Führungen auf Dauerbetrieb ausgelegt.",
      "Integration in bestehende Steuerungen möglich.",
    ],
    bild: "/images/beschickungsaufzuege.jpg",
    bildAlt: "Beschickungsaufzug in einer Betonanlage",
  },
  {
    slug: "mischanlagen",
    titel: "Mischanlagen",
    kurz: "Komplette Anlagen für Transportbeton und Fertigteilwerke.",
    intro:
      "Komplette Mischanlagen für Transportbeton und Fertigteilwerke, von der Projektierung bis zur Montage, gehören seit 1985 zu unserem Programm. Wir planen, fertigen und stellen auf, in enger Abstimmung mit dem Betreiber.",
    varianten: ["Sternanlagen", "Turmanlagen", "Reihendoseuranlagen", "Sonderausführungen"],
    details: [
      "Projektierung, Konstruktion, Fertigung und Montage aus einer Hand.",
      "Anlagen für Transportbeton, Fertigteilwerke und Sonderaufgaben.",
      "Kunden im In- und Ausland, darunter Holcim, Schwenk Beton, Godel Beton, Heidelberger Zement und Dyckerhoff.",
    ],
    bild: "/images/mischanlagen.jpg",
    bildAlt: "Betonmischanlage",
  },
  {
    slug: "zyklon",
    titel: "Zyklon",
    kurz: "Hydrozyklontechnik für die Feinstoffabscheidung.",
    intro:
      "Unsere Hydrozyklontechnik ergänzt die Recyclinganlagen und trennt Feinstoffe zuverlässig aus dem Prozesswasser. Ein bewährtes Prinzip, sauber ausgeführt und langlebig gebaut.",
    varianten: ["Hydrozyklone", "Systemergänzung für Recyclinganlagen"],
    details: [
      "Zuverlässige Feinstoffabscheidung aus dem Prozesswasser.",
      "Wartungsarme Ausführung, geringer Platzbedarf.",
      "Nahtlose Ergänzung zu Recyclinganlagen aus unserem Haus.",
    ],
    bild: "/images/zyklon.jpg",
    bildAlt: "Zyklonabscheider im Werk",
  },
];
