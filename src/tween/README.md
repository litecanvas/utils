# Tween

**CDN**: https://unpkg.com/@litecanvas/utils/dist/tween.js

## Tween#make

```js
import litecanvas from "@litecanvas"
import { Tween } from "@litecanvas/utils"

let tween, obj
const engine = litecanvas({
  loop: { init, tapped, draw },
})

function init() {
  tween = new Tween(engine)
  obj = {
    x: 0,
    y: 0,
    size: 32,
    color: 3,
  }
}

function tapped(tapx, tapy) {
  // update obj.x to tapx over 1 second
  tween.make(obj, "x", tapx, 1)
  // update obj.y to tapy over 1 second
  tween.make(obj, "y", tapy, 1)
}

function draw() {
  cls(0)
  rectfill(obj.x, obj.y, obj.size, obj.size, obj.color)
}
```

The `make()` method returns a object with the folloing methods:

- `cancel(): void` to stops that tween.
- `then(callback: Function): void` to enqueues a callback to be executed when that tween finishes.

## Tween#queue

```js
import litecanvas from "@litecanvas"
import { Tween } from "@litecanvas/utils"

let tween, obj
const engine = litecanvas({
  loop: { init, draw },
})

function init() {
  tween = new Tween(engine)
  obj = { x: 0, y: 0, size: 32, color: 3 }

  const repeat = 3 // repeats 3 times
  tween.queue(
    [
      () => tween.make(obj, "x", CENTERX, 1),
      () => tween.make(obj, "y", CENTERY, 1),
      () => tween.make(obj, "x", 0, 1),
      () => tween.make(obj, "y", 0, 1),
    ],
    repeat // accepts true (repeat infinitely) or an positive number
  )

  // timescale affects the tweens
  // timescale(4)
}

function draw() {
  cls(0)
  rectfill(obj.x, obj.y, obj.size, obj.size, obj.color)
}
```
