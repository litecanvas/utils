import assert from "../debug/assert.js"

/**
 * Calculates the magnitude (length) of a vector (x, y).
 *
 * @param {number} x
 * @param {number} y
 * @returns {number} magnitude of vector.
 */
export default (x, y) => {
  DEV: assert(
    Number.isFinite(x),
    "[litecanvas/utils] mag() 1st param must be a number"
  )
  DEV: assert(
    Number.isFinite(y),
    "[litecanvas/utils] mag() 2nd param must be a number"
  )
  return Math.hypot(x, y)
}
