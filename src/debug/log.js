import is from "./is.js"

/**
 * @param {any} data
 * @param {string} [context]
 * @param {LitecanvasInstance} [engine]
 */
export default (data, context, engine = globalThis) => {
  return engine.text(
    16,
    16,
    (context ? `${context}: ` : "") +
      (is(data, "object") ? JSON.stringify(data, null, 4) : data)
  )
}
