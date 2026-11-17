// Long-form content of the product detail pages (/products/<slug>/), keyed by the slugs in site.ts.
// Facts come from _source/ only; neutral engineering context is marked as such in the wording.
// `intro` paragraphs may contain inline links (rendered as HTML); everything else is plain text.

export interface RelatedLink {
  slug: string;
  /** one line on what this product does there */
  text: string;
}

export interface ProductContent {
  /** <title> without the brand, ≤ 48 characters */
  title: string;
  /** meta description, 140–160 characters */
  description: string;
  h1: string;
  lede: string;
  /** h2 above the intro: the benefit */
  benefit: string;
  intro: string[];
  /** "Key facts" box, 4–6 short lines */
  facts: string[];
  specs: { title: string; items: string[] }[];
  /** file in src/assets/img; .png = transparent cut-out shown on a stage */
  photo?: { src: string; alt: string };
  applications: RelatedLink[];
  services: RelatedLink[];
  /** subject of the request e-mail (/contact/?topic=…) */
  topic: string;
  /** label of the primary button */
  cta: string;
  /** title of the closing CtaBar */
  ctaTitle: string;
  faq: { q: string; a: string }[];
}

export const productContent: Record<string, ProductContent> = {
  'granulation-tools': {
    title: 'Pelletizer Die Plates, Knives & Blade Holders',
    description:
      'Pelletizer die plates, blade holders and titanium carbide knives for underwater and air-cooled pelletizers. OEM-compatible, refurbishment up to 1200 mm.',
    h1: 'Pelletizer die plates and knives',
    lede: 'Granulation tools for underwater and air-cooled pelletizing, from HDPE and PP to engineering polymers.',
    benefit: 'Consistent pellet quality and longer machine life',
    intro: [
      'In a pelletizer, polymer melt is pressed through the holes of the die plate and cut at the die face by rotating knives. The condition of both parts decides the result: a worn die face, blunt knife edges or a poor fit between knife and plate show up as pellet tails, fines and agglomerates, and eventually as an unplanned stop.',
      'TORQRON supplies pelletizer die plates custom-engineered for the polymer being processed, for underwater and air-cooled systems, together with blade holders and pelletizer knives. The knives are bimetal parts with titanium carbide edges (Nikro 128/143) on a high-strength stainless steel body and fit AST®, Berringer®, Berstorff®, Coperion®, Erema®, Gala® and Nordson BKG® pelletizers. That covers the most frequently replaced underwater pelletizer spare parts from one source.',
      'A worn die plate does not always need replacing. Our <a href="/services/reconditioning-refurbishment/">reconditioning service</a> refurbishes die plates up to 1200 mm with European-standard repair processes and replaces worn knives with titanium carbide knives of premium European manufacture.',
    ],
    facts: [
      'Die plates for underwater and air-cooled systems',
      'For HDPE, LDPE, LLDPE, PP, PC, PS, ABS, PA6/66, PBT, PET',
      'Knife edges in titanium carbide (Nikro 128/143)',
      'High-strength stainless steel knife body',
      'Die plate refurbishing up to 1200 mm',
    ],
    specs: [
      {
        title: 'Die plates',
        items: [
          'Custom-engineered for specific polymer types',
          'Supported polymers: HDPE, LDPE, LLDPE, PP, PC, PS, ABS, PA6/66, PBT, PET',
          'OEM-compatible for major brands',
          'Manufactured to precise tolerances',
          'Available for underwater and air-cooled systems',
          'European-standard surface finishing',
        ],
      },
      {
        title: 'Blade holders and pelletizer knives',
        items: [
          'Bimetal construction with titanium carbide edges (Nikro 128/143)',
          'High-strength stainless steel body',
          'Standard and custom specifications',
          'Compatible with AST®, Berringer®, Berstorff®, Coperion®, Erema®, Gala®, Nordson BKG®',
          'Long service life through optimized wear resistance',
          'Short delivery times',
        ],
      },
      {
        title: 'Refurbishment and replacement',
        items: [
          'Die plate refurbishing for plates up to 1200 mm',
          'European-standard repair processes',
          'Pelletizer knife replacement in titanium carbide, premium European manufacture',
        ],
      },
    ],
    photo: { src: 'pelletizer-rotor-die-cutout.png', alt: 'Pelletizer knife hub with radial knives in front of a die plate with rings of die holes' },
    applications: [
      { slug: 'petrochemical', text: 'Die plates and pelletizer knives for LDPE, LLDPE, HDPE and PP production.' },
      { slug: 'plastics-polymer', text: 'Underwater and air-cooled pelletizing on extrusion, compounding and masterbatch lines.' },
      { slug: 'mechanical-engineering', text: 'Die plates and knife systems for pelletizer manufacturers and extruder OEMs.' },
    ],
    services: [
      { slug: 'reconditioning-refurbishment', text: 'Die plate refurbishing up to 1200 mm and pelletizer knife replacement.' },
      { slug: 'installation-on-site', text: 'Installation, commissioning and troubleshooting at the pelletizer.' },
      { slug: 'spare-parts-procurement', text: 'Further pelletizer and extruder spares, sourced from a part number or drawing.' },
    ],
    topic: 'Granulation tools',
    cta: 'Request die plates or knives',
    ctaTitle: 'Die plates and knives, matched to your pelletizer.',
    faq: [
      {
        q: 'Which pelletizer brands are the knives compatible with?',
        a: 'Blade holders and pelletizer knives are supplied for AST®, Berringer®, Berstorff®, Coperion®, Erema®, Gala® and Nordson BKG® pelletizers, in standard or custom specifications. Die plates are made OEM-compatible for major brands. Brand names describe compatibility only.',
      },
      {
        q: 'Which polymers can the die plates be engineered for?',
        a: 'Die plates are custom-engineered for the polymer being processed: HDPE, LDPE, LLDPE, PP, PC, PS, ABS, PA6/66, PBT and PET. They are available for both underwater and air-cooled pelletizing systems.',
      },
      {
        q: 'Can a worn die plate be refurbished instead of replaced?',
        a: 'Yes. Die plates up to 1200 mm are refurbished with European-standard repair processes as part of our reconditioning service. Worn knives are replaced with titanium carbide knives of premium European manufacture.',
      },
      {
        q: 'What do you need to quote die plates or knives?',
        a: 'A part number or OEM reference is the fastest route. A drawing, the pelletizer make and model, the polymer you process or a photo of the worn part also lets our team identify the right item.',
      },
    ],
  },

  'extrusion-components': {
    title: 'Twin-Screw Extruder Spare Parts & Screw Elements',
    description:
      'Twin-screw extruder spare parts in OEM-equivalent quality: screw elements from 30 to 380 mm, screw shafts in 1.2343 ESU and wear-protected barrel housings.',
    h1: 'Extruder screw elements, barrels and shafts',
    lede: 'Twin-screw extruder spare parts in OEM-equivalent quality, from 30 to 380 mm screw diameter.',
    benefit: 'OEM-equivalent parts for the process section',
    intro: [
      'Screw elements, screw shafts and barrel housings form the process section of a twin-screw extruder. Abrasive fillers, glass fibers and corrosive additives gradually wear down the flights and the barrel bore. The clearance between screw and barrel grows, and conveying efficiency, throughput and product consistency fall with it.',
      'TORQRON supplies twin-screw extruder spare parts manufactured to OEM-equivalent quality. Screw elements from 30 to 380 mm in diameter are made according to OEM part numbers across the full modular element range. Screw shafts in 1.2343 ESU high-alloy tool steel are engineered for maximum torsional strength and heat-treated for a long service life. Barrel housings come in standard and wear-protected versions, tailored to the extruder brand and configuration.',
      'Send us the OEM part number, a drawing or the element designation. Our <a href="/services/technical-consulting/">technical consulting</a> team checks compatibility, and <a href="/services/spare-parts-procurement/">spare parts procurement</a> handles documentation and quality control through to delivery.',
    ],
    facts: [
      'Screw element diameters 30–380 mm',
      'Elements made to OEM part numbers',
      'Full modular element range',
      'Screw shafts in 1.2343 ESU tool steel',
      'Standard and wear-protected barrel housings',
    ],
    specs: [
      {
        title: 'Extruder screw elements',
        items: ['Diameters: 30–380 mm', 'Manufactured according to OEM part numbers', 'Full modular element range'],
      },
      {
        title: 'Extruder screw shafts',
        items: ['Material: 1.2343 ESU high-alloy tool steel', 'Engineered for maximum torsional strength', 'Heat-treated for extended lifespan'],
      },
      {
        title: 'Extruder barrel housings',
        items: ['Standard and wear-protected versions', 'Tailored to specific extruder brands and configurations', 'Precision machining for thermal stability'],
      },
    ],
    photo: { src: 'extruder-screws.jpg', alt: 'Extruder screw shaft with a flanged end in a machine shop' },
    applications: [
      { slug: 'plastics-polymer', text: 'Twin-screw and single-screw extrusion, compounding and masterbatch lines.' },
      { slug: 'petrochemical', text: 'Extruder screws, barrels and shafts for polyolefin production.' },
      { slug: 'mechanical-engineering', text: 'Wear-protected screw elements and precision-machined tool steel parts for extruder OEMs.' },
    ],
    services: [
      { slug: 'technical-consulting', text: 'Compatibility checks and material selection for screw and barrel parts.' },
      { slug: 'spare-parts-procurement', text: 'Sourcing with supplier selection, documentation and quality control.' },
      { slug: 'installation-on-site', text: 'Installation, commissioning and troubleshooting on the extruder.' },
    ],
    topic: 'Extrusion components',
    cta: 'Get a quote for extruder parts',
    ctaTitle: 'Screw elements and barrels, made to OEM part numbers.',
    faq: [
      {
        q: 'Which screw element diameters are available?',
        a: 'Screw elements are available from 30 to 380 mm in diameter, across the full modular element range, and are manufactured according to OEM part numbers.',
      },
      {
        q: 'What material are the screw shafts made of?',
        a: 'Screw shafts are made of 1.2343 ESU, a high-alloy hot-work tool steel produced by electroslag remelting, which gives a cleaner and more uniform structure. The shafts are engineered for maximum torsional strength and heat-treated for a long service life.',
      },
      {
        q: 'When is a wear-protected barrel housing worth it?',
        a: 'Compounds with abrasive fillers such as glass fiber or minerals, or with corrosive components, wear the barrel bore much faster than unfilled polymers. Wear-protected housings are intended for these conditions; standard versions suit less demanding formulations. Both are tailored to the extruder brand and configuration.',
      },
      {
        q: 'What do you need to identify a screw element?',
        a: 'The OEM part number is the fastest route. Otherwise a drawing, the extruder make and model with the screw diameter, the element type or a photo of the part is enough for our team to identify it.',
      },
    ],
  },

  'extrusion-heater-plates': {
    title: 'Extrusion Heater Plates in Aluminum and Steel',
    description:
      'Extrusion heater plates in aluminum, mild or stainless steel: up to 600 °C and 35 W/in², 7–16 mm thick, with replaceable ceramic elements. Made to spec.',
    h1: 'Extrusion heater plates',
    lede: 'Plate heaters for fast heat-up and stable operation of extrusion lines, up to 600 °C.',
    benefit: 'Even heat and quick element changes',
    intro: [
      'Plate heaters are mounted on the flat surfaces of extrusion tooling, such as dies, adapters and blocks, and supply the heat that brings a line up to temperature and holds it there. When a heater fails, its zone drifts out of tolerance and product quality suffers until it is replaced.',
      'TORQRON’s extrusion heater plates are made from aluminum, mild steel or stainless steel to match the application and operating conditions, and serve as direct replacements for standard cast plate heaters. Integrated square-section tubular heating elements give strength and reliability; the ceramic heating elements are fully removable and replaceable, which keeps downtime short.',
      'Aluminum plates are suitable up to 300 °C and 25 W/in² power density, mild and stainless steel plates up to 600 °C and 35 W/in². Standard thickness is 7 to 16 mm, with thicker versions on request. For control, the plates pair with our <a href="/products/temperature-measurement/">thermocouples and resistance thermometers</a>.',
    ],
    facts: [
      'Aluminum: up to 300 °C, 25 W/in²',
      'Mild or stainless steel: up to 600 °C, 35 W/in²',
      'Thickness 7–16 mm, thicker on request',
      'Direct replacement for cast plate heaters',
      'Removable, replaceable ceramic elements',
    ],
    specs: [
      {
        title: 'Construction',
        items: [
          'Aluminum, mild steel or stainless steel to match application and operating conditions',
          'Direct-replacement solution for standard cast plate heaters',
          'Integrated square-section tubular heating elements',
          'Fully removable and replaceable ceramic heating elements',
        ],
      },
      {
        title: 'Features and custom options',
        items: [
          'Standard thickness 7–16 mm; thicker versions on request',
          'Integrated insulation for reduced heat loss',
          'Louvered, stand-off terminal box for high-temperature safety',
          'Built to customer specifications',
        ],
      },
      {
        title: 'Operating performance',
        items: ['Aluminum: up to 300 °C and 25 W/in² power density', 'Mild or stainless steel: up to 600 °C and 35 W/in² power density'],
      },
    ],
    applications: [
      { slug: 'plastics-polymer', text: 'Heating of dies and tooling on extrusion and compounding lines.' },
      { slug: 'mechanical-engineering', text: 'Heater plates built to specification for extruder OEMs.' },
    ],
    services: [
      { slug: 'technical-consulting', text: 'Choosing material, power density and thickness for each heating zone.' },
      { slug: 'spare-parts-procurement', text: 'Replacement heaters sourced with documentation and quality control.' },
      { slug: 'installation-on-site', text: 'Installation and troubleshooting on the line.' },
    ],
    topic: 'Extrusion heater plates',
    cta: 'Request heater plates',
    ctaTitle: 'Heater plates, built to your dimensions.',
    faq: [
      {
        q: 'Aluminum or steel: which heater plate do I need?',
        a: 'It depends on the temperature and power density of the zone. Aluminum plates are suitable up to 300 °C and 25 W/in². Mild steel and stainless steel plates are suitable up to 600 °C and 35 W/in².',
      },
      {
        q: 'Can these plates replace our existing cast plate heaters?',
        a: 'Yes. They are designed as direct replacements for standard cast plate heaters and are built to customer specifications. Send the dimensions, voltage, wattage and terminal position, or a drawing of the existing heater.',
      },
      {
        q: 'What happens when a heating element fails?',
        a: 'The ceramic heating elements are fully removable and replaceable, so a failed element can be exchanged without replacing the whole plate.',
      },
    ],
  },

  'industrial-filtration': {
    title: 'Industrial Filter Elements, Bags and Baskets',
    description:
      'Industrial filtration for polymer plants: stainless steel filter inserts, fleece and PTFE membrane filter elements, filter bags and stainless support baskets.',
    h1: 'Industrial filtration',
    lede: 'Filter inserts, elements, sleeves, bags and stainless steel support baskets for polymer processing and dust collection.',
    benefit: 'Filter media matched to the process',
    intro: [
      'Industrial filtration protects product quality and equipment in polymer plants. Inserts and screens hold back contaminants in the process stream, while filter elements, sleeves and bags in dust collectors and pneumatic conveying separate fines and dust from the air. The right medium depends on temperature, the chemistry of the process and whether moisture or oil is present.',
      'TORQRON supplies stainless steel filter inserts in all industry-standard dimensions and filter elements in polyester or polypropylene fleece, with hydrophobic/oleophobic, antistatic, high-temperature and PTFE/ePTFE membrane options and optional integrated stainless steel baskets in 1.4404 or 1.4571. Filter sleeves and bags are available in PP, PES, glass fiber, P84®, Nomex®, PPS and PTFE.',
      'Stainless steel support baskets are corrosion-resistant, mechanically strong and produced quickly for urgent replacements. Filter media can be ordered together with other consumables through our <a href="/services/logistics-supply-chain/">consolidated logistics service</a>.',
    ],
    facts: [
      'Stainless steel inserts in all standard dimensions',
      'Polyester and polypropylene fleece elements',
      'PTFE/ePTFE membrane options',
      'Bags in PP, PES, glass fiber, P84®, Nomex®, PPS, PTFE',
      'Optional baskets in 1.4404 / 1.4571',
    ],
    specs: [
      {
        title: 'Stainless steel filter inserts',
        items: ['Premium mesh quality', 'Optimized flow performance', 'Available in all industry-standard dimensions'],
      },
      {
        title: 'Filter elements',
        items: [
          'Materials: polyester fleece, polypropylene fleece',
          'Hydrophobic/oleophobic options',
          'Antistatic and high-temperature variants',
          'PTFE/ePTFE membrane options',
          'Optional integrated stainless steel baskets (1.4404 / 1.4571)',
        ],
      },
      {
        title: 'Filter sleeves and bags',
        items: ['PP, PES, glass fiber, P84®, Nomex®, PPS, PTFE', 'For dust collectors, pneumatic conveying and polymer filtration'],
      },
      {
        title: 'Stainless steel support baskets',
        items: ['Corrosion-resistant', 'High mechanical strength', 'Rapid production for urgent replacements'],
      },
    ],
    photo: { src: 'filter-bags-cartridges.jpg', alt: 'Filter bags and pleated filter cartridges laid out on a grating in an industrial warehouse' },
    applications: [
      { slug: 'plastics-polymer', text: 'Filtration in polymer melt and dust collection.' },
      { slug: 'petrochemical', text: 'Stainless steel filtration for reactor filtration systems.' },
      { slug: 'chemical', text: 'Resistant filter media such as PTFE, PPS, P84® and Nomex® for aggressive processes.' },
      { slug: 'logistics-supply-chain', text: 'Air and dust filter bags, sleeves and support baskets for pneumatic conveying and silos.' },
    ],
    services: [
      { slug: 'technical-consulting', text: 'Choosing the filter medium for temperature, chemistry and moisture.' },
      { slug: 'logistics-supply-chain', text: 'Consolidated supply of filter media with other plant consumables.' },
      { slug: 'spare-parts-procurement', text: 'Replacement filter parts sourced from a part number or drawing.' },
    ],
    topic: 'Industrial filtration',
    cta: 'Request filter media',
    ctaTitle: 'Filter media and support baskets for your plant.',
    faq: [
      {
        q: 'Which filter media are available for sleeves and bags?',
        a: 'Sleeves and bags are available in PP, PES, glass fiber, P84®, Nomex®, PPS and PTFE. As a rule, polypropylene and polyester cover moderate temperatures, while PPS, P84®, Nomex®, glass fiber and PTFE are chosen where temperature or chemical attack is higher.',
      },
      {
        q: 'What do hydrophobic/oleophobic and antistatic options do?',
        a: 'Hydrophobic/oleophobic finishes repel water and oil so that moist or oily dust does not blind the medium. Antistatic variants dissipate electrostatic charge, which matters for combustible dust and pneumatic conveying of polymer powders.',
      },
      {
        q: 'Can you supply support baskets at short notice?',
        a: 'Stainless steel support baskets are produced rapidly for urgent replacements. They are corrosion-resistant and mechanically strong. Send the basket dimensions or a drawing with your request.',
      },
    ],
  },

  'temperature-measurement': {
    title: 'Thermocouples and PT100 Resistance Thermometers',
    description:
      'Thermocouples, PT100–PT1000 resistance thermometers, connection heads, plug connectors and sensor assemblies for extruders, reactors and filtration units.',
    h1: 'Temperature measurement and control',
    lede: 'Thermocouples, PT100–PT1000 resistance thermometers and sensor assemblies for high-temperature service.',
    benefit: 'Reliable readings where the process runs hot',
    intro: [
      'Temperature is one of the most closely controlled variables in polymer and chemical processing. Thermocouples generate a voltage at the junction of two dissimilar metals and cover a wide temperature range; resistance thermometers such as the PT100 and PT1000 measure the change in resistance of a platinum element and offer high accuracy and stability.',
      'TORQRON supplies thermocouples, PT100–PT1000 resistance thermometers, connection heads, standard and mini plug connectors and compression fittings, as well as sensor assemblies for extruders, reactors and filtration units. To match a replacement, the sensor type, sheath diameter, insertion length, process connection and operating temperature are the key details.',
    ],
    facts: [
      'Thermocouples',
      'Resistance thermometers PT100–PT1000',
      'Connection heads, standard and mini plugs',
      'Compression fittings',
      'Assemblies for extruders, reactors, filtration units',
    ],
    specs: [
      {
        title: 'Range',
        items: [
          'Thermocouples',
          'Resistance thermometers (PT100–PT1000)',
          'Connection heads',
          'Standard and mini plug connectors',
          'Compression fittings',
          'Sensor assemblies for extruders, reactors and filtration units',
        ],
      },
      {
        title: 'What to specify when ordering',
        items: [
          'Part number, or a photo of the existing sensor',
          'Sensor type: thermocouple type or PT100/PT1000',
          'Sheath diameter and insertion length',
          'Process connection and connection head or plug',
          'Operating temperature and medium',
        ],
      },
    ],
    applications: [
      { slug: 'plastics-polymer', text: 'Temperature measurement and control on extrusion and pelletizing lines.' },
      { slug: 'petrochemical', text: 'Process sensors (RTDs and thermocouples) for high-temperature zones.' },
      { slug: 'chemical', text: 'PT100–PT1000 sensors at temperature monitoring points.' },
    ],
    services: [
      { slug: 'spare-parts-procurement', text: 'Replacement sensors identified from a part number or photo.' },
      { slug: 'technical-consulting', text: 'Sensor selection and compatibility checks.' },
    ],
    topic: 'Temperature measurement',
    cta: 'Request temperature sensors',
    ctaTitle: 'Replacement sensors, identified from a photo.',
    faq: [
      {
        q: 'Thermocouple or resistance thermometer: which fits?',
        a: 'Thermocouples are robust, respond quickly and cover very high temperatures. Resistance thermometers such as the PT100 are more accurate and stable over time within their range. The choice depends on the temperature, the accuracy required and what the existing controller accepts.',
      },
      {
        q: 'What is the difference between PT100 and PT1000?',
        a: 'Both use a platinum element. A PT100 has a resistance of 100 Ω at 0 °C, a PT1000 has 1000 Ω. The higher resistance of the PT1000 makes it less sensitive to the resistance of the connecting leads.',
      },
      {
        q: 'What do you need to supply a replacement sensor?',
        a: 'A part number is the fastest route. Otherwise the sensor type, sheath diameter, insertion length, process connection, connection head or plug and the operating temperature, or simply a photo of the existing sensor.',
      },
    ],
  },

  'stainless-steel-vessels': {
    title: 'Stainless Steel Vessels in 1.4404 and 1.4571',
    description:
      'Stainless steel containers and pressure-resistant vessels in 1.4404 and 1.4571, built to customer drawings with custom volumes and geometries.',
    h1: 'Stainless steel containers and vessels',
    lede: 'Containers and pressure-resistant vessels in 1.4404 and 1.4571, built to your drawing.',
    benefit: 'Built to your drawing, in the grade the medium requires',
    intro: [
      'Stainless steel vessels store, mix and buffer media in chemical, polymer and industrial plants. 1.4404 (316L) and 1.4571 (316Ti) are molybdenum-alloyed austenitic grades with good resistance to chlorides and many acids. 1.4404 resists intergranular corrosion after welding through its low carbon content; 1.4571 is stabilized with titanium for the same purpose.',
      'TORQRON supplies stainless steel containers and vessels in 1.4404 and 1.4571, built according to customer drawings, in pressure-resistant configurations and with custom volumes and geometries. A drawing is the basis for a quote; without one, the volume, main dimensions, operating pressure and temperature, the medium and the nozzle layout define the vessel.',
    ],
    facts: ['Materials 1.4404 and 1.4571', 'Built to customer drawings', 'Pressure-resistant configurations', 'Custom volumes and geometries'],
    specs: [
      {
        title: 'Range',
        items: ['Materials: 1.4404, 1.4571', 'Built according to customer drawings', 'Pressure-resistant configurations', 'Custom volumes and geometries'],
      },
      {
        title: 'What to specify when ordering',
        items: [
          'Drawing, or volume and main dimensions',
          'Operating pressure and temperature',
          'Medium',
          'Nozzles, manways and supports',
          'Required documentation',
        ],
      },
    ],
    applications: [
      { slug: 'chemical', text: 'Stainless steel vessels for aggressive media and demanding processes.' },
      { slug: 'mechanical-engineering', text: 'Stainless steel pressure vessels for machinery builders.' },
    ],
    services: [
      { slug: 'technical-consulting', text: 'Material selection between 1.4404 and 1.4571 for the medium.' },
      { slug: 'logistics-supply-chain', text: 'Worldwide delivery with documentation and compliance support.' },
    ],
    topic: 'Stainless steel vessels',
    cta: 'Request a vessel quote',
    ctaTitle: 'Stainless steel vessels, built to your drawing.',
    faq: [
      {
        q: 'What is the difference between 1.4404 and 1.4571?',
        a: 'Both are molybdenum-alloyed austenitic stainless steels with similar corrosion resistance. 1.4404 (316L) has a low carbon content; 1.4571 (316Ti) is stabilized with titanium. Both measures protect the weld zone against intergranular corrosion.',
      },
      {
        q: 'Can you build a vessel to our own drawing?',
        a: 'Yes. Containers and vessels are built according to customer drawings, with custom volumes and geometries and in pressure-resistant configurations where required.',
      },
      {
        q: 'What information is needed for a quote?',
        a: 'A drawing is best. Otherwise the volume and main dimensions, operating pressure and temperature, the medium, the nozzles and supports, and the documentation you require.',
      },
    ],
  },

  'plastic-additives': {
    title: 'Polymer Antioxidants, UV Stabilizers and HALS',
    description:
      'Plastic additives for polymer stability: primary antioxidants, phosphites, UV stabilizers, HALS, blends and tailored one-packs for polyolefins and plastics.',
    h1: 'Plastic additives',
    lede: 'Antioxidants, phosphites, UV stabilizers, HALS and tailored one-packs for polyolefins, engineering plastics and rubber.',
    benefit: 'Stability in processing and over the product’s life',
    intro: [
      'Polymers degrade under heat, shear, oxygen and light. Primary antioxidants, typically hindered phenols, scavenge free radicals and protect the polymer over its service life. Secondary antioxidants such as phosphites decompose hydroperoxides during processing and work synergistically with phenolics. UV absorbers and hindered amine light stabilizers (HALS) protect products exposed to sunlight.',
      'TORQRON supplies plastic additives for polymer stability, processing efficiency and long-term durability: primary antioxidants (Evernox series), secondary antioxidants based on phosphites (Everfos series), synergistic blends (B-Blends), tailored one-packs (TOP) and UV stabilizers and HALS (Everstab series). Specialized additives cover nucleating and clarifying agents, acid scavengers, processing aids and heat stabilizers.',
      'Additives are available for LDPE, HDPE, LLDPE, PP, EVA, PET, PBT, PA, POM, PS, ABS, PUR, BR, SBR, SBS, synthetic rubber and adhesives. Datasheets are available on request, and our <a href="/services/technical-consulting/">technical consulting</a> team helps match the package to the polymer and application.',
    ],
    facts: [
      'Primary antioxidants (Evernox)',
      'Phosphite secondary antioxidants (Everfos)',
      'UV stabilizers and HALS (Everstab)',
      'Synergistic blends and tailored one-packs',
      'For polyolefins, engineering plastics, rubber, adhesives',
    ],
    specs: [
      {
        title: 'Categories',
        items: [
          'Primary antioxidants (Evernox series)',
          'Secondary antioxidants, phosphites (Everfos series)',
          'Synergistic blends (B-Blends)',
          'Tailored one-packs (TOP)',
          'UV stabilizers and HALS (Everstab series)',
        ],
      },
      {
        title: 'Specialized additives',
        items: ['Nucleating agents', 'Clarifying agents', 'Acid scavengers', 'Processing aids', 'Heat stabilizers'],
      },
      {
        title: 'Supported polymers',
        items: ['LDPE, HDPE, LLDPE, PP, EVA', 'PET, PBT, PA, POM', 'PS, ABS, PUR', 'BR, SBR, SBS and synthetic rubber', 'Adhesives'],
      },
    ],
    applications: [
      { slug: 'plastics-polymer', text: 'Additive dosing and stabilization on compounding and masterbatch lines.' },
      { slug: 'petrochemical', text: 'Stabilization of LDPE, LLDPE, HDPE and PP.' },
      { slug: 'chemical', text: 'Specialty additives for polymer-related reactions.' },
    ],
    services: [
      { slug: 'technical-consulting', text: 'Application-specific recommendations for the stabilization package.' },
      { slug: 'logistics-supply-chain', text: 'Consolidated sourcing and worldwide delivery (Incoterms 2010).' },
    ],
    topic: 'Plastic additives',
    cta: 'Request additive datasheets',
    ctaTitle: 'Additive datasheets on request.',
    faq: [
      {
        q: 'What is the difference between primary and secondary antioxidants?',
        a: 'Primary antioxidants, usually hindered phenols, trap free radicals and give long-term thermal stability. Secondary antioxidants, usually phosphites, break down hydroperoxides and protect the polymer mainly during processing. Used together, they work synergistically.',
      },
      {
        q: 'What are HALS used for?',
        a: 'Hindered amine light stabilizers protect polymers against degradation by UV light, typically in products used outdoors. TORQRON supplies UV stabilizers and HALS in the Everstab series.',
      },
      {
        q: 'What is a tailored one-pack?',
        a: 'A one-pack combines several additives in a single pre-blended product, so one feeder doses the complete package. Tailored one-packs (TOP) are composed for the specific polymer and application.',
      },
      {
        q: 'Which polymers are covered?',
        a: 'LDPE, HDPE, LLDPE, PP, EVA, PET, PBT, PA, POM, PS, ABS, PUR, BR, SBR, SBS, synthetic rubber and adhesives.',
      },
    ],
  },

  'stretch-film': {
    title: 'Stretch Film for Automated Pallet Wrapping',
    description:
      'Stretch film for fully automated pallet wrapping: 80 to 160 micron, tensile strength ~71 MPa, 780–925 % elongation and suitable for direct food contact.',
    h1: 'Stretch film for pallet wrapping',
    lede: 'Stretch foil from 80 to 160 micron for fully automated pallet wrapping.',
    benefit: 'Secure loads from the wrapper to the destination',
    intro: [
      'TORQRON’s stretch film is engineered for fully automated pallet wrapping. It combines high elasticity with strong puncture resistance, stays stable from –5 to 50 °C and protects goods from moisture, dust and physical impact during transport and storage.',
      'The film is available from 80 to 160 micron, with a tensile strength of about 71 MPa, a breaking elongation of 780–925 % and a film-to-film coefficient of friction of 0.30–0.31, tested per ASTM D1894. It is suitable for direct food contact and complies with the regulations of major countries.',
      'High breaking elongation lets the wrapper pre-stretch the film, so less material holds the load. The film is used in the petrochemical, industrial, construction and food sectors, and supports automation and energy savings on the packaging line.',
    ],
    facts: [
      'Thickness 80–160 micron',
      'Tensile strength ~71 MPa',
      'Breaking elongation 780–925 %',
      'COF 0.30–0.31 (film/film, ASTM D1894)',
      'Suitable for direct food contact',
    ],
    specs: [
      {
        title: 'Technical data',
        items: [
          'Thickness from 80 to 160 micron',
          'Tensile strength: ~71 MPa',
          'Breaking elongation: 780–925 %',
          'Coefficient of friction: 0.30–0.31 (film/film, tested per ASTM D1894)',
          'Temperature range: –5 to 50 °C',
        ],
      },
      {
        title: 'Features and benefits',
        items: [
          'Engineered for fully automated pallet wrapping',
          'High elasticity and strong puncture resistance',
          'Protects against moisture, dust and physical impact',
          'Suitable for direct food contact, compliant with the regulations of major countries',
          'Applied in petrochemical, industrial, construction and food sectors',
        ],
      },
    ],
    applications: [
      { slug: 'packaging', text: 'Pallet wrapping at the end of film, bagging and packaging lines.' },
      { slug: 'logistics-supply-chain', text: 'Bagging and palletizing units for granulate and finished goods.' },
      { slug: 'petrochemical', text: 'Securing palletized polymer bags for transport and storage.' },
    ],
    services: [
      { slug: 'logistics-supply-chain', text: 'Consolidated supply with other consumables and worldwide delivery.' },
      { slug: 'spare-parts-procurement', text: 'Packaging line spare parts from the same source.' },
    ],
    topic: 'Stretch film',
    cta: 'Request stretch film',
    ctaTitle: 'Stretch film from 80 to 160 micron for your wrapper.',
    faq: [
      {
        q: 'Which film thicknesses are available?',
        a: 'The stretch film is available in thicknesses from 80 to 160 micron.',
      },
      {
        q: 'Is the stretch film suitable for food?',
        a: 'Yes. It is suitable for direct food contact and complies with the regulations of major countries.',
      },
      {
        q: 'In which temperature range can the film be used?',
        a: 'The film operates reliably from –5 to 50 °C and maintains its stability across that range.',
      },
    ],
  },

  'sealing-technology': {
    title: 'Sealing Technology for Petrochemical Plants',
    description:
      'Industrial seals for petrochemical plants: O-rings, spring-energized, metallic and high-pressure seals, extruder shaft seals for pumps, valves and reactors.',
    h1: 'Sealing technology',
    lede: 'O-rings, spring-energized, metallic and high-pressure seals for pumps, valves, reactors and extruders.',
    benefit: 'Reliable containment under pressure, heat and aggressive media',
    intro: [
      'Sealing technology for petrochemical environments has to hold under extreme temperatures, high pressures and aggressive chemicals. A leaking seal on a pump, valve or reactor is a safety risk and a production loss at the same time.',
      'TORQRON supplies precision-engineered sealing components: elastomeric O-rings for versatile sealing, spring-energized polymer seals for dynamic and static applications, metallic seals for ultra-high temperatures, radiation and corrosive media, high-pressure seals for critical containment in pumps, valves and process lines, extruder screw shaft sealing for rotating equipment, and composite sealing elements tailored to specialized media and installations.',
      'Seal selection comes down to the medium, temperature, pressure and whether the sealing point is static or dynamic. Elastomers seal by deformation and suit moderate conditions; spring-energized polymer seals keep their contact force where elastomers would swell or harden; metal seals take over where polymers reach their limits. Our <a href="/services/technical-consulting/">technical consulting</a> team checks compatibility for the application.',
    ],
    facts: [
      'O-rings, spring-energized, metallic and composite seals',
      'High-pressure seals for pumps, valves, process lines',
      'Extruder screw shaft sealing',
      'Static and dynamic sealing',
      'Broad chemical compatibility and thermal stability',
    ],
    specs: [
      {
        title: 'Sealing types',
        items: [
          'Elastomeric O-rings for versatile sealing',
          'Spring-energized polymer seals for dynamic and static applications',
          'Metallic seals for ultra-high temperature, radiation and corrosive media',
          'High-pressure seals for critical containment in pumps, valves and process lines',
          'Extruder screw shaft sealing for rotating equipment and extrusion systems',
          'Composite sealing elements tailored for specialized media and installations',
        ],
      },
      {
        title: 'Features and benefits',
        items: [
          'Broad chemical compatibility and thermal stability',
          'Solutions for static and dynamic sealing',
          'Reliable performance at high pressures and in rotating machinery',
          'Suitable for pumps, valves, reactors, extruders and instrumentation',
          'Engineered for long lifespan, energy efficiency and process safety',
        ],
      },
    ],
    applications: [
      { slug: 'petrochemical', text: 'Seals for high-temperature and high-pressure process zones.' },
      { slug: 'chemical', text: 'Seals for reactors and aggressive chemical media.' },
      { slug: 'plastics-polymer', text: 'Extruder screw shaft sealing on extrusion systems.' },
      { slug: 'mechanical-engineering', text: 'Static and dynamic seals for pumps, valves and rotating machinery.' },
    ],
    services: [
      { slug: 'reconditioning-refurbishment', text: 'Packing cup reconditioning with seal ring inspection and high-pressure safety checks.' },
      { slug: 'technical-consulting', text: 'Compatibility checks of seal materials against medium, pressure and temperature.' },
      { slug: 'spare-parts-procurement', text: 'Seals sourced from an OEM reference, drawing or sample.' },
    ],
    topic: 'Sealing technology',
    cta: 'Request seals',
    ctaTitle: 'Seals for your pumps, valves and reactors.',
    faq: [
      {
        q: 'Which seal type suits a dynamic application?',
        a: 'Spring-energized polymer seals are designed for both dynamic and static applications and keep their contact force over a wide temperature range. For rotating extruder shafts, dedicated screw shaft sealing is available.',
      },
      {
        q: 'When are metallic seals used?',
        a: 'Metallic seals are used where polymer and elastomer seals reach their limits: ultra-high temperatures, radiation and corrosive media.',
      },
      {
        q: 'What information is needed to specify a seal?',
        a: 'The part number or the groove dimensions, the medium, temperature and pressure, and whether the sealing point is static or dynamic. A drawing or a photo of the installed seal helps our team identify it.',
      },
    ],
  },

  'oils-lubricants': {
    title: 'Industrial Oils, Lubricants and Anti-Foam Agents',
    description:
      'Industrial oils and lubricants for process plants: original Shell® oils, Mobil and Fuchs lubricants, anti-foam agents and phosphate solutions, sourced directly.',
    h1: 'Oils and lubricants',
    lede: 'Original Shell®, Mobil and Fuchs products, anti-foam agents and phosphate solutions.',
    benefit: 'Original products, sourced directly',
    intro: [
      'TORQRON supplies original high-performance oils and specialty lubricants for industrial plants: original Shell® oils and Mobil and Fuchs lubricants, sourced directly from certified manufacturers, together with anti-foam agents and phosphate solutions.',
      'Equipment manufacturers specify the lubricant for compressors, gearboxes, hydraulic systems and drives by product name or by viscosity grade and standard. Ordering exactly the specified product avoids compatibility questions when topping up or changing oil. For a quote, the product name and manufacturer, or the viscosity grade and specification, plus quantity and container size are enough.',
    ],
    facts: ['Original Shell® oils', 'Mobil and Fuchs lubricants', 'Anti-foam agents', 'Phosphate solutions', 'Direct sourcing from certified manufacturers'],
    specs: [
      {
        title: 'Range',
        items: ['Original Shell® oils', 'Mobil and Fuchs lubricants', 'Anti-foam agents', 'Phosphate solutions', 'Direct sourcing from certified manufacturers'],
      },
      {
        title: 'What to specify when ordering',
        items: ['Product name and manufacturer', 'Or viscosity grade and specification', 'Equipment or application', 'Quantity and container size'],
      },
    ],
    applications: [
      { slug: 'petrochemical', text: 'Specialty oils and lubricants for plant equipment and utilities.' },
      { slug: 'logistics-supply-chain', text: 'Lubricants and maintenance items for conveying and storage equipment.' },
      { slug: 'packaging', text: 'Industrial oils and lubricants for packaging lines.' },
    ],
    services: [
      { slug: 'logistics-supply-chain', text: 'Consolidated sourcing with other maintenance items and worldwide delivery.' },
      { slug: 'spare-parts-procurement', text: 'Lubricants ordered together with spare parts.' },
    ],
    topic: 'Oils & lubricants',
    cta: 'Request oils or lubricants',
    ctaTitle: 'Original oils and lubricants, sourced directly.',
    faq: [
      {
        q: 'Are these original manufacturer products?',
        a: 'Yes. TORQRON supplies original Shell® oils and Mobil and Fuchs lubricants, sourced directly from certified manufacturers.',
      },
      {
        q: 'What are anti-foam agents used for?',
        a: 'Foam in lubricating oils, hydraulic fluids and process liquids reduces lubrication, can cause pump cavitation and makes tanks overflow. Anti-foam agents break up the bubbles and keep the fluid working as intended.',
      },
      {
        q: 'What do you need for a quote?',
        a: 'The product name and manufacturer, or the viscosity grade and specification, together with the quantity and container size.',
      },
    ],
  },

  'valves-flow-control': {
    title: 'Industrial Valves for Petrochemical Plants',
    description:
      'Industrial valves for high-pressure, high-temperature petrochemical service: control, gate, slide, ball and safety valves with CE certificates.',
    h1: 'Valves and flow control',
    lede: 'Control, gate, slide, ball and safety valves for high-pressure, high-temperature service.',
    benefit: 'Documented valves for critical lines',
    intro: [
      'TORQRON supplies certified industrial valves for high-pressure, high-temperature petrochemical environments: control valves, gate valves, slide valves, ball valves and safety valves, all with full documentation and CE certificates.',
      'Each type has its own task. Gate and ball valves isolate a line, control valves regulate flow, pressure or level, slide valves shut off or meter flows such as bulk solids, and safety valves protect equipment against overpressure. To quote a replacement, the valve type, nominal size and pressure rating, end connections, body and trim materials, medium and temperature are the key data; a photo of the nameplate often covers most of it.',
    ],
    facts: ['Control, gate, slide, ball and safety valves', 'For high-pressure, high-temperature service', 'Full documentation', 'CE certificates'],
    specs: [
      {
        title: 'Valve types',
        items: ['Control valves', 'Gate valves', 'Slide valves', 'Ball valves', 'Safety valves', 'All with full documentation and CE certificates'],
      },
      {
        title: 'What to specify when ordering',
        items: [
          'Valve type, nominal size and pressure rating',
          'End connections',
          'Body and trim materials',
          'Medium and operating temperature',
          'For control valves: actuator and positioner',
        ],
      },
    ],
    photo: { src: 'gate-valves.jpg', alt: 'Two gate valves with blue handwheels in a stainless steel pipe system' },
    applications: [
      { slug: 'petrochemical', text: 'Valve systems in critical pipelines.' },
      { slug: 'chemical', text: 'High-grade valves for corrosion-resistant piping.' },
      { slug: 'mechanical-engineering', text: 'Valves, fittings and flanges for machinery builders.' },
      { slug: 'logistics-supply-chain', text: 'Valves and industrial fittings for conveying and silo systems.' },
    ],
    services: [
      { slug: 'spare-parts-procurement', text: 'Replacement valves sourced from a tag, nameplate or datasheet.' },
      { slug: 'installation-on-site', text: 'Installation and commissioning in the existing system.' },
      { slug: 'logistics-supply-chain', text: 'Documentation, compliance and worldwide delivery.' },
    ],
    topic: 'Valves & flow control',
    cta: 'Request valves',
    ctaTitle: 'Valves with full documentation and CE certificates.',
    faq: [
      {
        q: 'Do the valves come with documentation?',
        a: 'Yes. All valves are supplied with full documentation and CE certificates.',
      },
      {
        q: 'Which valve types do you supply?',
        a: 'Control valves, gate valves, slide valves, ball valves and safety valves for high-pressure, high-temperature petrochemical service.',
      },
      {
        q: 'What data do you need to quote a valve?',
        a: 'The valve type, nominal size and pressure rating, end connections, body and trim materials, the medium and its temperature; for control valves also the actuator and positioner. A photo of the nameplate is a good start.',
      },
    ],
  },

  'industrial-spare-parts': {
    title: 'Industrial Spare Parts for Process Plants',
    description:
      'Industrial spare parts for petrochemical and polymer plants: pumps, gears, motors, heat exchangers, instruments, PLCs, pipes and fittings, plus custom sourcing.',
    h1: 'Industrial equipment and spare parts',
    lede: 'Pumps, gears, motors, heat exchangers, instruments and custom-sourced parts for process plants.',
    benefit: 'One source for the parts that keep a plant running',
    intro: [
      'Beyond its own product groups, TORQRON sources industrial spare parts for petrochemical and polymer plants: pumps, gears and motors, heat exchangers, packaging line parts, sensors, instruments and PLCs, pipes, flanges, fittings and bolts, storage and conveying equipment and safety equipment. Parts that are not on any list are sourced to order.',
      'Our technical procurement team identifies items from a part number, OEM reference, drawing, material specification, application description or a photo. The <a href="/services/spare-parts-procurement/">spare parts procurement service</a> manages supplier selection, documentation, quality control and delivery logistics, and <a href="/services/logistics-supply-chain/">consolidated procurement</a> keeps cost and coordination effort down when several items are needed.',
    ],
    facts: ['Pumps, gears, motors', 'Heat exchangers', 'Sensors, instruments, PLCs', 'Pipes, flanges, fittings, bolts', 'Custom spare part sourcing'],
    specs: [
      {
        title: 'Equipment and parts',
        items: [
          'Pumps, gears, motors',
          'Heat exchangers',
          'Packaging lines',
          'Sensors, instruments, PLCs',
          'Pipes, flanges, fittings, bolts',
          'Storage and conveying equipment',
          'Safety equipment',
          'Custom spare part sourcing',
        ],
      },
      {
        title: 'What you can send us',
        items: ['Part number or OEM reference', 'Drawing', 'Material specification', 'Application description', 'Photo of the part or its nameplate'],
      },
    ],
    photo: { src: 'spare-parts-logistics.jpg', alt: 'Gear units, bearings and pipe sections wrapped on pallets in a warehouse, with a forklift behind' },
    applications: [
      { slug: 'petrochemical', text: 'Utilities: pumps, heat exchangers and motors.' },
      { slug: 'mechanical-engineering', text: 'Custom-engineered spare parts and PLC and sensor assemblies.' },
      { slug: 'logistics-supply-chain', text: 'Spare part and equipment sourcing with procurement consolidation.' },
      { slug: 'packaging', text: 'Conveyor spare parts, motors, drives and gearboxes.' },
    ],
    services: [
      { slug: 'spare-parts-procurement', text: 'Supplier selection, documentation, quality control and delivery logistics.' },
      { slug: 'logistics-supply-chain', text: 'Consolidated sourcing and worldwide delivery (Incoterms 2010).' },
      { slug: 'installation-on-site', text: 'Installation, integration into existing systems and troubleshooting.' },
    ],
    topic: 'Equipment & spare parts',
    cta: 'Request spare parts',
    ctaTitle: 'Send us what you have. We identify the part.',
    faq: [
      {
        q: 'Can you source a part without a part number?',
        a: 'Yes. Our team identifies items from an OEM reference, a drawing, a material specification, an application description or a photo of the part or its nameplate.',
      },
      {
        q: 'Which kinds of equipment do you source?',
        a: 'Pumps, gears, motors, heat exchangers, packaging line parts, sensors, instruments and PLCs, pipes, flanges, fittings and bolts, storage and conveying equipment, safety equipment and custom parts.',
      },
      {
        q: 'Can several parts be combined in one delivery?',
        a: 'Yes. Consolidated procurement combines items from different suppliers, and our logistics service handles documentation and worldwide delivery under Incoterms 2010.',
      },
    ],
  },
};
