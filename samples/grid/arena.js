utils.global()

// make a grid 7x7
let grid = new Grid(7, 7)

// fill the entire grid with "."
grid.fill(".")

// put a '@' in the middle
grid.set(grid.width / 2, grid.height / 2, "@")

// put '#' around the grid
grid.forEach((x, y) => {
  if (x === 0 || y === 0 || x === grid.width - 1 || y === grid.height - 1) {
    grid.set(x, y, "#")
  }
})

document.body.innerHTML = "<pre>" + grid.toString() + "</pre>"
