import "litecanvas"

// helpers
const flip = (x) => 1 - x
const out = (func) => (x) => flip(func(flip(x)))

export const LINEAR = (x) => x
export const QUAD_IN = (x) => x * x
export const QUAD_OUT = out(QUAD_IN)
export const CUBIC_IN = (x) => x * x * x
export const CUBIC_OUT = out(CUBIC_IN)
export const SINE_IN = (x) => 1 - Math.cos((x * Math.PI) / 2)
export const SINE_OUT = out(SINE_IN)

export class Tween {
  /** @type {number} */
  timescale = 1

  /** @type {LitecanvasInstance} */
  $

  constructor(litecanvas = globalThis) {
    this.$ = litecanvas
  }

  /**
   * @typedef TweenController
   * @type {object}
   * @property {() => void} cancel
   * @property {(callback: Function) => void} then
   */

  /**
   * @param {*} obj
   * @param {string} prop
   * @param {number} toValue
   * @param {number} duration
   * @param {(x:number)=>number} step
   * @returns {TweenController}
   */
  animate(obj, prop, toValue, duration, step = LINEAR) {
    const onEndCallbacks = []
    const fromValue = obj[prop] || 0
    /** @type {TweenController} */
    const tweenController = {}

    let t = 0

    tweenController.cancel = listen("before:update", (dt) => {
      if (this.timescale === 0) return

      if (t < duration) {
        obj[prop] = this.$.lerp(fromValue, toValue, step(t / duration))
        t += dt * this.timescale
      } else {
        tweenController.cancel()
        obj[prop] = toValue
        for (const callback of onEndCallbacks) {
          callback()
        }
      }
    })

    tweenController.then = (callback) => {
      onEndCallbacks.push(callback)
    }

    return tweenController
  }

  /**
   * @param {Function[]} tweenList a list of functions to create a sequence of tweens
   * @param {boolean|number} repeat `false` to not repeat the sequence of tweens, `true` to repeat infinitely or an positive number
   * @returns {TweenController}
   */
  queue(tweenList, repeat = false) {
    /** @type {TweenController} */
    const tweenController = {}
    const onEndCallbacks = []

    let current

    if (true === repeat) {
      repeat = Infinity
    } else if (repeat < 0) {
      repeat = false
    }

    const startTween = (index) => {
      // finished the sequence?
      if (index >= tweenList.length) {
        for (const callback of onEndCallbacks) {
          callback()
        }

        if (!repeat) {
          current = null
          return
        }

        repeat -= 1
        index = 0
      }

      current = tweenList[index]()

      if (current.then) {
        current.then(() => {
          startTween(index + 1)
        })
      } else {
        current = null
      }
    }

    tweenController.then = (callback) => {
      onEndCallbacks.push(callback)
    }

    tweenController.cancel = () => {
      if (current) {
        current.cancel()
        current = null
      }
    }

    startTween(0) // start the sequence

    return tweenController
  }
}
