import is from "./is.js"

/**
 * Dump and die: print something and stops the engine.
 *
 * @param {any} data
 * @param {string} context
 * @param {LitecanvasInstance} [engine]
 */
export default (data, context, engine = globalThis) => {
  engine.pal(["blue", "#fff"])
  engine.cls(0)
  engine.ctx().resetTransform()
  engine.textfont("monospace")
  engine.textsize(16)
  engine.textalign("start", "top")
  engine.text(
    16,
    16,
    `${context ?? "dd() output"}: ` +
      (is(data, "object") ? JSON.stringify(data, null, 4) : data)
  )
  engine.quit()
}
