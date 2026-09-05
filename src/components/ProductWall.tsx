import { Link } from 'react-router-dom'
import { productShowSrc } from '../assets/products'
import type { Product } from '../data/products.js'
import { SteelLine } from './SteelLine'

type Props = {
  products: Product[]
}

export function ProductWall({ products }: Props) {
  return (
    <section className="range-screen" id="range" aria-labelledby="range-title">
      <div className="container-a1">
        <header className="range-head">
          <p className="kicker">The range</p>
          <h2 id="range-title">Every product, at a glance.</h2>
          <SteelLine className="my-3" />
          <p className="range-count">
            {products.length} products. Open any one for its own page.
          </p>
        </header>
        <ul className="range-wall">
          {products.map((p, i) => {
            const n = String(i + 1).padStart(2, '0')
            const src = productShowSrc(p.slug)
            return (
              <li key={p.slug} className={i === 0 ? 'is-feature' : undefined}>
                <Link
                  to={`/products/${p.slug}`}
                  className="range-tile"
                  aria-label={`${n}. ${p.name}, ${p.categoryLabel}. Open product page.`}
                >
                  <img src={src} alt="" loading={i < 4 ? 'eager' : 'lazy'} decoding="async" />
                  <span className="range-num" aria-hidden="true">
                    {n}
                  </span>
                  <span className="range-caption">
                    <span className="range-cat">{p.categoryLabel}</span>
                    <strong>{p.name}</strong>
                    <span className="range-go">Open</span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
