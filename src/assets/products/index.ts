import tmt from './tmt_bars.png'
import round from './ROUND_BARS.png'
import wireRod from './5.5mm.jpg'
import vAngles from './V-ANGLES .png'
import cChannel from './C-CHANNEL.jpg'
import flatBars from './FLAT_BARS.jpg'
import hotRolled from './HOT ROLLED STRIP.png'
import hollow from './HOLLOW SECTION.jpg'
import nails from './WIRE NAILS.png'
import binding from './BINDING WIRE.jpg'
import brc from './BRC.jpg'
import chain from './GI CHAIN LINK.jpg'
import barbed from './BARBED WIRED.jpg'

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
