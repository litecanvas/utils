/**
 * Calculates the magnitude (length) of a vector (x, y).
 *
 * @param {number} x
 * @param {number} y
 * @returns {number} magnitude of vector.
 */
export default (x, y) => {
  return Math.hypot(x, y)
}
