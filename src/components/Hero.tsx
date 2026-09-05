import { Button } from './Button'
import { SteelLine } from './SteelLine'
import { images } from '../assets/images'

type Props = {
  eyebrow?: string
  title: string
  text?: string
  primary?: { to: string; label: string }
  secondary?: { to: string; label: string }
  image?: string
  imageAlt?: string
  minHeight?: string
  cinematic?: boolean
  panel?: { kicker: string; text: string }
  className?: string
}

export function Hero({
  eyebrow,
  title,
  text,
  primary,
  secondary,
  image = images.hero,
  imageAlt = 'Industrial steel manufacturing',
  minHeight,
  cinematic,
  panel,
  className = '',
}: Props) {
  return (
    <section className={`hero ${cinematic ? 'is-cinematic' : ''} ${className}`.trim()} style={minHeight ? { minHeight } : undefined}>
      <div className="hero-media">
        <img src={image} alt={imageAlt} fetchPriority="high" decoding="async" />
        <div className="hero-shade" />
        {cinematic ? (
          <div className="sparks" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => (
              <i
                key={i}
                style={{
                  left: `${8 + i * 7.5}%`,
                  animationDelay: `${i * 0.28}s`,
                  animationDuration: `${2.6 + (i % 4) * 0.4}s`,
                }}
              />
            ))}
          </div>
        ) : null}
      </div>
      <div className="container-a1 hero-content">
        {eyebrow ? <p className="kicker">{eyebrow}</p> : null}
        <h1 style={{ whiteSpace: 'pre-line' }}>{title}</h1>
        <SteelLine className="mb-4" />
        {text ? <p className="lede">{text}</p> : null}
        {(primary || secondary) && (
          <div className="hero-actions">
            {primary ? <Button to={primary.to}>{primary.label}</Button> : null}
            {secondary ? (
              <Button to={secondary.to} variant="ghost">
                {secondary.label}
              </Button>
            ) : null}
          </div>
        )}
        {panel ? (
          <aside className="hero-float">
            <strong>{panel.kicker}</strong>
            <span>{panel.text}</span>
          </aside>
        ) : null}
      </div>
      <div className="scroll-ind" aria-hidden="true">
        <span>Scroll</span>
        <b />
      </div>
    </section>
  )
}
