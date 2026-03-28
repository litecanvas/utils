/**
 * Creates an new array of shuffled values
 *
 * @param {T[]} values
 * @param {()=>number} [rng]
 * @returns {T[]} the shuffled array
 */
export default (values, rng = window.rand || Math.random) => {
  values = [...values] // clone the values
  for (let i = values.length - 1; i > 0; i--) {
    let j = Math.floor(rng() * (i + 1))
    let temp = values[i]
    values[i] = values[j]
    values[j] = temp
  }
  return values
}
