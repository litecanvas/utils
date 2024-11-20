# QuadTree utils

**CDN**: https://unpkg.com/@litecanvas/utils/dist/quadtree.js

## Usage

Manage spatial data with the QuadTree utility. Use it to insert, query, and manage points in 2D space for applications such as collision detection, spatial queries, and more.

```js
import { Rectangle, Point, Quadtree } from "@litecanvas/utils";

// Define the boundary for the QuadTree
const boundary = new Rectangle(0, 0, 400, 400);
const quadtree = new Quadtree(boundary, 4); // Max 4 points per node

// Insert points into the QuadTree
quadtree.insert(new Point(50, 50));
quadtree.insert(new Point(150, 150, { label: "Custom Data" }));

// Query points within a rectangular range
const range = new Rectangle(100, 100, 200, 200);
const foundPoints = quadtree.query(range);

console.log("Points in range:", foundPoints);
```

## Subdividing

The QuadTree automatically subdivides when a node exceeds its capacity.

```js
const boundary = new Rectangle(0, 0, 400, 400);
const quadtree = new Quadtree(boundary, 4);

// Insert points to trigger subdivision
for (let i = 0; i < 10; i++) {
  const x = Math.random() * 400;
  const y = Math.random() * 400;
  quadtree.insert(new Point(x, y));
}

console.log("QuadTree subdivided:", quadtree);
```

## Querying

Efficiently find points within a defined area using the query method.

```js
const range = new Rectangle(50, 50, 100, 100);
const pointsInRange = quadtree.query(range);

console.log("Found points:", pointsInRange);
```
