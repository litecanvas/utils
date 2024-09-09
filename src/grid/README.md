# Grid

**CDN**: https://unpkg.com/@litecanvas/utils/dist/grid.js

## Usage

Lets build an arena with [ASCII graphics](https://en.wikipedia.org/wiki/ASCII_art) like in classic roguelikes.

```js
// make a grid 13x13
let grid = new utils.Grid(13, 13)

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
