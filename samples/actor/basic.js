utils.global()

const e = litecanvas({
  global: false,
})

const sprite = e.paint(
  3,
  3,
  () => {
    e.spr(0, 0, [".3.", "303", ".3."].join("\n"))
  },
  {
    scale: 20,
  }
)

function init() {
  player = new Actor(sprite)

  player.anchor = ANCHOR_CENTER

  player.x = e.W / 2
  player.y = e.H / 2

  player.opacity = 0.5
}

function update(dt) {
  player.angle += 180 * dt
  player.scale.x = e.wave(0.5, 2, e.T)
  player.scale.y = e.wave(0.5, 2, e.T)
}

function draw() {
  e.cls(0)

  // two lines
  e.line(0, e.H / 2, e.W, e.H / 2, 1)
  e.line(e.W / 2, 0, e.W / 2, e.H, 1)

  // the actor
  player.draw(e)

  // the actor bounds (useful to check collision)
  e.rect(...player.getBounds(), 4)

  // the red dot
  e.circfill(player.x, player.y, 1, 4)
}
