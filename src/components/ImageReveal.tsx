import { useInView } from '../hooks/useInView'

type Props = {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export function ImageReveal({ src, alt, className = '', width, height }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div ref={ref} className={`image-reveal ${inView ? 'is-in' : ''} ${className}`.trim()}>
      <img src={src} alt={alt} loading="lazy" decoding="async" width={width} height={height} />
    </div>
  )
}
