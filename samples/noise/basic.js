const WHITE = 3

const MIN_X = 0
const MAX_X = 40
const MIN_Y = 0
const MAX_Y = 40

let n

utils.global()
const e = litecanvas()

function init() {
  n = new Noise(e)

  // uncomment to set a RNG seed
  // n.noiseSeed(42)
}

function draw() {
  cls(0)

  for (let x = MIN_X; x < MAX_X; x++) {
    for (let y = MIN_Y; y < MAX_Y; y++) {
      const a = n.noise(x / 10, y / 10)

      push()
      alpha(a)
      rectfill(10 + 10 * x, 10 + 10 * y, 10, 10, WHITE)
      pop()
    }
  }
}
