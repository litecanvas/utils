utils.global()

let camera, object

const engine = litecanvas({
  width: 500,
})

function init() {
  const offset = 50
  camera = new Camera(engine, offset, offset, W - offset * 2, H - offset * 2)

  object = {
    x: 0, // x
    y: 0, // y
    w: 25, // width
    h: 25, // height
  }
}

function tapped(x, y) {
  const { x: cx, y: cy } = camera.getWorldPoint(x, y)
  object.x = cx
  object.y = cy
}

function draw() {
  cls(0)

  let clip = true
  camera.start(clip)

  const { x, y, w, h } = object

  rectfill(x, y, w, h, 3)

  camera.end()

  // draw the camera bounds (yellow rectangle)
  linewidth(2)
  rect(...camera.getBounds(), 2)

  text(10, 10, "Tap!")
}
