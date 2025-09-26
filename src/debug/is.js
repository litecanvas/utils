/**
 * Check the type of a value.
 *
 * @param {unknown} value
 * @param {string|function} type
 * @returns {boolean}
 */
export default (value, type) => {
  if (typeof type === "function") {
    return value instanceof type
  }
  return typeof value === type
}
