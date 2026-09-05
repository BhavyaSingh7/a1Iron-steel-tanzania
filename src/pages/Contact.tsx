import { company } from '../data/company'
import { images } from '../assets/images'
import { PageHero } from '../components/PageHero'
import { ContactForm } from '../components/ContactForm'
import { orgSchema, Seo } from '../components/Seo'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact A1 Iron & Steel Tanzania Limited for steel product enquiries, quotes and sales."
        path="/contact"
        schema={orgSchema}
      />
      <PageHero
        title={"Let’s build\ntogether."}
        text="Enquiries for TMT bars, structural steel, wire products and related materials."
        image={images.cta}
      />
      <div className="contact-split">
        <div className="info">
          <p className="kicker">A1 Iron & Steel</p>
          <h2 className="mb-4">{company.legalName}</h2>
          <ul className="list-unstyled" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
            <li>{company.address}</li>
            <li>{company.phone}</li>
            <li>{company.email}</li>
          </ul>
          <p className="mt-4" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '32ch' }}>
            Contact details remain placeholders until the registered office, phone and email are confirmed.
          </p>
        </div>
        <div className="form-pane">
          <p className="kicker">Enquiry</p>
          <h2 className="mb-4" style={{ fontSize: '2.2rem' }}>
            Send us the specification.
          </h2>
          <ContactForm />
        </div>
      </div>
      <section className="section section-light">
        <div className="container-a1">
          <p className="kicker">Location</p>
          <h2 className="mb-4">Map</h2>
          <div className="map-ph">
            <div>
              <strong className="d-block mb-1" style={{ color: 'var(--a1-dark-blue)' }}>
                Registered address pending confirmation
              </strong>
              A map will be embedded here once the official location is published.
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
