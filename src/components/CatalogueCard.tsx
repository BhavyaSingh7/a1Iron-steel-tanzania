import { Link } from 'react-router-dom'
import type { Product } from '../data/products.js'
import { productFullSrc } from '../assets/catalogue'

export function CatalogueCard({ product }: { product: Product }) {
  return (
    <article className="catalogue-card">
      <figure>
        <img
          src={productFullSrc(product.slug)}
          alt={`${product.name} — A1 Iron & Steel Tanzania catalogue`}
          loading="lazy"
        />
      </figure>
      <div className="body">
        <span className="cat-tag">{product.categoryLabel}</span>
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
        <p>
          <strong>Applications: </strong>
          {product.applications.slice(0, 3).join(' · ')}
        </p>
        <p className="placeholder">Available sizes — [TECHNICAL DATA TO BE ADDED]</p>
        <p className="placeholder">Standards — [TECHNICAL DATA TO BE ADDED]</p>
        <Link to={`/products/${product.slug}`} className="explore">
          View product →
        </Link>
      </div>
    </article>
  )
}
