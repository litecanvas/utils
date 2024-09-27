/**
 * Returns a sequence of numbers from 0 to n-1.
 *
 * @param {number} n the amount of numbers
 * @returns {number[]}
 * @example
 *    // print 0 1 2 3 4 5
 *    for(let i of range(5)) console.log(i)
 */
export default (n) => Array.from(Array(n).keys())
