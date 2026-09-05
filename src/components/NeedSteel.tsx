import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProduct, type Product } from '../data/products.js'
import { Button } from './Button'

const jobs = [
  {
    id: 'housing',
    title: 'A house or building',
    hint: 'Frames, slabs and site steel',
    slugs: ['tmt-bars', 'brc-welded-mesh', 'binding-wire'],
  },
  {
    id: 'infra',
    title: 'Roads or public works',
    hint: 'Civil structures and sections',
    slugs: ['tmt-bars', 'v-angles', 'c-channels'],
  },
  {
    id: 'plant',
    title: 'A plant or warehouse',
    hint: 'Frames, purlins and hollows',
    slugs: ['hollow-sections', 'c-channels', 'flat-bars'],
  },
  {
    id: 'site',
    title: 'Fencing and site work',
    hint: 'Mesh, wire and fasteners',
    slugs: ['gi-chain-link', 'barbed-wire', 'wire-nails'],
  },
] as const

export function NeedSteel() {
  const [id, setId] = useState<(typeof jobs)[number]['id']>('housing')
  const job = jobs.find((j) => j.id === id) ?? jobs[0]
  const picks = useMemo(
    () => job.slugs.map((slug) => getProduct(slug)).filter((p: Product | undefined): p is Product => Boolean(p)),
    [job],
  )

  return (
    <div className="need-steel">
      <div className="need-steel-copy">
        <p className="kicker">Start here</p>
        <h3>What are you building?</h3>
        <p>Pick a job. We will show catalogue lines that typically go on that site — then open the product page.</p>
      </div>
      <div className="need-steel-picks" role="tablist" aria-label="Project type">
        {jobs.map((j) => (
          <button
            key={j.id}
            type="button"
            role="tab"
            aria-selected={j.id === id}
            className={j.id === id ? 'is-on' : ''}
            onClick={() => setId(j.id)}
          >
            <strong>{j.title}</strong>
            <span>{j.hint}</span>
          </button>
        ))}
      </div>
      <ul className="need-steel-out">
        {picks.map((p) => (
          <li key={p.slug}>
            <Link to={`/products/${p.slug}`}>
              <em>{p.categoryLabel}</em>
              {p.name}
              <span>{p.shortDescription}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="need-steel-cta">
        <Button to="/products" variant="ghost">
          Full catalogue
        </Button>
        <Button to="/contact">Talk to A1</Button>
      </div>
    </div>
  )
}
