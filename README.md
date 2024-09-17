# Litecanvas Utilities

Small collection of tools for developing games with [Litecanvas](https://github.com/litecanvas/game-engine).

## Install

### NPM package

```
npm i @litecanvas/utils
```

```js
// import everything
import * as utils from "@litecanvas/utils"

const pos = utils.vec(0, 0)
```

```js
// or import just what you want
import { vec } from "@litecanvas/utils"

const pos = vec(0, 0)
```

### CDN

Download from https://unpkg.com/@litecanvas/utils/dist and load in a `<script>` tag in your HTML.

```js
// now the "utils" namespace is created
const pos = utils.vec(0, 0)
```

```js
// also, you can  call this once to
// expose the components globally
utils.global()

// now the namescape is not required
const pos = vec(0, 0)
```

## Components

- **Camera**: Move-, zoom- and rotatable camera with shake. [Usage & Docs](https://github.com/litecanvas/utils/tree/main/src/camera)
- **Vector**: Modular 2D vector. [Usage & Docs](https://github.com/litecanvas/utils/tree/main/src/vector)
- **Actor**: class to represent game entities. [Usage & Docs](https://github.com/litecanvas/utils/tree/main/src/actor)
- **Grid**: class to handle retangular grid areas. [Usage & Docs](https://github.com/litecanvas/utils/tree/main/src/grid)
- **Collision** utilities. [Usage & Docs](https://github.com/litecanvas/utils/tree/main/src/collision)
- And [some math utilities](https://github.com/litecanvas/utils/tree/main/src/math)
