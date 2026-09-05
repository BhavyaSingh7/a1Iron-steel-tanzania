import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollProgress } from './ScrollProgress'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export function Layout() {
  const { pathname } = useLocation()
  const snap = pathname === '/' || pathname === '/process'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    document.documentElement.classList.toggle('is-snap', snap)
    return () => document.documentElement.classList.remove('is-snap')
  }, [snap])

  return (
    <div className={`site-wrap ${snap ? 'is-snap' : ''}`}>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer className={snap ? 'screen' : ''} />
    </div>
  )
}
