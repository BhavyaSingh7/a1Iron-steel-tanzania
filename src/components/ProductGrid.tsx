import { useMemo, useState } from 'react'
import type { Product, ProductCategoryId } from '../data/products.js'
import { productCategories } from '../data/products.js'
import { ProductCard } from './ProductCard'
import { CatalogueCard } from './CatalogueCard'

type Props = {
  products: Product[]
  filterable?: boolean
  cta?: string
  variant?: 'cards' | 'catalogue'
}

export function ProductGrid({ products, filterable = false, cta, variant = 'cards' }: Props) {
  const [cat, setCat] = useState<ProductCategoryId>('all')
  const [tick, setTick] = useState(0)
  const list = useMemo(
    () => (!filterable || cat === 'all' ? products : products.filter((p) => p.category === cat)),
    [products, filterable, cat],
  )

  return (
    <div>
      {filterable ? (
        <div className="filter-bar">
          <div className="filters" role="tablist" aria-label="Product categories">
            {productCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={cat === c.id}
                className={`filter-btn ${cat === c.id ? 'is-on' : ''}`}
                onClick={() => {
                  setCat(c.id)
                  setTick((t) => t + 1)
                }}
              >
                {c.label}
              </button>
            ))}
          </div>
          <p className="filter-count">
            {list.length} {list.length === 1 ? 'product' : 'products'}
          </p>
        </div>
      ) : null}
      {list.length === 0 ? (
        <p className="lede">No products in this category yet.</p>
      ) : variant === 'catalogue' ? (
        <div key={tick} className="catalogue-list">
          {list.map((p) => (
            <CatalogueCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div key={tick} className={`product-grid ${filterable ? 'is-filtering' : ''}`}>
          {list.map((p, i) => (
            <ProductCard key={p.slug} product={p} cta={cta} index={i} />
          ))}
        </div>
      )}
    </div>
  )
}
