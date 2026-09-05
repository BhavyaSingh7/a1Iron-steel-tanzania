import { SteelLine } from './SteelLine'

type Props = {
  title: string
  text?: string
  image?: string
  imageAlt?: string
}

export function PageHero({ title, text, image, imageAlt = '' }: Props) {
  return (
    <header className="page-hero">
      <div className="hero-media mill-field" aria-hidden={!image}>
        {image ? <img src={image} alt={imageAlt} fetchPriority="high" decoding="async" /> : null}
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
