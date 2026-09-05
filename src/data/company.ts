export const company = {
  legalName: 'A1 Iron & Steel Tanzania Limited',
  shortName: 'A1 Iron & Steel',
  tagline: 'The metal that builds a nation',
  country: 'Tanzania',
  address: '[ADDRESS]',
  phone: '[PHONE]',
  email: '[EMAIL]',
  social: {
    linkedin: null as string | null,
    facebook: null as string | null,
    instagram: null as string | null,
    x: null as string | null,
  },
  foundingYear: null as number | null,
  productionCapacity: null as string | null,
  certifications: [] as string[],
  awards: [] as string[],
  customers: [] as string[],
  locations: [] as string[],
  intro:
    'A1 Iron & Steel Tanzania Limited manufactures steel for construction, infrastructure and industry. We combine industrial scale with precise process control — producing the materials that buildings, roads and factories depend on.',
  vision:
    'To be a trusted source of engineered steel for Tanzania’s next generation of infrastructure.',
  mission:
    'To manufacture reliable steel products with disciplined quality, responsible operations and service that professionals can plan around.',
  commitment:
    'Every coil, bar and section that leaves our line should be consistent, traceable and fit for the job it is specified for. We treat quality as an operating system, not a slogan.',
  values: [
    {
      title: 'Quality',
      text: 'Repeatable metallurgy, controlled rolling and inspection before dispatch.',
    },
    {
      title: 'Precision',
      text: 'Tight process windows so dimensions and properties stay inside specification.',
    },
    {
      title: 'Integrity',
      text: 'Clear communication on availability, grades and lead times.',
    },
    {
      title: 'Progress',
      text: 'Investment in people, plant and methods that raise the standard of local steel.',
    },
  ],
  whyA1: ['QUALITY', 'PRECISION', 'STRENGTH', 'RELIABILITY', 'INNOVATION'],
  applications: [
    {
      slug: 'construction',
      title: 'Construction',
      text: 'Reinforcement, mesh and site steel for frames, slabs and civil works.',
      imageKey: 'plant' as const,
    },
    {
      slug: 'infrastructure',
      title: 'Infrastructure',
      text: 'Steel for roads, bridges, utilities and public works programmes.',
      imageKey: 'f2' as const,
    },
    {
      slug: 'industrial',
      title: 'Industrial',
      text: 'Sections and bars for plants, warehouses and process buildings.',
      imageKey: 'f7' as const,
    },
    {
      slug: 'commercial',
      title: 'Commercial',
      text: 'Structural and finishing steel for offices, retail and mixed-use.',
      imageKey: 'hm6' as const,
    },
    {
      slug: 'residential',
      title: 'Residential',
      text: 'TMT, mesh and wire products for housing and estate development.',
      imageKey: 'f4' as const,
    },
    {
      slug: 'manufacturing',
      title: 'Manufacturing',
      text: 'Feedstock and sections for fabricators, converters and OEMs.',
      imageKey: 'quality' as const,
    },
  ],
  categories: [
    {
      id: 'reinforcement',
      title: 'Reinforcement steel',
      text: 'TMT bars and welded mesh for concrete structures.',
      imageKey: 'productsBanner' as const,
    },
    {
      id: 'structural',
      title: 'Structural steel',
      text: 'Angles, channels and rounds for frames and fabrication.',
      imageKey: 'plant' as const,
    },
    {
      id: 'wire',
      title: 'Wire products',
      text: 'Rod, binding wire, nails and fencing wire.',
      imageKey: 'f1' as const,
    },
    {
      id: 'flat',
      title: 'Flat products',
      text: 'Flat bars and hot-rolled strip for further processing.',
      imageKey: 'making' as const,
    },
    {
      id: 'hollow',
      title: 'Hollow sections',
      text: 'Structural hollow profiles for columns and trusses.',
      imageKey: 'f7' as const,
    },
  ],
  pillars: [
    { n: '01', title: 'Steel products', text: 'A catalogue spanning reinforcement, structural, wire, flat and hollow sections.' },
    { n: '02', title: 'Modern manufacturing', text: 'A process route from charge to finished bar, rod and section.' },
    { n: '03', title: 'Quality control', text: 'Inspection and release discipline before packing and dispatch.' },
    { n: '04', title: 'Built for Tanzania', text: 'Steel specified for local construction, infrastructure and industry.' },
  ],
  stats: [
    {
      id: 'products',
      value: 13,
      suffix: '',
      placeholder: null as string | null,
      label: 'Products',
    },
    {
      id: 'capacity',
      value: null as number | null,
      suffix: '',
      placeholder: 'XX',
      label: 'Production Capacity',
    },
    {
      id: 'years',
      value: null as number | null,
      suffix: '+',
      placeholder: 'XX+',
      label: 'Years of Experience',
    },
    {
      id: 'grades',
      value: null as number | null,
      suffix: '',
      placeholder: 'XX',
      label: 'Steel Grades',
    },
  ],
  journey: [
    {
      year: '[YEAR]',
      title: 'Establishment',
      text: 'Company founding details will be published once independently verified.',
    },
    {
      year: '[YEAR]',
      title: 'Plant & process',
      text: 'Facility location, capacity and process configuration — pending confirmed records.',
    },
    {
      year: '[YEAR]',
      title: 'Product range',
      text: 'Expansion of the catalogue across reinforcement, structural and wire products.',
    },
    {
      year: 'Today',
      title: 'Serving Tanzania',
      text: 'Supplying steel for construction, infrastructure and industrial demand.',
    },
  ],
} as const

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/process', label: 'Process' },
  { to: '/contact', label: 'Contact' },
] as const
