/**
 * Pads a string with a given string (repeated and/or truncated, if needed) so that the resulting string has a given length.
 * The padding is applied from the end of this string.
 *
 * @param {string} str
 * @param {number} targetLength
 * @param {string} padString
 */
export default (str, targetLength, padString = "0") =>
  (str + "").padEnd(targetLength, padString)
