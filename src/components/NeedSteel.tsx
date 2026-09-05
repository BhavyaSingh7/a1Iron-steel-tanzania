import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProduct, type Product } from '../data/products.js'
import { productFullSrc } from '../assets/catalogue'
import { Button } from './Button'
import { SteelLine } from './SteelLine'

const jobs = [
  {
    id: 'housing',
    n: '01',
    title: 'House or building',
    slugs: ['tmt-bars', 'brc-welded-mesh', 'binding-wire'],
  },
  {
    id: 'infra',
    n: '02',
    title: 'Roads and civil works',
    slugs: ['tmt-bars', 'v-angles', 'c-channels'],
  },
  {
    id: 'plant',
    n: '03',
    title: 'Plant or warehouse',
    slugs: ['hollow-sections', 'c-channels', 'flat-bars'],
  },
  {
    id: 'site',
    n: '04',
    title: 'Fencing and site',
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
  const lead = picks[0]
  const rest = picks.slice(1)

  return (
    <div className="need-steel">
      <header className="need-steel-copy">
        <p className="kicker">The mill</p>
        <h3>Steel for the job.</h3>
        <SteelLine className="my-3" />
        <p>Select a project type. The catalogue lines that typically go on that site open on the right.</p>
      </header>

      <div className="need-steel-board">
        <div className="need-steel-jobs" role="tablist" aria-label="Project type">
          {jobs.map((j) => (
            <button
              key={j.id}
              type="button"
              role="tab"
              aria-selected={j.id === id}
              aria-controls="need-steel-stage"
              className={j.id === id ? 'is-on' : ''}
              onClick={() => setId(j.id)}
            >
              <span>{j.n}</span>
              {j.title}
            </button>
          ))}
        </div>

        <div className="need-steel-stage" id="need-steel-stage">
          {lead ? (
            <Link to={`/products/${lead.slug}`} className="need-steel-lead">
              <img src={productFullSrc(lead.slug)} alt="" loading="lazy" decoding="async" />
              <span>
                <em>{lead.categoryLabel}</em>
                <strong>{lead.name}</strong>
                <small>{lead.shortDescription}</small>
                Open product →
              </span>
            </Link>
          ) : null}
          <ul>
            {rest.map((p) => (
              <li key={p.slug}>
                <Link to={`/products/${p.slug}`}>
                  <img src={productFullSrc(p.slug)} alt="" loading="lazy" decoding="async" />
                  <span>
                    <em>{p.categoryLabel}</em>
                    <strong>{p.name}</strong>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="need-steel-cta">
        <Button to="/products" variant="ghost">
          Full catalogue
        </Button>
        <Button to="/contact">Talk to A1</Button>
      </div>
    </div>
  )
}
