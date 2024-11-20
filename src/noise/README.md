# Grid utils

**CDN**: https://unpkg.com/@litecanvas/utils/dist/grid.js

## Usage

Lets build an arena with [ASCII graphics](https://en.wikipedia.org/wiki/ASCII_art) like in classic roguelikes.

```js
import { Grid } from "@litecanvas/utils"

// make a grid 7x7
let grid = new Grid(7, 7)

// fill the entire grid with "."
grid.fill(".")

// put a '@' in the middle
grid.set(grid.width / 2, grid.height / 2, "@")

// loop over the grid and put "#" around
for (let [x, y, cellValue] of grid) {
  if (x === 0 || y === 0 || x === grid.width - 1 || y === grid.height - 1) {
    grid.set(x, y, "#")
  }
})

document.body.innerHTML = "<pre>" + grid.toString() + "</pre>"
```

The result:

```
# # # # # # #
# . . . . . #
# . . . . . #
# . . @ . . #
# . . . . . #
# . . . . . #
# # # # # # #
```

### .forEach()

Instead of a `for-of` loop, you can use the `.forEach()` method:

```js
grid.forEach((x, y, cellValue, grid) => {
  if (x === 0 || y === 0 || x === grid.width - 1 || y === grid.height - 1) {
    grid.set(x, y, "#")
  }
  // optional: you can return `false` to break/stop that loop
  // return false
})
```

## Typed Grid

You can create a grid structure thats uses a [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays) rather than a "normal" array.

```js
import { TypedGrid } from "@litecanvas/utils"

// by default, uses Uint8Array
let u8grid = new TypedGrid(5, 5)

// or specify your typed array
let i16grid = new TypedGrid(5, 5, Int16Array)
```

> Note: `TypedGrid` inherits all methods from `Grid`.
