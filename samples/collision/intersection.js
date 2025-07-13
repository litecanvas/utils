utils.global()

litecanvas({})

function init() {
  a = [0, 0, 120, 50] // the gray rect
  b = [100, 100, 100, 100] // the red rect
}

function tap(x, y) {
  a[0] = x
  a[1] = y
}

function tapping(x, y) {
  a[0] = x
  a[1] = y
}

function draw() {
  cls(0) // clear the screen

  rectfill(...a, 2)
  rectfill(...b, 4)

  if (colrect(...a, ...b)) {
    overlaps = intersection(...a, ...b)
    rectfill(...overlaps, 5)
  }
}
