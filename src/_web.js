import "./_global.js"
import * as utils from "./index.js"

globalThis.utils = Object.assign(globalThis.utils || {}, utils)
