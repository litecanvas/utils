import assert from "../debug/assert.js"

/**
 * Math modulus (always returns a positive number).
 *
 * @param {number} a dividend
 * @param {number} b divisor
 * @returns {number} the remainder
 */
export default (a, b) => {
  DEV: assert(
    Number.isFinite(a),
    "[litecanvas/utils] mod() 1st param must be a number"
  )
  DEV: assert(
    Number.isFinite(b),
    "[litecanvas/utils] mod() 2nd param must be a number"
  )
  return (b + (a % b)) % b
}
