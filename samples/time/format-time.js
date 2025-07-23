utils.global()

litecanvas()

let timer = 300 // 5 minutes in seconds

function update(dt) {
  timer = timer - dt
}

function draw() {
  cls(0)
  textsize(W / 10)
  textalign("center", "middle")
  text(W / 2, H / 2, formatTime(timer))
}
