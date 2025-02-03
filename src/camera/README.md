# Camera

**CDN**: https://unpkg.com/@litecanvas/utils/dist/camera.js

## Usage

```js
import { litecanvas } from "litecanvas"
import { Camera } from "@litecanvas/utils"

function init() {
  camera = new Camera()
}

function draw() {
  cls(0)

  camera.start()

  // draw your game objects here

  camera.end()

  // draw your UI here
}
```

## Properties

- `x` the camera position-X
- `y` the camera position-Y
- `ox` the camera offset-X
- `oy` the camera offset-Y
- `shaking` it's `true` when the camera is shaking
- `scale` the camera zoom
- `rotation` the camera rotation
- `width` the camera width
- `height` the camera height

## Methods

### start(clip: boolean = true)

Apply the camera transformations (move, zoom and rotate). You must call this method before draw anything inside of the camera.

### end()

Stop looking through the camera. You must call this method after draw anything inside of the camera.

### lookAt(x: number, y: number)

Sets the camera X and Y

```js
camera.lookAt(100, 100)
```

### move(x: number, y: number)

Moves the camera X and Y

```js
function update(dt) {
  // moves the camera 100 px/s to right
  camera.move(100 * dt, 0)
}
```

### zoomTo(factor: number)

Scales the camera view

```js
// makes anything on camera 3 times bigger
camera.zoomTo(3)
```

### zoom(value: number)

Increases the camera scale

```js
// increase the camera zoom over time
function update(dt) {
  camera.zoom(2 * dt)
}
```

### rotateTo(radians: number)

Sets the camera rotation

```js
// makes anything on camera 3 times bigger
camera.rotateTo(Math.PI)
```

### rotate(value: number)

Increases the camera rotation

```js
// increase the camera rotation over time
function update(dt) {
  camera.zoom(dt)
}
```

### shake(amplitude?: number = 1, duration?: number = 0.3)

Shakes the camera view

```js
// shake when a touch/click happens
function tapped() {
  camera.shake()
}
```

### unshake()

Makes the camera stop shaking immediately

### getWorldPoint(x: number, y: number, output?: {x: number, y: number}): {x: number, y: number}

This method is used to convert a camera point (X, Y) to world point.

```
// convert a mouse/touch to world position
function tapped(x, y) {
  const fixedTap = camera.getWorldPoint(x, y)
}
```

### getCameraPoint(x: number, y: number, output?: {x: number, y: number}): {x: number, y: number}

This method is used to convert a world point (X, Y) to camera point.

### getBounds(): number[]

Returns an array containing the position-X, position-Y, the width, and the height of the camera.
Useful to see if an object is visible on the screen.
