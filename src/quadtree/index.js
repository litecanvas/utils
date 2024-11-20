/**
 * Represents a rectangular area in 2D space.
 */
export class Rectangle {
  /**
   * Creates a new Rectangle.
   * @param {number} x - The x-coordinate of the top-left corner.
   * @param {number} y - The y-coordinate of the top-left corner.
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   */
  constructor(x, y, width, height) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
  }

  /**
   * Checks if a point is contained within this rectangle.
   * @param {Point} point - The point to check.
   * @returns {boolean} True if the point is inside the rectangle; otherwise, false.
   */
  contains(point) {
    return (
      point.x >= this._x &&
      point.x < this._x + this._width &&
      point.y >= this._y &&
      point.y < this._y + this._height
    );
  }

  /**
   * Checks if this rectangle intersects with another rectangle.
   * @param {Rectangle} range - The rectangle to check intersection with.
   * @returns {boolean} True if the rectangles intersect; otherwise, false.
   */
  intersects(range) {
    return !(
      range.x > this._x + this._width ||
      range.x + range.width < this._x ||
      range.y > this._y + this._height ||
      range.y + range.height < this._y
    );
  }
}

/**
 * Represents a point in 2D space.
 */
export class Point {
  /**
   * Creates a new Point.
   * @param {number} x - The x-coordinate of the point.
   * @param {number} y - The y-coordinate of the point.
   * @param {*} [data=null] - Optional data associated with the point.
   */
  constructor(x, y, data = null) {
    this._x = x;
    this._y = y;
    this.data = data; // Optional data to associate with the point
  }
}

/**
 * A quadtree for spatial partitioning.
 */
export class Quadtree {
  /**
   * Creates a new Quadtree.
   * @param {Rectangle} boundary - The boundary of the quadtree node.
   * @param {number} capacity - The maximum number of points this node can hold before subdividing.
   */
  constructor(boundary, capacity) {
    this._boundary = boundary;
    this._capacity = capacity;
    this._points = [];
    this._divided = false
  }

  /**
   * Subdivides this quadtree node into four child nodes.
   */
  subdivide() {
    const { x, y, width, height } = this._boundary;

    const nw = new Rectangle(x, y, width / 2, height / 2);
    const ne = new Rectangle(x + width / 2, y, width / 2, height / 2);
    const sw = new Rectangle(x, y + height / 2, width / 2, height / 2);
    const se = new Rectangle(x + width / 2, y + height / 2, width / 2, height / 2);

    this.northwest = new Quadtree(nw, this._capacity);
    this.northeast = new Quadtree(ne, this._capacity);
    this.southwest = new Quadtree(sw, this._capacity);
    this.southeast = new Quadtree(se, this._capacity);

    this._divided = true;
  }

  /**
   * Inserts a point into the quadtree.
   * @param {Point} point - The point to insert.
   * @returns {boolean} True if the point was inserted; otherwise, false.
   */
  insert(point) {
    if (!this._boundary.contains(point)) {
      return false;
    }

    if (this._points.length < this._capacity) {
      this._points.push(point);
      return true;
    }

    if (!this._divided) {
      this.subdivide();
    }

    return (
      this.northwest.insert(point) ||
      this.northeast.insert(point) ||
      this.southwest.insert(point) ||
      this.southeast.insert(point)
    );
  }

   /**
   * Queries the quadtree for points within a specified range.
   * @param {Rectangle} range - The rectangular range to query.
   * @param {Point[]} [found=[]] - The array to store found points.
   * @returns {Point[]} An array of points found within the range.
   */
  query(range, found = []) {
    if (!this._boundary.intersects(range)) {
      return found;
    }

    for (const point of this._points) {
      if (range.contains(point)) {
        found.push(point);
      }
    }

    if (this._divided) {
      this.northwest.query(range, found);
      this.northeast.query(range, found);
      this.southwest.query(range, found);
      this.southeast.query(range, found);
    }

    return found;
  }

  /**
   * Visualizes the quadtree by drawing its boundaries and points.
   */
  show() {
    rect(this._boundary.x, this._boundary.y, this._boundary.width, this._boundary.height, 3);

    if (this._divided) {
      this.northwest.show();
      this.northeast.show();
      this.southwest.show();
      this.southeast.show();
    }

    for (const point of this._points) {
      rectfill(point.x - 2, point.y - 2, 4, 4, 4);
    }
  }
}