import assert from "../debug/assert.js"

/**
 * Returns the value with a magnitude of x and the sign of y.
 *
 * @param {number} value The number
 * @returns {number}
 * @example
 *    copysign(-10,1) // => 10
 *    copysign(10,-1) // => -10
 */
export default (x, y) => {
  DEV: assert(
    Number.isFinite(x),
    "[litecanvas/utils] copysign() 1st param must be a number"
  )
  DEV: assert(
    Number.isFinite(y),
    "[litecanvas/utils] copysign() 2nd param must be a number"
  )

  return Math.sign(y) * Math.abs(x)
}
