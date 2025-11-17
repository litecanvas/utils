document.querySelector("main").innerHTML = `
  <style>
    [data-amount] {
      display: inline-block;
      padding: 0 0.25rem;
    }
    p {
      margin: 0;
      margin-bottom: 0.5rem;
    }
  </style>
  <p>
    <strong>Amount:</strong>
    <a data-amount="100">100</a>
    <a href="#" data-amount="1000">1k</a>
    <a href="#" data-amount="2000">2k</a>
    <a href="#" data-amount="4000">4k</a>
    <a href="#" data-amount="8000">8k</a>
    <a href="#" data-amount="16000">16k</a>
    <a href="#" data-amount="32000">32k</a>
  </p>
  <div style="position: relative">
    <canvas id="canvas"></canvas>
  </div>`

const links = document.querySelectorAll("a[data-amount]")
for (const link of links) {
  link.onclick = () => {
    links.forEach((el) => {
      el.href = "#"
    })
    reset(~~link.dataset.amount)
    link.removeAttribute("href")
  }
}

let url = new URL(location),
  state = {
    count: 100,
  }

utils.global()
litecanvas({
  canvas: "#canvas",
  width: innerWidth,
  height: innerHeight * 0.6,
})

state.sprite = paint(
  8,
  8,
  () =>
    spr(
      0,
      0,
      `
      .000000.
      05555550
      05055050
      05555550
      05055050
      05000050
      05555550
      .000000.
      `
    ),
  {
    scale: 4,
  }
)
state.spriteSize = state.sprite.width

use(pluginFrameRateMeter)

function init() {
  // Particle creation
  const particles = new Array(state.count)
  const dir = [1, -1]
  for (let i = 0; i < state.count; i++) {
    const x = rand() * W - state.spriteSize
    const y = rand() * H - state.spriteSize
    const [dx, dy] = [
      rand(1, 3) * dir[randi(0, 1)],
      rand(1, 3) * dir[randi(0, 1)],
    ]
    particles[i] = new Actor(state.sprite, vec(x, y))
    particles[i].vel = vec(dx, dy)
  }

  state.particles = particles
}

function reset(count) {
  pause()
  state.count = count
  init()
  resume()
}

function update() {
  const particles = state.particles
  for (let i = 0; i < state.count; i++) {
    const r = particles[i]

    r.x -= r.vel.x
    r.y -= r.vel.y

    if (r.x < 0) {
      r.x = 0
      r.vel.x *= -1
    } else if (r.y < 0) {
      r.y = 0
      r.vel.y *= -1
    }

    if (r.x + state.spriteSize > W) {
      r.x = W - state.spriteSize
      r.vel.x *= -1
    } else if (r.y + state.spriteSize > H) {
      r.y = H - state.spriteSize
      r.vel.y *= -1
    }
  }
}

function draw() {
  // Clear the canvas
  cls(3)

  // Particle animation
  const particles = state.particles
  for (let i = 0; i < state.count; i++) {
    particles[i].draw()
  }
}
