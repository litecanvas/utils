/**
 * Computes the sum of the values in a array.
 *
 * @param {number[]} values list of numbers
 * @returns {number}
 */
export default (values) => {
  let result = 0
  for (let i = 0; i < values.length; i++) {
    result += values[i]
  }
  return result
}
