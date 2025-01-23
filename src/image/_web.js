import "../_global.js"
import tint from "./tint.js"
import scaleImage from "./scale.js"
import flipImage from "./flip.js"

globalThis.utils = Object.assign(globalThis.utils || {}, {
  tint,
  scaleImage,
  flipImage,
})
