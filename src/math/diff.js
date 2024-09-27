/**
 * Calculates the positive distance/difference of two given numbers
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @example
 *    diff(-5, 5) // => 10
 *    diff(5, -5) // => 10
 */

export default (a, b) => Math.abs(b - a) || 0
