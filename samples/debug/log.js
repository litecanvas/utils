utils.global()

litecanvas()

const values = [
  "Tap...",
  42,
  2.5896,
  true,
  Infinity,
  NaN,
  null,
  undefined,
  {
    foo: "bar",
  },
  (name) => `hello ${name}`,
  function oneTwoThree() {
    return 123
  },
]
let state = 0

function tapped() {
  state = wrap(state + 1, 0, values.length)
}

function draw() {
  cls(0)
  log(values[state])
}
