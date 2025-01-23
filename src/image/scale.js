import "litecanvas"

/**
 * Increases or decreases a image size.
 *
 * @param {HTMLImageElement|HTMLCanvasElement|OffscreenCanvas} img
 * @param {number} factor
 * @param {LitecanvasInstance} [engine]
 */
export default (img, factor, pixelart = true, engine = globalThis) => {
  return engine.paint(img.width * factor, img.height * factor, (ctx) => {
    engine.push()
    ctx.imageSmoothingEnabled = !pixelart
    engine.scale(factor)
    engine.image(0, 0, img)
    engine.pop()
  })
}
