import { Link } from 'react-router-dom'
import { company } from '../data/company'
import { products } from '../data/products.js'
import { images } from '../assets/images'
import { Hero } from '../components/Hero'
import { SectionHeading } from '../components/SectionHeading'
import { ImageReveal } from '../components/ImageReveal'
import { StatCounter } from '../components/StatCounter'
import { ProductGrid } from '../components/ProductGrid'
import { ProcessTimeline } from '../components/ProcessTimeline'
import { CTASection } from '../components/CTASection'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { orgSchema, Seo } from '../components/Seo'

export default function Home() {
  return (
    <>
      <Seo
        title="Steel Manufacturer Tanzania"
        description="A1 Iron & Steel Tanzania Limited manufactures high-quality steel products for construction, infrastructure and industry — TMT bars, structural steel and wire products."
        path="/"
        schema={orgSchema}
      />
      <Hero
        eyebrow="A1 Iron & Steel Tanzania"
        title={'Building Tanzania’s\nfuture with steel.'}
        text="High-quality steel products engineered for construction, infrastructure and industry."
        primary={{ to: '/products', label: 'Explore products' }}
        secondary={{ to: '/about', label: 'About A1' }}
      />

      <section className="section">
        <div className="container-a1 intro-grid">
          <ImageReveal src={images.plant} alt="Industrial steel manufacturing plant" />
          <Reveal>
            <SectionHeading
              kicker="The company"
              title={'Steel that builds.\nStrength that lasts.'}
            />
            <p className="lede mt-4">{company.intro}</p>
            <StatCounter stats={company.stats} />
          </Reveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-a1">
          <SectionHeading kicker="Catalogue" title={'Engineered for\nevery build.'} />
          <div className="mt-5">
            <ProductGrid products={products} cta="Explore →" />
          </div>
          <div className="mt-4">
            <Button to="/products" variant="outline">
              View full catalogue
            </Button>
          </div>
        </div>
      </section>

      <section className="section section-dark why">
        <div className="why-rods" aria-hidden="true" />
        <div className="container-a1">
          <SectionHeading kicker="Why A1" title="Built different." light />
          <ul className="why-list">
            {company.whyA1.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-a1">
          <SectionHeading
            kicker="Manufacturing"
            title={'From raw material\nto finished steel.'}
          />
          <ProcessTimeline />
          <div className="mt-4">
            <Button to="/process" variant="outline">
              See the process
            </Button>
          </div>
        </div>
      </section>

      <section className="cinema">
        <img src={images.making} alt="Steel rolling and finishing operations" />
        <div className="cinema-shade" />
        <div className="container-a1">
          <h2>
            Engineering the steel
            <br />
            behind progress.
          </h2>
          <Button to="/process">Discover our process</Button>
        </div>
      </section>

      <section className="section">
        <div className="container-a1">
          <SectionHeading kicker="Where steel works" title="Applications" />
          <div className="app-edit mt-5">
            {company.applications.map((app) => (
              <Link key={app.slug} to="/products" className="app-tile">
                <img
                  src={images[app.imageKey]}
                  alt={`${app.title} — steel applications`}
                  loading="lazy"
                />
                <h3>{app.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={"Let’s build something\nstronger."}
        text="Talk to our team about your steel requirements."
        cta="Get in touch"
        to="/contact"
      />
    </>
  )
}
