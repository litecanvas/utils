# Vector 2D

A class to describe a two-dimensional vector.

**CDN**: https://unpkg.com/@litecanvas/utils/dist/vector.js

## vec

Copy a vector or create a new one.

Syntax to create: `vec(x: number = 0, y: number = 0): Vector`

```js
import { vec, Vector } from "@litecanvas/utils"

/** @type {Vector} */
const position = vec(50, 25)

console.log(position.x) // outputs 50
console.log(position.y) // outputs 25
```

Syntax to copy: `vec(other: Vector): Vector`

```js
import { vec } from "@litecanvas/utils"

const a = vec(1, 1)
const b = a // `b`` is a references of `a`
const c = vec(a) // `c` is a copy of `a`

c.x = 99 // this changes only `c`
b.x = 0 // this changes `a` and `b`

console.log(a) // outputs "Vector (0, 1)
console.log(b) // outputs "Vector (0, 1)
console.log(c) // outputs "Vector (99, 1)
```

## vecSet

Assigns new values to a vector and returns the vector (first argument).

Syntax: `vecSet(v: Vector, x: number, y: number = x): Vector`

```js
import { vec, vecSet } from "@litecanvas/utils"

const a = vec(0, 0)
vecSet(a, 10, 20)

console.log(a.x) // outputs 10
console.log(a.y) // outputs 20
```

## vecAdd

Add values to a vector and returns the vector (first argument).

Syntax: `vecAdd(v: Vector, x: number, y: number = x): Vector`

```js
import { vec, vecAdd } from "@litecanvas/utils"

const a = vec(10, 10)
vecAdd(a, 50, 90)

console.log(a.x) // outputs 60
console.log(a.y) // outputs 100
```

## vecSub

Subtracts values from to a vector and returns the vector (first argument).

Syntax: `vecSub(v: Vector, x: number, y: number = x): Vector`

## vecMult

Multiplies (scale) a vector and returns the vector (first argument).

Syntax: `vecMult(v: Vector, x: number, y: number = x): Vector`

## vecDiv

Divides a vector and returns the vector (first argument).

Syntax: `vecdiv(v: Vector, x: number, y: number = x): Vector`

## vecRotate

Rotates a vector by an angle (in radians) without changing its magnitude and returns the vector (first argument).

Syntax: `vecRotate(v: Vector, radians: number): Vector`

## vecMag

Returns the magnitude (length) of the vector.

Syntax: `vecMag(v: Vector): number`

## vecMag2

Returns the magnitude (length) of the vector squared.

Syntax: `vecMag2(v: Vector): number`

## vecNorm

Scales the values of a vector so that its magnitude is 1 and returns the vector (first argument).

Syntax: `vecNorm(v: Vector): Vector`

## vecLimit

Limits (clamp) a vector's magnitude to a maximum value and returns the vector (first argument).

Syntax: `vecLimit(v: Vector, max: number): Vector`

## vecDist

Returns the distance between two points represented by vectors.

Syntax: `vecDist(a: Vector, b: Vector): number`

## vecDist2

Returns the distance between two points represented by vectors squared.

Syntax: `vecDist2(a: Vector, b: Vector): number`

## vecHeading

Calculates the angle a vector makes with the positive x-axis.

Syntax: `vecHeading(v: Vector): number`

```js
const a = vecHeading(vec(1, 0)) // outputs 0 (zero)
const b = vecHeading(vec(0, 1)) // outputs ~1.571 (same as Math.PI/2 or 90°)
```

> Note: `vecAngle` is alias of `vecHeading`.

## vecDot

Calculates the dot product of two vectors.

Syntax: `vecDot(a: Vector, b: Vector): number`

## vecCross

Calculates the dot product of two vectors.

Syntax: `vecCross(a: Vector, b: Vector): number`

## vecLerp

Calculates new vector values that are proportionally the same distance
between two vectors and returns the first vector (first argument).

The `atm` parameter is the amount to interpolate between the old vector and the new vector:
`0.0` keeps all values equal to the old vector's, `0.5` is halfway between, and `1.0` sets all
values equal to the new vector's.

Syntax: `vecLerp(a: Vector, b: Vector, atm: number): Lerp`

## vecRem

Performs modulo (remainder) division with a vector's components.

Syntax: `vecRem(v: Vector, divisor: number): Vector`

## vecRand

Creates a vector with random direction and (optional) length.

By default the `randomFn` (third argument) is the `globalThis.rand` (from litecanvas globally instantiated) or the native `Math.random`.

Syntax: `vecRand(minlength: number = 1, maxlength: number = minlength, randomFn?): Vector`
