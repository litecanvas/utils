/**
 * Determines the direction of the collision between two rectangles and
 * the new position of the first rectangle to be adjusted.
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
 * @returns {Array} An array containing the direction of the collision (index #0) and the new position (X and Y) of the first rectangle (the indexes #1 and #2).
 */
export default function resolve(x1, y1, w1, h1, x2, y2, w2, h2) {
  // Calculate the intersection area
  const left = Math.max(x1, x2)
  const right = Math.min(x1 + w1, x2 + w2)
  const top = Math.max(y1, y2)
  const bottom = Math.min(y1 + h1, y2 + h2)

  const intersectionWidth = right - left
  const intersectionHeight = bottom - top
  const intersectionArea = intersectionWidth * intersectionHeight

  // Determine the direction of the collision
  let direction = false
  let newX = x1
  let newY = y1

  if (intersectionWidth < intersectionHeight) {
    if (x1 < x2) {
      direction = "right"
      newX = x2 - w1
    } else {
      direction = "left"
      newX = x2 + w2
    }
  } else {
    if (y1 < y2) {
      direction = "bottom"
      newY = y2 - h1
    } else {
      direction = "top"
      newY = y2 + h2
    }
  }

  return [direction, newX, newY]
}
