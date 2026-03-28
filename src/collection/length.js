import assert from "../debug/assert.js"
import is from "../debug/is.js"

/**
 * Return length of an array or string.
 *
 * @param {any[]|string} xs
 * @returns {number} The length or zero
 */
export default (xs) => {
  DEV: assert(
    is(xs, "string") || is(xs, "array"),
    "[litecanvas/utils] length() 1st param must be an array or string"
  )

  return ~~xs?.length
}
