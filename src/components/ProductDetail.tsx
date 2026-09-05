import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import type { Product } from '../data/products.js'
import { getRelated, products } from '../data/products.js'
import { getProductScreen } from '../data/productScreens'
import { productShowSrc } from '../assets/products'
import { Button } from './Button'
import { SteelLine } from './SteelLine'

const DATA = '[TECHNICAL DATA TO BE ADDED]'

export function ProductDetailView({ product }: { product: Product }) {
  const src = productShowSrc(product.slug)
  const screen = getProductScreen(product)
  const related = getRelated(product.slug, 3)
  const index = Math.max(0, products.findIndex((p) => p.slug === product.slug))
  const total = products.length
  const n = String(index + 1).padStart(2, '0')
  const prev = products[(index - 1 + total) % total]
  const next = products[(index + 1) % total]
  const quoteTo = `/contact?product=${encodeURIComponent(product.slug)}`

  return (
    <article className="pd-page">
      <section className="pd-screen" aria-labelledby="pd-title">
        <img
          className="pd-bg"
          src={src}
          alt={`${product.name} from A1 Iron & Steel Tanzania Limited`}
          fetchPriority="high"
          decoding="async"
        />
        <div className="pd-shade" />
        <Link to="/products" className="pd-back">
          <ArrowLeft size={18} strokeWidth={2.25} aria-hidden="true" />
          All products
        </Link>
        <div className="container-a1 pd-hero">
          <p className="kicker">
            <span className="show-index">
              {n} / {String(total).padStart(2, '0')}
            </span>
            {product.categoryLabel}
          </p>
          <h1 id="pd-title">{product.name}</h1>
          <SteelLine className="my-3" />
          <p className="lede pd-lead">{product.shortDescription}</p>
          <div className="hero-actions mt-4">
            <Button to={quoteTo}>Request a quote</Button>
            <Button to="/contact" variant="ghost">
              Contact sales
            </Button>
          </div>
        </div>
      </section>

      <section className="pd-dossier" aria-labelledby="pd-overview">
        <div className="container-a1 pd-dossier-grid">
          <figure className="pd-shot">
            <img src={src} alt={`${product.name} — catalogue photograph`} loading="lazy" decoding="async" />
          </figure>
          <div>
            <p className="kicker">Product dossier</p>
            <h2 id="pd-overview">{screen.headline}</h2>
            <SteelLine className="my-3" />
            <p className="lede">{product.description}</p>
            <p className="pd-supply">{screen.supply}</p>
            <ul className="pd-highlights">
              {screen.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pd-uses" aria-labelledby="pd-uses-title">
        <div className="container-a1">
          <p className="kicker">Specified for</p>
          <h2 id="pd-uses-title">Where {product.name} is used.</h2>
          <SteelLine className="my-3" />
          <ol className="pd-use-grid">
            {product.applications.map((app, i) => (
              <li key={app}>
                <em>{String(i + 1).padStart(2, '0')}</em>
                <strong>{app}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pd-tech" aria-labelledby="pd-tech-title">
        <div className="container-a1 pd-tech-grid">
          <div>
            <p className="kicker">Technical data</p>
            <h2 id="pd-tech-title">Sizes, standards and mill data.</h2>
            <SteelLine className="my-3" />
            <p className="lede">
              Published schedules for {product.name} will sit here. Until mill confirmation,
              treat the fields below as reserved — not as current figures.
            </p>
            <div className="hero-actions mt-4">
              <Button to={quoteTo}>Request this product</Button>
            </div>
          </div>
          <dl className="pd-facts">
            <div>
              <dt>Available sizes</dt>
              <dd>{product.availableSizes ?? DATA}</dd>
            </div>
            <div>
              <dt>Standards</dt>
              <dd>{product.standards ?? DATA}</dd>
            </div>
            <div>
              <dt>Specifications</dt>
              <dd>{product.technicalSpecifications ?? DATA}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="pd-related" aria-labelledby="pd-related-title">
        <div className="container-a1">
          <p className="kicker">In the range</p>
          <h2 id="pd-related-title">Related products</h2>
          <SteelLine className="my-3" />
          <ul className="pd-related-grid">
            {related.map((p) => (
              <li key={p.slug}>
                <Link to={`/products/${p.slug}`} className="pd-related-card">
                  <img src={productShowSrc(p.slug)} alt="" loading="lazy" decoding="async" />
                  <span>
                    <em>{p.categoryLabel}</em>
                    <strong>{p.name}</strong>
                    <small>{p.shortDescription}</small>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav className="pd-pager" aria-label="Other products">
        <Link to={`/products/${prev.slug}`} className="pd-peer">
          <img src={productShowSrc(prev.slug)} alt="" loading="lazy" decoding="async" />
          <span>
            <em>Previous</em>
            <strong>{prev.name}</strong>
          </span>
        </Link>
        <Link to={`/products/${next.slug}`} className="pd-peer is-next">
          <img src={productShowSrc(next.slug)} alt="" loading="lazy" decoding="async" />
          <span>
            <em>Next</em>
            <strong>{next.name}</strong>
          </span>
        </Link>
      </nav>
    </article>
  )
}
