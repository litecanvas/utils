/**
 * Returns the resulting rectangle of the intersection between two rectangles.
 * Note: this function should be called with or after `litecanvas#colrect`.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} w1
 * @param {number} h1
 * @param {number} x2
 * @param {number} y2
 * @param {number} w2
 * @param {number} h2
 * @returns {number[]} The coordinates of the intersection [x, y, width, height].
 */
export default (x1, y1, w1, h1, x2, y2, w2, h2) => {
  const left = Math.max(x1, x2)
  const width = Math.min(x1 + w1, x2 + w2) - left
  const top = Math.max(y1, y2)
  const height = Math.min(y1 + h1, y2 + h2) - top
  return [left, top, width, height]
}
