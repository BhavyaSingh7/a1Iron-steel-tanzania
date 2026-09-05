import { useState } from 'react'
import { homeProcess } from '../data/process'
import { images } from '../assets/images'

export function ProcessInteractive() {
  const [i, setI] = useState(0)
  const stage = homeProcess[i]
  const progress = homeProcess.length > 1 ? (i / (homeProcess.length - 1)) * 100 : 0

  return (
    <div className="proc-h">
      <div className="proc-h-track">
        <div className="proc-h-line" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
        <ol>
          {homeProcess.map((s, idx) => (
            <li key={s.title}>
              <button
                type="button"
                aria-pressed={i === idx}
                className={i === idx ? 'is-on' : ''}
                onMouseEnter={() => setI(idx)}
                onFocus={() => setI(idx)}
                onClick={() => setI(idx)}
              >
                <em>{String(idx + 1).padStart(2, '0')}</em>
                {s.title}
              </button>
            </li>
          ))}
        </ol>
      </div>
      <article className="proc-h-stage">
        <img src={images[stage.imageKey]} alt="" loading="lazy" decoding="async" />
        <div className="pane">
          <p className="kicker">Stage {String(i + 1).padStart(2, '0')} / 07</p>
          <h3>{stage.title}</h3>
          <p>{stage.text}</p>
          <p className="placeholder">Equipment: {stage.equipment}</p>
        </div>
      </article>
    </div>
  )
}
