import { useState } from 'react'
import { company } from '../data/company'
import { images } from '../assets/images'
import { PageHero } from '../components/PageHero'
import { Button } from '../components/Button'
import { SteelLine } from '../components/SteelLine'
import { orgSchema, Seo } from '../components/Seo'

export default function About() {
  const [step, setStep] = useState(0)

  return (
    <>
      <Seo
        title="About Us"
        description="Learn about A1 Iron & Steel Tanzania Limited — a steel manufacturer focused on quality, precision and industrial progress in Tanzania."
        path="/about"
        schema={orgSchema}
      />
      <PageHero
        title={"Engineered for\nprogress."}
        text="A manufacturer of construction and industrial steel, built to serve Tanzania’s growth."
        image={images.plantAlt}
      />

      <section className="section marks">
        <div className="container-a1 editorial">
          <div>
            <p className="kicker">Who we are</p>
            <h2>
              An industrial
              <br />
              steel company.
            </h2>
            <SteelLine className="my-4" />
            <p className="lede">{company.intro}</p>
            <p className="lede mt-3">
              Founding year, plant location and installed capacity will appear here once they are confirmed.
            </p>
          </div>
          <div className="overlap">
            <img className="a" src={images.f7} alt="Plant operations" />
            <img className="b" src={images.quality} alt="Quality inspection" />
          </div>
        </div>
      </section>

      <div className="vision-split">
        <article>
          <p className="kicker">Vision</p>
          <h2>{company.vision}</h2>
        </article>
        <article>
          <p className="kicker">Mission</p>
          <h2>{company.mission}</h2>
        </article>
      </div>

      <section className="section">
        <div className="container-a1">
          <p className="kicker">Culture</p>
          <h2 className="mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
            Our values
          </h2>
          <div className="value-visual">
            {company.values.map((v) => (
              <article key={v.title}>
                <h3>{v.title}</h3>
                <p className="lede mt-2">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-a1">
          <p className="kicker">Timeline</p>
          <h2 className="mb-4">Our journey</h2>
          <div className="journey-ix">
            {company.journey.map((j, i) => (
              <button
                key={j.title}
                type="button"
                className={i === step ? 'is-on' : ''}
                onClick={() => setStep(i)}
                onMouseEnter={() => setStep(i)}
              >
                <time>{j.year}</time>
                <div>
                  <h3>{j.title}</h3>
                  {i === step ? <p className="lede mt-2">{j.text}</p> : null}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-a1 editorial">
          <img src={images.making} alt="Steel finishing line" style={{ width: '100%', objectFit: 'cover', minHeight: 360 }} />
          <div>
            <p className="kicker">Promise</p>
            <h2>Our commitment</h2>
            <SteelLine className="my-4" />
            <p className="lede">{company.commitment}</p>
            <div className="mt-4">
              <Button to="/contact">Talk to A1</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
