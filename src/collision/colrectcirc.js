import assert from "../debug/assert.js"

/**
 * Check a collision between a rectangle and a circle
 *
 * @param {number} x1 rectangle position X
 * @param {number} y1 rectangle position Y
 * @param {number} w1 rectangle width
 * @param {number} h1 rectangle height
 * @param {number} x2 circle position X
 * @param {number} y2 circle position Y
 * @param {number} r2 circle radius
 * @returns {boolean}
 */

export default (x1, y1, w1, h1, x2, y2, r2) => {
  DEV: assert(
    Number.isFinite(x1),
    "[litecanvas/utils] colrectcirc() 1st param must be a number"
  )
  DEV: assert(
    Number.isFinite(y1),
    "[litecanvas/utils] colrectcirc() 2nd param must be a number"
  )
  DEV: assert(
    Number.isFinite(w1),
    "[litecanvas/utils] colrectcirc() 3rd param must be a number"
  )
  DEV: assert(
    Number.isFinite(h1),
    "[litecanvas/utils] colrectcirc() 4th param must be a number"
  )
  DEV: assert(
    Number.isFinite(x2),
    "[litecanvas/utils] colrectcirc() 5th param must be a number"
  )
  DEV: assert(
    Number.isFinite(y2),
    "[litecanvas/utils] colrectcirc() 6th param must be a number"
  )
  DEV: assert(
    Number.isFinite(r2),
    "[litecanvas/utils] colrectcirc() 7th param must be a number"
  )

  let xx = x2 - Math.max(x1, Math.min(x2, x1 + w1))
  let yy = y2 - Math.max(y1, Math.min(y2, y1 + h1))

  return xx * xx + yy * yy <= r2 * r2
}
