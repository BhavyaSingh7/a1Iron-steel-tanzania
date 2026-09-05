import { Link } from 'react-router-dom'
import type { Product } from '../data/products.js'
import { productFullSrc } from '../assets/images'

export function ProductShowcase({ products }: { products: Product[] }) {
  return (
    <div className="rail-wrap">
      <div className="product-rail">
        {products.map((p) => (
          <Link key={p.slug} to={`/products/${p.slug}`} className="rail-card">
            <img
              src={productFullSrc(p.slug)}
              alt={`${p.name} — A1 Iron & Steel Tanzania catalogue`}
              loading="lazy"
            />
            <div className="copy">
              <span className="cat-tag">{p.categoryLabel}</span>
              <h3>{p.name}</h3>
              <span className="accent" />
              <p>{p.shortDescription}</p>
              <span className="explore" style={{ color: '#fff' }}>
                Explore →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
