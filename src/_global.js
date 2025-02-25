globalThis.utils = globalThis.utils || {}

globalThis.utils.global = (overrides = true) => {
  for (const key in globalThis.utils) {
    if ("global" === key) continue
    if (overrides || globalThis[key] !== undefined) {
      globalThis[key] = globalThis.utils[key]
    }
  }
}
