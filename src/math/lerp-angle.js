import assert from "../debug/assert.js"

/**
 * Calculates the linear interpolation of two angles (in degrees).
 *
 * @param {number} start from angle
 * @param {number} end to angle
 * @param {number} amount usually a value between 0.0 and 1.0
 * @returns {number} the interpolated value
 */
export default (start, end, amount) => {
  DEV: assert(
    Number.isFinite(start),
    "[litecanvas/utils] lerpAngle() 1st param must be a number"
  )
  DEV: assert(
    Number.isFinite(end),
    "[litecanvas/utils] lerpAngle() 2nd param must be a number"
  )
  DEV: assert(
    Number.isFinite(amount),
    "[litecanvas/utils] lerpAngle() 3rd param must be a number"
  )

  let dif = (end - start) % 360

  if (dif > 180) {
    dif -= 360
  } else if (dif < -180) {
    dif += 360
  }

  return start + dif * amount
}
