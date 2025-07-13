utils.global()

const g = litecanvas()

function init() {
  rseed(42) // uncomment this to set a fixed random seed

  center = vec(W / 2, H / 2)
  points = []
  count = 10
}

function update(dt) {
  if (count > 0) {
    const p = vec(center) // clone
    const randomDir = vecRand(200)

    vecAdd(p, randomDir.x, randomDir.y)
    points.push(p)

    count--
  }
}

function draw() {
  cls(0)

  circfill(center.x, center.y, 10, 5)

  for (const p of points) {
    circfill(p.x, p.y, 5, 4)
  }
}
