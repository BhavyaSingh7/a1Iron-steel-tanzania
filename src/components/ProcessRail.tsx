import { millStages } from '../data/process'

type Props = {
  activeId: string | null
  onJump: (id: string) => void
}

export function ProcessRail({ activeId, onJump }: Props) {
  return (
    <nav className="mill-rail" aria-label="Manufacturing stages">
      {millStages.map((s) => (
        <button
          key={s.id}
          type="button"
          className={activeId === s.id ? 'is-on' : ''}
          onClick={() => onJump(s.id)}
        >
          <span>{s.number}</span>
          {s.nav}
        </button>
      ))}
    </nav>
  )
}
