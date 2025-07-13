// basic example
// move the rect position x from 100 to 250 over 2 seconds
let chars

utils.global()
litecanvas()

function init() {
  chars = [
    {
      ch: randi(1, 9),
      y: 50,
    },
    {
      ch: randi(1, 9),
      y: 50,
    },
    {
      ch: randi(1, 9),
      y: 50,
    },
  ]

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i]
    char.tween = tween(char, "y", -20, 0.1, LINEAR)
      .relative()
      .delay(i * 0.1)
      .chain(tween(char, "y", 20, 0.5, BOUNCE_OUT).relative())
      .start()
  }
}

function tapped() {}

function draw() {
  cls(0)

  // draw the animated rect
  for (let i = 0; i < chars.length; i++) {
    text(50 + i * 20, chars[i].y, chars[i].ch)
  }
}
