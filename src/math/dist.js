/**
 * Calculates the distance between a point (x1, y1) to another (x2, y2).
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {number}
 */
export default (x1, y1, x2, y2) => {
  return Math.hypot(x2 - x1, y2 - y1)
}
