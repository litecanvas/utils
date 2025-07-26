let values

utils.global()
const e = litecanvas({})

function init() {
  // rseed(42)
  values = shuffle(range(10), e.rand)
}

function update(dt) {}

function draw() {
  cls(0)
  text(0, 0, values.join(" "))
}
