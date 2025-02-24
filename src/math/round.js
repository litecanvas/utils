/**
 * Calculates the integer closest to a number.
 *
 * @param {number} n number to round.
 * @param {number} [decimals] number of decimal places to round to, default is 0.
 * @returns {number} rounded number.
 */
export default (n, decimals) => {
  if (!decimals) {
    return Math.round(n)
  }
  const multiplier = Math.pow(10, decimals)
  return Math.round(n * multiplier) / multiplier
}
