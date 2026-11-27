export const SITE = {
  name: "WEMA",
  legal: "WEMA Stahl- und Maschinenbau GmbH",
  claim: "Stahl- und Maschinenbau · Beton-Recyclinganlagen · Saarland",
  gruendung: 1953,
  produktionshalle: "1.000 m²",
  geschaeftsfuehrer: "Michael Weiskircher",
  strasse: "Essener Str. 11",
  plz: "66606",
  ort: "St. Wendel",
  land: "Deutschland",
  landEn: "Germany",
  telefon: ["+49 6851 4057", "+49 6851 4058", "+49 6851 4061"],
  telefax: "+49 6851 4197",
  email: "WEMA-Weiskircher@t-online.de",
};

export const NAV = [
  { href: "/", labelDe: "Start", labelEn: "Home" },
  { href: "/unternehmen", labelDe: "Unternehmen", labelEn: "Company" },
  { href: "/leistungen", labelDe: "Was wir bieten", labelEn: "What we build" },
  { href: "/kontakt", labelDe: "Kontakt", labelEn: "Contact" },
];

export type Kategorie = {
  slug: string;
  name: string;
  nameEn: string;
  beschreibung?: string;
  beschreibungEn?: string;
  bilder: string[];
};

export type Produkt = {
  slug: string;
  titel: string;
  titelEn: string;
  kurz: string;
  kurzEn: string;
  intro: string;
  introEn: string;
  varianten: string[];
  variantenEn: string[];
  details: string[];
  detailsEn: string[];
  bild: string;
  bildAlt: string;
  bildAltEn: string;
  galerie?: string[];
  kategorien?: Kategorie[];
  hauptprodukt?: boolean;
};

export const PRODUKTE: Produkt[] = [
  {
    slug: "beton-recycling",
    titel: "Beton-Recycling",
    titelEn: "Concrete Recycling",
    kurz: "Anlagen für die Verwertung von Restbeton und Spülwasser.",
    kurzEn: "Plants for recovering residual concrete and wash water.",
    intro:
      "Unsere Recyclinganlagen für Restbeton und Spülwasserverwertung sind seit ihrer Entwicklung über 1.000 Mal in Transportbeton und Fertigteilwerken eingesetzt worden. Sie arbeiten robust, wartungsarm und passen sich in bestehende Werke ein.",
    introEn:
      "Our recycling plants for residual concrete and wash water have been installed over 1,000 times in ready-mix and precast concrete plants since their development. They run robustly, need little maintenance and integrate into existing facilities.",
    varianten: ["Überflur", "Unterflur", "Mit Aufgabetisch", "Mit Kippkübel"],
    variantenEn: ["Above-ground", "Below-ground", "With feed table", "With tipping skip"],
    details: [
      "Vollständige Trennung von Zuschlägen und Zementschlamm.",
      "Rückführung des Spülwassers in den Produktionskreislauf.",
      "Vier Ausführungen für jede räumliche Situation im Werk.",
      "Referenzen bei Holcim, Schwenk Beton, Godel Beton, Heidelberger Zement und Dyckerhoff.",
    ],
    detailsEn: [
      "Full separation of aggregates and cement slurry.",
      "Wash water is fed back into the production loop.",
      "Four designs for every spatial situation on site.",
      "References at Holcim, Schwenk Beton, Godel Beton, Heidelberger Zement and Dyckerhoff.",
    ],
    bild: "/images/photos/ueberflur-01.jpg",
    bildAlt: "Beton-Recyclinganlage über Flur von WEMA in einem Betonwerk",
    bildAltEn: "Above-ground WEMA concrete recycling plant at a concrete works",
    hauptprodukt: true,
    galerie: [
      "/images/photos/ueberflur-01.jpg",
      "/images/photos/kippkuebel-01.jpg",
      "/images/photos/aufgabetisch-01.jpg",
      "/images/photos/unterflur-01.jpg",
    ],
    kategorien: [
      {
        slug: "ueberflur",
        name: "Überflur",
        nameEn: "Above-ground",
        beschreibung:
          "Die klassische Ausführung oberhalb des Hallenbodens. Zugänglich, wartungsfreundlich und ohne bauliche Vorbereitung in bestehende Werke integrierbar.",
        beschreibungEn:
          "The classic design above floor level. Accessible, service-friendly and ready to integrate into existing plants without structural preparation.",
        bilder: [
          "/images/photos/ueberflur-01.jpg",
          "/images/photos/ueberflur-02.jpg",
          "/images/photos/ueberflur-03.jpg",
          "/images/photos/ueberflur-04.jpg",
          "/images/photos/ueberflur-05.jpg",
          "/images/photos/ueberflur-06.jpg",
        ],
      },
      {
        slug: "unterflur",
        name: "Unterflur",
        nameEn: "Below-ground",
        beschreibung:
          "Die kompakte Lösung. Die Anlage sitzt unter der Fahrbahn, der Fahrmischer entleert direkt von oben. Spart Fläche und hält den Hof frei.",
        beschreibungEn:
          "The compact solution. The plant sits below the driveway and the truck mixer discharges directly from above. Saves space and keeps the yard clear.",
        bilder: [
          "/images/photos/unterflur-01.jpg",
          "/images/photos/unterflur-02.jpg",
          "/images/photos/unterflur-03.jpg",
          "/images/photos/unterflur-04.jpg",
          "/images/photos/unterflur-05.jpg",
          "/images/photos/unterflur-06.jpg",
        ],
      },
      {
        slug: "mit-aufgabetisch",
        name: "Mit Aufgabetisch",
        nameEn: "With feed table",
        beschreibung:
          "Direktentleerung aus dem Fahrmischer auf den Aufgabetisch. Hoher Durchsatz, saubere Trennung und ein klar definierter Ablauf im Werkshof.",
        beschreibungEn:
          "Direct discharge from the truck mixer onto the feed table. High throughput, clean separation and a clearly defined workflow in the yard.",
        bilder: [
          "/images/photos/aufgabetisch-01.jpg",
          "/images/photos/aufgabetisch-02.jpg",
          "/images/photos/aufgabetisch-03.jpg",
          "/images/photos/aufgabetisch-04.jpg",
          "/images/photos/aufgabetisch-05.jpg",
          "/images/photos/aufgabetisch-06.jpg",
        ],
      },
      {
        slug: "mit-kippkuebel",
        name: "Mit Kippkübel",
        nameEn: "With tipping skip",
        beschreibung:
          "Beschickung über Kippkübel für Werke, in denen keine direkte Zufahrt zum Aufgabetisch möglich ist. Flexibel in der Aufstellung, robust im Dauerbetrieb.",
        beschreibungEn:
          "Fed by a tipping skip for plants where the feed table cannot be approached directly. Flexible to position, robust in continuous operation.",
        bilder: [
          "/images/photos/kippkuebel-01.jpg",
          "/images/photos/kippkuebel-02.jpg",
          "/images/photos/kippkuebel-03.jpg",
          "/images/photos/kippkuebel-04.jpg",
          "/images/photos/kippkuebel-05.jpg",
          "/images/photos/kippkuebel-06.jpg",
        ],
      },
    ],
  },
  {
    slug: "betonmischer",
    titel: "Betonmischer",
    titelEn: "Concrete Mixers",
    kurz: "Zwangs-, Doppelwellen-, Planeten- und Kipptrommelmischer.",
    kurzEn: "Pan, twin-shaft, planetary and tilting drum mixers.",
    intro:
      "Im Bereich Mischerbau reicht unsere Erfahrung bis in das Jahr 1965 zurück. Anfang der 1980er Jahre begann der Vertrieb unserer Tellermischer unter dem Markennamen WZM Weiskircher Zwangs-Mischer.",
    introEn:
      "Our experience in mixer engineering goes back to 1965. In the early 1980s we started selling our pan mixers under the brand name WZM Weiskircher Zwangs-Mischer.",
    varianten: ["Tellerzwangsmischer", "Doppelwellenmischer", "Planetenmischer", "Kipptrommelmischer"],
    variantenEn: ["Pan mixers", "Twin-shaft mixers", "Planetary mixers", "Tilting drum mixers"],
    details: [
      "Tellerzwangsmischer von 50 Liter bis 6.000 Liter.",
      "Planetenmischer von 500 Liter bis 3.000 Liter.",
      "Freifall- und Kipptrommelmischer für flexible Anwendungen.",
      "Ersatz- und Verschleißteile für Zwangsmischer aus eigener Fertigung.",
    ],
    detailsEn: [
      "Pan mixers from 50 litres up to 6,000 litres.",
      "Planetary mixers from 500 litres up to 3,000 litres.",
      "Free-fall and tilting drum mixers for flexible applications.",
      "Spare and wear parts for forced mixers from our own production.",
    ],
    bild: "/images/photos/betonmischer-03.jpg",
    bildAlt: "WEMA Tellerzwangsmischer im Dauerbetrieb im Werk",
    bildAltEn: "WEMA pan mixer in continuous operation at a plant",
    galerie: [
      "/images/photos/betonmischer-03.jpg",
      "/images/photos/betonmischer-07.jpg",
      "/images/photos/betonmischer-04.jpg",
      "/images/photos/betonmischer-05.jpg",
      "/images/photos/betonmischer-06.jpg",
      "/images/photos/betonmischer-01.png",
    ],
  },
  {
    slug: "beschickungsaufzuege",
    titel: "Beschickungsaufzüge",
    titelEn: "Loading Lifts",
    kurz: "Bodenentleerer, Kippkübel und Senkrechtaufzüge.",
    kurzEn: "Bottom-discharge skips, tipping skips and vertical lifts.",
    intro:
      "Beschickungsaufzüge sind das Bindeglied zwischen Lagerung und Mischer. Wir fertigen die passende Ausführung für die räumliche Situation und den Materialdurchsatz jeder Anlage.",
    introEn:
      "Loading lifts are the link between storage and mixer. We build the right version for the available space and the material throughput of each plant.",
    varianten: ["Bodenentleerer", "Kippkübel", "Senkrechtaufzüge"],
    variantenEn: ["Bottom-discharge skips", "Tipping skips", "Vertical lifts"],
    details: [
      "Robuste Stahlkonstruktion aus eigener Fertigung.",
      "Antriebe und Führungen auf Dauerbetrieb ausgelegt.",
      "Integration in bestehende Steuerungen möglich.",
    ],
    detailsEn: [
      "Robust steel construction from our own workshop.",
      "Drives and guides designed for continuous operation.",
      "Can be integrated into existing control systems.",
    ],
    bild: "/images/photos/aufzug-04.jpg",
    bildAlt: "WEMA Beschickungsaufzug einer Betonanlage, fertig zur Auslieferung",
    bildAltEn: "WEMA loading lift for a concrete plant, ready for delivery",
    galerie: [
      "/images/photos/aufzug-04.jpg",
      "/images/photos/aufzug-05.jpg",
      "/images/photos/aufzug-06.jpg",
      "/images/photos/aufzug-07.jpg",
      "/images/photos/aufzug-01.jpg",
      "/images/photos/aufzug-02.jpg",
      "/images/photos/aufzug-08.jpg",
      "/images/photos/aufzug-03.jpg",
    ],
  },
  {
    slug: "mischanlagen",
    titel: "Mischanlagen",
    titelEn: "Mixing Plants",
    kurz: "Komplette Anlagen für Transportbeton und Fertigteilwerke.",
    kurzEn: "Complete plants for ready-mix and precast concrete.",
    intro:
      "Komplette Mischanlagen für Transportbeton und Fertigteilwerke, von der Projektierung bis zur Montage, gehören seit 1985 zu unserem Programm. Wir planen, fertigen und stellen auf, in enger Abstimmung mit dem Betreiber.",
    introEn:
      "Complete mixing plants for ready-mix and precast concrete, from planning to assembly, have been part of our programme since 1985. We design, build and install in close coordination with the operator.",
    varianten: ["Sternanlagen", "Turmanlagen", "Reihendoseuranlagen", "Sonderausführungen"],
    variantenEn: ["Radial plants", "Tower plants", "In-line plants", "Custom builds"],
    details: [
      "Projektierung, Konstruktion, Fertigung und Montage aus einer Hand.",
      "Anlagen für Transportbeton, Fertigteilwerke und Sonderaufgaben.",
      "Kunden im In- und Ausland, darunter Holcim, Schwenk Beton, Godel Beton, Heidelberger Zement und Dyckerhoff.",
    ],
    detailsEn: [
      "Planning, engineering, production and assembly from one source.",
      "Plants for ready-mix, precast and special applications.",
      "Customers in Germany and abroad, including Holcim, Schwenk Beton, Godel Beton, Heidelberger Zement and Dyckerhoff.",
    ],
    bild: "/images/photos/mischanlage-01.jpg",
    bildAlt: "Betonmischanlage im Werk",
    bildAltEn: "Concrete mixing plant",
    galerie: [
      "/images/photos/mischanlage-01.jpg",
      "/images/photos/mischanlage-02.jpg",
    ],
  },
  {
    slug: "zyklon",
    titel: "Zyklon",
    titelEn: "Hydrocyclone",
    kurz: "Hydrozyklontechnik für die Feinstoffabscheidung.",
    kurzEn: "Hydrocyclone technology for fines separation.",
    intro:
      "Unsere Hydrozyklontechnik ergänzt die Recyclinganlagen und trennt Feinstoffe zuverlässig aus dem Prozesswasser. Ein bewährtes Prinzip, sauber ausgeführt und langlebig gebaut.",
    introEn:
      "Our hydrocyclone technology complements the recycling plants and reliably separates fines from the process water. A proven principle, cleanly engineered and built to last.",
    varianten: ["Hydrozyklone", "Systemergänzung für Recyclinganlagen"],
    variantenEn: ["Hydrocyclones", "System add-on for recycling plants"],
    details: [
      "Zuverlässige Feinstoffabscheidung aus dem Prozesswasser.",
      "Wartungsarme Ausführung, geringer Platzbedarf.",
      "Nahtlose Ergänzung zu Recyclinganlagen aus unserem Haus.",
    ],
    detailsEn: [
      "Reliable fines separation from process water.",
      "Low-maintenance build, small footprint.",
      "Seamless add-on to our recycling plants.",
    ],
    bild: "/images/photos/zyklon-02.jpg",
    bildAlt: "WEMA Hydrozyklon als Teil einer komplette Aufbereitungsanlage",
    bildAltEn: "WEMA hydrocyclone as part of a complete treatment installation",
    galerie: [
      "/images/photos/zyklon-02.jpg",
      "/images/photos/zyklon-05.jpg",
      "/images/photos/zyklon-04.jpg",
      "/images/photos/zyklon-03.jpg",
      "/images/photos/zyklon-01.jpg",
      "/images/photos/hydraulik-01.jpg",
    ],
  },
];
