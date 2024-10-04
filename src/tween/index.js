import "litecanvas"

const HALF_PI = Math.PI / 2

export const tween = (object, prop, toValue, duration = 1, easing = LINEAR) => {
  return new TweenController(object, prop, toValue, duration, easing)
}

export const LINEAR = (n) => n

export const EASE_IN = (n) => n * n
export const EASE_OUT = (n) => -n * (n - 2.0)
export const EASE_IN_OUT = (n) => {
  if (n < 0.5) {
    return 2.0 * n * n
  }
  return -2.0 * n * n + 4.0 * n - 1.0
}

export const BACK_IN = (n) => n * n * n - n * Math.sin(n * Math.PI)
export const BACK_OUT = (n) => {
  let a = 1.0 - n
  return 1.0 - (a * a * a - a * Math.sin(a * Math.PI))
}
export const BACK_IN_OUT = (n) => {
  if (n < 0.5) {
    let a = 2.0 * n
    return 0.5 * (a * a * a - a * Math.sin(a * Math.PI))
  }
  let a = 1.0 - (2.0 * n - 1.0)
  return 0.5 * (1.0 - (a * a * a - a * Math.sin(n * Math.PI))) + 0.5
}

export const ELASTIC_IN = (n) => {
  return Math.sin(13 * HALF_PI * n) * Math.pow(2, 10 * (n - 1))
}
export const ELASTIC_OUT = (n) => {
  return Math.sin(-13 * HALF_PI * (n + 1)) * Math.pow(2, -10 * n) + 1
}
export const ELASTIC_IN_OUT = (n) => {
  if (n < 0.5) {
    let a = Math.sin(13 * HALF_PI * (2 * n))
    let b = Math.pow(2, 10 * (2 * n - 1))
    return 0.5 * a * b
  }
  let a = Math.sin(-13 * HALF_PI * (2 * n - 1 + 1))
  let b = Math.pow(2, -10 * (2 * n - 1))
  return 0.5 * (a * b + 2)
}

export const BOUNCE_IN = (n) => 1 - BOUNCE_OUT(1 - n)
export const BOUNCE_OUT = (n) => {
  if (n < 4.0 / 11.0) {
    return (121.0 * n * n) / 16.0
  } else if (n < 8.0 / 11.0) {
    return (363.0 / 40.0) * n * n - (99.0 / 10.0) * n + 17.0 / 5.0
  } else if (n < 9.0 / 10.0) {
    return (4356.0 / 361.0) * n * n - (35442.0 / 1805.0) * n + 16061.0 / 1805.0
  }
  return (54.0 / 5.0) * n * n - (513.0 / 25.0) * n + 268.0 / 25.0
}
export const BOUNCE_IN_OUT = (n) => {
  if (n < 0.5) {
    return 0.5 * BOUNCE_IN(n * 2)
  }
  return 0.5 * BOUNCE_OUT(n * 2 - 1) + 0.5
}

class TweenController {
  /** @type {boolean} */
  running = false

  /** @type {*} */
  _o
  /** @type {string} */
  _p
  /** @type {number} */
  _x
  /** @type {number} */
  _d
  /** @type {(x: number) => number} */
  _e
  /** @type {Function[]} */
  _cb = []
  /** @type {number} */
  _t = 0
  /** @type {Function} */
  _u = 0
  /** @type {LitecanvasInstance} */
  _lc

  /**
   * @param {*} object
   * @param {string} prop
   * @param {number} toValue
   * @param {number} duration
   * @param {(x: number) => number} easing
   */
  constructor(object, prop, toValue, duration, easing) {
    this._o = object
    this._p = prop
    this._x = toValue
    this._d = duration
    this._e = easing
  }

  /**
   *
   * @param {LitecanvasInstance} engine
   */
  start(engine = globalThis) {
    if (!this.running) {
      this.stop()
    }

    const fromValue = this._o[this._p] || 0

    this._lc = engine
    this._u = engine.listen("update", (dt) => {
      this._o[this._p] = engine.lerp(
        fromValue,
        this._x,
        this._e(this._t / this._d)
      )
      this._t += dt
      if (this._t >= this._d) {
        this._o[this._p] = this._x
        this.stop()
      }
    })

    this.running = true

    return this
  }

  /**
   * @param {Function} callback
   */
  onEnd(callback) {
    this._cb.push(callback)
  }

  /**
   * @param {boolean} completed if `false` don't call the `onEnd()` registered callbacks.
   * @returns
   */
  stop(completed = true) {
    if (!this.running || !this._u) return

    this.running = false

    this._u()

    if (completed) {
      for (const callback of this._cb) {
        callback(this._o)
      }
    }
  }

  reset() {
    this._cb.length = 0
    this.stop()
  }

  get progress() {
    return this.running ? this._t / this._d : 0
  }
}
