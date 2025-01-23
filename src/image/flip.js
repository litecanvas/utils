import "litecanvas"

/**
 * Flip a image with a color and optional opacity.
 *
 * @param {HTMLImageElement|HTMLCanvasElement|OffscreenCanvas} img
 * @param {boolean} [horizontal=true]
 * @param {boolean} [vertically=false]
 * @param {LitecanvasInstance} [engine]
 */
export default (
  img,
  horizontal = true,
  vertically = false,
  engine = globalThis
) => {
  return engine.paint(img.width, img.height, (ctx) => {
    engine.push()
    engine.scale(horizontal ? -1 : 1, vertically ? -1 : 1)
    engine.image(horizontal ? -img.width : 0, vertically ? -img.height : 0, img)
    engine.pop()
  })
}
