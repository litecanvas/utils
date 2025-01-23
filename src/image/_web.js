import "../_global.js"
import tint from "./tint.js"
import scaleImage from "./scale-image.js"

globalThis.utils = Object.assign(globalThis.utils || {}, {
  tint,
  scaleImage,
})
