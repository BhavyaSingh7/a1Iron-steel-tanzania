import { Link } from 'react-router-dom'
import emblem from '../assets/logo/a1-emblem-nav.png'
import { company, navLinks } from '../data/company'
import { products } from '../data/products.js'
import { SteelLine } from './SteelLine'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-a1">
        <SteelLine className="is-wide mb-5" />
        <div className="footer-top">
          <div className="footer-brand">
            <img src={emblem} alt="" width={52} height={50} />
            <strong>{company.legalName.toUpperCase()}</strong>
            <p className="mt-2" style={{ maxWidth: '28ch' }}>
              {company.tagline}
            </p>
          </div>
          <div>
            <h2>Navigation</h2>
            <ul>
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Products</h2>
            <ul>
              {products.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link to={`/products/${p.slug}`}>{p.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/products">All products</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li>{company.address}</li>
              <li>{company.phone}</li>
              <li>{company.email}</li>
            </ul>
            <p className="mt-3 social-disabled">Social links — pending official profiles</p>
          </div>
        </div>
        <div className="footer-base">
          <span>© 2026 {company.legalName}. All Rights Reserved.</span>
          <span>Steel manufacturer, Tanzania</span>
        </div>
      </div>
    </footer>
  )
}
