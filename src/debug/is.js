/**
 * Check the type of a value.
 *
 * @param {unknown} value
 * @param {string|function} type
 * @returns {boolean}
 */
export default (value, type) => {
  switch (type) {
    case "function":
      return value instanceof type
    case "array":
      return Array.isArray(value)
    case "int":
      return Number.isInteger(value)
    case "number":
      return "number" === typeof value && !Number.isNaN(value)
    case "infinity":
      return "number" === typeof value && Infinity === Math.abs(value)
    default:
      return typeof value === type
  }
}
