import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { company } from '../data/company'
import { images } from '../assets/images'
import { PageHero } from '../components/PageHero'
import { ContactForm } from '../components/ContactForm'
import { SteelLine } from '../components/SteelLine'
import { orgSchema, Seo } from '../components/Seo'

function isPlaceholder(value: string) {
  return value.startsWith('[') && value.endsWith(']')
}

export default function Contact() {
  const phoneHref = isPlaceholder(company.phone) ? undefined : `tel:${company.phone.replace(/\s/g, '')}`
  const mailHref = isPlaceholder(company.email) ? undefined : `mailto:${company.email}`
  const social = Object.entries(company.social).filter(([, url]) => Boolean(url)) as [string, string][]

  return (
    <>
      <Seo
        title="Contact"
        description="Reach A1 Iron & Steel Tanzania Limited for steel product enquiries, quotes and sales. A representative will get back to you shortly."
        path="/contact"
        schema={orgSchema}
      />
      <PageHero
        compact
        title={'Start a conversation.'}
        image={images.cta}
        imageAlt="Industrial steel manufacturing"
      >
        <p className="lede contact-intro-copy">
          <strong>A1 Iron &amp; Steel</strong> is built on a foundation of quality, innovation, and
          dedication to the iron and steel industry. As a trusted provider, we offer high-quality
          metal products designed to meet the demands of the construction, engineering, and
          infrastructure sectors.
        </p>
        <p className="lede contact-intro-copy">
          <strong>Reach out to us</strong>, and one of our representatives will get back to you
          shortly.
        </p>
      </PageHero>

      <section className="contact-stage" aria-labelledby="contact-heading">
        <div className="container-a1 contact-layout">
          <div className="contact-col">
            <p className="kicker">Direct lines</p>
            <h2 id="contact-heading">We would like to hear from you.</h2>
            <SteelLine className="my-3" />
            <p className="lede">
              Whether you are specifying a first heat or a long-running programme, write as you
              would to a mill partner — clear, practical, and without ceremony.
            </p>
            <ul className="contact-cards">
              <li>
                <article className="contact-card">
                  <span className="contact-ico" aria-hidden="true">
                    <Phone size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3>Phone</h3>
                    {phoneHref ? (
                      <a href={phoneHref}>{company.phone}</a>
                    ) : (
                      <p>{company.phone}</p>
                    )}
                    <p className="meta">Published once the registered line is confirmed.</p>
                  </div>
                </article>
              </li>
              <li>
                <article className="contact-card">
                  <span className="contact-ico" aria-hidden="true">
                    <Mail size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3>Email</h3>
                    {mailHref ? (
                      <a href={mailHref}>{company.email}</a>
                    ) : (
                      <p>{company.email}</p>
                    )}
                    <p className="meta">The public inbox will appear here when it is live.</p>
                  </div>
                </article>
              </li>
              <li>
                <article className="contact-card">
                  <span className="contact-ico" aria-hidden="true">
                    <MapPin size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3>Location / address</h3>
                    <p>{company.address}</p>
                    <p className="meta">
                      Tanzania. A map will be embedded when the registered office is published.
                    </p>
                  </div>
                </article>
              </li>
              <li>
                <article className="contact-card">
                  <span className="contact-ico" aria-hidden="true">
                    <Clock size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3>Business hours</h3>
                    <p>To be confirmed</p>
                    <p className="meta">
                      Opening hours are not published yet. We will add them here when they are
                      verified.
                    </p>
                  </div>
                </article>
              </li>
            </ul>
            {social.length > 0 ? (
              <ul className="contact-social">
                {social.map(([name, url]) => (
                  <li key={name}>
                    <a href={url} rel="noreferrer" target="_blank">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="contact-social-note">
                Social channels will be linked here when official profiles are confirmed.
              </p>
            )}
          </div>
          <div className="contact-form-pane">
            <p className="kicker">Message</p>
            <h2>Send a note to the team.</h2>
            <p className="lede mb-4">
              A few lines are enough. If you already have a product in mind, choose it below — or
              leave it open.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="contact-close" aria-labelledby="contact-thanks">
        <div className="container-a1">
          <p className="kicker">Until then</p>
          <h2 id="contact-thanks">Thank you for choosing A1 Iron &amp; Steel</h2>
          <SteelLine className="my-3" />
          <p className="lede">Your trusted partner in strength and progress!</p>
        </div>
      </section>
    </>
  )
}
