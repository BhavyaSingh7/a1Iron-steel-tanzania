import { useEffect, useRef, useState } from 'react'
import { millStages } from '../data/process'
import { processImages } from '../assets/process'
import { Button } from '../components/Button'
import { SteelLine } from '../components/SteelLine'
import { Seo } from '../components/Seo'
import { ProcessFlow } from '../components/ProcessFlow'
import { ProcessRail } from '../components/ProcessRail'
import { getSnapScroller } from '../lib/scrollRoot'

export default function Process() {
  const stageRefs = useRef<(HTMLElement | null)[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const root = getSnapScroller()
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        const id = (visible.target as HTMLElement).id.replace('mill-stage-', '')
        setActiveId((prev) => (prev === id ? prev : id))
      },
      { threshold: 0.5, root: root ?? null },
    )
    stageRefs.current.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const jump = (id: string) => {
    const el = document.getElementById(`mill-stage-${id}`)
    const root = getSnapScroller()
    if (!el || !root) return
    root.scrollTo({ top: el.offsetTop, behavior: 'auto' })
  }

  return (
    <>
      <Seo
        title="Manufacturing Process"
        description="From iron ore and DRI to induction melting, continuous casting and rolling — the A1 Iron & Steel Tanzania Limited manufacturing journey."
        path="/process"
      />

      <div className="mill-preload" aria-hidden="true">
        <img src={processImages.mining} alt="" />
        <img src={processImages.dri} alt="" />
        <img src={processImages.melting} alt="" />
        <img src={processImages.ccm} alt="" />
        <img src={processImages.rolling} alt="" />
        <img src={processImages.finished} alt="" />
      </div>

      <header className="page-hero process-hero screen">
        <div className="hero-media">
          <img
            src={processImages.ccm}
            alt="Continuous casting of steel billets"
            fetchPriority="high"
            decoding="sync"
          />
          <div className="hero-shade" />
        </div>
        <div className="container-a1 process-hero-copy">
          <p className="kicker">Manufacturing</p>
          <h1>
            Where heat
            <br />
            becomes strength.
          </h1>
          <SteelLine className="my-3" />
        </div>
      </header>

      <ProcessRail activeId={activeId} onJump={jump} />
      <ProcessFlow />

      {millStages.map((stage, i) => (
        <article
          key={stage.id}
          id={`mill-stage-${stage.id}`}
          className={`mill-stage screen ${stage.layout === 'immersive' ? 'is-heat' : ''}`}
          ref={(el) => {
            stageRefs.current[i] = el
          }}
        >
          <img src={processImages[stage.image]} alt={stage.imageAlt} decoding="async" />
          <div className="mill-shade" aria-hidden="true" />
          <div className="container-a1 mill-copy">
            <p className="kicker">Process {stage.number} / 05</p>
            <h2>{stage.title}</h2>
            <SteelLine className="my-3" />
            <p className="lede">{stage.text}</p>
            {'notes' in stage && stage.notes ? (
              <ol className="mill-notes">
                {stage.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ol>
            ) : null}
            {'mill' in stage && stage.mill ? <p className="mill-spec">{stage.mill}</p> : null}
          </div>
        </article>
      ))}

      <section className="mill-end screen" aria-labelledby="mill-end-title">
        <img src={processImages.finished} alt="Finished A1 steel products" decoding="async" />
        <div className="mill-shade" aria-hidden="true" />
        <div className="container-a1 mill-copy">
          <p className="kicker">From process to product</p>
          <h2 id="mill-end-title">
            Built through precision.
            <br />
            Made for progress.
          </h2>
          <SteelLine className="my-3" />
          <p className="lede">
            Heat, reduction, melting, casting and rolling exist for one reason: steel that construction,
            infrastructure and industry can specify with confidence.
          </p>
          <div className="hero-actions mt-4">
            <Button to="/products">Explore Our Products →</Button>
            <Button to="/contact" variant="ghost">
              Talk to A1
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
