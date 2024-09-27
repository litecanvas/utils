/**
 * Returns a sequence of numbers from `0` to `size - 1`.
 *
 * @param {number} size the amount of numbers
 * @returns {number[]}
 * @example
 *    // print 0 1 2 3 4
 *    for(let i of range(5)) console.log(i)
 */
export default (size) => Array.from(Array(size).keys())
