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
  12,
  12,
  [
    "....4444....",
    "....4aa4....",
    "..004aa400..",
    "..02444420..",
    "777733335555",
    "766731135bb5",
    "766731135bb5",
    "777733335555",
    "..02999920..",
    "..00988900..",
    "....9889....",
    "....9999....",
  ],
  {
    scale: 3,
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
  cls(0)

  // Particle animation
  const particles = state.particles
  for (let i = 0; i < state.count; i++) {
    particles[i].draw()
  }
}
