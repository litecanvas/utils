# Vector 2D

A class to describe a two-dimensional vector.

## vec

Creates a vector.

Syntax: `vec(x: number = 0, y: number = 0): Vector`

```js
import { vec, Vector } from "@litecanvas/utils/vector"

/** @type {Vector} */
const position = vec(50, 25)

console.log(position.x) // outputs 50
console.log(position.y) // outputs 25
```

## veccopy

Creates a copy/clone of a given vector.

Syntax: `veccopy(v: Vector): Vector`

```js
import { vec, veccopy } from "@litecanvas/utils/vector"

const a = vec(1, 1)
const b = a // `b`` is a references of `a`
const c = veccopy(a) // `c` is a copy of `a`

c.x = 99 // this changes only `c`
b.x = 0 // this changes `a` and `b`

console.log(a) // outputs "Vector (0, 1)
console.log(b) // outputs "Vector (0, 1)
console.log(c) // outputs "Vector (99, 1)
```

## vecset

Assigns new values to a vector.

Syntax: `vecset(v: Vector, x: number, y: number = x): void`

```js
import { vec, vecset } from "@litecanvas/utils/vector"

const a = vec(0, 0)
vecset(a, 10, 20)

console.log(a.x) // outputs 10
console.log(a.y) // outputs 20
```

## vecadd

Add values to a vector.

Syntax: `vecadd(v: Vector, x: number, y: number = x): void`

```js
import { vec, vecadd } from "@litecanvas/utils/vector"

const a = vec(10, 10)
vecadd(a, 5, 20)

console.log(a.x) // outputs 15
console.log(a.y) // outputs 30
```

## vecsub

Subtracts values from to a vector.

Syntax: `vecsub(v: Vector, x: number, y: number = x): void`

## vecmult

Multiplies (scale) a vector.

Syntax: `vecmult(v: Vector, x: number, y: number = x): void`

## vecdiv

Divides a vector.

Syntax: `vecdiv(v: Vector, x: number, y: number = x): void`

## vecrot

Rotates a vector by an angle (in radians) without changing its magnitude.

Syntax: `vecrot(v: Vector, radians: number): void`

## vecmag

Returns the magnitude (length) of the vector.

Syntax: `vecmag(v: Vector): number`

## vecmag2

Returns the magnitude (length) of the vector squared.

Syntax: `vecmag2(v: Vector): number`

## vecnorm

Scales the values of a vector so that its magnitude is 1.

Syntax: `vecnorm(v: Vector): void`

## veclimit

Limits (clamp) a vector's magnitude to a maximum value.

Syntax: `veclimit(v: Vector, max: number): void`

## vecdist

Returns the distance between two points represented by vectors.

Syntax: `vecdist(a: Vector, b: Vector): number`

## vecdist2

Returns the distance between two points represented by vectors squared.

Syntax: `vecdist2(a: Vector, b: Vector): number`

## vecdir

Calculates the angle a vector makes with the positive x-axis.

Syntax: `vecdir(v: Vector): number`

## vecdot

Calculates the dot product of two vectors.

Syntax: `vecdot(a: Vector, b: Vector): number`

## veccross

Calculates the dot product of two vectors.

Syntax: `veccross(a: Vector, b: Vector): number`

## veclerp

Calculates new vector values that are proportionally the same distance between two vectors.
The `atm` parameter is the amount to interpolate between the old vector and the new vector:
`0.0` keeps all values equal to the old vector's, `0.5` is halfway between, and `1.0` sets all
values equal to the new vector's.

Syntax: `veclerp(a: Vector, b: Vector, atm: number): void`

## vecrand

Creates a vector with random direction and (optional) length.

If the `litecanvas#rand()` not is globally explosed, uses `Math.random()`.
You can set `vecconfig.random` to set your own "random" function.

Syntax: `vecrand(minlength: number = 1, maxlength: number = minlength): Vector`

```js
import litecanvas from "litecanvas"
import { vecrand, vecconfig } from "@litecanvas/utils/vector"

const engine = litecanvas({
  loop: { init },
})

function init() {
  // make sure to use the RNG of this litecanvas instance
  vecconfig.random = engine.rand
  v = vecrand()
}
```
