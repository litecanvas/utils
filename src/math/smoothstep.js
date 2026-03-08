import assert from "../debug/assert.js"
import clamp from "./clamp.js"

/**
 * Smoothstep interpolation function.
 *
 * @param {number} min - The lower bound.
 * @param {number} max - The upper bound.
 * @param {number} value - The value to interpolate.
 * @returns {number} A value between 0 and 1.
 *
 * @see https://en.wikipedia.org/wiki/Smoothstep
 */
export default (min, max, value) => {
  DEV: assert(
    Number.isFinite(min),
    "[litecanvas/utils] smoothstep() 1st param must be a number"
  )
  DEV: assert(
    Number.isFinite(max),
    "[litecanvas/utils] smoothstep() 2nd param must be a number"
  )
  DEV: assert(
    Number.isFinite(value),
    "[litecanvas/utils] smoothstep() 3rd param must be a number"
  )
  DEV: assert(
    max > min,
    "[litecanvas/utils] smoothstep() 2nd param must be greater than 1st param"
  )
  const t = clamp((value - min) / (max - min), 0, 1)
  return t * t * (3 - 2 * t)
}
