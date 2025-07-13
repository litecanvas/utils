let values

utils.global()
const e = litecanvas({})

function init() {
  values = []
  for (const n of range(10, 100, 10)) {
    values.push(n * 2)
  }
}

function update(dt) {}

function draw() {
  cls(0)
  text(0, 0, values.join(" "))
}
