let pos

utils.global()
const e = litecanvas()

function init() {
  pos = vec(0, H / 2)
}

function draw() {
  cls(0)
  circfill(wave(0, W, T), pos.y, 48, 3)
}
