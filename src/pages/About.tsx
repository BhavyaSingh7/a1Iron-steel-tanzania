import { company } from '../data/company'
import { images } from '../assets/images'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { ImageReveal } from '../components/ImageReveal'
import { CTASection } from '../components/CTASection'
import { Reveal } from '../components/Reveal'
import { orgSchema, Seo } from '../components/Seo'

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about A1 Iron & Steel Tanzania Limited — a steel manufacturer focused on quality, precision and industrial progress in Tanzania."
        path="/about"
        schema={orgSchema}
      />
      <PageHero
        title={"Built on steel.\nDriven by progress."}
        text="A manufacturer of construction and industrial steel, built to serve Tanzania’s growth."
      />

      <section className="section">
        <div className="container-a1 intro-grid">
          <Reveal>
            <SectionHeading kicker="Who we are" title="An industrial steel company." />
            <p className="lede mt-4">{company.intro}</p>
            <p className="lede mt-3">
              Verified founding year, plant location and installed capacity will appear here
              once they are confirmed. We do not publish unverified figures.
            </p>
          </Reveal>
          <ImageReveal src={images.f7} alt="Steel plant operations" />
        </div>
      </section>

      <section className="section section-steel">
        <div className="container-a1" style={{ display: 'grid', gap: '3rem' }}>
          <Reveal>
            <p className="kicker">Our vision</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', maxWidth: '18ch' }}>
              {company.vision}
            </h2>
          </Reveal>
          <Reveal>
            <p className="kicker">Our mission</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.6rem)', maxWidth: '22ch' }}>
              {company.mission}
            </h2>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-a1">
          <SectionHeading kicker="Culture" title="Our values" />
          <div className="value-grid mt-4">
            {company.values.map((v) => (
              <article key={v.title}>
                <h3>{v.title}</h3>
                <p className="lede">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-a1 intro-grid">
          <ImageReveal src={images.quality} alt="Quality inspection of finished steel" />
          <div>
            <SectionHeading kicker="Promise" title="Our commitment" />
            <p className="lede mt-4">{company.commitment}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-a1">
          <SectionHeading kicker="Timeline" title="Our journey" />
          <ol className="journey mt-4">
            {company.journey.map((j) => (
              <li key={j.title}>
                <time>{j.year}</time>
                <div>
                  <h3 className="mb-2">{j.title}</h3>
                  <p className="lede">{j.text}</p>
                </div>
              </li>
            ))}
          </ol>
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
