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
  } else if (type === "array") {
    return Array.isArray(value)
  } else if (type === "int") {
    return Number.isInteger(value)
  } else if (type === "number") {
    return "number" === typeof value && !Number.isNaN(value)
  } else if (type === "infinity") {
    return "number" === typeof value && Infinity === Math.abs(value)
  }
  return typeof value === type
}
