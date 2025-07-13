let original, flippedX, flippedY

utils.global()
litecanvas()

function init() {
  original = paint(
    3,
    3,
    // prettier-ignore
    [
            "444",
            ".4.",
            "6.5",
          ],
    { scale: 20 }
  )

  flippedX = flipImage(original, true, false)
  flippedY = flipImage(original, false, true)
}

function draw() {
  cls(0)
  image(0, 0, original)
  image(0, 70, flippedX)
  image(0, 140, flippedY)
}
