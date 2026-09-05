import { Button } from './Button'
import { SteelLine } from './SteelLine'

type Props = {
  eyebrow?: string
  title: string
  text?: string
  primary?: { to: string; label: string }
  secondary?: { to: string; label: string }
  image?: string
  imageAlt?: string
  minHeight?: string
}

export function Hero({
  eyebrow,
  title,
  text,
  primary,
  secondary,
  image,
  imageAlt = '',
  minHeight,
}: Props) {
  return (
    <section className="hero" style={minHeight ? { minHeight } : undefined}>
      <div className="hero-media mill-field" aria-hidden={!image}>
        {image ? (
          <img src={image} alt={imageAlt} fetchPriority="high" decoding="async" />
        ) : null}
        <div className="hero-shade" />
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
      </div>
      <div className="scroll-ind" aria-hidden="true">
        <span>Scroll</span>
        <b />
      </div>
    </section>
  )
}
