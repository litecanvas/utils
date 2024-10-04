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
    y: CENTERY,
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

Starts the animation

Syntax: `.start(engine?: LitecanvasInstance): TweenController`

```js
// if your litecanvas has config.global = false
// you need to pass the engine instance to all animations
const engine = litecanvas({
    global: false
})

function init () {
    engine.tween(...).start(engine)
}
```

```js
// otherwhise, just call `start()` without arguments
const engine = litecanvas({
  // global: true // default value
})

function init () {
    // just call start
    engine.tween(...).start()
}
```

### TweenController#onEnd()

Enqueues a callback to be executed when the animation finishes.

Syntax: `.onEnd(callback?: (object:any) => void): void`

```js
// lets imagine a animation
let anim = tween(...)

// print in console when that tween finishes
anim.onEnd(() => {
    console.log('FINISHED')
})
```

### TweenController#stop()

Stops the animation.

Syntax: `.stop(complete?: boolean): void`

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

### TweenController#progress

Returns the percentage of the animation's progress, a number between `0.0` and `1.0`. Where `0` represents 0% and `1` represents 100%.

### Easing Functions

We provide few easing functions:

- `LINEAR` (the default)
- `BOUNCE_IN`
- `BOUNCE_OUT`
- `BOUNCE_IN_OUT`
- `EASE_IN`
- `EASE_OUT`
- `EASE_IN_OUT`
- `ELASTIC_IN`
- `ELASTIC_OUT`
- `ELASTIC_IN_OUT`
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
    y: CENTERY,
  }

  tween(pos, "x", 250, 2, BOUNCE_OUT).start()
}

function draw() {
  cls(0)
  rectfill(pos.x, pos.y, 50, 50, 3)
}
```

[See all Easing Functions in action](https://litecanvas.js.org?c=eJylVN9v2jAQfs9fceuTs2YpbN0LEpMYYwOtAmml2sM0TSY5wJvroNhpQVP%2F951jOxCg28Mkgu63v7vv7MoIqdOVLBZcsjiKskJpA8i1UCsNffgdAdxMpqPBl4Sk0eB29GMybcTZ3fzA3Kg3g9v5ZBgCvXbiDJb3s7vpMJT1yrGrMQyGn0OkFdtmpz61mpjye6Q%2BZoufmJn0F%2B40893FrbiPlcqMKNQ%2B9oHLCg%2BiJYbYYVWWqAyFdpqJkSKFwYyrB66ZHdujyM26B286HQuRV6bQGZfYgyWXGgknjXsZThVKGBbX4y7q4%2F3sKVGJe25jeqAqKZPauO1Bx0k7Lz1F9KcNL23mA2as2%2BnEZEKVe8PXyYf5GF4BORIYjyafxnOnxTY1r0ru%2B%2B%2FC1RVka65WCGYtNE10D7Ta5Nwgy40DK5bAHOC0ARpDiaYqVdQ0k26pbA0u3e6NTQI5zSOiYnVHzuu6u9heOIHaSLdODEi9o8XetxZB3ykiTutzGcbRmZPTQo1Uzmjy%2FXd%2B3mfA2bnbER%2BW2DUd7cj4HPzdAfzdf8I%2FZCEv%2BSPbM%2FDibxRkUrN6FaRQWC8lu647IZZtHeIY%2FeZwWharEVybKMqMedaS0GxCC53A2zj4HTG%2BweA7Ku5gYe5n41OXQsqwO1QhzDWB1ydFOGzKYlWi1rDgJX3aFlNgS5WUVZeiLPq5LX95ynSokMD1OYzKvhPFEjJ%2Ftx0TECZuOcatsYd06du%2FLUeUtWkyfLPB3BPVCry89NQdvSj9%2FtFKpBLVyqxjv52nD5C9%2Bs%2Fdw%2FMbTStVbFj8r22Pnv4AeWDaqw%3D%3D)
