/**
 * Throws an error if the condition is not true.
 *
 * @param {any} condition
 * @param {string} [message="Assertion failed"]
 * @throws {Error}
 */
export default (condition, message = "Assertion failed") => {
  if (!condition) throw new Error(message)
}
