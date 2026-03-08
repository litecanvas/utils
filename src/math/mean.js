import assert from "../debug/assert.js"
import sum from "./sum.js"

/**
 * Computes the mean of the values in a array.
 *
 * @param {number[]} values list of numbers
 * @returns {number}
 */
export default (values) => {
  DEV: assert(
    Array.isArray(values),
    "[litecanvas/utils] mean() 1st param must be an array"
  )
  DEV: assert(
    values.length > 1,
    "[litecanvas/utils] mean() 1st param must be an array with at least 2 numbers"
  )
  return sum(values) / values.length
}
