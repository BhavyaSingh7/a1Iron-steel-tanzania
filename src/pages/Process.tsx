import { useEffect, useRef, useState } from 'react'
import { processStages } from '../data/process'
import { images, type ImageKey } from '../assets/images'
import { PageHero } from '../components/PageHero'
import { ImageReveal } from '../components/ImageReveal'
import { CTASection } from '../components/CTASection'
import { Seo } from '../components/Seo'

export default function Process() {
  const refs = useRef<(HTMLElement | null)[]>([])
  const [active, setActive] = useState(0)
  const progress = ((active + 1) / processStages.length) * 100

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        const idx = refs.current.findIndex((n) => n === visible.target)
        if (idx >= 0) setActive(idx)
      },
      { threshold: [0.35, 0.55], rootMargin: '-20% 0px -30% 0px' },
    )
    refs.current.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Seo
        title="Manufacturing Process"
        description="From raw material and DRI to melting, casting, rolling and dispatch — how A1 Iron & Steel Tanzania Limited turns heat into structural steel."
        path="/process"
      />
      <PageHero
        title={"Where heat\nbecomes strength."}
        text="A visual journey through the steelmaking route."
      />
      <div className="progress-track" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <div className="process-page">
        <div className="container-a1">
          {processStages.map((stage, i) => (
            <article
              key={stage.id}
              className={`stage ${i === active ? 'is-active' : ''}`}
              ref={(el) => {
                refs.current[i] = el
              }}
            >
              <ImageReveal
                src={images[stage.imageKey as ImageKey]}
                alt={`${stage.title} stage in steel manufacturing`}
              />
              <div className="stage-copy">
                <div className="stage-num">{stage.number}</div>
                <h2 className="mt-2">{stage.title}</h2>
                <p className="lede mt-3">{stage.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <CTASection
        title={"Let’s build something\nstronger."}
        text="Talk to our team about your steel requirements."
        cta="Get in touch"
        to="/contact"
      />
    </>
  )
}
