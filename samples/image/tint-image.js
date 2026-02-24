let red, blue, purple

utils.global()
litecanvas()

function init() {
  donut = paint(64, 64, (ctx) => {
    circfill(32, 32, 32, 3)
    push()
    clip((ctx) => {
      ctx.arc(32, 32, 16, 0, TWO_PI)
    })
    cls()
    pop()
  })

  // tintImage(image, color, opacity)
  donut2 = tintImage(donut, 2, 1)
  donut3 = tintImage(donut, 1, 0.5)
}

function draw() {
  cls(0)
  image(0, 0, donut)
  image(64, 0, donut2)
  image(128, 0, donut3)
}
