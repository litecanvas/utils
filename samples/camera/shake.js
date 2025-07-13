utils.global()

const engine = litecanvas({
  width: 500,
})

function init() {
  camera = new Camera(engine)
}

function tap() {
  camera.shake(5, 999999)
}

function untap() {
  camera.unshake()
}

function draw() {
  cls(0)

  camera.start() // starts the camera scope

  rectfill(20, 20, 40, 40, 4)
  rectfill(200, 90, 20, 40, 5)

  // anything drawn outside the scope of the camera
  // will have coordinates (X, Y) relative to the canvas (not the camera)
  text(200, 200, "not UI")

  camera.end() // ends the camera scope

  // anything drawn outside the scope of the camera
  // will have coordinates (X, Y) relative to the canvas (not the camera)
  text(350, 10, "UI (not shake)")
}
