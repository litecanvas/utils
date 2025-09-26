import log from "./log.js"

/**
 * Logs something and stops the engine.
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
  log(data, context || "dd() output", engine)
  engine.quit()
}
