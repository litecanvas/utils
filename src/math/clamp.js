import assert from "../debug/assert.js"

/**
 * Constrains a number between `min` and `max`.
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export default (value, min, max) => {
  DEV: assert(
    Number.isFinite(value),
    "[litecanvas/utils] clamp() 1st param must be a number"
  )
  DEV: assert(
    Number.isFinite(min),
    "[litecanvas/utils] clamp() 2nd param must be a number"
  )
  DEV: assert(
    Number.isFinite(max),
    "[litecanvas/utils] clamp() 3rd param must be a number"
  )
  DEV: assert(
    max >= min,
    "[litecanvas/utils] clamp() the 2nd param must be less than the 3rd param"
  )

  if (value < min) return min
  if (value > max) return max
  return value
}
