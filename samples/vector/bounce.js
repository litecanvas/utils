utils.global()

litecanvas({
  width: 100,
  autoscale: false,
})

// based on https://p5js.org/reference/p5.Vector/reflect/
function draw() {
  cls(3)

  line(50, 0, 50, 100, 2)

  // Create a normal vector
  let n = vec(1, 0)

  // Center
  let v0 = vec(50, 50)

  // Create a vector to reflect
  let v1 = vec(30, 40)

  let v2 = vecReflect(vec(v1), n)

  vecSetMag(n, 30)

  // Draw the black line.
  drawLine(v0, n, 0)

  // Draw the red line.
  drawLine(v0, v1, 4)

  // Draw the blue line.
  drawLine(v0, v2, 7)
}

function drawLine(base, vec, color) {
  push()
  linewidth(3)
  translate(base.x, base.y)
  line(0, 0, vec.x, vec.y, color)
  pop()
}
