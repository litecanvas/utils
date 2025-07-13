let rectImage

utils.global()

litecanvas({
  // autoscale: false,
})

function init() {
  rectImage = makeRectangle(W / 2, H / 2, 4, {
    borderWidth: 16,
    borderColor: 3,
  })
}

function draw() {
  cls(0)

  image(0, 0, rectImage)
}
