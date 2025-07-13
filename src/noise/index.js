/**
 * Further adapted from p5 Noise module
 * https://github.com/processing/p5.js/blob/v1.11.1/src/math/noise.js
 */

// Constants for Perlin noise calculations.
const PERLIN_YWRAPB = 4
const PERLIN_YWRAP = 1 << PERLIN_YWRAPB
const PERLIN_ZWRAPB = 8
const PERLIN_ZWRAP = 1 << PERLIN_ZWRAPB
const PERLIN_SIZE = 4095

/**
 * Scaled cosine function used for smoothing transitions in Perlin noise.
 * @param {number} i - Input value.
 * @returns {number} Scaled cosine value.
 */
const scaled_cosine = (i) => 0.5 * (1.0 - Math.cos(i * Math.PI))

/**
 * Class for generating Perlin noise, a type of gradient noise often used in procedural generation.
 */
export class Noise {
  /**
   * Array to store Perlin noise values.
   * @type {number[]}
   * @private
   */
  _p = []

  /**
   * Number of octaves for the Perlin noise. Higher values create more detail.
   * @type {number}
   * @private
   */
  _po = 4

  /**
   * Amplitude falloff factor for Perlin noise. Determines the reduction of amplitude per octave.
   * @type {number}
   * @private
   */
  _pf = 0.5

  /**
   * @type {LitecanvasInstance}
   * @private
   */
  _e = null

  /**
   * @param {LitecanvasInstance} engine
   */
  constructor(engine) {
    this._e = engine || globalThis

    this.noiseSeed()
  }

  /**
   * Generates Perlin noise for the given coordinates.
   * @param {number} x - X-coordinate.
   * @param {number} [y=0] - Y-coordinate (default is 0).
   * @param {number} [z=0] - Z-coordinate (default is 0).
   * @returns {number} A noise value in the range [0, 1).
   */
  noise(x, y = 0, z = 0) {
    if (x < 0) {
      x = -x
    }
    if (y < 0) {
      y = -y
    }
    if (z < 0) {
      z = -z
    }

    let xi = Math.floor(x),
      yi = Math.floor(y),
      zi = Math.floor(z)
    let xf = x - xi
    let yf = y - yi
    let zf = z - zi
    let rxf, ryf

    let r = 0
    let ampl = 0.5

    let n1, n2, n3

    for (let o = 0; o < this._po; o++) {
      let of = xi + (yi << PERLIN_YWRAPB) + (zi << PERLIN_ZWRAPB)

      rxf = scaled_cosine(xf)
      ryf = scaled_cosine(yf)

      n1 = this._p[of & PERLIN_SIZE]
      n1 += rxf * (this._p[(of + 1) & PERLIN_SIZE] - n1)
      n2 = this._p[(of + PERLIN_YWRAP) & PERLIN_SIZE]
      n2 += rxf * (this._p[(of + PERLIN_YWRAP + 1) & PERLIN_SIZE] - n2)
      n1 += ryf * (n2 - n1)

      of += PERLIN_ZWRAP
      n2 = this._p[of & PERLIN_SIZE]
      n2 += rxf * (this._p[(of + 1) & PERLIN_SIZE] - n2)
      n3 = this._p[(of + PERLIN_YWRAP) & PERLIN_SIZE]
      n3 += rxf * (this._p[(of + PERLIN_YWRAP + 1) & PERLIN_SIZE] - n3)
      n2 += ryf * (n3 - n2)

      n1 += scaled_cosine(zf) * (n2 - n1)

      r += n1 * ampl
      ampl *= this._pf
      xi <<= 1
      xf *= 2
      yi <<= 1
      yf *= 2
      zi <<= 1
      zf *= 2

      if (xf >= 1.0) {
        xi++
        xf--
      }
      if (yf >= 1.0) {
        yi++
        yf--
      }
      if (zf >= 1.0) {
        zi++
        zf--
      }
    }
    return r
  }

  /**
   * Adjusts the detail level of the noise by setting the number of octaves and amplitude falloff.
   * @param {number} lod - Level of detail (number of octaves).
   * @param {number} falloff - Amplitude falloff per octave.
   */
  noiseDetail(lod, falloff) {
    if (lod > 0) {
      this._po = lod
    }
    if (falloff > 0) {
      this._pf = falloff
    }
  }

  /**
   * Sets a seed for the Perlin noise generator, ensuring deterministic results.
   *
   * @param {number} value - Seed value.
   */
  noiseSeed(value = null) {
    if (value != null) {
      this._e.rseed(value)
    }
    const random = this._e.rand || Math.random
    for (let i = 0; i < PERLIN_SIZE + 1; i++) {
      this._p[i] = random()
    }
  }
}
