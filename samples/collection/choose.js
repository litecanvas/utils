utils.global()

const e = litecanvas({})

let value

function init() {
  // rseed(42)
  value = choose(range(1000), e.rand)
}

function update(dt) {}

function draw() {
  cls(0)
  text(0, 0, value)
}
