utils.global()

const e = litecanvas({
  global: false,
})

sprite = e.paint(5, 4, ["33333", "33737", "33333", "33333"], {
  scale: 20,
})

function init() {
  player = new Actor(sprite)

  player.anchor = ANCHOR_CENTER
  // player.anchor = ANCHOR_TOP_LEFT
  // player.anchor = ANCHOR_BOT_RIGHT

  player.scaleTo(2)

  player.x = e.W / 2
  player.y = e.H / 2
}

// tap to flip the actor
function tapped() {
  player.flipX = !player.flipX
}

function draw() {
  e.cls(0)

  // two lines
  e.line(0, e.H / 2, e.W, e.H / 2, 1)
  e.line(e.W / 2, 0, e.W / 2, e.H, 1)

  // the actor
  player.draw(e)
}
