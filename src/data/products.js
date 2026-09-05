/** @typedef {'all' | 'reinforcement' | 'structural' | 'wire' | 'flat' | 'hollow'} ProductCategoryId */

export const productCategories = [
  { id: 'all', label: 'All' },
  { id: 'reinforcement', label: 'Reinforcement' },
  { id: 'structural', label: 'Structural' },
  { id: 'wire', label: 'Wire Products' },
  { id: 'flat', label: 'Flat Products' },
  { id: 'hollow', label: 'Hollow Sections' },
]

export const products = [
  {
    slug: 'tmt-bars',
    name: 'TMT Bars',
    category: 'reinforcement',
    categoryLabel: 'Reinforcement',
    shortDescription: 'High-strength bars for reinforced concrete structures.',
    description:
      'Thermo-mechanically treated bars used as the primary reinforcement in concrete. Specified for buildings, infrastructure and industrial frames where strength, ductility and bond with concrete matter.',
    applications: [
      'Reinforced concrete frames',
      'Foundations and slabs',
      'Bridges and civil works',
      'Industrial buildings',
    ],
    availableSizes: null,
    standards: null,
    technicalSpecifications: null,
  },
  {
    slug: 'round-bars',
    name: 'Round Bars',
    category: 'structural',
    categoryLabel: 'Structural',
    shortDescription: 'Precision rounds for fabrication and engineering use.',
    description:
      'Plain round bars for machining, fabrication and general engineering. A dependable feedstock where consistent diameter and surface finish support downstream processing.',
    applications: [
      'Fabrication and machining',
      'Shafts and pins',
      'General engineering',
      'Construction details',
    ],
    availableSizes: null,
    standards: null,
    technicalSpecifications: null,
  },
  {
    slug: 'wire-rods',
    name: 'Wire Rods',
    category: 'wire',
    categoryLabel: 'Wire Products',
    shortDescription: 'Coil rod feedstock for drawing and downstream wire.',
    description:
      'Hot-rolled wire rod in coil, produced as the starting material for drawn wire, nails, mesh and other converted products.',
    applications: ['Wire drawing', 'Nails and fasteners', 'Mesh and fencing', 'Binding wire'],
    availableSizes: null,
    standards: null,
    technicalSpecifications: null,
  },
  {
    slug: 'v-angles',
    name: 'V Angles',
    category: 'structural',
    categoryLabel: 'Structural',
    shortDescription: 'Equal and unequal angles for frames and bracing.',
    description:
      'Rolled angle sections used in towers, trusses, frames and bracing. Specified where two legs of steel need to lock a structure together with simple, reliable geometry.',
    applications: ['Trusses and towers', 'Frames and bracing', 'Racks and supports', 'Fabricated structures'],
    availableSizes: null,
    standards: null,
    technicalSpecifications: null,
  },
  {
    slug: 'c-channels',
    name: 'C Channels',
    category: 'structural',
    categoryLabel: 'Structural',
    shortDescription: 'Channel sections for purlins, frames and supports.',
    description:
      'C-shaped rolled channels for secondary steelwork — purlins, frames, machine bases and light structural members.',
    applications: ['Purlins and girts', 'Equipment frames', 'Mezzanines', 'General steelwork'],
    availableSizes: null,
    standards: null,
    technicalSpecifications: null,
  },
  {
    slug: 'flat-bars',
    name: 'Flat Bars',
    category: 'flat',
    categoryLabel: 'Flat Products',
    shortDescription: 'Flat sections for fabrication, plates and connections.',
    description:
      'Flat bars for connectors, base plates, straps and general fabrication. A clean rectangular section that workshops can cut, drill and weld with little waste.',
    applications: ['Connections and cleats', 'Fabrication shops', 'Supports and straps', 'General construction'],
    availableSizes: null,
    standards: null,
    technicalSpecifications: null,
  },
  {
    slug: 'hot-rolled-strips',
    name: 'Hot Rolled Strips',
    category: 'flat',
    categoryLabel: 'Flat Products',
    shortDescription: 'Hot-rolled strip for forming, pipe and further rolling.',
    description:
      'Hot-rolled steel strip supplied as feedstock for tubes, cold forming and further processing. Width and thickness ranges will be published with mill confirmation.',
    applications: ['Tube and pipe forming', 'Cold forming lines', 'Pressed components', 'Further rolling'],
    availableSizes: null,
    standards: null,
    technicalSpecifications: null,
  },
  {
    slug: 'hollow-sections',
    name: 'Hollow Sections',
    category: 'hollow',
    categoryLabel: 'Hollow Sections',
    shortDescription: 'SHS, RHS and related hollow profiles for structures.',
    description:
      'Structural hollow sections for columns, trusses and architectural steelwork — efficient in compression and clean in appearance.',
    applications: ['Columns and posts', 'Trusses', 'Industrial frames', 'Architectural steel'],
    availableSizes: null,
    standards: null,
    technicalSpecifications: null,
  },
  {
    slug: 'binding-wire',
    name: 'Binding Wire',
    category: 'wire',
    categoryLabel: 'Wire Products',
    shortDescription: 'Annealed wire for tying reinforcement on site.',
    description:
      'Soft binding wire used to secure reinforcement before concrete is poured. Specified for workability and consistent coil presentation on site.',
    applications: ['Tying rebar', 'Site reinforcement', 'Prefabricated cages', 'General tying'],
    availableSizes: null,
    standards: null,
    technicalSpecifications: null,
  },
  {
    slug: 'wire-nails',
    name: 'Wire Nails',
    category: 'wire',
    categoryLabel: 'Wire Products',
    shortDescription: 'Nails drawn and headed from steel wire rod.',
    description:
      'Wire nails for timber, formwork and general fixing. Produced from drawn wire with controlled head and point geometry.',
    applications: ['Formwork', 'Timber construction', 'Packaging', 'General fixing'],
    availableSizes: null,
    standards: null,
    technicalSpecifications: null,
  },
  {
    slug: 'brc-welded-mesh',
    name: 'BRC / Welded Mesh',
    category: 'reinforcement',
    categoryLabel: 'Reinforcement',
    shortDescription: 'Welded mesh sheets for slabs and ground-bearing work.',
    description:
      'Welded steel mesh (BRC) for slabs, floors and ground-bearing concrete. Delivers regular bar spacing and faster placement than loose bars in many slab applications.',
    applications: ['Floor slabs', 'Pavements', 'Precast panels', 'Ground-bearing concrete'],
    availableSizes: null,
    standards: null,
    technicalSpecifications: null,
  },
  {
    slug: 'gi-chain-link',
    name: 'GI Chain Link',
    category: 'wire',
    categoryLabel: 'Wire Products',
    shortDescription: 'Galvanised chain-link fabric for perimeter fencing.',
    description:
      'Galvanised chain-link mesh for security and boundary fencing. A durable woven fabric for industrial, commercial and institutional perimeters.',
    applications: ['Perimeter fencing', 'Industrial sites', 'Sports enclosures', 'Institutional grounds'],
    availableSizes: null,
    standards: null,
    technicalSpecifications: null,
  },
  {
    slug: 'barbed-wire',
    name: 'Barbed Wire',
    category: 'wire',
    categoryLabel: 'Wire Products',
    shortDescription: 'Barbed wire for security and agricultural fencing.',
    description:
      'Barbed wire for deterrent fencing on farms, depots and site boundaries. Used as a topping or as a standalone barrier line.',
    applications: ['Security fencing', 'Agricultural boundaries', 'Site perimeters', 'Fence toppings'],
    availableSizes: null,
    standards: null,
    technicalSpecifications: null,
  },
]

export function getProduct(slug) {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category) {
  if (category === 'all') return products
  return products.filter((p) => p.category === category)
}

export function getRelated(slug, n = 3) {
  const current = getProduct(slug)
  if (!current) return products.slice(0, n)
  const same = products.filter((p) => p.slug !== slug && p.category === current.category)
  const rest = products.filter((p) => p.slug !== slug && p.category !== current.category)
  return [...same, ...rest].slice(0, n)
}

export const productSlugs = products.map((p) => p.slug)
