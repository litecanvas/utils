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

// create a sprite image
mySprite = paint(3, 3, ["303", "030", "303"], { scale: 10 })

function init() {
  // create a actor
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
player.pos.x = 200
```

## Actor#x / Actor#y

Set or get the actor position X or Y

```js
player.x = 100
player.y = 200
```

## Actor#scale

Set or get the actor scale/size

```js
// twice bigger
player.scale.x = 2
player.scale.y = 2
```

## Actor#anchor

Set or get the actor anchor (origin). By default, the anchor is a vector `(0, 0)` (meaning anchor Top Left).

```js
// position the sprite based on their center
player.anchor.x = 0.5
player.anchor.y = 0.5
```

```js
// alternatively
import { ANCHOR_CENTER } from "@litecanvas/utils"

player.anchor = ANCHOR_CENTER
```

> Note:
> You can import and use the following constants to help you choose an actor anchor: , `ANCHOR_TOP_LEFT` (default), `ANCHOR_TOP_RIGHT`, `ANCHOR_BOT_LEFT`, `ANCHOR_BOT_RIGHT` or `ANCHOR_CENTER`.

## Actor#angle

Set or get the actor angle (in radians).

```js
player.angle = HALF_PI / 2 // 45 degrees

// or use the litecanvas' `deg2rad()` helper
player.angle = deg2rad(45)
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

> The actor sprite must be a `Image`, `HTMLCanvas` or `OffscreenCanvas`.
>
> Remember, you can create a image using the litecanvas' `paint()` built-in helper or [load a image](https://github.com/litecanvas/plugin-asset-loader?tab=readme-ov-file#loading-images) with plugins.
