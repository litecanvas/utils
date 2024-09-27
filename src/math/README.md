# Math utilities

**CDN**: https://unpkg.com/@litecanvas/utils/dist/math.js

## diff

Calculates the positive distance/difference of two given numbers.

Syntax: `diff(a: number, b: number): number`

```js
import litecanvas from "litecanvas"
import { diff } from "@litecanvas/utils"

litecanvas({
  loop: { init },
})

function init() {
  console.log(diff(10, 5)) // outputs 5
  console.log(diff(-10, 5)) // outputs 15
}
```

## fract

Returns the fractional part of a number.

Syntax: `fract(value: number): number`

```js
import litecanvas from "litecanvas"
import { fract } from "@litecanvas/utils"

litecanvas({
  loop: { init },
})

function init() {
  console.log(fract(5.9)) // outputs 0.9
}
```

## wave

Interpolate between 2 values using a periodic function (default: `Math.sin`).

Syntax: `wave(lower: number, higher: number, time: number, fn = Math.sin): number`

```js
import litecanvas from "litecanvas"
import { wave } from "@litecanvas/utils"

litecanvas({
  loop: { draw },
})

function draw() {
  cls(0)
  const y = wave(-200, 200, ELAPSED)
  circfill(CENTERX, CENTERY + y, 50, 4)
}
```

## range

Returns a sequence of numbers from `0` to `size - 1`.

Syntax: `range(size: number): number[]`

```js
import { range } from "@litecanvas/utils"

// prints 0 1 2 3 4
for (let i of range(5)) {
  console.log(i)
}
```
