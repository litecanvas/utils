/**
 * Formats a number to display like an old school game score.
 *
 * @param {number} value
 * @returns {number}
 * @example
 *    score(42) // => 000042
 */
export default (value, zeros = 6) => {
  return (value + "").padStart(zeros, "0")
}
