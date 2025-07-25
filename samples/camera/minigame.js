utils.global()

const TILE_SIZE = 8 // 8x8
const MAP_SIZE = 128 // 128x128

let camera, player, sprites, map

const engine = litecanvas({
  width: 64,
  height: 64,
  pixelart: true,
})

function init() {
  sprites = {
    player: paint(8, 8, [
      "........",
      "..0000..",
      "..0707.",
      "..0000..",
      "..0000..",
      "..0000..",
      "..0000..",
      "..0..0..",
    ]),

    grass: paint(8, 8, [
      "bbbbbbbb",
      "b9b9b9b9",
      "bb9bbb9b",
      "bbbbbbbb",
      "9b9b9b9b",
      "b9bbb9bb",
      "bbbbbbbb",
      "bbbbbbbb",
    ]),
  }

  camera = new Camera(engine)
  player = new Actor(sprites.player)

  map = new Grid(MAP_SIZE / TILE_SIZE, MAP_SIZE / TILE_SIZE)
  // add grass to map (20% chance)
  map.forEach((x, y) => {
    map.set(x, y, rand() < 0.2 ? 1 : 0)
  })
}

// tap to move the player
function tapped(tapx, tapy) {
  distx = abs(tapx - W / 2)
  disty = abs(tapy - H / 2)

  if (distx > disty) {
    dirx = sign(tapx - W / 2)
    player.x += TILE_SIZE * dirx
  } else {
    diry = sign(tapy - H / 2)
    player.y += TILE_SIZE * diry
  }

  player.x = clamp(player.x, 0, MAP_SIZE - TILE_SIZE)
  player.y = clamp(player.y, 0, MAP_SIZE - TILE_SIZE)
}

function update() {
  // center the camera in the player position
  camera.lookAt(player.x, player.y)
}

function draw() {
  cls(0)

  camera.start(true)

  rectfill(0, 0, MAP_SIZE, MAP_SIZE, 11)

  map.forEach((x, y, value) => {
    if (1 === value) image(x * TILE_SIZE, y * TILE_SIZE, sprites.grass)
  })

  player.draw()

  camera.end()
}
