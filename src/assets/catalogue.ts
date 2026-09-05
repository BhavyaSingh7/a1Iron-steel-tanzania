import { productShowSrc } from './products'

const productCardModules = import.meta.glob('./images/products/*-card.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const productFullModules = import.meta.glob('./images/products/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export function productCardSrc(slug: string) {
  const entry = Object.entries(productCardModules).find(([path]) =>
    path.endsWith(`${slug}-card.webp`),
  )
  return entry?.[1] ?? productShowSrc(slug)
}

export function productFullSrc(slug: string) {
  const entry = Object.entries(productFullModules).find(
    ([path]) => path.endsWith(`${slug}.webp`) && !path.includes('-card'),
  )
  return entry?.[1] ?? productCardSrc(slug)
}
