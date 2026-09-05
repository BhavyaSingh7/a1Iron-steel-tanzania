import mining from './opt/mining.webp'
import dri from './opt/dri.webp'
import melting from './opt/melting.webp'
import ccm from './opt/ccm.webp'
import billets from './opt/billets.webp'
import rolling from './opt/rolling.webp'
import finished from './opt/finished.webp'
import quality from './opt/quality.webp'
import packing from './opt/packing.webp'

export const processImages = {
  mining,
  dri,
  melting,
  ccm,
  billets,
  rolling,
  finished,
  quality,
  packing,
}

export type ProcessImageKey = keyof typeof processImages
