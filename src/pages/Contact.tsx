import { company } from '../data/company'
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
        text="Send an enquiry for TMT bars, structural steel, wire products and related materials."
      />
      <section className="section">
        <div className="container-a1 contact-grid">
          <div>
            <p className="kicker">Details</p>
            <h2 className="mb-4" style={{ fontSize: '2rem' }}>
              {company.legalName}
            </h2>
            <ul className="list-unstyled lede">
              <li className="mb-2">{company.address}</li>
              <li className="mb-2">{company.phone}</li>
              <li>{company.email}</li>
            </ul>
            <div className="map-ph mt-4">
              <div>
                <strong className="d-block mb-1" style={{ color: 'var(--a1-dark-blue)' }}>
                  Map
                </strong>
                Location will be shown here once the registered address is confirmed.
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
