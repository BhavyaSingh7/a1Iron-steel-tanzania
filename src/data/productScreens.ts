import type { Product } from './products.js'

export type ProductScreen = {
  headline: string
  supply: string
  highlights: string[]
}

/** Presentation copy restated from products.js only — no grades, sizes or standards. */
export const productScreens: Record<string, ProductScreen> = {
  'tmt-bars': {
    headline: 'Primary reinforcement in concrete.',
    supply: 'Thermo-mechanically treated bars for reinforced concrete structures.',
    highlights: [
      'Used as the primary reinforcement in concrete.',
      'Specified for buildings, infrastructure and industrial frames.',
      'Chosen where strength, ductility and bond with concrete matter.',
    ],
  },
  'round-bars': {
    headline: 'Rounds for machining and fabrication.',
    supply: 'Plain round bars for machining, fabrication and general engineering.',
    highlights: [
      'A dependable feedstock for downstream processing.',
      'Specified where consistent diameter and surface finish matter.',
      'Used for shafts, pins, fabrication and construction details.',
    ],
  },
  'wire-rods': {
    headline: 'Coil rod for drawing and conversion.',
    supply: 'Hot-rolled wire rod in coil, as feedstock for downstream wire.',
    highlights: [
      'Starting material for drawn wire, nails, mesh and other converted products.',
      'Used on wire-drawing and fastener lines.',
      'Feeds mesh, fencing and binding-wire conversion.',
    ],
  },
  'v-angles': {
    headline: 'Angles that lock a frame together.',
    supply: 'Rolled angle sections — equal and unequal — for frames and bracing.',
    highlights: [
      'Used in towers, trusses, frames and bracing.',
      'Specified where two legs of steel need simple, reliable geometry.',
      'Common in racks, supports and fabricated structures.',
    ],
  },
  'c-channels': {
    headline: 'Channels for secondary steelwork.',
    supply: 'C-shaped rolled channels for purlins, frames and supports.',
    highlights: [
      'Used for purlins, girts and light structural members.',
      'Specified for equipment frames, mezzanines and general steelwork.',
      'A standard section for machine bases and secondary frames.',
    ],
  },
  'flat-bars': {
    headline: 'Flat sections for shops and connections.',
    supply: 'Flat bars for connectors, base plates, straps and general fabrication.',
    highlights: [
      'A clean rectangular section for cutting, drilling and welding.',
      'Used for cleats, supports and straps with little waste.',
      'Specified in fabrication shops and general construction.',
    ],
  },
  'hot-rolled-strips': {
    headline: 'Strip feedstock for forming and pipe.',
    supply: 'Hot-rolled steel strip for tubes, cold forming and further processing.',
    highlights: [
      'Used on tube and pipe forming lines.',
      'Specified for cold forming, pressed components and further rolling.',
      'Width and thickness ranges will be published with mill confirmation.',
    ],
  },
  'hollow-sections': {
    headline: 'Hollow profiles for columns and trusses.',
    supply: 'SHS, RHS and related hollow profiles for structures.',
    highlights: [
      'Used for columns, posts, trusses and industrial frames.',
      'Efficient in compression and clean in appearance.',
      'Specified for architectural steelwork as well as plant frames.',
    ],
  },
  'binding-wire': {
    headline: 'Wire for tying reinforcement on site.',
    supply: 'Soft annealed binding wire, presented in coil for site work.',
    highlights: [
      'Used to secure reinforcement before concrete is poured.',
      'Specified for workability and consistent coil presentation.',
      'Used on loose rebar, prefabricated cages and general tying.',
    ],
  },
  'wire-nails': {
    headline: 'Nails drawn and headed from rod.',
    supply: 'Wire nails produced from drawn steel wire rod.',
    highlights: [
      'Produced with controlled head and point geometry.',
      'Used for formwork, timber construction and packaging.',
      'Specified for general fixing as well as construction use.',
    ],
  },
  'brc-welded-mesh': {
    headline: 'Welded mesh for slabs and floors.',
    supply: 'Welded steel mesh (BRC) supplied as sheets.',
    highlights: [
      'Used for slabs, floors and ground-bearing concrete.',
      'Delivers regular bar spacing on the pour.',
      'Faster placement than loose bars in many slab applications.',
    ],
  },
  'gi-chain-link': {
    headline: 'Galvanised fabric for perimeters.',
    supply: 'Galvanised chain-link mesh for security and boundary fencing.',
    highlights: [
      'A durable woven fabric for industrial and commercial perimeters.',
      'Used on industrial sites, sports enclosures and institutional grounds.',
      'Specified where a long boundary needs a consistent mesh.',
    ],
  },
  'barbed-wire': {
    headline: 'A deterrent line for boundaries.',
    supply: 'Barbed wire for security and agricultural fencing.',
    highlights: [
      'Used on farms, depots and site boundaries.',
      'Specified as a topping or as a standalone barrier line.',
      'Common on security fences and agricultural perimeters.',
    ],
  },
}

export function getProductScreen(product: Product): ProductScreen {
  return (
    productScreens[product.slug] ?? {
      headline: product.shortDescription,
      supply: product.shortDescription,
      highlights: [product.description],
    }
  )
}
