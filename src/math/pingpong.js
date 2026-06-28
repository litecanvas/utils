import assert from "../debug/assert.js"
import is from "../debug/is.js"

/**
 * Oscillates a value between 0 and the length.
 * The returned value will increase from 0 to length, and then decrease
 * back to 0 in a continuous cycle as time increases.
 *
 * @param {number} time - The current time or advancing value.
 * @param {number} [length] - The maximum value of the oscillation. Default: `1`.
 * @returns {number}
 */
export default (time, length = 1) => {
  DEV: assert(
    is(time, "number"),
    "[litecanvas/utils] pingpong() 1st param must be a number"
  )
  DEV: assert(
    is(length, "number"),
    "[litecanvas/utils] pingpong() 2nd param must be a number"
  )
  return length - Math.abs((time % (length * 2)) - length)
}
