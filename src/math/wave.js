import assert from "../debug/assert.js"

/**
 * Interpolate between 2 values using a periodic function.
 *
 * @param {number} from - the lower bound
 * @param {number} to - the higher bound
 * @param {number} t - value passed to the periodic function
 * @param {(n: number) => number} [fn] - the periodic function (which default to `Math.sin`)
 */
export default (from, to, t, fn = Math.sin) => {
  DEV: assert(isNumber(from), "[litecanvas] wave() 1st param must be a number")
  DEV: assert(isNumber(to), "[litecanvas] wave() 2nd param must be a number")
  DEV: assert(isNumber(t), "[litecanvas] wave() 3rd param must be a number")
  DEV: assert(
    "function" === typeof fn,
    "[litecanvas] wave() 4rd param must be a function (n: number) => number"
  )

  return from + ((fn(t) + 1) / 2) * (to - from)
}
