# Grid utils

**CDN**: https://unpkg.com/@litecanvas/utils/dist/grid.js

## Usage

Lets build an arena with [ASCII graphics](https://en.wikipedia.org/wiki/ASCII_art) like in classic roguelikes.

```js
import { Grid } from "@litecanvas/utils"

// make a grid 13x13
let grid = new Grid(13, 13)

// fill the entire grid with "."
grid.fill(".")

// put a '@' in the middle
grid.set(grid.width / 2, grid.height / 2, "@")

// put '#' around the grid
grid.forEach((x, y, cellValue) => {
  if (x === 0 || y === 0 || x === grid.width - 1 || y === grid.height - 1) {
    grid.set(x, y, "#")
  }
})

document.body.innerHTML = "<pre>" + grid.toString() + "</pre>"
```

The result:

```
# # # # # # # # # # # # #
# . . . . . . . . . . . #
# . . . . . . . . . . . #
# . . . . . . . . . . . #
# . . . . . . . . . . . #
# . . . . . . . . . . . #
# . . . . . @ . . . . . #
# . . . . . . . . . . . #
# . . . . . . . . . . . #
# . . . . . . . . . . . #
# . . . . . . . . . . . #
# . . . . . . . . . . . #
# # # # # # # # # # # # #
```

## Typed Grid

You can create a grid structure thats uses a [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays) rather than a "normal" array.

```
import { TypedGrid } from "@litecanvas/utils"

let u8grid = new TypedGrid(5, 5) // by default, uses Uint8Array

let i16grid = new TypedGrid(5, 5, Int16Array) // or specify your typed array
```

> Note: `TypedGrid` inherits all methods from `Grid`.
