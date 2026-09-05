import { Link } from 'react-router-dom'
import { company } from '../data/company'
import { images } from '../assets/images'

export function ApplicationsMosaic() {
  return (
    <div className="apps-mosaic">
      {company.applications.map((app) => (
        <Link key={app.slug} to="/products" className="app-hit">
          <img src={images[app.imageKey]} alt="" loading="lazy" />
          <div className="cap">
            <h3>{app.title}</h3>
            <p>{app.text}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
