import lockup from '../assets/logo/a1-tanzania-without-bg-web.png'

type Props = {
  className?: string
}

export function BrandLogo({ className = 'brand-lockup' }: Props) {
  return (
    <img
      src={lockup}
      alt="A1 Iron & Steel Tanzania Limited"
      className={className}
      width={900}
      height={299}
    />
  )
}
