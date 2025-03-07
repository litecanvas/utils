import "../_global.js"
import * as collectionUtils from "./index.js"

globalThis.utils = Object.assign(globalThis.utils || {}, collectionUtils)
