utils.global()

// make a grid 7x7
let grid = new TypedGrid(7, 7)

// put a "7" in the middle
grid.set(grid.width / 2, grid.height / 2, 7)

// put '#' around the grid
grid.forEach((x, y) => {
  if (x === 0 || y === 0 || x === grid.width - 1 || y === grid.height - 1) {
    grid.set(x, y, 1)
  }
})

document.body.innerHTML = "<pre>" + grid.toString() + "</pre>"
