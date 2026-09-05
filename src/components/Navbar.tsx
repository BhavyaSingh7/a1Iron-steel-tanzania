import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/company'
import { Button } from './Button'
import { BrandLogo } from './BrandLogo'

const overlayRoutes = new Set(['/', '/about', '/products', '/process', '/contact'])

export function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const overlay = overlayRoutes.has(pathname) || pathname.startsWith('/products/')

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open
  const cls = `nav-a1 ${solid ? 'is-light' : overlay ? 'is-over' : 'is-light'}`

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className={cls}>
        <div className="container-a1">
          <Link to="/" className="nav-brand" aria-label="A1 Iron & Steel Tanzania Limited home">
            <BrandLogo />
          </Link>
          <nav aria-label="Primary">
            <ul className="nav-links">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} className={({ isActive }) => (isActive ? 'is-active' : '')} end={l.to === '/'}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-cta">
            <Button to="/contact" variant={solid || !overlay ? 'solid' : 'ghost'}>
              Get in Touch
            </Button>
          </div>
          <button
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      <div className={`nav-drawer ${open ? 'is-open' : ''}`} hidden={!open}>
        {navLinks.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'}>
            {l.label}
          </NavLink>
        ))}
        <Button to="/contact">Get in Touch</Button>
      </div>
    </>
  )
}
