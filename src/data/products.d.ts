export type ProductCategoryId =
  | 'all'
  | 'reinforcement'
  | 'structural'
  | 'wire'
  | 'flat'
  | 'hollow'

export type Product = {
  slug: string
  name: string
  category: Exclude<ProductCategoryId, 'all'>
  categoryLabel: string
  shortDescription: string
  description: string
  applications: string[]
  availableSizes: null
  standards: null
  technicalSpecifications: null
}

export const productCategories: ReadonlyArray<{
  id: ProductCategoryId
  label: string
}>

export const products: Product[]
export const productSlugs: string[]
export function getProduct(slug: string): Product | undefined
export function getProductsByCategory(category: ProductCategoryId): Product[]
