export default class Camera {
  /** @type {LitecanvasInstance} */
  _engine = null

  /** @type {number} camera center X */
  x = 0
  /** @type {number} camera center Y */
  y = 0

  /** @type {number} offset X */
  ox = 0

  /** @type {number} offset Y*/
  oy = 0

  /** @type {number} */
  width = 0
  /** @type {number} */
  height = 0

  /** @type {number} */
  rotation = 0
  /** @type {number} */
  scale = 1

  _shake = {
    x: 0,
    y: 0,
    removeListener: null,
  }

  /**
   * @param {LitecanvasInstance} engine
   */
  constructor(engine = null, ox = 0, oy = 0, width = null, height = null) {
    this._engine = engine || globalThis

    this.ox = ox
    this.oy = oy

    this.resize(
      width || this._engine.WIDTH - ox,
      height || this._engine.HEIGHT - oy
    )

    this.x = this.width / 2
    this.y = this.height / 2
  }

  resize(width, height) {
    this.width = width
    this.height = height
    this._engine.emit("camera-resized", this)
  }

  /**
   * @param {boolean} [clip] default: `false`
   */
  start(clip = false) {
    this._engine.push()

    if (clip) {
      this._engine.cliprect(this.ox, this.oy, this.width, this.height)
    }

    const centerX = this.ox + this.width / 2,
      centerY = this.oy + this.height / 2

    this._engine.translate(centerX, centerY)
    this._engine.scale(this.scale)
    this._engine.rotate(this.rotation)
    this._engine.translate(-this.x + this._shake.x, -this.y + this._shake.y)
  }

  end() {
    this._engine.pop()
  }

  /**
   * @param {number} x
   * @param {number} y
   */
  lookAt(x, y) {
    this.x = x
    this.y = y
  }

  /**
   * @param {number} dx
   * @param {number} dy
   */
  move(dx, dy) {
    this.x += dx
    this.y += dy
  }

  /**
   * @param {number} value
   */
  zoom(value) {
    this.scale *= value
  }

  /**
   * @param {number} value
   */
  zoomTo(value) {
    this.scale = value
  }

  /**
   * @param {number} radians
   */
  rotate(radians) {
    this.rotation += radians
  }

  /**
   * @param {number} radians
   */
  rotateTo(radians) {
    this.rotation = radians
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {{x: number, y: number}} [output]
   * @returns {{x: number, y: number}}
   */
  getWorldPoint(x, y, output = {}) {
    const c = Math.cos(-this.rotation),
      s = Math.sin(-this.rotation)

    x = (x - this.width / 2 - this.ox) / this.scale
    y = (y - this.height / 2 - this.oy) / this.scale

    output.x = c * x - s * y + this.x
    output.y = s * x + c * y + this.y

    return output
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {{x: number, y: number}} [output]
   * @returns {{x: number, y: number}}
   */
  getCameraPoint(x, y, output = {}) {
    const c = Math.cos(-this.rotation),
      s = Math.sin(-this.rotation)

    x = x - this.x
    y = y - this.y
    x = c * x - s * y
    y = s * x + c * y

    output.x = x * this.scale + this.width / 2 + this.ox
    output.y = y * this.scale + this.height / 2 + this.oy

    return output
  }

  /**
   * @returns {number[]}
   */
  getBounds() {
    return [this.ox, this.oy, this.width, this.height]
  }

  /**
   * Check if a rect is inside of the camera.
   *
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @returns {boolean}
   */
  viewing(x, y, width, height) {
    const cameraX = this.width / 2 - this.x
    const cameraY = this.height / 2 - this.y
    const cameraWidth = this.width / this.scale
    const cameraHeight = this.height / this.scale

    return this._engine.colrect(
      x,
      y,
      width,
      height,
      cameraX,
      cameraY,
      cameraWidth,
      cameraHeight
    )
  }

  /**
   * @param {number} amplitude
   * @param {number} duration in seconds
   */
  shake(amplitude = 1, duration = 0.3) {
    if (this.shaking) return

    this._shake.removeListener = this._engine.listen("update", (dt) => {
      this._shake.x = this._engine.randi(-amplitude, amplitude)
      this._shake.y = this._engine.randi(-amplitude, amplitude)
      duration -= dt
      if (duration <= 0) {
        this.unshake()
      }
    })
  }

  unshake() {
    if (this.shaking) {
      this._shake.removeListener()
      this._shake.removeListener = null
      this._shake.x = this._shake.y = 0
    }
  }

  /**
   * @returns {boolean}
   */
  get shaking() {
    return this._shake.removeListener !== null
  }
}
