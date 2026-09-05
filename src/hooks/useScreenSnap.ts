import { useLayoutEffect } from 'react'
import { getSnapScroller } from '../lib/scrollRoot'

const LOCK_MS = 780

export function useScreenSnap(enabled: boolean) {
  useLayoutEffect(() => {
    if (!enabled) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const root = getSnapScroller()
    if (!root) return

    let index = 0
    let locked = false
    let touchY = 0

    const screens = () => Array.from(root.querySelectorAll<HTMLElement>('.screen'))

    const syncIndex = () => {
      const list = screens()
      if (!list.length) return
      let best = 0
      let dist = Infinity
      list.forEach((el, i) => {
        const delta = Math.abs(el.offsetTop - root.scrollTop)
        if (delta < dist) {
          dist = delta
          best = i
        }
      })
      index = best
    }

    const go = (dir: 1 | -1) => {
      const list = screens()
      if (!list.length || locked) return
      const next = Math.min(list.length - 1, Math.max(0, index + dir))
      if (next === index) return
      index = next
      locked = true
      list[index].scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.setTimeout(() => {
        locked = false
        syncIndex()
      }, LOCK_MS)
    }

    const ignoreTarget = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return false
      return Boolean(target.closest('.product-rail, .nav-drawer, textarea, input, select'))
    }

    const onWheel = (e: WheelEvent) => {
      if (ignoreTarget(e.target)) return
      if (Math.abs(e.deltaY) < 10) return
      e.preventDefault()
      if (locked) return

      const list = screens()
      syncIndex()
      const current = list[index]
      if (!current) return

      const dir: 1 | -1 = e.deltaY > 0 ? 1 : -1
      const top = current.offsetTop
      const bottom = top + current.offsetHeight
      const viewTop = root.scrollTop
      const viewBottom = viewTop + root.clientHeight

      if (dir === 1 && viewBottom < bottom - 32) {
        locked = true
        root.scrollTo({
          top: Math.min(bottom - root.clientHeight, viewTop + root.clientHeight * 0.92),
          behavior: 'smooth',
        })
        window.setTimeout(() => {
          locked = false
          syncIndex()
        }, 520)
        return
      }

      if (dir === -1 && viewTop > top + 32) {
        locked = true
        root.scrollTo({
          top: Math.max(top, viewTop - root.clientHeight * 0.92),
          behavior: 'smooth',
        })
        window.setTimeout(() => {
          locked = false
          syncIndex()
        }, 520)
        return
      }

      go(dir)
    }

    const onKey = (e: KeyboardEvent) => {
      if (ignoreTarget(e.target)) return
      if (['ArrowDown', 'PageDown', ' ', 'ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault()
        go(e.key === 'ArrowUp' || e.key === 'PageUp' ? -1 : 1)
      }
    }

    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0]?.clientY ?? 0
    }

    const onTouchEnd = (e: TouchEvent) => {
      if (ignoreTarget(e.target)) return
      const y = e.changedTouches[0]?.clientY ?? touchY
      const dy = touchY - y
      if (Math.abs(dy) < 56) return
      go(dy > 0 ? 1 : -1)
    }

    root.addEventListener('wheel', onWheel, { passive: false })
    root.addEventListener('scroll', syncIndex, { passive: true })
    root.addEventListener('touchstart', onTouchStart, { passive: true })
    root.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('keydown', onKey)

    syncIndex()

    return () => {
      root.removeEventListener('wheel', onWheel)
      root.removeEventListener('scroll', syncIndex)
      root.removeEventListener('touchstart', onTouchStart)
      root.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('keydown', onKey)
    }
  }, [enabled])
}
