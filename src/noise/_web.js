import "../_global.js"
import * as noiseUtils from "./index.js"

globalThis.utils = Object.assign(globalThis.utils || {}, noiseUtils)
