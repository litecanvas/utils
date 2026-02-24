# Litecanvas Utilities

Small collection of tools for developing games with [Litecanvas](https://github.com/litecanvas/game-engine).

<!-- prettier-ignore -->
> [!TIP]
> **All modules of this package are automatically loaded on Litecanvas [playground](https://litecanvas.js.org/).**

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

### Global/CDN

Download or load from a CDN:

- jsDelivr: https://cdn.jsdelivr.net/npm/@litecanvas/utils
- Unpkg: https://unpkg.com/@litecanvas/utils

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
- **Tween** to create animations. [Usage & Docs](https://github.com/litecanvas/utils/tree/main/src/tween)
- **Image** to manipulate images. [Usage & Docs](https://github.com/litecanvas/utils/tree/main/src/image)
- **Collection** to manipulate lists (arrays). [Usage & Docs](https://github.com/litecanvas/utils/tree/main/src/collection)
- And some [math utilities](https://github.com/litecanvas/utils/tree/main/src/math)...
