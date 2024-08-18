import wave from "./math/wave"
import diff from "./math/diff"
import fract from "./math/fract"
import { camera } from "./camera"
import * as vec from "./vector"

globalThis.utils = {
  wave,
  diff,
  fract,
  camera,
  ...vec,
}
