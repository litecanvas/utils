export class Grid {
  /** @type {number} The grid width */
  _w

  /** @type {number} The grid height */
  _h

  /** @type {any[]} The grid cells */
  _c

  /**
   * @param {number} width The grid width
   * @param {number} height The grid height
   */
  constructor(width, height, values = []) {
    this._w = Math.max(1, ~~width)
    this._h = Math.max(1, ~~height)
    this._c = values
  }

  [Symbol.iterator]() {
    let i = 0
    return {
      next: () => {
        return {
          value: [this.indexToPointX(i), this.indexToPointY(i), this._c[i++]],
          done: i === this._c.length,
        }
      },
    }
  }

  /**
   * @returns {Grid} the cloned grid
   */
  clone() {
    return new Grid(this._w, this._h, this._c)
  }

  /**
   * Delete all cell values.
   */
  clear() {
    this.forEach((x, y) => this.set(x, y, undefined))
  }

  /**
   * @returns {number}
   * @readonly
   */
  get width() {
    return this._w
  }

  /**
   * @returns {number}
   * @readonly
   */
  get height() {
    return this._h
  }

  /**
   * The the value of a grid's cell.
   *
   * @param {number} x
   * @param {number} y
   * @param {any} value
   */
  set(x, y, value) {
    this._c[this.pointToIndex(x, y)] = value
  }

  /**
   * Returns the value of a grid's cell.
   *
   * @param {number} x
   * @param {number} y
   * @returns {any}
   */
  get(x, y) {
    return this._c[this.pointToIndex(x, y)]
  }

  /**
   * Returns true if the which cell has any value not equal to `null` or `undefined`.
   *
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   */
  has(x, y) {
    return this.get(x, y) != null
  }

  /**
   * Checks if a which point (x, y) is within the grid.
   *
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   */
  check(x, y) {
    return x >= 0 && x < this._w && y >= 0 && y < this._h
  }

  /**
   * Returns the total of cells.
   *
   * @returns {number}
   */
  get length() {
    return this._w * this._h
  }

  /**
   * Convert a grid point (X, Y) to a index.
   *
   * @param {number} x
   * @param {number} y
   * @returns {number} The index
   */
  pointToIndex(x, y) {
    return this.clampX(~~x) + this.clampY(~~y) * this._w
  }

  /**
   * Convert index to a grid point X.
   *
   * @param {number} index
   * @returns {number}
   */
  indexToPointX(index) {
    return index % this._w
  }

  /**
   * Convert index to a grid point Y.
   *
   * @param {number} index
   * @returns {number}
   */
  indexToPointY(index) {
    return Math.floor(index / this._w)
  }

  /**
   * Loops over all grid cells.
   *
   * @callback GridForEachCallback
   * @param {number} x
   * @param {number} y
   * @param {any} value
   * @param {Grid} grid
   * @returns {boolean?} returns `false` to stop/break the loop
   *
   * @param {GridForEachCallback} handler
   * @param {boolean} [reverse=false]
   */
  forEach(handler, reverse = false) {
    let i = reverse ? this.length - 1 : 0,
      limit = reverse ? -1 : this.length,
      step = reverse ? -1 : 1

    while (i !== limit) {
      const x = this.indexToPointX(i),
        y = this.indexToPointY(i),
        cellValue = this._c[i]

      if (false === handler(x, y, cellValue, this)) break

      i += step
    }
  }

  /**
   * @param {*} value
   */
  fill(value) {
    this.forEach((x, y) => {
      this.set(x, y, value)
    })
  }

  /**
   * @param {number} y
   * @returns {number}
   */
  clampX(x) {
    return _clamp(x, 0, this._w - 1)
  }

  /**
   * @param {number} y
   * @returns {number}
   */
  clampY(y) {
    return _clamp(y, 0, this._h - 1)
  }

  /**
   * Returns the cell values in a single array.
   *
   * @returns {any[]}
   */
  toArray() {
    return this._c.slice()
  }

  /**
   * @param {string} separator
   * @param {boolean} format
   * @returns {string}
   */
  toString(separator = " ", format = true) {
    if (!format) return this._c.join(separator)

    const rows = []
    this.forEach((x, y, value) => {
      rows[y] = rows[y] || ""
      rows[y] += value + separator
    })

    return rows.join("\n")
  }
}

export class TypedGrid extends Grid {
  /**
   * @param {number} width The grid width
   * @param {number} height The grid height
   */
  constructor(width, height, TypedArray = Uint8Array) {
    super(width, height, null)
    this._c = new TypedArray(this._w * this._h)
  }

  /**
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   */
  has(x, y) {
    return this.get(x, y) !== 0
  }

  /**
   * @returns {TypedGrid}
   */
  clone() {
    const copy = new TypedGrid(this._w, this._h, this._c.constructor)
    this.forEach((x, y, value) => {
      copy.set(x, y, value)
    })
    return copy
  }
}

/**
 * Constrains a number between `min` and `max`.
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function _clamp(value, min, max) {
  if (value < min) return min
  if (value > max) return max
  return value
}
