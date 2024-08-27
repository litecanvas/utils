export default class Camera {
  /** @type {LitecanvasInstance} */
  _engine = null

  /** @type {number} */
  x = 0
  /** @type {number} */
  y = 0
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
  constructor(engine = null) {
    engine = engine || globalThis
    this._engine = engine
    this.size(engine.WIDTH || 0, engine.HEIGHT || 0)
    this.x = this.width / 2
    this.y = this.height / 2
  }

  size(width, height) {
    this.width = width
    this.height = height
  }

  start(clip = false) {
    const centerX = this.width / 2,
      centerY = this.height / 2

    this._engine.push()
    this._engine.translate(centerX, centerY)
    this._engine.scale(this.scale)
    this._engine.rotate(this.rotation)
    this._engine.translate(-this.x + this._shake.x, -this.y + this._shake.y)

    if (clip) {
      this._engine.cliprect(this.x, this.y, this.width, this.height)
    }
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

  zoom(value) {
    this.scale *= value
  }

  zoomTo(value) {
    this.scale = value
  }

  rotate(radians) {
    this.rotation += radians
  }

  rotateTo(radians) {
    this.rotation = radians
  }

  shake(duration = 0.3, amplitude = 1) {
    if (this.shaking()) return

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
    if (this.shaking()) {
      this._shake.removeListener()
      this._shake.removeListener = null
      this._shake.x = this._shake.y = 0
    }
  }

  shaking() {
    return this._shake.removeListener !== null
  }
}
