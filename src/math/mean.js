import sum from "./sum.js"

/**
 * Computes the mean of the values in a array.
 *
 * @param {number[]} values list of numbers
 * @returns {number}
 */
export default (values) => {
  return sum(values) / values.length
}
