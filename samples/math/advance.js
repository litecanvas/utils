let pos, vel, acc

const MAX_VELOCITY = 1200

utils.global()
const e = litecanvas()

function init() {
  pos = vec(0, H / 2)
  vel = vec(0, 0)
  acc = vec(100, 0)
}

function update(dt) {
  advance(pos, vel, vel.x < MAX_VELOCITY ? acc : null, dt)
  vel.x = clamp(vel.x, 0, MAX_VELOCITY)

  if (pos.x > W) {
    pos.x = 0
    sfx()
  }
}

function draw() {
  cls(0)
  circ(pos.x, pos.y, 48, 4)
  text(
    0,
    0,
    "Velocity: " +
      (vel.x | 0) +
      " px/s" +
      (vel.x === MAX_VELOCITY ? " (max)" : "")
  )
  text(0, 32, "Acceleration: " + acc.x + " px/s²")
}
