/**
 * Calculates the integer closest to a number and optional precision.
 *
 * @param {number} n number to round.
 * @param {number} [precision] number of decimal digits to round to, default is 0.
 * @returns {number} rounded number.
 */
export default (n, precision = 0) => {
  if (!precision) {
    return Math.round(n)
  }
  const multiplier = Math.pow(10, precision)
  return Math.round(n * multiplier) / multiplier
}
