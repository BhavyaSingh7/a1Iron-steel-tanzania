import { Link } from 'react-router-dom'
import type { Product } from '../data/products.js'
import { productShowSrc } from '../assets/products'
import { SteelLine } from './SteelLine'
import { Button } from './Button'

type Props = {
  product: Product
  index: number
  total: number
}

function layoutOf(index: number) {
  const m = index % 3
  if (m === 0) return 'split'
  if (m === 1) return 'reverse'
  return 'panel'
}

export function ProductShow({ product, index, total }: Props) {
  const n = String(index + 1).padStart(2, '0')
  const src = productShowSrc(product.slug)
  const layout = layoutOf(index)

  return (
    <article
      id={`product-${product.slug}`}
      className={`show-stage is-${layout}`}
      aria-labelledby={`show-title-${product.slug}`}
    >
      <div className="container-a1 show-grid">
        <figure className="show-frame">
          <img
            src={src}
            alt={`${product.name} from A1 Iron & Steel Tanzania Limited`}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="show-copy">
          <p className="kicker">
            <span className="show-index">
              {n} / {total.toString().padStart(2, '0')}
            </span>
            {product.categoryLabel}
          </p>
          <h2 id={`show-title-${product.slug}`}>{product.name}</h2>
          <SteelLine className="my-3" />
          <p className="lede">{product.description}</p>
          <dl className="show-specs">
            <div>
              <dt>Available sizes</dt>
              <dd>{product.availableSizes ?? '[TECHNICAL DATA TO BE ADDED]'}</dd>
            </div>
            <div>
              <dt>Standards</dt>
              <dd>{product.standards ?? '[TECHNICAL DATA TO BE ADDED]'}</dd>
            </div>
          </dl>
          <div className="show-apps">
            <h3>Applications</h3>
            <ul>
              {product.applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="show-actions">
            <Button to={`/contact?product=${encodeURIComponent(product.slug)}`}>Request a quote</Button>
            <Link to={`/products/${product.slug}`} className="explore">
              Product page →
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
