import assert from "../debug/assert"

/**
 * Computes the sum of the values in a array.
 *
 * usage: `sum([2,3,5]) // returns 10`
 *
 * @param {number[]} values list of numbers
 * @returns {number}
 */
export default (values) => {
  DEV: assert(Array.isArray(values), "1st param must be an array")
  let result = 0
  for (let i = 0; i < values.length; i++) {
    result += values[i]
  }
  return result
}
