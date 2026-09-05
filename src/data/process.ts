export type ProcessStage = {
  id: string
  number: string
  title: string
  shortTitle: string
  text: string
  equipment: string
  imageKey:
    | 'making'
    | 'f1'
    | 'hero'
    | 'f6'
    | 'manufacturing'
    | 'plant'
    | 'quality'
    | 'cta'
    | 'impact'
}

export const homeProcess = [
  {
    title: 'Raw Material',
    text: 'Iron-bearing inputs and alloys are received, checked and staged for reduction and melting.',
    equipment: '[EQUIPMENT DATA TO BE ADDED]',
    imageKey: 'making' as const,
  },
  {
    title: 'DRI',
    text: 'Direct-reduced iron is produced as a clean metallic charge — the bridge between ore and liquid steel.',
    equipment: '[EQUIPMENT DATA TO BE ADDED]',
    imageKey: 'f1' as const,
  },
  {
    title: 'Melting',
    text: 'Charge is melted and refined. Chemistry is adjusted so the heat matches the grade that will be cast.',
    equipment: '[EQUIPMENT DATA TO BE ADDED]',
    imageKey: 'hero' as const,
  },
  {
    title: 'Continuous Casting',
    text: 'Liquid steel is cast into a continuous strand, cooled and cut into solid section.',
    equipment: '[EQUIPMENT DATA TO BE ADDED]',
    imageKey: 'f6' as const,
  },
  {
    title: 'Billet',
    text: 'Cast billets are inspected and conditioned as feedstock for the rolling mill.',
    equipment: '[EQUIPMENT DATA TO BE ADDED]',
    imageKey: 'manufacturing' as const,
  },
  {
    title: 'Rolling',
    text: 'Billets are reheated and passed through successive stands to the required profile.',
    equipment: '[EQUIPMENT DATA TO BE ADDED]',
    imageKey: 'plant' as const,
  },
  {
    title: 'Finished Product',
    text: 'Bars, rods and sections are cut, cooled, bundled or coiled for the catalogue.',
    equipment: '[EQUIPMENT DATA TO BE ADDED]',
    imageKey: 'cta' as const,
  },
]

export const processStages: ProcessStage[] = [
  {
    id: 'raw-material',
    number: '01',
    title: 'Raw Material',
    shortTitle: 'Raw Material',
    text: 'Iron-bearing inputs and alloys are received, checked and staged for reduction and melting. Exact feedstock mix is confirmed at mill level.',
    equipment: '[EQUIPMENT DATA TO BE ADDED]',
    imageKey: 'making',
  },
  {
    id: 'dri',
    number: '02',
    title: 'DRI / Sponge Iron',
    shortTitle: 'DRI / Sponge Iron',
    text: 'Direct-reduced iron is produced as a clean metallic charge — the bridge between ore and liquid steel.',
    equipment: '[EQUIPMENT DATA TO BE ADDED]',
    imageKey: 'f1',
  },
  {
    id: 'melting',
    number: '03',
    title: 'Melting',
    shortTitle: 'Melting',
    text: 'Charge is melted and refined. Chemistry is adjusted so the heat matches the grade that will be cast.',
    equipment: '[EQUIPMENT DATA TO BE ADDED]',
    imageKey: 'hero',
  },
  {
    id: 'casting',
    number: '04',
    title: 'Continuous Casting',
    shortTitle: 'Continuous Casting',
    text: 'Liquid steel is cast into a continuous strand, cooled and cut — turning heat into a solid section ready for rolling.',
    equipment: '[EQUIPMENT DATA TO BE ADDED]',
    imageKey: 'f6',
  },
  {
    id: 'billet',
    number: '05',
    title: 'Billet',
    shortTitle: 'Billet',
    text: 'Cast billets are inspected and conditioned. This is the feedstock the rolling mill will draw into bars, rods and sections.',
    equipment: '[EQUIPMENT DATA TO BE ADDED]',
    imageKey: 'manufacturing',
  },
  {
    id: 'rolling',
    number: '06',
    title: 'Rolling Mill',
    shortTitle: 'Rolling',
    text: 'Billets are reheated and passed through successive stands until they reach the required profile and mechanical properties.',
    equipment: '[EQUIPMENT DATA TO BE ADDED]',
    imageKey: 'plant',
  },
  {
    id: 'finishing',
    number: '07',
    title: 'Finishing',
    shortTitle: 'Finishing',
    text: 'Product is cut, cooled, bundled or coiled according to form — bars, rods, sections and converted wire products.',
    equipment: '[EQUIPMENT DATA TO BE ADDED]',
    imageKey: 'cta',
  },
  {
    id: 'qc',
    number: '08',
    title: 'Quality Control',
    shortTitle: 'Quality Control',
    text: 'Dimensional checks and mechanical tests confirm the heat before it is released. Specific standards will be listed when certified.',
    equipment: '[EQUIPMENT DATA TO BE ADDED]',
    imageKey: 'quality',
  },
  {
    id: 'dispatch',
    number: '09',
    title: 'Packing & Dispatch',
    shortTitle: 'Dispatch',
    text: 'Finished steel is tagged, packed and loaded for delivery to sites, stockists and fabricators.',
    equipment: '[EQUIPMENT DATA TO BE ADDED]',
    imageKey: 'impact',
  },
]

export const millJourney = [
  {
    id: 'mining',
    number: '01',
    title: 'Iron Ore Mining',
    text: 'Ore is extracted and prepared as the iron-bearing start of the route.',
  },
  {
    id: 'dri',
    number: '02',
    title: 'DRI / Sponge Iron',
    text: 'Direct reduction turns ore into sponge iron — the DRI output.',
  },
  {
    id: 'furnace',
    number: '03',
    title: 'Induction Furnace',
    text: 'Sponge iron is charged and melted into liquid steel.',
  },
  {
    id: 'ccm',
    number: '04',
    title: 'Continuous Casting',
    text: 'Steel flows ladle to tundish to mould and solidifies as billets.',
  },
  {
    id: 'rolling',
    number: '05',
    title: 'Rolling Mill',
    text: 'Billets are rolled through successive stands into section.',
  },
  {
    id: 'finished',
    number: '06',
    title: 'Finished Steel Products',
    text: 'Bars, rods and sections leave the line for the catalogue.',
  },
] as const

export const millStages = [
  {
    id: 'mining',
    number: '01',
    nav: 'Mining',
    title: 'Iron ore mining',
    text: 'The journey starts in the pit. Iron ore is extracted, hauled and prepared so the plant receives a consistent iron-bearing feed — not a finished metal, but the raw material the rest of the route is built on.',
    layout: 'split' as const,
    image: 'mining' as const,
    imageAlt: 'Open-pit iron ore mining with excavator loading a haul truck',
  },
  {
    id: 'dri',
    number: '02',
    nav: 'DRI',
    title: 'DRI / sponge iron',
    text: 'In the DRI process, iron ore is reduced without melting. Sponge iron is the output of that step: a porous, metallic charge that carries the iron forward into steelmaking.',
    layout: 'reverse' as const,
    image: 'dri' as const,
    imageAlt: 'DRI plant producing sponge iron',
  },
  {
    id: 'furnace',
    number: '03',
    nav: 'Furnace',
    title: 'Induction furnace',
    text: 'Sponge iron enters the furnace. Heat takes over. The charge melts into liquid steel under a controlled heat — this is where temperature, chemistry and time meet.',
    layout: 'immersive' as const,
    image: 'melting' as const,
    imageAlt: 'Molten steel pouring from a furnace vessel',
  },
  {
    id: 'ccm',
    number: '04',
    nav: 'CCM',
    title: 'Continuous casting',
    text: 'Liquid steel leaves the furnace in a ladle. The ladle sits above the tundish — they are not the same vessel. Steel flows from the ladle into the tundish, then through two outlet openings into the casting mould, where it solidifies as billets.',
    layout: 'technical' as const,
    image: 'ccm' as const,
    imageAlt: 'Continuous casting machine forming two glowing steel billets',
    notes: [
      'Ladle is placed above the tundish',
      'Molten steel flows ladle → tundish',
      'Two tundish outlets feed the mould',
      'The strand is cut into billets',
    ],
  },
  {
    id: 'rolling',
    number: '05',
    nav: 'Rolling',
    title: 'Rolling mill',
    text: 'Hot billets pass through the mill train. Each stand reduces and forms the section until the catalogue profile is reached — bars, rods and related products.',
    layout: 'reverse' as const,
    image: 'rolling' as const,
    imageAlt: 'Rolling mill stands in a linear production train',
    mill: '15-stand rolling mill + 6-stand block mill',
  },
] as const

