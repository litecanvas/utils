import esbuild from "esbuild"
import fs from "node:fs"

const files = {
    "src/_web": "all",
    "src/math/_web": "math",
    "src/camera/_web": "camera",
    "src/vector/_web": "vector",
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

  console.log(`  ${outfile} (${filesize(outfile)})`)

  outfile = `${outdir}/${name}.min.js`

  await esbuild.build({
    entryPoints: [`${path}.js`],
    outfile,
    bundle: true,
    minify: true,
  })

  console.log(`  ${outfile} (${filesize(outfile)})`)
}

function filesize(filename) {
  var stats = fs.statSync(filename)
  var fileSizeInBytes = stats.size
  return (fileSizeInBytes / 1000).toFixed(1) + "kb"
}
