import resolve from "./resolve.js"
import intersection from "./intersection.js"

globalThis.utils = Object.assign(globalThis.utils || {}, {
  resolve,
  intersection,
})
