import { millJourney } from '../data/process'
import { useInView } from '../hooks/useInView'

export function ProcessFlow() {
  const { ref, inView } = useInView<HTMLElement>(true)

  return (
    <section
      ref={ref}
      className={`mill-flow screen ${inView ? 'is-live' : ''}`}
      aria-labelledby="mill-flow-title"
    >
      <div className="container-a1">
        <p className="kicker">The steel-making journey</p>
        <h2 id="mill-flow-title">From Ore to Steel</h2>
        <p className="lede mill-flow-lede">
          <strong>Every stage is engineered for precision, consistency, and strength.</strong>
        </p>
        <ol className="mill-flow-line">
          {millJourney.map((step, i) => (
            <li key={step.id} style={{ ['--i' as string]: String(i) }}>
              <em>{step.number}</em>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
