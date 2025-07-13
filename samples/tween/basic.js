// basic example
// move the rect position x from 100 to 250 over 2 seconds
let object, animation

utils.global()
litecanvas()

function init() {
  pos = {
    x: 100,
    y: H / 2,
  }

  // create the animation
  animation = tween(pos, "x", 250, 2).relative()

  // start the animation
  animation.start()

  // print in console after when that tween finishes
  animation.onEnd(() => {
    console.log("FINISHED")
  })

  // or just
  // tween(...).start()
}

function tapped() {
  if (!animation.running) {
    pos.x = 100
    animation.start()
  }
}

function draw() {
  cls(0)
  // draw the animated rect
  rectfill(pos.x, pos.y, 50, 50, 3)
}
