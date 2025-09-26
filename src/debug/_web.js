import "../_global.js"
import * as debugUtils from "./index.js"

globalThis.utils = Object.assign(globalThis.utils || {}, debugUtils)
