import { SteelLine } from './SteelLine'

type Props = {
  kicker?: string
  title: string
  light?: boolean
  center?: boolean
}

export function SectionHeading({ kicker, title, light, center }: Props) {
  return (
    <header className={center ? 'text-center' : ''} data-light={light || undefined}>
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h2
        style={{
          fontSize: 'clamp(2rem, 5.2vw, 4.2rem)',
          maxWidth: center ? '18ch' : '16ch',
          marginInline: center ? 'auto' : undefined,
          whiteSpace: 'pre-line',
        }}
      >
        {title}
      </h2>
      <SteelLine className={`mt-3 ${center ? 'is-center' : ''}`} />
    </header>
  )
}
