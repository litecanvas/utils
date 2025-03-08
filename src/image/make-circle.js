import "litecanvas"

/**
 * Creates an image with the geometric shape of a circle with an optional border.
 *
 * @param {number} radius
 * @param {number} color
 * @param {object} [options]
 * @param {number} [options.borderWidth]
 * @param {number} [options.borderColor]
 * @param {LitecanvasInstance} [options.engine]
 * @returns {OffscreenCanvas} the shape image
 */
export default (
  radius,
  color,
  { borderWidth = 0, borderColor = 0, engine = globalThis } = {}
) => {
  const imageSize = radius * 2 + borderWidth
  return engine.paint(imageSize, imageSize, () => {
    engine.circfill(imageSize / 2, imageSize / 2, radius, color)
    if (borderWidth > 0) {
      engine.linewidth(borderWidth)
      engine.stroke(borderColor)
    }
  })
}
