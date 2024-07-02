// TODO: vector 2d library

/**
 * @param {number} x
 * @param {number} y
 * @returns {object}
 */
export default vec2 = (x, y) => ({
  x: x || 0,
  y: y || x || 0,
})

vec2.add = (a, b) => vec2(a.x + b.x, a.y + b.y)
