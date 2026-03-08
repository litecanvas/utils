import assert from "../debug/assert.js"
import clamp from "./clamp.js"

/**
 * Returns what percentage the value is between min and max.
 *
 * Based on https://github.com/KilledByAPixel/LittleJS/blob/v1.11.7/src/engineUtilities.js#L66
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
export default (value, min, max) => {
  DEV: assert(
    Number.isFinite(value),
    "[litecanvas/utils] percent() 1st param must be a number"
  )
  DEV: assert(
    Number.isFinite(min),
    "[litecanvas/utils] percent() 2nd param must be a number"
  )
  DEV: assert(
    Number.isFinite(max),
    "[litecanvas/utils] percent() 3rd param must be a number"
  )
  DEV: assert(
    max > min,
    "[litecanvas/utils] percent() 3rd param must be greater than 2nd param"
  )
  return clamp((value - min) / (max - min), 0, 1)
}
