import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="site-wrap">
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
