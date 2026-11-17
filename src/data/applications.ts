// Long-form content for /applications/<slug>/. Name, teaser and photo live in the registry (site.ts).
// Facts come from _source/content.md ("PAGE: https://torqron.com/applications" and the products page).
import { products, services } from './site';

export interface Faq {
  q: string;
  a: string;
}

export interface Offering {
  name: string;
  text: string;
  /** product, service or company page covering this offering; plain row without link when omitted */
  href?: string;
}

export interface ApplicationContent {
  /** <title> without the brand, ≤ 48 characters */
  title: string;
  /** meta description, 140–160 characters */
  description: string;
  h1: string;
  lede: string;
  /** CSS object-position for the hero photo */
  focus: string;
  /** h2 of the intro section */
  heading: string;
  /** two paragraphs, may contain inline links */
  intro: string[];
  /** completes "What TORQRON supplies for …" and "Products for …" */
  audience: string;
  /** typical applications / use cases */
  uses: string[];
  offerings: Offering[];
  /** product slugs for the related cards */
  products: string[];
  /** service slugs; those not already linked from an offering are added to the offering rows */
  services: string[];
  /** subject of the request e-mail (/contact/?topic=…) */
  topic: string;
  faq: Faq[];
}

export const applicationContent: Record<string, ApplicationContent> = {
  petrochemical: {
    title: 'Petrochemical Plant Components & Services',
    description:
      'Petrochemical plant components and services: die plates, pelletizer knives, extruder parts, filtration, sensors and reconditioning for LDPE, HDPE and PP.',
    h1: 'Components and services for petrochemical plants',
    lede: 'Parts, spares and reconditioning for LDPE, LLDPE, HDPE and PP production.',
    focus: '50% 50%',
    heading: 'Polyolefin production, from reactor to pellet',
    intro: [
      'TORQRON supplies components, spare parts and services for upstream and downstream petrochemical plants. The focus is polyolefin production: LDPE, LLDPE and HDPE lines, PP polymerization and the extrusion and granulation units that turn reactor output into pellets.',
      'Many of these parts work in high-pressure and high-temperature zones. In LDPE plants the hyper compressor raises ethylene to the very high pressure the reactor needs, and its plungers and packing cups are among the wear parts that decide uptime. Alongside new parts, TORQRON offers <a href="/services/reconditioning-refurbishment/">reconditioning of plungers, packing cups and die plates</a> and <a href="/services/spare-parts-procurement/">spare parts procurement</a> for the utilities around them: pumps, heat exchangers, motors and valves in critical pipelines.',
    ],
    audience: 'petrochemical plants',
    uses: [
      'LDPE, LLDPE and HDPE production',
      'PP polymerization',
      'Hyper compressor maintenance',
      'High-temperature and high-pressure process zones',
      'Reactor filtration systems',
      'Valve systems in critical pipelines',
      'Utilities: pumps, heat exchangers, motors',
    ],
    offerings: [
      {
        name: 'Die plates and pelletizer knives',
        text: 'Die plates custom-engineered for HDPE, LDPE, LLDPE, PP and other polymers; bimetal knives with titanium carbide edges.',
        href: '/products/granulation-tools/',
      },
      {
        name: 'Extruder screws, barrels and shafts',
        text: 'Screw elements from 30 to 380 mm to OEM part numbers, barrel housings, and screw shafts in 1.2343 ESU tool steel.',
        href: '/products/extrusion-components/',
      },
      {
        name: 'Stainless steel filtration systems',
        text: 'Stainless steel filter inserts, filter elements and support baskets for reactor and process filtration.',
        href: '/products/industrial-filtration/',
      },
      {
        name: 'Process sensors',
        text: 'PT100–PT1000 resistance thermometers, thermocouples and sensor assemblies for extruders, reactors and filtration units.',
        href: '/products/temperature-measurement/',
      },
      {
        name: 'Specialty oils and lubricants',
        text: 'Original Shell® oils, Mobil and Fuchs lubricants, anti-foam agents and phosphate solutions.',
        href: '/products/oils-lubricants/',
      },
      {
        name: 'Reconditioning services',
        text: 'Hyper compressor plungers, packing cups and die plates refurbished to European standards.',
        href: '/services/reconditioning-refurbishment/',
      },
      {
        name: 'Spare parts procurement',
        text: 'Sourcing of critical spares, including supplier selection, documentation and quality control.',
        href: '/services/spare-parts-procurement/',
      },
    ],
    products: ['granulation-tools', 'extrusion-components', 'industrial-filtration', 'temperature-measurement', 'valves-flow-control', 'sealing-technology'],
    services: ['reconditioning-refurbishment', 'spare-parts-procurement', 'installation-on-site'],
    topic: 'Spare parts procurement',
    faq: [
      {
        q: 'Which petrochemical processes does TORQRON supply parts for?',
        a: 'Mainly polyolefin production: LDPE, LLDPE and HDPE lines and PP polymerization, including their extrusion and granulation units, reactor filtration, high-pressure and high-temperature process zones, valve systems in critical pipelines and utilities such as pumps, heat exchangers and motors.',
      },
      {
        q: 'Can hyper compressor plungers and packing cups be reconditioned instead of replaced?',
        a: 'Yes. Plunger reconditioning for LDPE hyper compressors covers crack detection, carbide refurbishment and re-machining. Packing cup reconditioning includes fretting fatigue analysis, seal ring inspection and high-pressure safety checks.',
      },
      {
        q: 'Which temperature sensors are used in polyolefin plants?',
        a: 'Mostly thermocouples and resistance thermometers (RTDs). TORQRON supplies both, with PT100 to PT1000 elements, connection heads, plug connectors, compression fittings and complete sensor assemblies for extruders, reactors and filtration units.',
      },
    ],
  },

  'plastics-polymer': {
    title: 'Parts for Plastics & Polymer Processing',
    description:
      'Parts for plastics and polymer processing: pelletizer die plates and knives, extruder screw elements, additives, filtration and sensors for extrusion lines.',
    h1: 'Parts for plastics and polymer processing',
    lede: 'Granulation tools, extruder components and additives for extrusion, compounding and pelletizing.',
    focus: '50% 50%',
    heading: 'Extrusion, compounding and pelletizing',
    intro: [
      'TORQRON supplies parts and materials for plastics and polymer processing: twin-screw and single-screw extrusion lines, masterbatch and compounding lines, and underwater and air-cooled pelletizing. The range covers the machine side, from die plates to screw elements, and the material side, with antioxidants, phosphites and HALS for stabilization.',
      'On a pelletizing line, pellet quality depends on the condition of the die plate and the knives: a worn cutting face or dull edges lead to irregular pellets, tails and fines. TORQRON supplies <a href="/products/granulation-tools/">die plates and pelletizer knives</a> compatible with major pelletizer brands and <a href="/services/reconditioning-refurbishment/">refurbishes die plates up to 1200 mm</a>. For choosing additives or replacement parts for a specific polymer, <a href="/services/technical-consulting/">technical consulting</a> is available.',
    ],
    audience: 'plastics and polymer processing',
    uses: [
      'Twin-screw and single-screw extrusion lines',
      'Underwater and air-cooled pelletizing',
      'Masterbatch and compounding lines',
      'Polymer granulation',
      'Polymer melt filtration and dust collection',
      'Additive dosing and stabilization',
    ],
    offerings: [
      {
        name: 'Granulation tools and components',
        text: 'Die plates for underwater and air-cooled systems, blade holders and bimetal pelletizer knives.',
        href: '/products/granulation-tools/',
      },
      {
        name: 'Extrusion system parts',
        text: 'Standard and wear-protected barrel housings, screw elements from 30 to 380 mm and heat-treated screw shafts.',
        href: '/products/extrusion-components/',
      },
      {
        name: 'Polymer additives',
        text: 'Primary antioxidants, phosphites, synergistic blends, UV stabilizers and HALS, and tailored one-packs.',
        href: '/products/plastic-additives/',
      },
      {
        name: 'Filter elements, sleeves and support baskets',
        text: 'Filter elements, sleeves and bags for polymer filtration and dust collection, with stainless steel support baskets.',
        href: '/products/industrial-filtration/',
      },
      {
        name: 'Temperature measurement and control',
        text: 'Thermocouples, PT100–PT1000 resistance thermometers and sensor assemblies for extruders.',
        href: '/products/temperature-measurement/',
      },
    ],
    products: ['granulation-tools', 'extrusion-components', 'extrusion-heater-plates', 'plastic-additives', 'industrial-filtration', 'temperature-measurement'],
    services: ['reconditioning-refurbishment', 'technical-consulting'],
    topic: 'Granulation tools',
    faq: [
      {
        q: 'Which pelletizer brands are your knives and die plates compatible with?',
        a: 'Pelletizer knives and blade holders are available for AST®, Berringer®, Berstorff®, Coperion®, Erema®, Gala® and Nordson BKG® equipment. Die plates are OEM-compatible for major brands and custom-engineered for the polymer being processed. Brand names indicate compatibility only.',
      },
      {
        q: 'Which extruder screw element diameters can you supply?',
        a: 'Screw elements are available in diameters from 30 to 380 mm, manufactured according to OEM part numbers across the full modular element range. Screw shafts are made from 1.2343 ESU high-alloy tool steel and heat-treated for a longer service life.',
      },
      {
        q: 'Which polymers are your additives suitable for?',
        a: 'LDPE, HDPE, LLDPE, PP, EVA, PET, PBT, PA, POM, PS, ABS, PUR, BR, SBR, SBS, synthetic rubber and adhesives. The range includes primary antioxidants (Evernox series), phosphites (Everfos series), synergistic blends, tailored one-packs and UV stabilizers and HALS (Everstab series).',
      },
    ],
  },

  'mechanical-engineering': {
    title: 'OEM Components for Machinery Builders',
    description:
      'OEM-grade components for machinery builders: die plates, screw elements, pressure vessels, valves and custom spare parts for extruder and pelletizer OEMs.',
    h1: 'OEM-grade components for machinery builders',
    lede: 'Machined parts, granulation tools and sourcing support for equipment manufacturers.',
    focus: '50% 50%',
    heading: 'Built to drawing, specification and part number',
    intro: [
      'TORQRON supplies OEM-grade components and sourcing support to machinery builders and industrial equipment manufacturers, including extruder and pelletizer OEMs, filtration system builders, packaging machinery producers and makers of polymer handling and conveying systems.',
      'Many parts are made to the customer’s documents: stainless steel vessels are built according to customer drawings in 1.4404 and 1.4571, screw elements are manufactured to OEM part numbers, and machined components come from a <a href="/capabilities/">machine park</a> of 5-axis machining centers, CNC lathes and 3D coordinate measuring machines. Items outside the core range, from PLCs to pumps, are covered by <a href="/services/spare-parts-procurement/">spare parts procurement</a>.',
    ],
    audience: 'machinery builders',
    uses: [
      'Extruder OEMs',
      'Pelletizer manufacturers',
      'Filtration system builders',
      'Packaging machinery producers',
      'Polymer handling and conveying systems',
    ],
    offerings: [
      {
        name: 'Precision machined tool steel components',
        text: 'Milled and turned parts from 5-axis machining centers and CNC lathes, checked on 3D coordinate measuring machines.',
        href: '/capabilities/',
      },
      {
        name: 'Die plates and knife systems',
        text: 'Die plates manufactured to precise tolerances, blade holders and pelletizer knives in standard and custom specifications.',
        href: '/products/granulation-tools/',
      },
      {
        name: 'Wear-protected screw elements',
        text: 'Screw elements from 30 to 380 mm, wear-protected barrel housings and screw shafts in 1.2343 ESU.',
        href: '/products/extrusion-components/',
      },
      {
        name: 'Stainless steel pressure vessels',
        text: 'Pressure-resistant vessels in 1.4404 and 1.4571, built to customer drawings in custom volumes and geometries.',
        href: '/products/stainless-steel-vessels/',
      },
      {
        name: 'Valves',
        text: 'Control, gate, slide, ball and safety valves with full documentation and CE certificates.',
        href: '/products/valves-flow-control/',
      },
      {
        name: 'Pumps, fittings, flanges and PLCs',
        text: 'Pumps, gears and motors; pipes, flanges, fittings and bolts; sensors, instruments and PLCs.',
        href: '/products/industrial-spare-parts/',
      },
      {
        name: 'Sensor assemblies',
        text: 'Thermocouples and PT100–PT1000 resistance thermometers with connection heads, connectors and compression fittings.',
        href: '/products/temperature-measurement/',
      },
      {
        name: 'Custom-engineered spare parts',
        text: 'Parts sourced or made to OEM reference, drawing or material specification.',
        href: '/services/spare-parts-procurement/',
      },
    ],
    products: ['granulation-tools', 'extrusion-components', 'extrusion-heater-plates', 'stainless-steel-vessels', 'valves-flow-control', 'industrial-spare-parts'],
    services: ['spare-parts-procurement', 'technical-consulting'],
    topic: 'Equipment & spare parts',
    faq: [
      {
        q: 'Can TORQRON manufacture components to our drawings?',
        a: 'Yes, for several product groups. Stainless steel vessels are built according to customer drawings in 1.4404 and 1.4571, die plates are custom-engineered for specific polymer types, screw elements are manufactured according to OEM part numbers, and heater plates are built to customer specifications.',
      },
      {
        q: 'Which machines are available for machined parts?',
        a: 'The machine park includes 5-axis machining centers with travel paths up to 1,250 mm, CNC lathes and turning-milling centers with turning diameters up to 1,100 mm, and two 3D coordinate measuring machines from Wenzel. The full list is on the manufacturing capabilities page.',
      },
      {
        q: 'Which steel are your extruder screw shafts made from?',
        a: '1.2343 ESU, a high-alloy hot-work tool steel produced by electroslag remelting, which gives a cleaner and tougher material. The shafts are engineered for maximum torsional strength and heat-treated for a longer service life.',
      },
    ],
  },

  chemical: {
    title: 'Components for the Chemical Industry',
    description:
      'Components for the chemical industry: stainless steel filters and vessels, valves, PT100–PT1000 sensors and resistant filter media for aggressive media.',
    h1: 'Components for the chemical industry',
    lede: 'Filtration, vessels, valves and sensors for aggressive media and high temperatures.',
    focus: '50% 50%',
    heading: 'Aggressive media, high temperatures',
    intro: [
      'Chemical processing puts components under aggressive media, high temperatures and demanding process conditions. TORQRON supplies components for the chemical industry that are chosen for these loads: stainless steel filters and vessels, high-grade valves, temperature sensors and filter media that resist chemicals and heat.',
      'Material choice decides service life. Vessels and integrated filter baskets are made from 1.4404 and 1.4571, molybdenum-alloyed austenitic stainless steels used where corrosion resistance matters, and filter media are available in PTFE, PPS, P84® and Nomex®. For compatibility questions, <a href="/services/technical-consulting/">technical consulting</a> supports material and part selection.',
    ],
    audience: 'the chemical industry',
    uses: [
      'Chemical reactors',
      'Thermal stabilization processes',
      'Industrial filtration units',
      'Corrosion-resistant piping and valves',
      'Solvent-resistant additive handling',
      'Temperature monitoring points',
    ],
    offerings: [
      {
        name: 'Stainless steel filters and resistant filter media',
        text: 'Filter inserts, PTFE/ePTFE membrane elements, and sleeves in PPS, P84® and Nomex®, with antistatic and high-temperature variants.',
        href: '/products/industrial-filtration/',
      },
      {
        name: 'Stainless steel vessels',
        text: 'Containers and pressure-resistant vessels in 1.4404 and 1.4571, built according to customer drawings.',
        href: '/products/stainless-steel-vessels/',
      },
      {
        name: 'High-grade valve systems',
        text: 'Control, gate, slide, ball and safety valves for corrosion-resistant piping, with full documentation.',
        href: '/products/valves-flow-control/',
      },
      {
        name: 'Temperature sensors',
        text: 'PT100–PT1000 resistance thermometers and thermocouples for reactors and other monitoring points.',
        href: '/products/temperature-measurement/',
      },
      {
        name: 'Specialty additives',
        text: 'Additives for polymer-related reactions, including heat stabilizers, acid scavengers and processing aids.',
        href: '/products/plastic-additives/',
      },
    ],
    products: ['industrial-filtration', 'stainless-steel-vessels', 'valves-flow-control', 'temperature-measurement', 'plastic-additives', 'sealing-technology'],
    services: ['technical-consulting', 'spare-parts-procurement'],
    topic: 'Industrial filtration',
    faq: [
      {
        q: 'Which stainless steel grades do you use for vessels and filter baskets?',
        a: '1.4404 and 1.4571. Both are molybdenum-alloyed austenitic stainless steels (comparable to 316L and 316Ti); 1.4571 is additionally stabilized with titanium. Vessels are built according to customer drawings in custom volumes and geometries, including pressure-resistant configurations.',
      },
      {
        q: 'Which filter media are suitable for aggressive media and high temperatures?',
        a: 'Filter elements are available with PTFE/ePTFE membranes and in antistatic and high-temperature variants; filter sleeves and bags come in PPS, P84®, Nomex®, PTFE, glass fiber, PES and PP. The right medium depends on temperature, chemistry and dust or liquid load, which technical consulting can help assess.',
      },
      {
        q: 'Do your valves come with documentation?',
        a: 'Yes. Control, gate, slide, ball and safety valves are supplied with full documentation and CE certificates.',
      },
    ],
  },

  'logistics-supply-chain': {
    title: 'Bulk Handling, Conveying & Bagging Components',
    description:
      'Bulk handling components for plants: filter bags and sleeves, support baskets, valves, fittings, packaging line spares and lubricants for conveying and silos.',
    h1: 'Components for bulk handling, conveying and bagging',
    lede: 'Parts for the transfer, storage and handling of bulk materials in industrial plants.',
    focus: '50% 50%',
    heading: 'From silo to pallet',
    intro: [
      'Bulk materials such as polymer pellets and powders are conveyed, stored, fed and bagged many times before they leave a plant. TORQRON supplies components for bulk handling in industrial plants: filter bags and sleeves for pneumatic conveying and dust collection, stainless steel support baskets, valves and fittings, spare parts for bagging and packaging lines, and lubricants for maintenance.',
      'Every pneumatic conveying line and silo vent relies on filter media that separate dust from the transport air, while the support basket keeps the bag in shape against the pressure difference. Sourcing and consolidating these parts is offered as a separate service: see <a href="/services/logistics-supply-chain/">supply chain and logistics services</a> for consolidated sourcing, documentation and worldwide delivery.',
    ],
    audience: 'bulk handling and conveying',
    uses: [
      'Pneumatic conveying systems',
      'Silo loading and unloading',
      'Bagging and palletizing units',
      'Storage and warehousing systems',
      'Spare part and equipment sourcing',
      'Procurement consolidation',
    ],
    offerings: [
      {
        name: 'Filter bags, sleeves and support baskets',
        text: 'Air and dust filter bags and sleeves in PP, PES, glass fiber, P84®, Nomex®, PPS and PTFE, with stainless steel support baskets.',
        href: '/products/industrial-filtration/',
      },
      {
        name: 'Valves and industrial fittings',
        text: 'Gate, slide, ball, control and safety valves for silo, conveying and utility lines, with full documentation.',
        href: '/products/valves-flow-control/',
      },
      {
        name: 'Packaging line spare parts',
        text: 'Spare parts for packaging lines and for storage and conveying equipment, sourced to part number.',
        href: '/products/industrial-spare-parts/',
      },
      {
        name: 'Stretch film for palletizing',
        text: 'Stretch film from 80 to 160 micron for fully automated pallet wrapping.',
        href: '/products/stretch-film/',
      },
      {
        name: 'Lubricants and maintenance items',
        text: 'Original Shell® oils, Mobil and Fuchs lubricants and anti-foam agents.',
        href: '/products/oils-lubricants/',
      },
      {
        name: 'Supply chain and logistics services',
        text: 'Consolidated sourcing, documentation and worldwide delivery coordinated by TORQRON.',
        href: '/services/logistics-supply-chain/',
      },
    ],
    products: ['industrial-filtration', 'valves-flow-control', 'industrial-spare-parts', 'stretch-film', 'oils-lubricants'],
    services: ['logistics-supply-chain', 'spare-parts-procurement'],
    topic: 'Industrial filtration',
    faq: [
      {
        q: 'Which filter media are used for pneumatic conveying and dust collection?',
        a: 'Filter sleeves and bags in PP, PES, glass fiber, P84®, Nomex®, PPS and PTFE, designed for dust collectors, pneumatic conveying and polymer filtration. Stainless steel support baskets hold the bags in shape during operation and can be produced quickly for urgent replacements.',
      },
      {
        q: 'Which stretch film suits automated palletizing?',
        a: 'TORQRON stretch film is engineered for fully automated pallet wrapping, in thicknesses from 80 to 160 micron, with a tensile strength of about 71 MPa and a breaking elongation of 780–925 %. It protects goods from moisture, dust and physical impacts during transport and storage.',
      },
      {
        q: 'Can TORQRON also handle sourcing and delivery for these parts?',
        a: 'Yes. The supply chain and logistics service covers procurement consolidation through a qualified supplier network, documentation and compliance, and worldwide delivery under Incoterms 2010.',
      },
    ],
  },

  packaging: {
    title: 'Components for Packaging & Bagging Operations',
    description:
      'Components for packaging operations: stretch film, filter media, conveyor parts, motors and gearboxes, valves, sensors and lubricants for bagging stations.',
    h1: 'Components for packaging operations',
    lede: 'Stretch film and spare parts for packaging lines, bagging stations and granulate handling.',
    focus: '50% 60%',
    heading: 'Film, bagging and final product handling',
    intro: [
      'Packaging is the last step before polymer granulate leaves the plant. TORQRON supplies components and technical products for packaging operations: stretch film for automated pallet wrapping, filter media and housings, conveyor spare parts, motors, drives and gearboxes, valves, process sensors and lubricants.',
      'When a bagging station or conveyor stops, finished product backs up into storage, so replacement parts are usually needed quickly. <a href="/services/spare-parts-procurement/">Spare parts procurement</a> covers packaging lines and storage and conveying equipment, identified from a part number, a drawing or a photo. TORQRON <a href="/products/stretch-film/">stretch film</a> is available from 80 to 160 micron and is suitable for direct food contact.',
    ],
    audience: 'packaging operations',
    uses: [
      'Packaging lines',
      'Bagging stations',
      'Industrial packaging systems for polymers',
      'Conveyor and handling systems',
      'Granulate storage and final product handling',
    ],
    offerings: [
      {
        name: 'Stretch film',
        text: 'Film from 80 to 160 micron for fully automated pallet wrapping, with a breaking elongation of 780–925 %.',
        href: '/products/stretch-film/',
      },
      {
        name: 'Filter media and housings',
        text: 'Filter elements, sleeves and bags for dust collection at bagging and conveying points.',
        href: '/products/industrial-filtration/',
      },
      {
        name: 'Conveyor parts, motors, drives and gearboxes',
        text: 'Pumps, gears and motors, packaging line parts and storage and conveying equipment.',
        href: '/products/industrial-spare-parts/',
      },
      {
        name: 'Valves and fittings',
        text: 'Control, gate, slide, ball and safety valves with full documentation and CE certificates.',
        href: '/products/valves-flow-control/',
      },
      {
        name: 'Process sensors',
        text: 'Thermocouples, resistance thermometers and plug connectors for process monitoring.',
        href: '/products/temperature-measurement/',
      },
      {
        name: 'Industrial oils and lubricants',
        text: 'Original Shell® oils and Mobil and Fuchs lubricants from certified manufacturers.',
        href: '/products/oils-lubricants/',
      },
    ],
    products: ['stretch-film', 'industrial-filtration', 'industrial-spare-parts', 'valves-flow-control', 'temperature-measurement', 'oils-lubricants'],
    services: ['spare-parts-procurement', 'installation-on-site'],
    topic: 'Stretch film',
    faq: [
      {
        q: 'What are the technical data of your stretch film?',
        a: 'Thickness from 80 to 160 micron, tensile strength of about 71 MPa, breaking elongation of 780–925 % and a coefficient of friction of 0.30–0.31 (film/film, tested per ASTM D1894). It operates within a temperature range of –5 to 50 °C.',
      },
      {
        q: 'Is the stretch film suitable for food packaging?',
        a: 'Yes. It is suitable for direct food contact and compliant with the regulations of major countries. Besides food, it is used in the petrochemical, industrial and construction sectors.',
      },
      {
        q: 'Can you supply spare parts for bagging and conveying equipment?',
        a: 'Yes. The range covers conveyor spare parts, motors, drives and gearboxes, valves and fittings, process sensors and lubricants. Parts can be identified from a part number, OEM reference, drawing, application description or photo.',
      },
    ],
  },
};

export function faqSchema(faq: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

/** Registry entries for a list of slugs, in that order. Throws on an unknown slug so a typo fails the build. */
export function bySlug<T extends { slug: string }>(list: T[], slugs: string[]): T[] {
  return slugs.map((s) => list.find((x) => x.slug === s) ?? fail(`Unknown slug: ${s}`));
}

function fail(msg: string): never {
  throw new Error(msg);
}

// Offering links must point at a page that exists.
const pages = new Set([...products.map((p) => `/products/${p.slug}/`), ...services.map((s) => `/services/${s.slug}/`), '/capabilities/']);
for (const [slug, c] of Object.entries(applicationContent)) {
  for (const o of c.offerings) if (o.href && !pages.has(o.href)) fail(`applications.ts, ${slug}: unknown link ${o.href}`);
}
