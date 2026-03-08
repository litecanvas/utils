import assert from "../debug/assert.js"

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
  DEV: assert(
    Number.isFinite(x1),
    "[litecanvas/utils] dist() 1st param must be a number"
  )
  DEV: assert(
    Number.isFinite(y1),
    "[litecanvas/utils] dist() 2nd param must be a number"
  )
  DEV: assert(
    Number.isFinite(x2),
    "[litecanvas/utils] dist() 3rd param must be a number"
  )
  DEV: assert(
    Number.isFinite(y2),
    "[litecanvas/utils] dist() 4th param must be a number"
  )
  return Math.hypot(x2 - x1, y2 - y1) || 0
}
