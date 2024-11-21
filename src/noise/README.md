# Noise utils

**CDN**: https://unpkg.com/@litecanvas/utils/dist/noise.js

## Usage

Generate procedural Perlin noise to use in your projects, such as terrain generation, animations, or particle effects.

```js
import { Noise } from "@litecanvas/utils"

// Create a new Noise instance
const noise = new Noise()

// Generate a noise value at 2D coordinates (x, y)
const value = noise.noise(0.5, 0.8)
console.log("Noise value at (0.5, 0.8):", value)

// Generate a noise value at 3D coordinates (x, y, z)
const value3D = noise.noise(1.2, 0.4, 0.9)
console.log("Noise value at (1.2, 0.4, 0.9):", value3D)
```

### Adjusting Noise Detail

You can configure the number of octaves and amplitude falloff to control the detail of the noise.

```js
// Set 8 octaves and a 60% amplitude falloff
noise.noiseDetail(8, 0.6)

// Generate a new noise value with the updated settings
const detailedValue = noise.noise(0.3, 0.7)
console.log("Detailed noise value:", detailedValue)
```

## Seeding Noise

Ensure deterministic results by setting a seed for the noise generator.

```js
// Set a specific seed
noise.noiseSeed(42)

// Generate consistent noise values
const seededValue = noise.noise(0.1, 0.1)
console.log("Seeded noise value at (0.1, 0.1):", seededValue)
```

## 2D Noise Grid

Create a grid of Perlin noise values and display them as ASCII art.

```js
const noise = new utils.Noise()
noise.noiseDetail(4, 0.5)

// Generate a 8 by 8 noise grid
const gridSize = 8
let grid = ""

for (let y = 0; y < gridSize; y++) {
  for (let x = 0; x < gridSize; x++) {
    const value = noise.noise(x / gridSize, y / gridSize)
    grid += value > 0.5 ? "#" : "."
  }
  grid += "\n"
}

console.log(grid)
```
