// basic example
// move the rect position x from 100 to 250 over 2 seconds
let obj, d

utils.global()
litecanvas()

function init() {
  obj = {
    x: 50,
    y: 50,
    angle: 0,
  }
  d = 0.5 // duration of each tween

  // create the animations
  const moveRight = tween(obj, "x", 300, d, EASE_OUT).relative()
  const moveDown = tween(obj, "y", 300, d, EASE_OUT).relative()
  const moveLeft = tween(obj, "x", -300, d, EASE_OUT).relative()
  const moveUp = tween(obj, "y", -300, d, BOUNCE_OUT).relative()
  const rotate90 = tween(obj, "angle", PI / 2, d * 2, BACK_IN).relative()

  moveRight.chain(moveDown).chain(moveLeft).chain(moveUp).chain(rotate90)

  const first = moveRight
  const last = rotate90

  // start the first tween in that chain
  first.start()

  // comment to not repeat forever
  last.onEnd(() => first.start())
}

function draw() {
  cls(0)
  // draw the animated rect
  push()
  translate(obj.x, obj.y)
  rotate(obj.angle)
  rectfill(-25, -25, 50, 50, 3)
  pop()
}
