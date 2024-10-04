import { Vector, vecMult, vecAdd } from "../vector"

/**
 * Move a vector (position) using another vectors: velocity and acceleration (optional).
 * Note: This function changes the position and velocity vectors.
 *
 * @param {Vector} position
 * @param {Vector} velocity
 * @param {Vector?} acceleration
 * @param {number?} deltaTime
 */
export default advance = (position, velocity, acceleration, deltaTime = 1) => {
  if (acceleration) {
    velocity.x += acceleration.x * deltaTime
    velocity.y += acceleration.y * deltaTime
  }

  position.x += velocity.x * deltaTime
  position.y += velocity.y * deltaTime
}
