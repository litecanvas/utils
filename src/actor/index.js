import { Vector, vec, veccopy } from "../vector/index.js"
import "litecanvas"

export const ANCHOR_CENTER = vec(0.5, 0.5)
export const ANCHOR_TOP_LEFT = vec(0, 0)
export const ANCHOR_TOP_RIGHT = vec(1, 0)
export const ANCHOR_BOT_LEFT = vec(0, 1)
export const ANCHOR_BOT_RIGHT = vec(1, 1)

export class Actor {
  /** @type {Image|HTMLCanvasElement|OffscreenCanvas} */
  sprite

  /** @type {Vector} The actor position */
  pos

  /** @type {Vector} The actor anchor (origin) */
  _o

  /** @type {Vector} The actor scale */
  _s

  /** @type {number} The actor angle (in radians) */
  angle = 0

  /** @type {number} The actor opacity */
  opacity = 1

  /** @type {boolean} If `true` the actor will not be drawn. */
  hidden = false

  /**
   * @param {Image|HTMLCanvasElement|OffscreenCanvas} sprite
   * @param {Vector} position
   */
  constructor(sprite, position) {
    this.sprite = sprite
    this.pos = position || vec(0)
    this._o = veccopy(ANCHOR_TOP_LEFT)
    this._s = vec(1, 1)
  }

  /**
   * @param {number}
   */
  set x(value) {
    this.pos.x = value
  }

  /**
   * @returns {number}
   */
  get x() {
    return this.pos.x
  }

  /**
   * @param {number}
   */
  set y(value) {
    this.pos.y = value
  }

  /**
   * @returns {number}
   */
  get y() {
    return this.pos.y
  }

  /**
   * @param {Vector}
   */
  set anchor(vec) {
    this._o.x = vec.x
    this._o.y = vec.y
  }

  /**
   * @returns {Vector}
   */
  get anchor() {
    return this._o
  }

  /**
   * @returns {number}
   */
  get width() {
    return this.sprite.width * this._s.y
  }

  /**
   * @returns {number}
   */
  get height() {
    return this.sprite.height * this._s.y
  }

  /**
   * @retuns {Vector}
   */
  get scale() {
    return this._s
  }

  /**
   * Update the transformation matrix, sets the opacity and draw the actor sprite image.
   *
   * @param {LitecanvasInstance} [litecanvas]
   */
  draw(litecanvas = globalThis) {
    if (this.hidden || this.opacity <= 0) return

    litecanvas.push()

    this.transform(litecanvas)

    const anchorX = this.sprite.width * this.anchor.x
    const anchorY = this.sprite.height * this.anchor.y
    litecanvas.image(-anchorX, -anchorY, this.sprite)

    litecanvas.pop()
  }

  /**
   * @param {LitecanvasInstance} litecanvas
   */
  transform(litecanvas) {
    litecanvas.translate(this.pos.x, this.pos.y)
    litecanvas.rotate(this.angle)
    litecanvas.scale(this._s.x, this._s.y)
    litecanvas.alpha(this.opacity)
  }
}
