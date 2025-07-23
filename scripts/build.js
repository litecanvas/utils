import esbuild from "esbuild"
import fs from "node:fs"
import { gzipSizeFromFileSync } from "gzip-size"

const files = {
    "src/_web": "all",
    "src/math/_web": "math",
    "src/camera/_web": "camera",
    "src/vector/_web": "vector",
    "src/collision/_web": "collision",
    "src/grid/_web": "grid",
    "src/actor/_web": "actor",
    "src/tween/_web": "tween",
    "src/noise/_web": "noise",
    "src/image/_web": "image",
    "src/collection/_web": "collection",
    "src/time/_web": "time",
  },
  outdir = "dist"

fs.rmSync(outdir, { recursive: true, force: true })

for (let [path, name] of Object.entries(files)) {
  let outfile = `${outdir}/${name}.js`
  await esbuild.build({
    entryPoints: [`${path}.js`],
    outfile,
    bundle: true,
  })

  console.log(
    `  ${outfile} (${filesize(outfile)} ~= ${gzipsize(outfile)} gzipped)`
  )

  outfile = `${outdir}/${name}.min.js`

  await esbuild.build({
    entryPoints: [`${path}.js`],
    outfile,
    bundle: true,
    minify: true,
    dropLabels: ["DEV"],
  })

  console.log(
    `  ${outfile} (${filesize(outfile)} ~= ${gzipsize(outfile)} gzipped)`
  )
}

function filesize(filename) {
  var stats = fs.statSync(filename)
  var fileSizeInBytes = stats.size
  return (fileSizeInBytes / 1000).toFixed(2) + "kb"
}

function gzipsize(filename) {
  const fileSizeInBytes = gzipSizeFromFileSync(filename)
  return (fileSizeInBytes / 1000).toFixed(2) + "kb"
}
