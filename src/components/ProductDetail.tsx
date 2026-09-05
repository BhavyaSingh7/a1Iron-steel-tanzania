import { Link } from 'react-router-dom'
import type { Product } from '../data/products.js'
import { getRelated } from '../data/products.js'
import { productFullSrc } from '../assets/images'
import { Button } from './Button'
import { SteelLine } from './SteelLine'
import { ProductCard } from './ProductCard'

const DATA = '[TECHNICAL DATA TO BE ADDED]'

export function ProductDetailView({ product }: { product: Product }) {
  const src = productFullSrc(product.slug)
  const related = getRelated(product.slug, 3)

  return (
    <>
      <div className="detail-hero">
        <figure>
          <img src={src} alt={`${product.name} — A1 Iron & Steel Tanzania`} />
        </figure>
        <div className="copy">
          <p className="cat-tag">{product.categoryLabel}</p>
          <h1 className="mt-2">{product.name}</h1>
          <SteelLine className="my-3" />
          <p className="lede" style={{ color: 'rgba(255,255,255,0.78)' }}>
            {product.description}
          </p>
          <div className="hero-actions mt-4">
            <Button to={`/contact?product=${encodeURIComponent(product.slug)}`}>Request a quote</Button>
            <Button to="/contact" variant="ghost">
              Contact sales
            </Button>
          </div>
        </div>
      </div>

      <div className="container-a1 section">
        <section className="mb-5">
          <p className="kicker">Product overview</p>
          <h2 className="mb-3">Specified for the job.</h2>
          <p className="lede">{product.description}</p>
        </section>

        <section className="mb-5">
          <h2 className="mb-3">Applications</h2>
          <ul className="app-list">
            {product.applications.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section>

        <div className="spec-grid mb-5">
          <article className="spec-box">
            <h2>Specifications</h2>
            <p className="placeholder mt-3">{DATA}</p>
          </article>
          <article className="spec-box">
            <h2>Available sizes</h2>
            <p className="placeholder mt-3">{DATA}</p>
          </article>
          <article className="spec-box">
            <h2>Standards</h2>
            <p className="placeholder mt-3">{DATA}</p>
          </article>
        </div>

        <div className="quote-strip mb-5">
          <div>
            <p className="kicker mb-2">Sales</p>
            <h2 style={{ fontSize: '2rem' }}>Request a quote</h2>
            <p className="lede mt-2">Product, quantity and destination — we will respond once contact channels are published.</p>
          </div>
          <Button to={`/contact?product=${encodeURIComponent(product.slug)}`}>Request a quote</Button>
        </div>

        <section>
          <h2 className="mb-4">Related products</h2>
          <div className="product-grid">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} cta="View product" />
            ))}
          </div>
          <p className="mt-4">
            <Link to="/products" className="explore">
              ← Full catalogue
            </Link>
          </p>
        </section>
      </div>
    </>
  )
}
