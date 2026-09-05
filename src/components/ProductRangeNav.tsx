import type { Product } from '../data/products.js'

type Props = {
  products: Product[]
  active: string | null
}

export function ProductRangeNav({ products, active }: Props) {
  return (
    <nav className="range-nav" aria-label="Product index">
      <a href="#range" className={!active ? 'is-on' : undefined}>
        All products
      </a>
      {products.map((p, i) => (
        <a
          key={p.slug}
          href={`#product-${p.slug}`}
          className={active === p.slug ? 'is-on' : undefined}
        >
          <span>{String(i + 1).padStart(2, '0')}</span>
          {p.name}
        </a>
      ))}
    </nav>
  )
}
