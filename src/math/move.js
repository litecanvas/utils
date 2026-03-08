import assert from "../debug/assert.js"

/**
 * Moves a value toward a target using fixed increments, without overshooting.
 *
 * @param {number} from The current value.
 * @param {number} to The target value.
 * @param {number} step The size of the increment.
 * @returns {number} The updated value.
 */
export default (from, to, step) => {
  DEV: assert(
    Number.isFinite(from),
    "[litecanvas/utils] move() 1st param must be a number"
  )
  DEV: assert(
    Number.isFinite(to),
    "[litecanvas/utils] move() 2nd param must be a number"
  )
  DEV: assert(
    Number.isFinite(step),
    "[litecanvas/utils] move() 3rd param must be a number"
  )

  return Math.abs(to - from) <= step ? to : from + Math.sign(to - from) * step
}
