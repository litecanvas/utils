/**
 * Math modulus (always returns a positive number).
 *
 * @param {number} a dividend
 * @param {number} b divisor
 * @returns {number} the remainder
 */
export default (a, b) => (b + (a % b)) % b
