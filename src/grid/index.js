export default class Grid {
  /** @type {number} The grid width */
  _w

  /** @type {number} The grid height */
  _h

  /** @type {any[]} The grid cells */
  _c

  /**
   * @static
   * @param {number} width
   * @param {number} height
   * @param {any[]} values
   */
  static fromArray(width, height, values) {
    const grid = new Grid(width, height)
    for (let i = 0; i < values.length; i++) {
      grid._c[i] = values[i]
    }
    return grid
  }

  /**
   * @param {number} width The grid width
   * @param {number} height The grid height
   */
  constructor(width, height) {
    this.width = width
    this.height = height
    this.clear()
  }

  /**
   * Delete all cell values.
   */
  clear() {
    this._c = Array(this._w * this._h)
  }

  /**
   * @param {number} value
   */
  set width(value) {
    this._w = Math.max(1, ~~value)
  }

  get width() {
    return this._w
  }

  /**
   * @param {number} value
   */
  set height(value) {
    this._h = Math.max(1, ~~value)
  }

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
   * @returns {Grid} the cloned grid
   */
  clone() {
    return Grid.fromArray(this._w, this._h, this._c)
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
    return this._c.slice(0)
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

function _fill(x, y) {}
