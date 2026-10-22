utils.global()
litecanvas()

const sprite = paint(
  3,
  3,
  () => {
    spr(0, 0, [".3.", "303", ".3."].join("\n"))
  },
  {
    scale: 20,
  }
)

function init() {
  player = new Actor(sprite)

  player.anchor = ANCHOR_CENTER

  player.x = W / 2
  player.y = H / 2
}

function tap(x, y) {
  if (x > player.x) {
    player.dx = 250
  } else {
    player.dx = -250
  }
}

function untap(x, y) {
  player.dx = 0
}

function update(dt) {
  player.update(dt)
}

function draw() {
  cls(0)

  text(8, 8, "Tap to move.")

  // the actor
  player.draw()
}
