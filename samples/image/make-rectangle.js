let rectImage

utils.global()

litecanvas({
  // autoscale: false,
})

function init() {
  rectImage = makeRectangle(W / 2, H / 2, 3, {
    borderWidth: 16,
    borderColor: 2,
  })
}

function draw() {
  cls(0)

  image(0, 0, rectImage)
}
