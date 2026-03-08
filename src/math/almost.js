import diff from "./diff.js"

/**
 * Check if two numbers are approximately equals.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} [epsilon]
 * @returns {boolean}
 */
export default (a, b, epsilon = 0.00001) => diff(a, b) <= epsilon
