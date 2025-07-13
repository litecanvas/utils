let parent

utils.global()
const e = litecanvas({})

function makeCircle(radius, color) {
  return paint(radius * 2, radius * 2, () => {
    circfill(radius, radius, radius, color)
  })
}

function init() {
  const size = 16
  const fireball = makeCircle(size, 4)

  parent = new Actor(fireball, vec(W / 2, H / 2), ANCHOR_CENTER)
  parent.children = []

  for (let i = 0; i < 6; i++) {
    pos = vec(2 * size * (i + 1), 0)
    parent.children.push(new Actor(fireball, pos, ANCHOR_CENTER))
  }
}

function update(dt) {
  parent.angle += 90 * dt
}

function draw() {
  cls(0)

  push()
  parent.draw(e, false)

  for (const child of parent.children) {
    child.draw(e)
  }
  pop()
}
