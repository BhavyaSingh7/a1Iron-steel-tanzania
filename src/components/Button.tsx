import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'solid' | 'ghost' | 'outline' | 'light'

type Common = {
  children: ReactNode
  variant?: Variant
  className?: string
}

type AsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined
  }

type AsLink = Common & {
  to: string
}

function classFor(variant: Variant, className: string) {
  return `btn-a1 ${variant === 'solid' ? '' : `is-${variant}`} ${className}`.trim()
}

export function Button(props: AsButton | AsLink) {
  const variant = props.variant ?? 'solid'
  const className = props.className ?? ''
  const cls = classFor(variant, className)

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {props.children}
      </Link>
    )
  }

  const button = props as AsButton
  return (
    <button
      type={button.type ?? 'button'}
      className={cls}
      disabled={button.disabled}
      name={button.name}
      onClick={button.onClick}
    >
      {button.children}
    </button>
  )
}
