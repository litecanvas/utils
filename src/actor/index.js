import { Vector, vec } from "../vector/index.js"
import "litecanvas"

export const ANCHOR_CENTER = /** @__PURE__ */ vec(0.5, 0.5)
export const ANCHOR_TOP_LEFT = /** @__PURE__ */ vec(0, 0)
export const ANCHOR_TOP_RIGHT = /** @__PURE__ */ vec(1, 0)
export const ANCHOR_BOT_LEFT = /** @__PURE__ */ vec(0, 1)
export const ANCHOR_BOT_RIGHT = /** @__PURE__ */ vec(1, 1)

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
   * @param {Vector} anchor
   */
  constructor(sprite, position, anchor = ANCHOR_TOP_LEFT) {
    this.sprite = sprite
    this.pos = position || vec(0)
    this._o = vec(anchor) // clone the anchor vector
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
    return this.sprite.width * this._s.x
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
   * Sets the actor scale
   *
   * @param {number} x
   * @param {number} [y]
   */
  scaleTo(x, y = x) {
    this._s.x = x
    this._s.y = y
  }

  /**
   * Multiplies the actor scale
   *
   * @param {number} x
   * @param {number} [y]
   */
  scaleBy(x, y = x) {
    this._s.x *= x
    this._s.y *= y
  }

  /**
   * @returns {number[]}
   */
  getBounds(scaled = true) {
    const w = this.sprite.width * (scaled ? this._s.x : 1)
    const h = this.sprite.height * (scaled ? this._s.y : 1)
    const x = this.pos.x - w * this.anchor.x
    const y = this.pos.y - h * this.anchor.y
    return [x, y, w, h]
  }

  /**
   * Draw the actor
   *
   * @param {LitecanvasInstance} [litecanvas]
   */
  draw(litecanvas = globalThis, saveContext = true) {
    if (this.hidden || this.opacity <= 0) return

    if (saveContext) litecanvas.push()

    this.transform(litecanvas)
    this.drawImage(litecanvas)

    if (saveContext) litecanvas.pop()
  }

  /**
   * @param {LitecanvasInstance} litecanvas
   */
  transform(litecanvas) {
    litecanvas.translate(this.pos.x, this.pos.y)
    litecanvas.rotate(this.angle)
    litecanvas.scale(this._s.x, this._s.y)
  }

  /**
   * @param {LitecanvasInstance} litecanvas
   */
  drawImage(litecanvas, alpha = true) {
    const anchorX = this.sprite.width * this.anchor.x
    const anchorY = this.sprite.height * this.anchor.y

    if (alpha) litecanvas.alpha(this.opacity)

    litecanvas.image(-anchorX, -anchorY, this.sprite)
  }
}
