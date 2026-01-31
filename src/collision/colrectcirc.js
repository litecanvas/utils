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
  DEV: assert(isFinite(x1), "colrect: 1st param must be a number")
  DEV: assert(isFinite(y1), "colrect: 2nd param must be a number")
  DEV: assert(isFinite(w1), "colrect: 3rd param must be a number")
  DEV: assert(isFinite(h1), "colrect: 4th param must be a number")
  DEV: assert(isFinite(x2), "colcirc: 5th param must be a number")
  DEV: assert(isFinite(y2), "colcirc: 6th param must be a number")
  DEV: assert(isFinite(r2), "colcirc: 7th param must be a number")

  let xx = x2 - Math.max(x1, Math.min(x2, x1 + w1))
  let yy = y2 - Math.max(y1, Math.min(y2, y1 + h1))

  return xx * xx + yy * yy <= r2 * r2
}
