import assert from "../debug/assert.js"

/**
 * Check a collision between two circles
 *
 * @param {number} x1 first circle position X
 * @param {number} y1 first circle position Y
 * @param {number} r1 first circle position radius
 * @param {number} x2 second circle position X
 * @param {number} y2 second circle position Y
 * @param {number} r2 second circle position radius
 * @returns {boolean}
 */
export default (x1, y1, r1, x2, y2, r2) => {
  DEV: assert(
    Number.isFinite(x1),
    "[litecanvas/utils] colcirc() 1st param must be a number"
  )
  DEV: assert(
    Number.isFinite(y1),
    "[litecanvas/utils] colcirc() 2nd param must be a number"
  )
  DEV: assert(
    Number.isFinite(r1),
    "[litecanvas/utils] colcirc() 3rd param must be a number"
  )
  DEV: assert(
    Number.isFinite(x2),
    "[litecanvas/utils] colcirc() 4th param must be a number"
  )
  DEV: assert(
    Number.isFinite(y2),
    "[litecanvas/utils] colcirc() 5th param must be a number"
  )
  DEV: assert(
    Number.isFinite(r2),
    "[litecanvas/utils] colcirc() 6th param must be a number"
  )

  return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) <= (r1 + r2) * (r1 + r2)
}
