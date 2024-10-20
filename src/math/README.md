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

[See in playground](https://litecanvas.js.org?c=eJwlyrEKwjAUheE9T3HGBKME0UVwEM0mIuqgY4ytBC6JNGlLKXl3bVwOP4evTY7i4k3haYgLRi5V1vjORD4ygEL4bDDi1ZgeWbIsGKtbb5MLvpxcYHKWIldiiuBjwoAtetNVfL5USqKMPu7OV30oyDW2dkR8r083fblL%2FOOBGQaJ9U%2BvBMtfqxAsyg%3D%3D)

## advance

Move a vector (position) using another vectors: velocity (required) and acceleration (optional).

> Note: This function changes the position and velocity vectors.

Syntax: `advance(position: Vector, velocity: Vector, acceleration?: Vector, delta?: number): void`

```js
import litecanvas from "litecanvas"
import { vec, advance } from "@litecanvas/utils"

litecanvas()

function init() {
  pos = vec(0, CENTERY)
  vel = vec(0, 0)
  acc = vec(100, 0)
}

function update(dt) {
  advance(pos, vel, acc, dt)
  if (pos.x > WIDTH) {
    pos.x = 0
  }
}

function draw() {
  cls(0)
  circ(pos.x, pos.y, 48, 4)
}
```

[See in playground](https://litecanvas.js.org?c=eJxVjjELwjAQhff%2BihtTCKWCg0tdtKCLgxTEMV5SCYS0NGlUpP%2FdS1NQhxvue7yPN3ptXHE33U0YlmdGe4XCBuHoydrRotedBW21Zzm8M4C%2Bc1BBUMhKDrv61NTna048KPPlZSQCcSGrMrHpRzn2UnjFpE9aIYOwqBjpeXTxWOdAMYW6hRgUT9jC5bhvDqkzjyFYQUnf9KeXg3gsi9E4Ng9CPWDy8Ln54rDe0NGwDwbOS1Q%3D)

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

## mod

Math modulus (always returns a positive number).

```js
import { mod } from "@litecanvas/utils"

mod(17, 5) // => 2
mod(-17, 5) // => 3
```
