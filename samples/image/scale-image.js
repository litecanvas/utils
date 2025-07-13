let x1, x5, x5smooth

utils.global()
litecanvas()

function init() {
  x1 = paint(3, 3, [".4.", "4.4", ".4."], { scale: 10 })

  x5 = scaleImage(x1, 5) // scales 5x
}

function draw() {
  cls(0)
  image(0, 0, x1)
  image(0, 30, x5)
}
