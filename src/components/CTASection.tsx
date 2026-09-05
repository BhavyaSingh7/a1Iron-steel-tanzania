import { Button } from './Button'
import { SteelLine } from './SteelLine'

type Props = {
  title: string
  text?: string
  cta: string
  to: string
}

export function CTASection({ title, text, cta, to }: Props) {
  return (
    <section className="section section-dark">
      <div className="container-a1 cta-block">
        <SteelLine />
        <h2 style={{ whiteSpace: 'pre-line' }}>{title}</h2>
        {text ? <p className="lede mb-4">{text}</p> : null}
        <Button to={to} variant="solid">
          {cta}
        </Button>
      </div>
    </section>
  )
}
