utils.global()

let camera, object

const engine = litecanvas({
  width: 500,
})

function init() {
  camera = new Camera(engine)

  object = [
    100, // x
    100, // y
    50, // width
    50, // height
  ]
}

function tapping(x, y) {
  camera.x = x
  camera.y = y
}

function draw() {
  cls(0)

  camera.start()

  rectfill(100, 100, 50, 50, 4)

  circfill(300, 300, 50, 5)

  camera.end()
}
