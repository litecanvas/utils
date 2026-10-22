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

function update(dt) {
  player.dx = 0

  if (iskeydown("a")) {
    player.dx = -250
  } else if (iskeydown("d")) {
    player.dx = 250
  }

  player.update(dt)
}

function draw() {
  cls(0)

  text(8, 8, "Use A/D to move or taps.")

  // the actor
  player.draw()
}
