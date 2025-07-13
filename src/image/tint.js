/**
 * Tint a image with a color and optional opacity.
 *
 * @param {CanvasImageSource} img
 * @param {number} color
 * @param {number} [opacity=1]
 * @param {LitecanvasInstance} [engine]
 */
export default (img, color, opacity = 1, engine = globalThis) => {
  return engine.paint(img.width, img.height, (ctx) => {
    engine.push()
    engine.alpha(opacity)
    engine.rectfill(0, 0, img.width, img.height, color)
    ctx.globalCompositeOperation = "destination-atop"
    engine.alpha(1)
    engine.image(0, 0, img)
    engine.pop()
  })
}
