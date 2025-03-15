import "../_global.js"
import * as collisionUtils from "./index.js"

globalThis.utils = Object.assign(globalThis.utils || {}, collisionUtils)
