import "litecanvas"

const HALF_PI = Math.PI / 2

/**
 * @param {any} object
 * @param {string} prop
 * @param {number|number} toValue
 * @param {number} [duration]
 * @param {(n: number) => number} [easing]
 * @returns {this}
 */
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
  /** @type {number|number} */
  _x
  /** @type {number} */
  _d
  /** @type {number} */
  _w
  /** @type {(x: number) => number} */
  _e
  /** @type {boolean} */
  _rel

  /** @type {Function[]} */
  _cb = []
  /** @type {number} */
  _t = 0
  /** @type {Function} */
  _u = 0
  /** @type {TweenController} */
  _ch = this
  /** @type {TweenController} */
  _cu = this
  /** @type {LitecanvasInstance} */
  _lc

  /**
   * @param {*} object
   * @param {string} prop
   * @param {number|number} toValue
   * @param {number} duration
   * @param {(x: number) => number} easing
   */
  constructor(object, prop, toValue, duration, easing) {
    this._o = object
    this._p = prop
    this._x = toValue
    this._d = duration
    this._e = easing
    this._w = 0
  }

  /**
   * @param {LitecanvasInstance} [engine]
   * @returns {this}
   */
  start(engine) {
    if (this.running) {
      return this
    }

    this._cu.stop(false)
    this._ch = this._cu = this
    this.running = true

    const fromValue = this._o[this._p] || 0
    const toValue = this._rel ? fromValue + this._x : this._x

    this._lc = this._lc || engine || globalThis

    this._u = this._lc.listen("update", (dt) => {
      if (this._t <= this._w) {
        this._t += dt
        return
      }

      const t = this._t - this._w
      this._o[this._p] = this._lc.lerp(fromValue, toValue, this._e(t / this._d))

      this._t += dt

      if (t >= this._d) {
        this._o[this._p] = toValue
        this.stop()
      }
    })

    return this
  }

  /**
   * @param {boolean} completed if `false` don't call the `onEnd()` registered callbacks.
   * @returns {this}
   */
  stop(completed = true) {
    if (!this._u) return this

    this.running = false

    this._u()
    this._t = 0

    if (completed) {
      for (const callback of this._cb) {
        callback(this._o)
      }
    }

    return this
  }

  /**
   * @param {LitecanvasInstance} [engine]
   * @returns {this}
   */
  restart(engine = null, completed = false) {
    return this.stop(completed).restart(engine)
  }

  /**
   * @param {Function} callback
   * @returns {this}
   */
  onEnd(callback) {
    this._cb.push(callback)
    return this
  }

  /**
   * @param {TweenController} another
   * @returns {this}
   */
  chain(another) {
    this._ch.onEnd(() => {
      this._cu = another.start(this._lc)
    })
    this._ch = another
    return this
  }

  /**
   * @param {boolean} [flag=true]
   * @returns {this}
   */
  reset() {
    this._cb.length = 0
    return this.stop()
  }

  /**
   * @param {boolean} [flag=true]
   * @returns {this}
   */
  relative(flag = true) {
    this._rel = flag
    return this
  }

  /**
   * @param {number} value
   * @returns {this}
   */
  delay(value) {
    this._w = value
    return this
  }

  /**
   * Returns the current tween of the chain.
   *
   * @returns {this}
   */
  get current() {
    return this._cu
  }

  /**
   * @returns {number} the current progress (0..1)
   */
  get progress() {
    if (this.running && this._t > this._w) {
      return (this._t - this._w) / this._d
    }
    return 0
  }
}
