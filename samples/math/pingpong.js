let pos,
  speed = 300

utils.global()
const e = litecanvas()

function init() {
  pos = vec(0, H / 2)
}

function draw() {
  cls(0)
  circfill(pingpong(T * speed, W), pos.y, 48, 3)
}
