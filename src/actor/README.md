# Actor

**CDN**: https://unpkg.com/@litecanvas/utils/dist/actor.js

## Usage

```js
import litecanvas from "@litecanvas"
import { Actor } from "@litecanvas/utils"

let player, mySprite

litecanvas({
  loop: { init, tapped, draw },
})

// lets create a image to our actor
mySprite = paint(3, 3, ["303", "030", "303"], { scale: 10 })

function init() {
  // create a actor and pass its image
  player = new Actor(mySprite)
}

function tapped(tapx, tapy) {
  // update the actor position
  player.x = tapx
  player.y = tapy
}

function draw() {
  cls(0)

  // draw the actor sprite
  player.draw()
}
```

## Actor#pos

Set or get the actor position vector

```js
player.pos.x = 100
player.pos.y = 200
```

> Note:
> The `player.pos` is a [Vector](https://github.com/litecanvas/utils/blob/main/src/vector/README.md) instance.

## Actor#x / Actor#y

Set or get the actor position X or Y

```js
player.x = 100
player.y = 200
```

## Actor#scale

Set or get the actor scale vector

```js
// twice bigger
player.scale.x = 2
player.scale.y = 2
```

## Actor#scaleBy(x, y = x)

```js
// multiplies the scale (y is optional)
player.scaleBy(3)

// same as
player.scale.x *= 3
player.scale.y *= 3
```

## Actor#scaleTo(x, y = x)

```js
// sets the scale (y is optional)
player.scaleTo(3)

// same as
player.scale.x = 3
player.scale.y = 3
```

## Actor#flipX

If `true` the actor sprite is flipped horizontally. Default is `false`.

## Actor#flipY

If `true` the actor sprite is flipped vertically. Default is `false`.

## Actor#anchor

Set or get the actor anchor (origin). By default, the anchor is a vector `(0, 0)` (meaning anchor Top Left).

```js
// example: actor position based on their center
player.anchor.x = 0.5
player.anchor.y = 0.5

// or...
import { ANCHOR_CENTER } from "@litecanvas/utils"
player.anchor = ANCHOR_CENTER
```

> Note:
> You can import and use the following constants to help you choose an actor anchor: , `ANCHOR_TOP_LEFT` (default), `ANCHOR_TOP_RIGHT`, `ANCHOR_BOT_LEFT`, `ANCHOR_BOT_RIGHT` or `ANCHOR_CENTER`.

## Actor#angle

Set or get the actor angle (in degrees).

```js
player.angle = 45
```

## Actor#opacity

Set or get the actor opacity (alpha).

```js
player.opacity = 0.5 // 50% transparent
```

## Actor#hidden

Set or get the actor hidden (`boolean`) state.

```js
player.hidden = true // hides the actor image
player.hidden = false // display the actor image
```

## Actor#width

Get (not set) the actor current width.

```js
console.log(player.width) // => 30

player.scale.x = 1.5

console.log(player.width) // => 45
```

## Actor#height

Get (not set) the actor current height.

```js
console.log(player.height) // => 30

player.scale.y = 2

console.log(player.height) // => 60
```

## Actor#sprite

Set or get the actor sprite image. Useful to make animations.

```js
player.sprite = anotherSprite
```

> The actor sprite must be a `Image`, `ImageBitmap`, `HTMLCanvasElement` or `OffscreenCanvas`.
>
> Remember, you can create images using the litecanvas' built-in `paint()` function or [loading a image](https://github.com/litecanvas/plugin-asset-loader?tab=readme-ov-file#loading-images).

## Actor#in(x, y, radius)

Check taps (clicks and touchs).

```js
function tapped(x, y) {
  const pointArea = 8 // default = 1
  if (player.in(x, y, pointArea)) {
    console.log("tap!")
  }
}
```

## Actor#col(other)

Check collision between actors

```js
const collided = player.col(anotherActor)
```
