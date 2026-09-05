export function getSnapScroller(): HTMLElement | null {
  return document.querySelector('.site-wrap.is-snap')
}

export function getScrollY(): number {
  const root = getSnapScroller()
  return root ? root.scrollTop : window.scrollY
}

export function getScrollMetrics(): { y: number; max: number } {
  const root = getSnapScroller()
  if (root) {
    return { y: root.scrollTop, max: Math.max(1, root.scrollHeight - root.clientHeight) }
  }
  const doc = document.documentElement
  return {
    y: window.scrollY,
    max: Math.max(1, doc.scrollHeight - window.innerHeight),
  }
}
