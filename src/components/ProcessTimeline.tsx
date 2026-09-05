import { useEffect, useState } from 'react'
import { homeProcess } from '../data/process'
import { useInView } from '../hooks/useInView'

export function ProcessTimeline() {
  const { ref, inView } = useInView<HTMLDivElement>(false)
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!inView) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setActive(homeProcess.length - 1)
      return
    }
    const id = window.setInterval(() => {
      setActive((n) => (n + 1) % homeProcess.length)
    }, 1600)
    return () => window.clearInterval(id)
  }, [inView])

  return (
    <div ref={ref} className="process-rail">
      {homeProcess.map((step, i) => (
        <article key={step.title} className={`process-step ${i <= active ? 'is-on' : ''}`}>
          <em>{String(i + 1).padStart(2, '0')}</em>
          <h3>{step.title}</h3>
        </article>
      ))}
    </div>
  )
}
