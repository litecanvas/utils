import is from "./is.js"

/**
 * @param {any} data
 * @param {number} [color]
 * @param {LitecanvasInstance} [engine]
 */
export default (data, color = 3, engine = globalThis) => {
  return engine.text(
    16,
    16,
    is(data, "object") ? JSON.stringify(data, null, 4) : data,
    color
  )
}
