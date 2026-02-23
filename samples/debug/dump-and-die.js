utils.global()

const e = litecanvas()

function draw() {
  cls(0)

  if (T > 1) return dd("Error! oh no!", null, e)

  rectfill(0, 0, 32, 32, 3)
}
