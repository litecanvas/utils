/**
 * Returns a sequence of numbers.
 *
 * @param {number} size the amount of numbers
 * @param {number} [from] the first value (default = 0)
 * @param {number} [step] the value that should be incremented (default = 1)
 * @returns {number[]}
 *
 * @example
 * // print 0 1 2 3 4
 * for(let i of range(5)) {
 *   console.log(i)
 * }
 *
 * // print 10 15 20 25 30
 * for(let i of range(5, 10, 5)) {
 *   console.log(i)
 * }
 */
export default (size, from = 0, step = 1) =>
  [...Array(size|0).keys()].map((i) => {
    return from + step * i
  })
