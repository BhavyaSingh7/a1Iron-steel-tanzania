import tmt from './opt/tmt-bars.webp'
import round from './opt/round-bars.webp'
import wireRod from './opt/wire-rods.webp'
import vAngles from './opt/v-angles.webp'
import cChannel from './opt/c-channels.webp'
import flatBars from './opt/flat-bars.webp'
import hotRolled from './opt/hot-rolled-strips.webp'
import hollow from './opt/hollow-sections.webp'
import nails from './opt/wire-nails.webp'
import binding from './opt/binding-wire.webp'
import brc from './opt/brc-welded-mesh.webp'
import chain from './opt/gi-chain-link.webp'
import barbed from './opt/barbed-wire.webp'

export const productShow: Record<string, string> = {
  'tmt-bars': tmt,
  'round-bars': round,
  'wire-rods': wireRod,
  'v-angles': vAngles,
  'c-channels': cChannel,
  'flat-bars': flatBars,
  'hot-rolled-strips': hotRolled,
  'hollow-sections': hollow,
  'wire-nails': nails,
  'binding-wire': binding,
  'brc-welded-mesh': brc,
  'gi-chain-link': chain,
  'barbed-wire': barbed,
}

export function productShowSrc(slug: string) {
  return productShow[slug] ?? ''
}
