import { Link } from 'react-router-dom'
import type { Product } from '../data/products.js'
import { productFullSrc } from '../assets/images'
import { Button } from './Button'
import { SteelLine } from './SteelLine'

function Placeholder({ value }: { value: string | null }) {
  return <p className="placeholder">{value ?? '[PLACEHOLDER]'}</p>
}

export function ProductDetailView({ product }: { product: Product }) {
  const src = productFullSrc(product.slug)

  return (
    <article className="detail">
      <figure className="m-0 detail-media">
        {src ? (
          <img
            src={src}
            alt={`${product.name} — catalogue reference, photography not final`}
            width={1200}
            height={800}
            decoding="async"
          />
        ) : (
          <div className="product-plate is-large" aria-hidden="true">
            <span>{product.name}</span>
          </div>
        )}
      </figure>
      <div>
        <p className="cat-tag">{product.categoryLabel}</p>
        <h1 className="mt-2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
          {product.name}
        </h1>
        <SteelLine className="my-3" />
        <p className="lede">{product.description}</p>

        <section className="detail-panel mt-4">
          <h2>Applications</h2>
          <ul className="app-list">
            {product.applications.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section>

        <section className="detail-panel">
          <h2>Available Sizes</h2>
          <Placeholder value={product.availableSizes} />
        </section>

        <section className="detail-panel">
          <h2>Standards</h2>
          <Placeholder value={product.standards} />
        </section>

        <section className="detail-panel">
          <h2>Technical Specifications</h2>
          <Placeholder value={product.technicalSpecifications} />
        </section>

        <div className="hero-actions mt-4">
          <Button to={`/contact?product=${encodeURIComponent(product.slug)}`}>Request a quote</Button>
          <Button to="/contact" variant="outline">
            Contact sales
          </Button>
        </div>
        <p className="mt-3">
          <Link to="/products" className="explore">
            ← All products
          </Link>
        </p>
      </div>
    </article>
  )
}
