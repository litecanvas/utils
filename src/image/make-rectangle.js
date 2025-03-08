import "litecanvas"

/**
 * Creates an image with the geometric shape of a rectangle with an optional border.
 *
 * @param {number} width
 * @param {number} height
 * @param {number} color
 * @param {object} [options]
 * @param {number} [options.borderWidth]
 * @param {number} [options.borderColor]
 * @param {LitecanvasInstance} [options.engine]
 * @returns {OffscreenCanvas} the shape image
 */
export default (
  width,
  height,
  color,
  { borderWidth = 0, borderColor = 0, engine = globalThis } = {}
) => {
  const imageWidth = width + borderWidth * 2
  const imageHeight = height + borderWidth * 2

  return engine.paint(imageWidth, imageHeight, () => {
    engine.rectfill(
      borderWidth > 0 ? borderWidth : 0,
      borderWidth > 0 ? borderWidth : 0,
      width,
      height,
      color
    )
    if (borderWidth > 0) {
      engine.linewidth(borderWidth)
      engine.stroke(borderColor)
    }
  })
}
