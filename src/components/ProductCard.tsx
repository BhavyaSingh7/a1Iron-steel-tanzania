import { Link } from 'react-router-dom'
import type { Product } from '../data/products.js'
import { productCardSrc } from '../assets/images'

type Props = {
  product: Product
  cta?: string
  index?: number
}

export function ProductCard({ product, cta = 'Explore →', index }: Props) {
  const src = productCardSrc(product.slug)
  const n = index !== undefined ? String(index + 1).padStart(2, '0') : null

  return (
    <Link to={`/products/${product.slug}`} className="product-card">
      <figure>
        {src ? (
          <img
            src={src}
            alt={`${product.name} — catalogue reference, photography not final`}
            loading="lazy"
            decoding="async"
            width={640}
            height={400}
          />
        ) : (
          <div className="product-plate" aria-hidden="true">
            <span>{product.name}</span>
          </div>
        )}
        {n ? <em className="product-index">{n}</em> : null}
      </figure>
      <div className="body">
        <span className="cat-tag">{product.categoryLabel}</span>
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
        <span className="explore">{cta}</span>
      </div>
    </Link>
  )
}
