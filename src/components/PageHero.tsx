import { SteelLine } from './SteelLine'
import { images } from '../assets/images'

type Props = {
  title: string
  text?: string
  image?: string
  imageAlt?: string
}

export function PageHero({
  title,
  text,
  image = images.plant,
  imageAlt = 'A1 Iron & Steel industrial operations',
}: Props) {
  return (
    <header className="page-hero">
      <div className="hero-media">
        <img src={image} alt={imageAlt} fetchPriority="high" decoding="async" />
        <div className="hero-shade" />
      </div>
      <div className="container-a1" style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{ whiteSpace: 'pre-line' }}>{title}</h1>
        <SteelLine className="my-3" />
        {text ? <p className="lede">{text}</p> : null}
      </div>
    </header>
  )
}
