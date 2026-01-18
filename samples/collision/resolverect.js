utils.global()

litecanvas({})

function init() {
  a = [10, 10, 50, 50]
  b = [100, 100, 100, 50]
  dir = null
}

// this function detect taps/clicks
// and changes the circle position
function tapping(x, y) {
  a[0] = x
  a[1] = y
}

function tap(x, y) {
  a[0] = x
  a[1] = y
}

// this function controls the game logic
function update(dt) {
  if (colrect(...a, ...b)) {
    let { dir: d, x, y } = resolverect(...a, ...b)
    if (d) {
      a[0] = x
      a[1] = y
    }
    dir = d ? d : ""
  }
}

// this function render the game scene
function draw() {
  cls(0) // clear the screen
  rectfill(...a, 2)
  rectfill(...b, 3)
  if (dir) text(0, 0, dir)
}
