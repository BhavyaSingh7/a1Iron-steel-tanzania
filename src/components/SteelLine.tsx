type Props = {
  className?: string
}

export function SteelLine({ className = '' }: Props) {
  return <span className={`steel-line ${className}`.trim()} aria-hidden="true" />
}
