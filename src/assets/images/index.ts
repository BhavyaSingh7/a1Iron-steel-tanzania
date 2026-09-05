import hero from './hero.webp'
import plant from './plant.webp'
import plantAlt from './plant-alt.webp'
import quality from './quality.webp'
import manufacturing from './manufacturing.webp'
import productsBanner from './products-banner.webp'
import impact from './impact.webp'
import cta from './cta.webp'
import hm6 from './hm6.webp'
import f1 from './f1.webp'
import f2 from './f2.webp'
import f4 from './f4.webp'
import f6 from './f6.webp'
import f7 from './f7.webp'
import making from './making.webp'

const productCardModules = import.meta.glob('./products/*-card.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const productFullModules = import.meta.glob('./products/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export const images = {
  hero,
  plant,
  plantAlt,
  quality,
  manufacturing,
  productsBanner,
  impact,
  cta,
  hm6,
  f1,
  f2,
  f4,
  f6,
  f7,
  making,
}

export function productCardSrc(slug: string) {
  const entry = Object.entries(productCardModules).find(([path]) =>
    path.endsWith(`${slug}-card.webp`),
  )
  return entry?.[1] ?? ''
}

export function productFullSrc(slug: string) {
  const entry = Object.entries(productFullModules).find(
    ([path]) => path.endsWith(`${slug}.webp`) && !path.includes('-card'),
  )
  return entry?.[1] ?? productCardSrc(slug)
}

export type ImageKey = keyof typeof images
