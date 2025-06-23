import assert from "../debug/assert.js"

/**
 * Check a collision between two rectangles
 *
 * @param {number} x1 first rectangle position X
 * @param {number} y1 first rectangle position Y
 * @param {number} w1 first rectangle width
 * @param {number} h1 first rectangle height
 * @param {number} x2 second rectangle position X
 * @param {number} y2 second rectangle position Y
 * @param {number} w2 second rectangle width
 * @param {number} h2 second rectangle height
 * @returns {boolean}
 */
export default (x1, y1, w1, h1, x2, y2, w2, h2) => {
  DEV: assert(isFinite(x1), "colrect: 1st param must be a number")
  DEV: assert(isFinite(y1), "colrect: 2nd param must be a number")
  DEV: assert(isFinite(w1), "colrect: 3rd param must be a number")
  DEV: assert(isFinite(h1), "colrect: 4th param must be a number")
  DEV: assert(isFinite(x2), "colrect: 5th param must be a number")
  DEV: assert(isFinite(y2), "colrect: 6th param must be a number")
  DEV: assert(isFinite(w2), "colrect: 7th param must be a number")
  DEV: assert(isFinite(h2), "colrect: 8th param must be a number")

  return x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2
}
