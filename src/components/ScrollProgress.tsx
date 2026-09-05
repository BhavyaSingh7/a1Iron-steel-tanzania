import { useEffect, useState } from 'react'
import { getScrollMetrics } from '../lib/scrollRoot'

export function ScrollProgress() {
  const [w, setW] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const { y, max } = getScrollMetrics()
      setW((y / max) * 100)
    }
    onScroll()
    const root = document.querySelector('.site-wrap')
    root?.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      root?.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  return <div className="scroll-progress" style={{ width: `${w}%` }} aria-hidden="true" />
}
