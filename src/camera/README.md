# Camera

## Usage

```js
import { litecanvas } from "litecanvas"
import Camera from "@litecanvas/util/camera"

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
