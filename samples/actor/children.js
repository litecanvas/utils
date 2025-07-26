let firebar

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

  // firebar is the parent
  firebar = new Actor(null, vec(W / 2, H / 2), ANCHOR_CENTER)

  // a array to hold all children
  firebar.children = []

  // create the fireballs (the children)
  for (let i = 0; i < 7; i++) {
    pos = vec(2 * size * i, 0)
    firebar.children.push(new Actor(fireball, pos, ANCHOR_CENTER))
  }
}

// tap to toggle the firebar visibility
function tapped() {
  firebar.hidden = !firebar.hidden
}

function update(dt) {
  firebar.angle += 90 * dt
}

function draw() {
  cls(0)

  // hide the children if the parent is hidden
  if (!firebar.hidden) {
    push()
    firebar.draw(e, false)

    for (const child of firebar.children) {
      child.draw(e)
    }
    pop()
  }
}
