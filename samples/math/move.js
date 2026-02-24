let pos, target

utils.global()
const e = litecanvas()

function init() {
  pos = vec(W / 2, H / 2)
  target = vec(pos)
}

function tapped(x, y) {
  target.x = x
  target.y = y
}

function update(dt) {
  pos.x = move(pos.x, target.x, 500 * dt)
}

function draw() {
  cls(0)
  circfill(pos.x, pos.y, 48, 3)
  text(8, 8, "Tap to move")
}
