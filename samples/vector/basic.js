utils.global()

litecanvas()

function init() {
  pos = vec(W / 2, H / 2)
}

function tapped(tapx, tapy) {
  pos.x = tapx
  pos.y = tapy
}

function draw() {
  cls(0)
  circfill(pos.x, pos.y, 5, 4)
}
