# Tween

You can animate object property using the `tween().`

**CDN**: https://unpkg.com/@litecanvas/utils/dist/tween.js

## tween

Animate a object property over time.

Syntax:

```ts
tween(
    object: any,
    prop: string,
    toValue: number,
    duration?: number, // default: 1
    easing?: (n: number) => number // default: LINEAR (see below)
): TweenController
```

```js
// basic example
// move the rect position x from 100 to 250 over 2 seconds
import litecanvas from "litecanvas"
import { tween } from "@litecanvas/utils"

let object

litecanvas()

function init() {
  pos = {
    x: 100,
    y: H / 2,
  }

  // create the animation
  const animation = tween(pos, "x", 250, 2)

  // start the animation
  animation.start()

  // or just
  // tween(...).start()
}

function draw() {
  cls(0)
  // draw the animated rect
  rectfill(pos.x, pos.y, 50, 50, 3)
}
```

## TweenController

### TweenController#start()

Starts the animation.

Syntax: `.start(engine?: LitecanvasInstance): this`

```js
// if your litecanvas has config.global = false
// you need to pass the engine instance to all animations
const engine = litecanvas({
    global: false
})

function init () {
    tween(...).start(engine)
}
```

```js
// otherwhise, just call `start()` without arguments
const engine = litecanvas({
  // global: true // default value
})

function init () {
    // just call start
    tween(...).start()
}
```

### TweenController#relative()

If enabled (`flag = true`) the tween we animate from a value to another relative value.

Syntax: `.relative(flag?: boolean = true): this`

```js
const obj = { x: 0 }

// DEFAULT
// this tween animates the obj.x to 100
tween(obj, "x", 100)

// this tween animates the obj.x value to -100
tween(obj, "x", -100)

// RELATIVE
// this tween animates the obj.x increasing +100
tween(obj, "x", 100).relative()

// this tween animates the obj.x decreasing -100
tween(obj, "x", -100).relative()
```

### TweenController#chain()

Make another tween start right after this tween ends.

Syntax: `.relative(another: TweenController): this`

```js
const obj = { x: 0, angle: 0 }

const moveRight = tween(obj, "x", 100, 1).relative()
const moveLeft = tween(obj, "x", -100, 1).relative()

// move 100px to right, move 100px to left and rotate
moveRight.chain(moveLeft)
moveRight.start()
```

### TweenController#delay()

Wait a amount of seconds before starts the animation.

Syntax: `.delay(seconds: number): this`

```js
tween(...)
  .delay(3)
  .start() // wait 3 seconds before starts
```

### TweenController#onEnd()

Enqueues a callback to be executed when the animation finishes.

Syntax: `.onEnd(callback?: (object:any) => void): this`

```js
// lets imagine a animation
let anim = tween(...)

// print in console when that tween finishes
anim.onEnd(() => {
    console.log('FINISHED')
})
```

### TweenController#restart()

Stops and start again the animation.

Syntax: `.restart(engine?: LitecanvasInstance, completed: boolean = false): this`

### TweenController#stop()

Stops the animation.

Syntax: `.stop(completed: boolean = true): this`

```js
// lets imagine a animation with 5 seconds of duration
let anim = tween(...)

// call `stop()` to interrumpt that animation
// and call all "onEnd" callbacks
anim.stop()

// or
// call `stop()` to interrumpt that animation
// and NOT call the "onEnd" callbacks
anim.stop(false)
```

### TweenController#reset()

Stops the animation and remove all `.onEnd()` registered callbacks.

Syntax: `.reset(): this`

### TweenController#progress

Returns the percentage of the animation's progress, a number between `0.0` and `1.0`. Where `0` represents 0% and `1` represents 100%.

### Easing Functions

We provide few easing functions:

- `LINEAR` (the default)
- `EASE_IN`
- `EASE_OUT`
- `EASE_IN_OUT`
- `ELASTIC_IN`
- `ELASTIC_OUT`
- `ELASTIC_IN_OUT`
- `BOUNCE_IN`
- `BOUNCE_OUT`
- `BOUNCE_IN_OUT`
- `BACK_IN`
- `BACK_OUT`
- `BACK_IN_OUT`

You should use the `tween()`'s fifth argument to choose a easing function.

```js
import litecanvas from "litecanvas"
import { tween, BOUNCE_OUT } from "@litecanvas/utils"

let object

litecanvas()

function init() {
  pos = {
    x: 100,
    y: H / 2,
  }

  tween(pos, "x", 250, 2, BOUNCE_OUT).start()
}

function draw() {
  cls(0)
  rectfill(pos.x, pos.y, 50, 50, 3)
}
```

[See all Easing Functions in action](https://litecanvas.js.org?c=eJylVEtvGjEQvvMrJpy8zXZD2vSCRCVKaYMaEakh6qGqKrM24Nax0a43sIry3zt%2BLSyQ9lCJRfP2fPONXRkhy2wp9ZxKknQ6uValAU5LoZYlDOCpA3AzmY6HX1OUxsO78c%2FJtBFv72d75ka9Gd7NJqMYGLQjZ7R8uL2fjmLZoBy6GsNw9CVGWrFt9upzC8SUPnDEcTv%2FxXOT%2FeZ1SQK6pBX3qVK5EVrtYh%2BprPhetOQxdlQVBVcGQ3vNxFCRwvCcqkdaEju2jWBm1Ye3vZ5tkVZGlzmVvA8LKkuOfeK4F%2FFUoYQhiRs3qwoaOrlEFX%2FaNRTYwFJKPLiIPqhKytQZt33oeakO0nMH%2F0pDC5v5yHNy2eslaOKKBcO3ycfZNbwGdKRwPZ58vp55LbGpTOfVA8LM5prVGV2vMXG0EpIRd0zjzgtODZ%2FxrZlqxkl3RtdgNOQrqpYczIrD2E0N4ojPuraNBIna4a%2FWDIsQZvwMxAKIR501aBMouKkK1Wkmkm0RiEOYbXfGJgGdZsO58v16rx9Rd9v1AkLKtl6MYw%2BO1lJ8b%2FH%2Bw3afuXMJTzonTs60GitGkNDB%2B0DaieYseZan%2FRJ1g6hG40vt13vt1%2F%2FZ%2Fj4LrKAbsmPg7G8U5LIkbp%2BkUNztOrlySC4uXB3HvF8%2FihtnNWzXJooiJ4G1NIJN8Z6k8C6Jfk9MABh9B8V9W5yF2YTUhZAy7g5WiHNN4c1REQrrQi8LXpYwpwV%2BpS2mwJYqMMuVwiz8%2Bavy6pjpWCGFq1M9Kvv86AXk4cnwTECcuOUYL4495BK%2F3ZN1QFmbJmMvIwtEtQLPzwN1Bw%2FVYHCwEpnkamlWSdjO43fNvh8v3cPTG40rpdck%2Bde2I5I%2FARL3JQ%3D%3D)

## Useful links

- https://en.wikipedia.org/wiki/Linear_interpolation
- https://gamedev.net/tutorials/programming/general-and-gameplay-programming/a-brief-introduction-to-lerp-r4954/
- https://easings.net/
