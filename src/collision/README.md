# Collision utilities

**CDN**: https://unpkg.com/@litecanvas/utils/dist/collision.js

## colrect

Check a collision between two rectangles.

Syntax: `colrect(x1, y1, w1, h1, x2, y2, w2, h2): boolean`

## colcirc

Check a collision between two circles.

Syntax: `colcirc(x1, y1, r1, x2, y2, r2): boolean`

## colrectcirc

Check a collision between a rectangle and a circle.

Syntax: `colrectcirc(x1, y1, w1, h1, x2, y2, r2): boolean`

## intersection

Returns the resulting rectangle of the intersection between two rectangles.

Syntax: `intersection(x1, y1, w1, h1, x2, y2, w2, h2): number[]`

```js
import litecanvas from "litecanvas"
import { intersection, colrect } from "@litecanvas/utils"

litecanvas({
  loop: { init, draw },
})

function init() {
  // rect = [x, y, width, height]
  rect1 = [0, 0, 50, 50]
  rect2 = [25, 25, 80, 80]
}

function draw() {
  cls(0)
  rectfill(...rect1, 4) // draw the red rectangle
  rectfill(...rect2, 6) // draw the blue rectangle

  // check the collision
  if (colrect(...rect1, ...rect2)) {
    // intersection() returns an array with 4 numbers (x, y, width, height)
    const rect3 = intersection(...rect1, ...rect2)
    rectfill(...rect3, 5) // draw the yellow rectangle
  }
}
```

## resolverect

Syntax: `resolverect(x1, y1, w1, h1, x2, y2, w2, h2): { direction: string, x: number, y: number }`

> Note: possible values for `direction` is `"top"`, `"botton"`, `"left"`, `"right"` or `""` (empty string, if no collision).

```js
import litecanvas from "litecanvas"
import { resolverect, colrect } from "@litecanvas/utils"

litecanvas({
  loop: { init, draw },
})

function init() {
  // rect = [x, y, width, height]
  rect1 = [300, 170, 50, 50]
  rect2 = [300, 200, 80, 80]

  // check the collision
  if (colrect(...rect1, ...rect2)) {
    const { direction, x, y } = resolverect(...rect1, ...rect2)

    // which side of rect1 is colliding with rect2
    console.log(direction) // outputs "bottom"

    // fixes the position of rect1 to
    // no longer collides with rect2
    rect1[0] = x
    rect1[1] = y
  }
}

function draw() {
  cls(0)
  rectfill(...rect2, 6) // blue rectangle
  rectfill(...rect1, 4) // red rectangle
}
```
