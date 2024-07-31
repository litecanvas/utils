export class Vector2D {
  x = 0
  y = 0

  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y || x
  }

  /**
   * @param {number} x
   * @param {number} y
   */
  add(x = 0, y = 0) {
    this.x += x
    this.y += y || x
  }
}

/**
 * @param {number} x
 * @param {number} y
 * @returns {Vector2D}
 */
export vec2 = (x, y) => new Vector2D(x, y)
