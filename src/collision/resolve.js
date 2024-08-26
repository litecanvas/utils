import intersection from "./intersection"
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
 * @returns {{direction: string, x: number, y: number}} An object containing the direction of the collision and the new position (X and Y) of the first rectangle.
 */
export default (x1, y1, w1, h1, x2, y2, w2, h2) => {
  // get the intersection area
  const [left, top, width, height] = intersection(
    x1,
    y1,
    w1,
    h1,
    x2,
    y2,
    w2,
    h2,
  )

  let direction = ""
  let resolveX = x1
  let resolveY = y1

  if (width < height) {
    if (x1 < x2) {
      direction = "right"
      resolveX = x2 - w1
    } else {
      direction = "left"
      resolveX = x2 + w2
    }
  } else {
    if (y1 < y2) {
      direction = "bottom"
      resolveY = y2 - h1
    } else {
      direction = "top"
      resolveY = y2 + h2
    }
  }

  return { direction, x: resolveX, y: resolveY }
}
