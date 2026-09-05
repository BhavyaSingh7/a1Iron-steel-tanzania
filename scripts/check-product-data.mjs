import { products, productSlugs, getProduct, getProductsByCategory } from '../src/data/products.js'

const required = [
  'tmt-bars',
  'round-bars',
  'wire-rods',
  'v-angles',
  'c-channels',
  'flat-bars',
  'hot-rolled-strips',
  'hollow-sections',
  'binding-wire',
  'wire-nails',
  'brc-welded-mesh',
  'gi-chain-link',
  'barbed-wire',
]

const errors = []

if (products.length !== 13) errors.push(`Expected 13 products, got ${products.length}`)
if (new Set(productSlugs).size !== productSlugs.length) errors.push('Duplicate slugs')

for (const slug of required) {
  const p = getProduct(slug)
  if (!p) errors.push(`Missing product route data: /products/${slug}`)
  else {
    if (p.availableSizes !== null) errors.push(`${slug} invented availableSizes`)
    if (p.standards !== null) errors.push(`${slug} invented standards`)
    if (p.technicalSpecifications !== null) errors.push(`${slug} invented technicalSpecifications`)
  }
}

for (const cat of ['reinforcement', 'structural', 'wire', 'flat', 'hollow']) {
  if (!getProductsByCategory(cat).length) errors.push(`Empty category: ${cat}`)
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}

console.log('Product data OK')
console.log(productSlugs.map((s) => `/products/${s}`).join('\n'))
