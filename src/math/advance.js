import assert from "../debug/assert.js"
import is from "../debug/is.js"
import { Vector } from "../vector/index.js"

/**
 * Move a vector (position) using another vectors: velocity and acceleration (optional).
 * Note: This function changes the position and velocity vectors.
 *
 * @param {Vector} position
 * @param {Vector} velocity
 * @param {Vector} [acceleration]
 * @param {number} [deltaTime]
 */
export default (position, velocity, acceleration, deltaTime = 1) => {
  DEV: assert(
    is(position, Vector),
    "[litecanvas/utils] advance() 1st param must be a Vector"
  )
  DEV: assert(
    is(velocity, Vector),
    "[litecanvas/utils] advance() 2nd param must be a Vector"
  )
  DEV: assert(
    null == acceleration || is(acceleration, Vector),
    "[litecanvas/utils] advance() 3rd param must be a Vector or null"
  )
  DEV: assert(
    Number.isFinite(deltaTime),
    "[litecanvas/utils] advance() 4th param must be a number"
  )

  if (acceleration) {
    velocity.x += acceleration.x * deltaTime
    velocity.y += acceleration.y * deltaTime
  }

  position.x += velocity.x * deltaTime
  position.y += velocity.y * deltaTime
}
