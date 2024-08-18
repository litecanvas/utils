import wave from "./math/wave"
import diff from "./math/diff"
import fract from "./math/fract"
import Camera from "./camera"
import * as vectorUtils from "./vector"

globalThis.utils = {
  wave,
  diff,
  fract,
  Camera,
  ...vectorUtils,
}
