import assert from "../debug/assert.js"
import is from "../debug/is.js"

/**
 * Return length of an array or string.
 *
 * @param {any[]|string} x
 * @returns {number} The length or zero
 */
export default (x) => {
  DEV: assert(
    is(x, 'string') || is(x, 'array'),
    "[litecanvas/utils] length() 1st param must be an array or string"
  )

  return ~~x?.length
}
