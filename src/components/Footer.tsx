import { Link } from 'react-router-dom'
import { company, navLinks } from '../data/company'
import { products } from '../data/products.js'
import { BrandLogo } from './BrandLogo'
import { SteelLine } from './SteelLine'

export function Footer({ className = '' }: { className?: string }) {
  return (
    <footer className={`footer ${className}`.trim()}>
      <div className="container-a1">
        <SteelLine className="is-wide mb-5" />
        <div className="footer-top">
          <div className="footer-brand">
            <BrandLogo />
            <p className="mt-2" style={{ maxWidth: '32ch' }}>
              {company.tagline}. Engineered steel for construction, infrastructure and industry in Tanzania.
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
              {products.slice(0, 8).map((p) => (
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
              <li>{company.legalName}</li>
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
