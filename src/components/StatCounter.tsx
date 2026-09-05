import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

type Stat = {
  value: number | null
  suffix?: string
  placeholder: string | null
  label: string
}

function useCount(target: number, active: boolean) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!active) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setN(target)
      return
    }
    const start = performance.now()
    const dur = 900
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target])
  return n
}

function StatItem({ stat }: { stat: Stat }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const counted = useCount(stat.value ?? 0, inView && stat.value !== null)
  const display =
    stat.value === null ? (stat.placeholder ?? 'XX') : `${counted}${stat.suffix ?? ''}`

  return (
    <div ref={ref} className="stat-item">
      <dt>{display}</dt>
      <dd>{stat.label}</dd>
    </div>
  )
}

export function StatCounter({ stats }: { stats: readonly Stat[] | Stat[] }) {
  return (
    <dl className="stat-row">
      {stats.map((s) => (
        <StatItem key={s.label} stat={s} />
      ))}
    </dl>
  )
}
