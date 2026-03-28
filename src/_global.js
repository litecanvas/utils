window.utils = window.utils || {}

window.utils.global = (overrides = true) => {
  for (const key in window.utils) {
    if ("global" === key) continue
    if (overrides || globalThis[key] === undefined) {
      globalThis[key] = window.utils[key]
    }
  }
}
