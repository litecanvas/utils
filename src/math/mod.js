import assert from "../debug/assert.js"

/**
 * Math modulus (Euclidean division).
 *
 * Note: When `b === 0` returns 0, rather than `NaN`.
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
    Number.isFinite(b) && b >= 0,
    "[litecanvas/utils] mod() 2nd param must be a non-negative number"
  )
  return ((a % b) + b) % b || 0
}
