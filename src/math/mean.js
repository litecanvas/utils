import assert from "../debug/assert.js"
import sum from "./sum.js"

/**
 * Computes the mean of the values in a array.
 *
 * @param {number[]} values list of numbers
 * @returns {number}
 */
export default (values) => {
  DEV: assert(Array.isArray(values), "1st param must be an array")
  return sum(values) / values.length
}
