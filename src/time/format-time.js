/**
 * Formats seconds to mm:ss style for display purposes.
 *
 * Based on https://github.com/KilledByAPixel/LittleJS/blob/v1.11.7/src/engineUtilities.js#L190
 *
 * @param {number} t - the time in seconds
 * @return {string}
 */
export default (t) => ~~(t / 60) + ":" + (t % 60 < 10 ? "0" : "") + ~~(t % 60)
