utils.global()

const e = litecanvas({
  global: false,
})

function draw() {
  e.cls(0)

  if (e.T > 1) return dd("Error! oh no!", null, e)

  e.rectfill(0, 0, 32, 32, 4)
}
