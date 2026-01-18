let circleImage

utils.global()
litecanvas()

function init() {
  circleImage = makeCircle(32, 2, {
    borderWidth: 8,
    borderColor: 3,
  })
}

function draw() {
  cls(0)
  image(0, 0, circleImage)
}
