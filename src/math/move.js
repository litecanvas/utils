import assert from "../debug/assert.js"

/**
 * Moves a value toward a target using fixed increments, without overshooting.
 *
 * @param {number} from The current value.
 * @param {number} to The target value.
 * @param {number} delta The size of the increment.
 * @returns {number} The updated value.
 */
export default (from, to, delta) => {
  DEV: assert(
    Number.isFinite(from),
    "[litecanvas/utils] move() 1st param must be a number"
  )
  DEV: assert(
    Number.isFinite(to),
    "[litecanvas/utils] move() 2nd param must be a number"
  )
  DEV: assert(
    Number.isFinite(delta),
    "[litecanvas/utils] move() 3rd param must be a number"
  )

  return Math.abs(to - from) <= delta ? to : from + Math.sign(to - from) * delta
}
