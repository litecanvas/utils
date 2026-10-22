/**
 * Calculates the dot product of a point (x1, y1) to another (x2, y2).
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {number}
 */
export default (x1, y1, x2, y2) => {
  DEV: assert(isNumber(x1), "dist() 1st argument must be a number")
  DEV: assert(isNumber(y1), "dist() 2nd argument must be a number")
  DEV: assert(isNumber(x2), "dist() 3rd argument must be a number")
  DEV: assert(isNumber(y2), "dist() 4th argument must be a number")

  return x1 * x2 + y1 * y2
}
