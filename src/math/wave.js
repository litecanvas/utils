import assert from "../debug/assert.js"
import is from "../debug/is.js"

/**
 * Interpolate between 2 values using a periodic function.
 *
 * @param {number} from - the lower bound
 * @param {number} to - the higher bound
 * @param {number} t - value passed to the periodic function
 * @param {(n: number) => number} [fn] - the periodic function (which default to `Math.sin`)
 */
export default (from, to, t, fn = Math.sin) => {
  DEV: assert(
    is(from, "number"),
    "[litecanvas] wave() 1st param must be a number"
  )
  DEV: assert(
    is(to, "number"),
    "[litecanvas] wave() 2nd param must be a number"
  )
  DEV: assert(is(t, "number"), "[litecanvas] wave() 3rd param must be a number")
  DEV: assert(
    is(fn, "function"),
    "[litecanvas] wave() 4rd param must be a function similar to (n: number) => number"
  )

  return from + ((fn(t) + 1) / 2) * (to - from)
}
