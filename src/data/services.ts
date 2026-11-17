// Long-form content for /services/<slug>/. Name, teaser and photo live in the registry (site.ts).
// Facts come from _source/content.md ("PAGE: https://torqron.com/services" and the service sections of the products page).
import type { Faq } from './applications';

export interface ScopeGroup {
  title: string;
  /** optional one-line context above the list */
  text?: string;
  items: string[];
}

export interface ServiceContent {
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
  /** paragraphs, may contain inline links */
  intro: string[];
  /** scope at a glance (facts box) */
  glance: string[];
  scope: ScopeGroup[];
  /** product slugs for the related cards */
  products: string[];
  /** application slugs for the related rows */
  applications: string[];
  /** subject of the request e-mail (/contact/?topic=…) */
  topic: string;
  faq: Faq[];
}

export const serviceContent: Record<string, ServiceContent> = {
  'spare-parts-procurement': {
    title: 'Spare Parts Procurement for Process Plants',
    description:
      'Spare parts procurement for petrochemical and polymer plants: global sourcing, supplier selection, documentation and quality control handled by TORQRON.',
    h1: 'Spare parts procurement for petrochemical and polymer plants',
    lede: 'Critical spares sourced, documented, inspected and delivered.',
    focus: '50% 65%',
    heading: 'Sourcing that takes work off procurement teams',
    intro: [
      'TORQRON’s spare parts procurement service sources critical parts for petrochemical and polymer facilities at high speed. The team manages supplier selection, documentation, quality control and delivery logistics, which takes routine sourcing work off procurement teams.',
      'A request can start from whatever information is at hand: a part number, an OEM reference, a drawing, a material specification, an application description or a photo. Sourcing covers <a href="/products/industrial-spare-parts/">pumps, gears, motors, heat exchangers, instruments and PLCs</a> as well as the core product range, and orders from several suppliers can be combined through <a href="/services/logistics-supply-chain/">consolidated sourcing and logistics</a>.',
    ],
    glance: [
      'Fast global sourcing',
      'Supplier selection',
      'Documentation management',
      'Quality control before dispatch',
      'Procurement pool optimization',
      'Inventory management strategies',
    ],
    scope: [
      {
        title: 'Sourcing',
        items: ['Fast global spare parts sourcing', 'Supplier selection', 'Delivery logistics', 'Custom spare part sourcing'],
      },
      {
        title: 'Documentation and quality',
        items: ['Documentation management', 'Material and process documentation', 'Technical inspection before dispatch', 'Traceability for critical components'],
      },
      {
        title: 'Procurement planning',
        items: ['Procurement pool optimization', 'Inventory management strategies'],
      },
      {
        title: 'Typical items',
        items: [
          'Pumps, gears and motors',
          'Heat exchangers',
          'Sensors, instruments and PLCs',
          'Pipes, flanges, fittings and bolts',
          'Storage and conveying equipment',
          'Safety equipment',
        ],
      },
      {
        title: 'What to send with a request',
        items: ['Part number or OEM reference', 'Drawing or material specification', 'Application description', 'Photo of the part'],
      },
    ],
    products: ['industrial-spare-parts', 'valves-flow-control', 'sealing-technology', 'granulation-tools', 'extrusion-components', 'oils-lubricants'],
    applications: ['petrochemical', 'plastics-polymer', 'mechanical-engineering', 'packaging'],
    topic: 'Spare parts procurement',
    faq: [
      {
        q: 'What information do you need to source a spare part?',
        a: 'Any of the following is enough to start: a part number or OEM reference, a drawing, a material specification, an application description or a photo of the part. The more of these you can send, the faster the right item is identified.',
      },
      {
        q: 'Do sourced parts come with documentation?',
        a: 'Yes. Documentation management is part of the service: material and process documentation, technical inspection before dispatch and traceability for critical components. Valves are supplied with full documentation and CE certificates.',
      },
      {
        q: 'Can several items from different suppliers be combined?',
        a: 'Yes. Procurement pool optimization and procurement consolidation bundle items into fewer orders and shipments, which reduces cost and coordination effort. The supply chain and logistics service covers the delivery side.',
      },
    ],
  },

  'reconditioning-refurbishment': {
    title: 'Die Plate, Plunger & Packing Cup Reconditioning',
    description:
      'Reconditioning of LDPE hyper compressor plungers and packing cups, die plate refurbishing up to 1200 mm and pelletizer knife replacement to European standards.',
    h1: 'Reconditioning of die plates, plungers and packing cups',
    lede: 'European-standard refurbishment that extends the life of high-value components.',
    focus: '50% 50%',
    heading: 'Extending the life of high-value components',
    intro: [
      'Die plates, hyper compressor plungers, packing cups and pelletizer knives are high-value parts. TORQRON’s reconditioning and refurbishment service extends their lifetime while maintaining safety and performance, with European-standard repair processes, fast turnaround and strict quality checks.',
      'Each component type follows its own inspection and repair route, described below. TORQRON’s machining and measuring equipment is listed under <a href="/capabilities/">manufacturing capabilities</a>; new die plates and knives are available under <a href="/products/granulation-tools/">granulation tools</a>.',
    ],
    glance: [
      'Die plates up to 1200 mm',
      'LDPE hyper compressor plungers',
      'Packing cups',
      'Pelletizer knives',
      'European-standard repair processes',
      'Strict quality checks',
    ],
    scope: [
      {
        title: 'Plunger reconditioning',
        text: 'Plungers in LDPE hyper compressors run under very high pressure on every stroke, so small surface defects can grow into cracks.',
        items: ['Critical for LDPE hyper compressors', 'Crack detection', 'Carbide refurbishment', 'Re-machining'],
      },
      {
        title: 'Die plate refurbishing',
        text: 'Knife contact and melt flow wear the cutting face and die holes over time; refurbishing restores the cutting surface.',
        items: ['Plates up to 1200 mm', 'European-standard repair processes'],
      },
      {
        title: 'Pelletizer knife replacement',
        text: 'Worn or chipped edges tear rather than cut, which shows up as tails and fines in the pellets.',
        items: ['Titanium carbide edges', 'Premium European manufacture'],
      },
      {
        title: 'Packing cup reconditioning',
        text: 'Packing cups hold the sealing rings around the plunger and carry cyclic high-pressure load, which makes fretting fatigue a key failure mode.',
        items: ['Fretting fatigue analysis', 'Seal ring inspection', 'High-pressure safety checks'],
      },
    ],
    products: ['granulation-tools', 'sealing-technology', 'extrusion-components'],
    applications: ['petrochemical', 'plastics-polymer'],
    topic: 'Reconditioning & refurbishment',
    faq: [
      {
        q: 'What size of die plate can you refurbish?',
        a: 'Die plates up to 1200 mm, using European-standard repair processes. New die plates for underwater and air-cooled systems are also available.',
      },
      {
        q: 'What does plunger reconditioning include?',
        a: 'Plunger reconditioning for LDPE hyper compressors includes crack detection, carbide refurbishment and re-machining.',
      },
      {
        q: 'What is checked when packing cups are reconditioned?',
        a: 'Packing cup reconditioning includes fretting fatigue analysis, inspection of the seal rings and high-pressure safety checks.',
      },
    ],
  },

  'installation-on-site': {
    title: 'Installation & On-Site Support for Plants',
    description:
      'Installation and on-site support at your plant: commissioning, integration into existing systems, operator training, troubleshooting and post-installation help.',
    h1: 'Installation and on-site support at your plant',
    lede: 'Installation, commissioning, training and troubleshooting where the equipment runs.',
    focus: '50% 58%',
    heading: 'Technical support where the equipment runs',
    intro: [
      'TORQRON provides installation and on-site support directly at your plant: installation and commissioning of components, integration into existing systems, operator training, troubleshooting and post-installation support.',
      'On-site work closes the loop with supply. Parts delivered through <a href="/services/spare-parts-procurement/">spare parts procurement</a> or returned from <a href="/services/reconditioning-refurbishment/">reconditioning</a> can be installed and commissioned with TORQRON’s support, so one partner covers the part from RFQ to commissioning.',
    ],
    glance: [
      'Installation and commissioning',
      'Integration into existing systems',
      'Operator and technical training',
      'Troubleshooting and optimization',
      'Post-installation support',
    ],
    scope: [
      {
        title: 'Installation',
        items: ['Installation and commissioning', 'Integration into existing systems'],
      },
      {
        title: 'Training',
        items: ['Operator training', 'Technical training'],
      },
      {
        title: 'Operation',
        items: ['Troubleshooting', 'Optimization', 'Post-installation support'],
      },
    ],
    products: ['granulation-tools', 'extrusion-components', 'extrusion-heater-plates', 'temperature-measurement', 'valves-flow-control', 'sealing-technology'],
    applications: ['petrochemical', 'plastics-polymer', 'packaging'],
    topic: 'Installation & on-site support',
    faq: [
      {
        q: 'What does on-site support include?',
        a: 'Installation and commissioning, integration into existing systems, operator and technical training, troubleshooting and optimization, and support after installation.',
      },
      {
        q: 'Can new components be integrated into an existing line?',
        a: 'Yes. Integration into existing systems is part of the service. Where a replacement differs from the original part, a compatibility check through technical consulting can come first.',
      },
      {
        q: 'Is support available after commissioning?',
        a: 'Yes. Post-installation support, troubleshooting and optimization continue after start-up, and operator training prepares your team to run the equipment.',
      },
    ],
  },

  'logistics-supply-chain': {
    title: 'Industrial Supply Chain & Logistics Services',
    description:
      'Supply chain and logistics services for industrial procurement: consolidated sourcing, qualified suppliers, documentation and delivery under Incoterms 2010.',
    h1: 'Supply chain and logistics services for industrial procurement',
    lede: 'Sourcing, documentation and worldwide delivery coordinated by one partner.',
    focus: '50% 45%',
    heading: 'One partner from sourcing to delivery',
    intro: [
      'TORQRON’s supply chain and logistics services simplify global industrial procurement from end to end: consolidated sourcing through a qualified supplier network, documentation and compliance, cost-reduction strategies and worldwide delivery under Incoterms 2010.',
      'Instead of coordinating many suppliers and shipments, procurement teams work with one partner who allocates spare parts, supports inventory planning and keeps the paperwork complete. This service is about procurement and delivery; for components used in conveying, silo handling and bagging inside the plant, see <a href="/applications/logistics-supply-chain/">bulk handling and conveying components</a>.',
    ],
    glance: [
      'Consolidated sourcing',
      'Qualified supplier network',
      'Worldwide delivery (Incoterms 2010)',
      'Documentation and compliance',
      'Spare parts allocation and inventory support',
      'Cost-reduction strategies',
    ],
    scope: [
      {
        title: 'Sourcing',
        items: ['Procurement consolidation', 'Qualified supplier network', 'Spare parts allocation and inventory support'],
      },
      {
        title: 'Delivery',
        text: 'Incoterms define where costs and risk pass from seller to buyer.',
        items: ['Worldwide delivery under Incoterms 2010', 'Documentation and compliance'],
      },
      {
        title: 'Consulting',
        items: ['Logistics plant optimization', 'HSE and quality consulting', 'Cost-reduction strategies'],
      },
    ],
    products: ['industrial-spare-parts', 'valves-flow-control', 'industrial-filtration', 'oils-lubricants', 'plastic-additives', 'stretch-film'],
    applications: ['logistics-supply-chain', 'petrochemical', 'chemical', 'packaging'],
    topic: 'Logistics & supply chain',
    faq: [
      {
        q: 'Under which delivery terms do you ship?',
        a: 'Deliveries are made worldwide under Incoterms 2010. The term agreed for an order defines where costs and risk pass from TORQRON to the buyer.',
      },
      {
        q: 'What does procurement consolidation mean in practice?',
        a: 'Items from several suppliers are bundled and handled by one partner, with one point of contact, complete documentation and coordinated delivery. This keeps costs and coordination effort down.',
      },
      {
        q: 'Where does TORQRON deliver?',
        a: 'Worldwide. TORQRON is active in the Middle East, Europe, Turkey and Asia and supports industrial facilities in 12 countries.',
      },
    ],
  },

  'technical-consulting': {
    title: 'Technical Consulting for Process Plants',
    description:
      'Technical consulting for petrochemical and polymer plants: material and part selection, compatibility checks, process optimization and maintenance strategies.',
    h1: 'Technical consulting for part selection and plant reliability',
    lede: 'Engineering advice on materials, compatibility, processes and maintenance.',
    focus: '50% 50%',
    heading: 'Engineering advice before the order',
    intro: [
      'TORQRON’s technical consulting gives engineering support where a part or material has to be right the first time: material and part selection, compatibility checks, application-specific recommendations, process optimization and maintenance strategies.',
      'The advice draws on the team’s background in petrochemical plant engineering, extrusion and granulation technology, industrial filtration, high-pressure sealing systems and supply chain management. Typical questions range from the right <a href="/products/industrial-filtration/">filter medium</a> for a dust collector to the <a href="/products/plastic-additives/">stabilizer package</a> for a polymer grade.',
    ],
    glance: [
      'Material and part selection',
      'Compatibility checks',
      'Application-specific recommendations',
      'Process optimization',
      'Maintenance strategies',
    ],
    scope: [
      {
        title: 'Selection',
        items: ['Material and part selection', 'Compatibility checks', 'Application-specific recommendations'],
      },
      {
        title: 'Operation',
        items: ['Process optimization', 'Maintenance strategies'],
      },
      {
        title: 'Areas of expertise',
        items: [
          'Petrochemical plant engineering',
          'Extrusion and granulation technology',
          'Industrial filtration',
          'High-pressure sealing systems',
          'Supply chain and logistics management',
        ],
      },
    ],
    products: ['plastic-additives', 'industrial-filtration', 'sealing-technology', 'granulation-tools', 'extrusion-components', 'stainless-steel-vessels'],
    applications: ['petrochemical', 'plastics-polymer', 'chemical', 'mechanical-engineering'],
    topic: 'Technical consulting',
    faq: [
      {
        q: 'What does a compatibility check cover?',
        a: 'Whether a replacement or alternative part matches the OEM reference, the drawing and the operating conditions of your application, such as temperature, pressure and media. It is especially useful before ordering parts from a new source.',
      },
      {
        q: 'Which technical areas does the team cover?',
        a: 'Petrochemical plant engineering, extrusion and granulation technology, industrial filtration, high-pressure sealing systems and supply chain and logistics management.',
      },
      {
        q: 'Can you recommend additives for a specific polymer?',
        a: 'Yes. Application-specific recommendations cover the additive range: primary antioxidants, phosphites, synergistic blends, UV stabilizers and HALS, tailored one-packs and specialized additives such as nucleating and clarifying agents, for polymers from LDPE and PP to PA, PET and synthetic rubber.',
      },
    ],
  },
};
