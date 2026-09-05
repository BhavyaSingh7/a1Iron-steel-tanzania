import rawMaterials from './raw_materials.png'
import dri from './DRI_Sponge IRON.jpg'
import melting from './melting process.jpg'
import ccm from './continuous_casting.png'
import billets from './billets.jpg'
import rolling from './rolling_mill.jpeg'
import finished from './finished_products.png'
import quality from './quality control.jpeg'
import packing from './packing and dispatch.jpg'

export const processImages = {
  mining: rawMaterials,
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
