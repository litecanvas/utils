import assert from "../debug/assert.js"

/**
 * Returns the fractional part of a number
 *
 * @param {number} value The number
 * @returns {number}
 * @example
 *    fract(10.1) // => 0.1
 */
export default (value) => {
  DEV: assert(
    Number.isFinite(value),
    "[litecanvas/utils] fract() 1st param must be a number"
  )
  return value % 1
}
