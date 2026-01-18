import "../_global.js"
import * as stringUtils from "./index.js"

globalThis.utils = Object.assign(globalThis.utils || {}, stringUtils)
