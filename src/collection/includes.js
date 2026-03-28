import assert from "../debug/assert.js"
import is from "../debug/is.js"

/**
 * Returns `true` if `search` appears in `xs` (array or string),
 * at one or more positions that are greater than or equal to `position`;
 * otherwise, returns `false`.
 *
 * @param {any[]|string} xs
 * @param {any} search
 * @param {number} [position=0]
 * @returns {boolean}
 */
export default (xs, search, position = 0) => {
  DEV: assert(
    is(xs, "string") || is(xs, "array"),
    "[litecanvas/utils] includes() 1st param must be an array or string"
  )
  DEV: assert(
    is(xs, "int"),
    "[litecanvas/utils] includes() 3rd param must be an integer"
  )

  return xs?.includes(search, position)
}
