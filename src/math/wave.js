/**
 * Interpolate between 2 values.
 * Optionally, takes a custom periodic function (default = `Math.sin`).
 *
 * @param {number} lower
 * @param {number} higher
 * @param {number} t
 * @param {function} [fn=Math.sin]
 * @returns {number}
 */
export default wave = (lower, higher, t, fn = Math.sin) =>
  lower + ((fn(t) + 1) / 2) * (higher - lower)
