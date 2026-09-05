type Props = {
  items: string[]
}

export function Marquee({ items }: Props) {
  const row = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={`${t}-${i}`}>
            {t} <b>/</b>
          </span>
        ))}
      </div>
    </div>
  )
}
