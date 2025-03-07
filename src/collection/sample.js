/**
 * Return a random value of an array.
 *
 * @param {number[]} values
 * @param {()=>number} [rng]
 * @returns {number}
 */
export default (values, rng = globalThis.rand || Math.random) => {
  return values[Math.floor(rng() * values.length)]
}
