/**
 * Compute the median of the values. The values are sorted and the middle value is returned.
 * In case of an even number of values, the average of the two middle values is returned
 *
 * @param {number[]} values
 * @returns {number}
 */
export default (...values) => {
  const sorted = values.sort((a, b) => a - b)
  const middle = Math.floor(sorted.length / 2)

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2
  }

  return sorted[middle]
}
