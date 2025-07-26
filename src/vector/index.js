const cos = Math.cos,
  sin = Math.sin,
  PI2 = 2 * Math.PI

export class Vector {
  /**
   * @param {number} [x=0]
   * @param {number} [y]
   */
  constructor(x = 0, y = x) {
    this.x = parseFloat(x) || 0
    this.y = parseFloat(y) || 0
  }

  /**
   * @returns {string}
   */
  toString() {
    return `Vector (${this.x}, ${this.y})`
  }
}

/**
 * @param {*} v
 * @returns {boolean}
 */
const isVector = (v) => v instanceof Vector

/**
 * Copy an vector or creates a new one.
 *
 * @param {number|Vector} [x]
 * @param {number} [y]
 * @returns {Vector}
 */
export const vec = (x = 0, y = x) => {
  if (isVector(x)) {
    y = x.y
    x = x.x
  }
  return new Vector(x, y)
}

/**
 * Assigns new values to a vector.
 *
 * @param {Vector} v The vector
 * @param {number|Vector} x
 * @param {number} [y]
 * @returns {Vector}
 */
export const vecSet = (v, x, y = x) => {
  if (isVector(x)) {
    vecSet(v, x.x, x.y)
  } else {
    v.x = x
    v.y = y
  }
  return v
}

/**
 * Add values to a vector.
 *
 * @param {Vector} v The vector
 * @param {number|Vector} x
 * @param {number} [y]
 * @returns {Vector}
 */
export const vecAdd = (v, x, y = x) => {
  if (isVector(x)) {
    return vecAdd(v, x.x, x.y)
  }

  v.x += x
  v.y += y

  return v
}

/**
 * Subtracts values from to a vector.
 *
 * @param {Vector} v The vector
 * @param {number|Vector} x
 * @param {number} [y]
 * @returns {Vector}
 */
export const vecSub = (v, x, y = x) => {
  if (isVector(x)) {
    return vecSub(v, x.x, x.y)
  }

  v.x -= x
  v.y -= y

  return v
}

/**
 * Multiplies (scale) a vector.
 *
 * @param {Vector} v
 * @param {number|Vector} x
 * @param {number} [y]
 * @returns {Vector}
 */
export const vecMult = (v, x, y = x) => {
  if (isVector(x)) {
    return vecMult(v, x.x, x.y)
  }

  v.x *= x
  v.y *= y

  return v
}

/**
 * Divides a vector.
 *
 * @param {Vector} v
 * @param {number|Vector} x
 * @param {number} [y]
 * @returns {Vector}
 */
export const vecDiv = (v, x, y = x) => {
  if (isVector(x)) {
    return vecDiv(v, x.x, x.y)
  }

  // prevent division by zero
  v.x /= x || 1
  v.y /= y || 1

  return v
}

/**
 * Rotates a vector by an angle (in radians) without changing its magnitude.
 *
 * @param {Vector} v
 * @param {number} radians
 * @returns {Vector}
 */
export const vecRotate = (v, radians) => {
  const c = cos(radians),
    s = sin(radians)

  v.x = c * v.x - s * v.y
  v.y = s * v.x + c * v.y

  return v
}

/**
 * Reflects a vector about a line (second argument).
 *
 * @param {Vector} v
 * @param {Vector} normal
 * @returns {Vector}
 */
export const vecReflect = (v, normal) => {
  const normalCopy = vecNorm(vec(normal))
  return vecSub(v, vecMult(normalCopy, 2 * vecDot(v, normalCopy)))
}

/**
 * Sets a vector's magnitude to value.
 *
 * @param {Vector} v
 * @param {Vector} normal
 * @returns {Vector}
 */
export const vecSetMag = (v, value) => {
  vecNorm(v)
  vecMult(v, value)
  return v
}

/**
 * Calculates the magnitude (length) of the vector.
 *
 * @param {Vector} v
 * @returns {number}
 */
export const vecMag = (v) => Math.hypot(v.x, v.y)

/**
 * Calculates the magnitude (length) of the vector squared.
 *
 * @param {Vector} v
 * @returns {number}
 */
export const vecMag2 = (v) => v.x * v.x + v.y * v.y

/**
 * Scales the values of a vector so that its magnitude is 1.
 *
 * @param {Vector} v
 * @returns {Vector}
 */
export const vecNorm = (v) => {
  const length = vecMag(v)
  if (length > 0) {
    vecDiv(v, length)
  }
  return v
}

/**
 * Limits (clamp) a vector's magnitude to a maximum value.
 *
 * @param {Vector} v
 * @param {number} max
 * @returns {Vector}
 */
export const vecLimit = (v, max = 1) => {
  const sq = vecMag2(v)
  if (sq > max * max) {
    vecSetMag(v, max)
  }
  return v
}

/**
 * Calculates the distance between two points represented by vectors.
 *
 * @param {Vector} a
 * @param {Vector} b
 * @returns {number}
 */
export const vecDist = (a, b) => {
  return Math.hypot(b.x - a.x, b.y - a.y)
}

/**
 * Calculates the distance between two points represented by vectors squared.
 *
 * @param {Vector} a
 * @param {Vector} b
 * @returns {number}
 */
export const vecDist2 = (a, b) => {
  const dx = a.x - b.x
  const dy = a.y - b.y
  return dx * dx + dy * dy
}

/**
 * Calculates the angle a vector makes with the positive x-axis.
 *
 * @param {Vector} v
 * @returns {number}
 */
export const vecHeading = (v) => Math.atan2(v.y, v.x)

/**
 * `vecHeading` alias.
 *
 * @param {Vector} v
 * @returns {number}
 */
export const vecAngle = (v) => vecHeading(v)

/**
 * Calculates the angle between two vectors.
 *
 * @param {Vector} v1
 * @param {Vector} v2
 * @returns {number}
 */
export const vecAngleBetween = (v1, v2) => Math.atan2(v2.y - v1.y, v2.x - v1.x)

/**
 * Calculates the dot product of two vectors.
 *
 * The dot product is a number that describes the overlap between two vectors.
 * Visually, the dot product can be thought of as the "shadow" one vector casts
 * on another. The dot product's magnitude is largest when two vectors point
 * in the same or opposite directions. Its magnitude is 0 when two vectors
 * form a right angle.
 *
 * @param {Vector} a
 * @param {Vector} b
 * @returns {number}
 */
export const vecDot = (a, b) => a.x * b.x + a.y * b.y

/**
 * Calculates the cross product of two vectors.
 *
 * The cross product is a vector that points straight out of the plane created
 * by two vectors. The cross product's magnitude is the area of the parallelogram
 * formed by the original two vectors.
 *
 * @param {Vector} a
 * @param {Vector} b
 * @returns {number}
 */
export const vecCross = (a, b) => a.x * b.y - a.y * b.x

/**
 * Calculates new vector values that are proportionally the same distance between two vectors.
 * The `t` parameter is the amount to interpolate between the old vector and the new vector:
 * `0.0` keeps all values equal to the old vector's, `0.5` is halfway between, and `1.0` sets all
 * values equal to the new vector's.
 *
 * @param {Vector} a
 * @param {Vector} b
 * @param {number} t
 * @returns {Vector}
 */
export const vecLerp = (a, b, t) => {
  a.x += (b.x - a.x) * t || 0
  a.y += (b.y - a.y) * t || 0
  return a
}

/**
 * @param {Vector} v
 * @returns {Vector}
 */
export const vecAbs = (v) => {
  v.x = Math.abs(v.x)
  v.y = Math.abs(v.y)
  return v
}

/**
 * Rounded up all the vector components.
 *
 * @param {Vector} v
 * @returns {Vector}
 */
export const vecCeil = (v) => {
  v.x = Math.ceil(v.x)
  v.y = Math.ceil(v.y)
  return v
}

/**
 * Rounded down all the vector components.
 *
 * @param {Vector} v
 * @returns {Vector}
 */
export const vecFloor = (v) => {
  v.x = Math.floor(v.x)
  v.y = Math.floor(v.y)
  return v
}

/**
 * Rounded to the nearest integer all the vector components.
 *
 * @param {Vector} v
 * @returns {Vector}
 */
export const vecRound = (v) => {
  v.x = Math.round(v.x)
  v.y = Math.round(v.y)
  return v
}

/**
 * Clamp all components between the components of min and max.
 *
 * @param {Vector} v
 * @param {Vector} min
 * @param {Vector} max
 * @returns {Vector}
 */
export const vecClamp = (v, min, max) => {
  if (v.x < min.x) v.x = min.x
  if (v.x > max.x) v.x = max.x
  if (v.y < min.y) v.y = min.y
  if (v.y > max.y) v.y = max.y
  return v
}

/**
 * Performs modulo (remainder) division with a vector's components.
 *
 * @param {Vector} v
 * @param {number} value
 * @returns {Vector}
 */
export const vecRem = (v, value) => {
  v.x %= value
  v.y %= value
  return v
}

/**
 * @param {Vector} from
 * @param {Vector} to
 * @param {number} [delta=1]
 * @returns {Vector}
 */
export const vecMove = (from, to, delta = 1) =>
  vecAdd(from, to.x * delta, to.y * delta)

/**
 * Checks whether two vectors are equal.
 *
 * @param {Vector} v
 * @param {number|Vector} x
 * @param {number} [y]
 * @returns {boolean}
 */
export const vecEq = (v, x, y = x) => {
  if (isVector(x)) {
    return vecEq(v, x.x, x.y)
  }
  return v.x === x && v.y === y
}

/**
 * Checks if the vector's components are zero.
 *
 * @param {Vector} v
 * @returns {boolean}
 */
export const vecIsZero = (v) => vecEq(v, ZERO)

/**
 * Returns the vector's components as an array of numbers.
 *
 * @returns {number[]}
 */
export const vecToArray = (v) => [v.x, v.y]

/**
 * Sample a vector with random direction and (optional) length.
 *
 * If the `litecanvas#rand()` not is globally explosed, uses `Math.random()`.
 *
 * @param {number} [minlength]
 * @param {number} [maxlength]
 * @param {() => number} [randomFn]
 * @returns {Vector}
 */
export const vecRand = (
  minlength = 1,
  maxlength = minlength,
  rng = globalThis.rand || Math.random
) => {
  const angle = rng() * PI2
  const radius = rng() * (maxlength - minlength) + minlength
  return vec(cos(angle) * radius, sin(angle) * radius)
}

// constants
export const ZERO = /** @__PURE__ */ vec(0, 0)
export const ONE = /** @__PURE__ */ vec(1, 1)

export const UP = /** @__PURE__ */ vec(0, -1)
export const RIGHT = /** @__PURE__ */ vec(1, 0)
export const DOWN = /** @__PURE__ */ vec(0, 1)
export const LEFT = /** @__PURE__ */ vec(-1, 0)
