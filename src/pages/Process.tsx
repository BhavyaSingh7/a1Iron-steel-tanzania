import { useEffect, useRef, useState } from 'react'
import { processStages } from '../data/process'
import { images, type ImageKey } from '../assets/images'
import { Button } from '../components/Button'
import { SteelLine } from '../components/SteelLine'
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
      { threshold: [0.4, 0.65], rootMargin: '-15% 0px -25% 0px' },
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
      <header className="page-hero screen">
        <div className="hero-media">
          <img src={images.making} alt="Steelmaking operations" fetchPriority="high" />
          <div className="hero-shade" />
        </div>
        <div className="container-a1" style={{ position: 'relative', zIndex: 1 }}>
          <p className="kicker">Manufacturing</p>
          <h1>
            Where heat
            <br />
            becomes strength.
          </h1>
          <SteelLine className="my-3" />
          <p className="lede">A scroll journey through the steelmaking route.</p>
        </div>
      </header>
      <div className="progress-track" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <div className="process-full">
        {processStages.map((stage, i) => (
          <article
            key={stage.id}
            className={`shot screen ${i === active ? 'is-active' : ''}`}
            ref={(el) => {
              refs.current[i] = el
            }}
          >
            <img src={images[stage.imageKey as ImageKey]} alt="" />
            <div className="container-a1 copy">
              <p className="kicker">
                {stage.number} / 09
              </p>
              <h2>{stage.title}</h2>
              <SteelLine className="my-3" />
              <p className="lede" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '40rem' }}>
                {stage.text}
              </p>
              <p className="placeholder mt-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {stage.equipment}
              </p>
            </div>
          </article>
        ))}
      </div>
      <section className="cta-power screen" style={{ minHeight: '100svh' }}>
        <img src={images.cta} alt="" />
        <div className="shade" />
        <div className="container-a1" style={{ position: 'relative', zIndex: 1 }}>
          <h2>
            Ready to specify
            <br />
            the next heat?
          </h2>
          <div className="hero-actions mt-4">
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
