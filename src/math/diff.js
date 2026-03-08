import assert from "../debug/assert.js"

/**
 * Calculates the positive distance/difference of two given numbers
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @example
 *    diff(-5, 5) // => 10
 *    diff(5, -5) // => 10
 */

export default (a, b) => {
  DEV: assert(
    Number.isFinite(a),
    "[litecanvas/utils] diff() 1st param must be a number"
  )
  DEV: assert(
    Number.isFinite(b),
    "[litecanvas/utils] diff() 2nd param must be a number"
  )
  return Math.abs(b - a)
}
