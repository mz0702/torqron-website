// Single registry for navigation, cross-links and teaser cards.
// Long-form page content lives next to its page (src/data/products.ts etc.).

export const site = {
  name: 'TORQRON',
  legalName: 'TORQRON L.L.C-FZ',
  url: 'https://torqron.com',
  tagline: 'Critical parts. Always on time.',
  email: 'info@torqron.com',
  // Not published on the old site. Fill in to show them in the footer, on /contact/ and in the legal pages.
  phone: '',
  address: [] as string[],
  licence: '',
  regions: ['Middle East', 'Europe', 'Turkey', 'Asia'],
  machineListPdf: '/media/torqron-machine-list.pdf',
};

export interface Product {
  slug: string;
  /** Short name for cards, menus and breadcrumbs */
  name: string;
  /** One line for teasers and link lists */
  teaser: string;
  /** photo for cards and the page hero: file name in src/assets/img */
  image: string;
  imageAlt: string;
}

export const products: Product[] = [
  {
    slug: 'granulation-tools',
    name: 'Granulation tools',
    teaser: 'Die plates, blade holders and pelletizer knives for consistent pellet quality.',
    image: 'die-plate-studio.jpg',
    imageAlt: 'Pelletizer die plate with concentric rows of die holes',
  },
  {
    slug: 'extrusion-components',
    name: 'Extrusion components',
    teaser: 'Barrel housings, screw elements and screw shafts in OEM-equivalent quality.',
    image: 'extrusion-components.jpg',
    imageAlt: 'Screw elements, a splined screw shaft and a twin-bore barrel section on a workshop bench',
  },
  {
    slug: 'extrusion-heater-plates',
    name: 'Extrusion heater plates',
    teaser: 'Plate heaters in aluminum or steel for fast heat-up and stable operation.',
    image: 'extrusion-heater-plates.jpg',
    imageAlt: 'Two aluminum heater plates, one with an open terminal box',
  },
  {
    slug: 'industrial-filtration',
    name: 'Industrial filtration',
    teaser: 'Filter inserts, elements, sleeves, bags and stainless steel support baskets.',
    image: 'filter-bags-cartridges.jpg',
    imageAlt: 'Filter bags and pleated filter cartridges on a steel grating',
  },
  {
    slug: 'temperature-measurement',
    name: 'Temperature measurement',
    teaser: 'Thermocouples, PT100–PT1000 resistance thermometers and sensor assemblies.',
    image: 'temperature-measurement.jpg',
    imageAlt: 'Resistance thermometer and thermocouple assemblies with connection heads',
  },
  {
    slug: 'stainless-steel-vessels',
    name: 'Stainless steel vessels',
    teaser: 'Containers and pressure-resistant vessels in 1.4404 and 1.4571, built to drawing.',
    image: 'stainless-steel-vessels.jpg',
    imageAlt: 'Stainless steel pressure vessel with flanged nozzles in a fabrication shop',
  },
  {
    slug: 'plastic-additives',
    name: 'Plastic additives',
    teaser: 'Antioxidants, phosphites, UV stabilizers, HALS and tailored one-packs.',
    image: 'plastic-additives.jpg',
    imageAlt: 'White polymer granules pouring from a scoop',
  },
  {
    slug: 'stretch-film',
    name: 'Stretch film',
    teaser: 'Stretch foils from 80 to 160 micron for fully automated pallet wrapping.',
    image: 'spare-parts-logistics.jpg',
    imageAlt: 'Machine parts wrapped in stretch film on pallets',
  },
  {
    slug: 'sealing-technology',
    name: 'Sealing technology',
    teaser: 'O-rings, spring-energized, metallic and high-pressure seals for process plants.',
    image: 'sealing-technology.jpg',
    imageAlt: 'O-rings, PTFE seals, V-packing rings and a mechanical seal',
  },
  {
    slug: 'oils-lubricants',
    name: 'Oils & lubricants',
    teaser: 'Original Shell, Mobil and Fuchs products, anti-foam agents and phosphate solutions.',
    image: 'oils-lubricants.jpg',
    imageAlt: 'Gear oil in a beaker and a sight glass in front of oil drums',
  },
  {
    slug: 'valves-flow-control',
    name: 'Valves & flow control',
    teaser: 'Control, gate, slide, ball and safety valves with full documentation.',
    image: 'gate-valves.jpg',
    imageAlt: 'Two gate valves with blue handwheels in a stainless steel pipe system',
  },
  {
    slug: 'industrial-spare-parts',
    name: 'Equipment & spare parts',
    teaser: 'Pumps, gears, motors, heat exchangers, instruments and custom-sourced parts.',
    image: 'warehouse-spare-parts.jpg',
    imageAlt: 'Warehouse aisle with shelves of stainless steel fittings and spare parts',
  },
];

export interface Application {
  slug: string;
  name: string;
  teaser: string;
  /** file name in src/assets/img */
  image: string;
  imageAlt: string;
}

export const applications: Application[] = [
  {
    slug: 'petrochemical',
    name: 'Petrochemical',
    teaser: 'Components and services for LDPE, LLDPE, HDPE and PP production.',
    image: 'app-petrochemical.jpg',
    imageAlt: 'Petrochemical plant with distillation columns and pipe racks',
  },
  {
    slug: 'plastics-polymer',
    name: 'Plastics & polymer',
    teaser: 'Extrusion, compounding, masterbatch and pelletizing lines.',
    image: 'app-plastics-polymer.jpg',
    imageAlt: 'Compounding extruder line with feeders and an operator at the control panel',
  },
  {
    slug: 'mechanical-engineering',
    name: 'Mechanical engineering',
    teaser: 'OEM-grade components and sourcing for machinery builders.',
    image: 'extruder-screws.jpg',
    imageAlt: 'Extruder screw shaft and barrel flange in a machine shop',
  },
  {
    slug: 'chemical',
    name: 'Chemical industry',
    teaser: 'Parts for aggressive media, high temperatures and demanding processes.',
    image: 'app-chemical.jpg',
    imageAlt: 'Chemical plant structure with reactors, pipework and yellow walkways',
  },
  {
    slug: 'logistics-supply-chain',
    name: 'Plant logistics',
    teaser: 'Conveying, storage, bagging and consolidated procurement for plants.',
    image: 'app-logistics-supply-chain.jpg',
    imageAlt: 'Polymer storage silos with pneumatic conveying pipes',
  },
  {
    slug: 'packaging',
    name: 'Packaging',
    teaser: 'Components for film, bagging and granulate handling operations.',
    image: 'wrapped-pallets.jpg',
    imageAlt: 'Palletized sacks stacked in a warehouse',
  },
];

export interface Service {
  slug: string;
  name: string;
  teaser: string;
  image: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    slug: 'spare-parts-procurement',
    name: 'Spare parts procurement',
    teaser: 'High-speed sourcing of critical spare parts, including supplier selection, documentation and quality control.',
    image: 'spare-parts-logistics.jpg',
    imageAlt: 'Wrapped gear units and spare parts on pallets ready for dispatch',
  },
  {
    slug: 'reconditioning-refurbishment',
    name: 'Reconditioning & refurbishment',
    teaser: 'European-standard refurbishment of die plates, hyper compressor plungers, packing cups and pelletizer knives.',
    image: 'welding.jpg',
    imageAlt: 'Weld overlay being applied to a steel component',
  },
  {
    slug: 'installation-on-site',
    name: 'Installation & on‑site support',
    teaser: 'Installation, commissioning, operator training and troubleshooting directly at your plant.',
    image: 'pelletizer-hall.jpg',
    imageAlt: 'Technician in a safety vest working on a pelletizer in a production hall',
  },
  {
    slug: 'logistics-supply-chain',
    name: 'Logistics & supply chain',
    teaser: 'Consolidated sourcing, worldwide delivery, documentation and compliance from one partner.',
    image: 'forklift-pallets.jpg',
    imageAlt: 'Forklift moving wrapped pallets in a dispatch hall',
  },
  {
    slug: 'technical-consulting',
    name: 'Technical consulting',
    teaser: 'Engineering support for material and part selection, compatibility checks and maintenance strategies.',
    image: 'parts-on-drawings.jpg',
    imageAlt: 'Two machined metal parts lying on engineering drawings',
  },
];

export const nav = [
  { label: 'Products', href: '/products/', children: products.map((p) => ({ label: p.name, href: `/products/${p.slug}/` })) },
  {
    label: 'Applications',
    href: '/applications/',
    children: applications.map((a) => ({ label: a.name, href: `/applications/${a.slug}/` })),
  },
  { label: 'Services', href: '/services/', children: services.map((s) => ({ label: s.name, href: `/services/${s.slug}/` })) },
  {
    label: 'Company',
    href: '/about/',
    children: [
      { label: 'About TORQRON', href: '/about/' },
      { label: 'Manufacturing capabilities', href: '/capabilities/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
];

export const legalNav = [
  { label: 'Privacy policy', href: '/privacy/' },
  { label: 'Legal notice', href: '/legal-notice/' },
];
