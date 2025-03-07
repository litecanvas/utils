# Collection utilities

**CDN**: https://unpkg.com/@litecanvas/utils/dist/collection.js

## head

Returns the first element of an array.

Syntax: `head(any[]): any`

```js
import { head } from "@litecanvas/utils"

head([1, 2, 3]) // => 1
```

## last

Returns the last element of an array.

Syntax: `last(any[]): any`

```js
import { last } from "@litecanvas/utils"

last([1, 2, 3]) // => 3
```

## tail

Returns all but the first element of an array.

Syntax: `tail(any[]): any[]`

```js
import { tail } from "@litecanvas/utils"

tail([1, 2, 3]) // => [2, 3]
```

## range

Returns a sequence of numbers.

Syntax: `range(size: number, first?: number, step?: number): number[]`

```js
import { range } from "@litecanvas/utils"

// prints 0 1 2 3 4
for (let i of range(5)) {
  console.log(i)
}

// prints -5 -4 -3 -2 -1
for (let i of range(5, -5)) {
  console.log(i)
}

// prints 10 20 30 40 50 60 70 80 90 100
for (let i of range(10, 10, 10)) {
  console.log(i)
}
```

## sample

Return a random value of an array.

Syntax: `sample(values: any[], rng = Math.random): any`

```js
import { sample } from "@litecanvas/utils"

const values = [0, 1, 2]

sample(values) // returns a value of this array
```

## shuffle

Creates an new array of shuffled values.

Syntax: `sample(values: any[], rng = Math.random): any`

```js
import { shuffle } from "@litecanvas/utils"

const values = [0, 1, 2, 3]

shuffle(values) // => [2, 0, 3, 1] (just a example of shuffled)
```
