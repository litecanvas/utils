globalThis.utils = globalThis.utils || {}

globalThis.utils.global = () => {
  for (const key in globalThis.utils) {
    if ("global" === key) continue
    globalThis[key] = globalThis.utils[key]
  }
}
