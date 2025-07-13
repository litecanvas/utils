let red, blue, purple

utils.global()
litecanvas()

function init() {
  donutRed = paint(64, 64, (ctx) => {
    circfill(32, 32, 32, 4)
    push()
    clip((ctx) => {
      ctx.arc(32, 32, 16, 0, TWO_PI)
    })
    cls()
    pop()
  })

  donutBlue = tintImage(donutRed, 6, 1)

  donutPurple = tintImage(donutRed, 6, 0.65)
}

function draw() {
  cls(0)
  image(0, 0, donutRed)
  image(64, 0, donutBlue)
  image(128, 0, donutPurple)
}
