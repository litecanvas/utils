/**
 * Returns what percentage the value is between min and max.
 *
 * Based on https://github.com/KilledByAPixel/LittleJS/blob/v1.11.7/src/engineUtilities.js#L66
 *
 * @param {number} value
 * @param {number} [min=0]
 * @param {number} [max=1]
 * @return {number}
 */
export default (value, min = 0, max = 1) =>
  max - min ? (value - min) / (max - min) : 0
