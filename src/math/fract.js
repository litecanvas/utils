/**
 * Returns the fractional part of a number
 *
 * @param {number} value The number
 * @returns {number}
 * @example
 *    fract(10.1) // => 0.1
 */
export default (value) => value % 1 || 0
