import diff from "./diff.js"
import wave from "./wave.js"
import fract from "./fract.js"
import resolve from "./resolve.js"
import intersection from "./intersection.js"

globalThis.utils = Object.assign(globalThis.utils || {}, {
  diff,
  wave,
  fract,
  resolve,
  intersection,
})
