import { Link } from 'react-router-dom'
import { company } from '../data/company'
import { products } from '../data/products.js'
import { images } from '../assets/images'
import { Hero } from '../components/Hero'
import { Marquee } from '../components/Marquee'
import { NeedSteel } from '../components/NeedSteel'
import { ProductShowcase } from '../components/ProductShowcase'
import { ProcessInteractive } from '../components/ProcessInteractive'
import { ApplicationsMosaic } from '../components/ApplicationsMosaic'
import { Button } from '../components/Button'
import { SteelLine } from '../components/SteelLine'
import { orgSchema, Seo } from '../components/Seo'

const marquee = [
  'TMT BARS',
  'ROUND BARS',
  'WIRE RODS',
  'V ANGLES',
  'C CHANNELS',
  'FLAT BARS',
  'HOLLOW SECTIONS',
  'ENGINEERED IN TANZANIA',
]

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
        cinematic
        className="screen"
        eyebrow="A1 Iron & Steel Tanzania Limited"
        title={'Steel that shapes\nthe future.'}
        text="Engineered steel products for Tanzania's next generation of construction, infrastructure and industry."
        primary={{ to: '/products', label: 'Explore products' }}
        secondary={{ to: '/process', label: 'Our manufacturing' }}
        image={images.hero}
        panel={{ kicker: 'Engineered for', text: 'Strength • Precision • Performance' }}
      />

      <section className="screen screen-band">
        <Marquee items={marquee} />

        <div className="stats-band">
          <div className="container-a1">
            <ol>
              {company.pillars.map((p) => (
                <li key={p.n}>
                  <em>{p.n}</em>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <NeedSteel />
      </section>

      <section className="section marks screen">
        <div className="container-a1 editorial">
          <div>
            <p className="kicker">Who we are</p>
            <h2>
              Building the
              <br />
              foundation of
              <br />
              progress.
            </h2>
            <SteelLine className="my-4" />
            <p className="lede">{company.intro}</p>
            <p className="lede mt-3">
              Capacity, certifications and plant location will be published once independently verified.
            </p>
            <div className="mt-4">
              <Button to="/about">About A1 →</Button>
            </div>
          </div>
          <div className="overlap">
            <img className="a" src={images.plant} alt="Steel manufacturing plant" />
            <img className="b" src={images.making} alt="Rolling mill operations" />
            <aside className="float-note">
              <p className="kicker">Process</p>
              <p>From charge to finished steel — a controlled industrial route.</p>
            </aside>
            <aside className="float-note is-alt">
              <p className="kicker">Catalogue</p>
              <p>TMT, sections, wire and flats specified for site and mill.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-light screen">
        <div className="container-a1">
          <p className="kicker">Catalogue</p>
          <h2 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.6rem)', maxWidth: '12ch' }}>
            Our steel.
            <br />
            Your next build.
          </h2>
          <SteelLine className="my-4" />
        </div>
        <div className="container-a1">
          <ProductShowcase products={products} />
          <Button to="/products" variant="outline">
            Open full catalogue
          </Button>
        </div>
      </section>

      <section className="section screen">
        <div className="container-a1">
          <p className="kicker">Ranges</p>
          <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}>
            Product categories
          </h2>
          <div className="cat-tiles">
            {company.categories.map((c) => (
              <Link key={c.id} to="/products" className="cat-tile">
                <img src={images[c.imageKey]} alt="" loading="lazy" />
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light screen">
        <div className="container-a1">
          <p className="kicker">Manufacturing</p>
          <h2 style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', maxWidth: '14ch' }}>
            From raw material
            <br />
            to engineered steel.
          </h2>
          <SteelLine className="my-4" />
          <ProcessInteractive />
          <div className="mt-4">
            <Button to="/process" variant="outline">
              Full process journey
            </Button>
          </div>
        </div>
      </section>

      <section className="section section-dark blueprint-dark why screen">
        <div className="container-a1">
          <p className="kicker">Quality</p>
          <h2 style={{ color: '#fff', fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}>Built to perform.</h2>
          <SteelLine className="my-4" />
          <div className="quality-board mt-4">
            <ul className="words">
              {['Quality', 'Precision', 'Consistency', 'Strength'].map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
            <div className="tech-pane">
              <img src={images.quality} alt="Finished steel inspection" />
              <p>
                Dimensional checks and mechanical tests sit on the line before dispatch. Published mill
                certificates and standards will appear here when they are confirmed — we do not invent grades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section screen">
        <div className="container-a1">
          <p className="kicker">Markets</p>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', maxWidth: '16ch' }}>
            Steel for every scale of ambition.
          </h2>
          <SteelLine className="my-4" />
          <ApplicationsMosaic />
        </div>
      </section>

      <section className="tz-band screen">
        <img src={images.f2} alt="Infrastructure and construction in progress" />
        <div className="shade" />
        <svg className="tz-map" viewBox="0 0 120 160" fill="none" aria-hidden="true">
          <path
            d="M58 8 L92 28 L108 70 L96 118 L70 148 L42 150 L18 118 L12 72 L28 32 Z"
            stroke="#f58220"
            strokeWidth="2"
            fill="rgba(42,122,179,0.25)"
          />
        </svg>
        <div className="container-a1" style={{ position: 'relative', zIndex: 1 }}>
          <p className="kicker">Tanzania</p>
          <h2 style={{ color: '#fff', fontSize: 'clamp(2.6rem, 6vw, 5rem)', maxWidth: '12ch' }}>
            Building Tanzania.
            <br />
            Building tomorrow.
          </h2>
          <SteelLine className="my-4" />
          <p className="lede" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '40rem' }}>
            Steel is a material of industrial development: housing, roads, plants and civic works. A1 Iron
            & Steel Tanzania Limited exists to supply that demand with a disciplined manufacturing culture —
            without overstating capacity or claims that have not been verified.
          </p>
        </div>
      </section>

      <section className="cta-power screen">
        <img src={images.cta} alt="" />
        <div className="shade" />
        <div className="container-a1" style={{ position: 'relative', zIndex: 1 }}>
          <h2>
            Ready to build
            <br />
            what&apos;s next?
          </h2>
          <SteelLine className="my-4" />
          <div className="hero-actions">
            <Button to="/contact">Talk to A1</Button>
            <Button to="/products" variant="ghost">
              Explore products
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
