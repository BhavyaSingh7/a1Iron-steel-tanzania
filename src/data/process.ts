export type ProcessStage = {
  id: string
  number: string
  title: string
  shortTitle: string
  text: string
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

export const homeProcess: { title: string }[] = [
  { title: 'Raw Material' },
  { title: 'DRI / Sponge Iron' },
  { title: 'Melting' },
  { title: 'Continuous Casting' },
  { title: 'Billet' },
  { title: 'Rolling' },
  { title: 'Finished Products' },
]

export const processStages: ProcessStage[] = [
  {
    id: 'raw-material',
    number: '01',
    title: 'Raw Material',
    shortTitle: 'Raw Material',
    text: 'Iron-bearing inputs and alloys are received, checked and staged for reduction and melting. Exact feedstock mix is confirmed at mill level.',
    imageKey: 'making',
  },
  {
    id: 'dri',
    number: '02',
    title: 'DRI / Sponge Iron',
    shortTitle: 'DRI / Sponge Iron',
    text: 'Direct-reduced iron is produced as a clean metallic charge — the bridge between ore and liquid steel.',
    imageKey: 'f1',
  },
  {
    id: 'melting',
    number: '03',
    title: 'Melting',
    shortTitle: 'Melting',
    text: 'Charge is melted and refined. Chemistry is adjusted so the heat matches the grade that will be cast.',
    imageKey: 'hero',
  },
  {
    id: 'casting',
    number: '04',
    title: 'Continuous Casting',
    shortTitle: 'Continuous Casting',
    text: 'Liquid steel is cast into a continuous strand, cooled and cut — turning heat into a solid section ready for rolling.',
    imageKey: 'f6',
  },
  {
    id: 'billet',
    number: '05',
    title: 'Billet',
    shortTitle: 'Billet',
    text: 'Cast billets are inspected and conditioned. This is the feedstock the rolling mill will draw into bars, rods and sections.',
    imageKey: 'manufacturing',
  },
  {
    id: 'rolling',
    number: '06',
    title: 'Rolling Mill',
    shortTitle: 'Rolling',
    text: 'Billets are reheated and passed through successive stands until they reach the required profile and mechanical properties.',
    imageKey: 'plant',
  },
  {
    id: 'finishing',
    number: '07',
    title: 'Finishing',
    shortTitle: 'Finishing',
    text: 'Product is cut, cooled, bundled or coiled according to form — bars, rods, sections and converted wire products.',
    imageKey: 'cta',
  },
  {
    id: 'qc',
    number: '08',
    title: 'Quality Control',
    shortTitle: 'Quality Control',
    text: 'Dimensional checks and mechanical tests confirm the heat before it is released. Specific standards will be listed when certified.',
    imageKey: 'quality',
  },
  {
    id: 'dispatch',
    number: '09',
    title: 'Packing & Dispatch',
    shortTitle: 'Dispatch',
    text: 'Finished steel is tagged, packed and loaded for delivery to sites, stockists and fabricators.',
    imageKey: 'impact',
  },
]
