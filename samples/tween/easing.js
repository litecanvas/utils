utils.global()

const easings = {
  LINEAR,
  EASE_IN,
  EASE_OUT,
  EASE_IN_OUT,
  ELASTIC_IN,
  ELASTIC_OUT,
  ELASTIC_IN_OUT,
  BOUNCE_IN,
  BOUNCE_OUT,
  BOUNCE_IN_OUT,
  BACK_IN,
  BACK_OUT,
  BACK_IN_OUT,
}
const easingName = Object.keys(easings)
const easingFunction = Object.values(easings)
let easingCurrent = 0

const e = litecanvas({
  width: 300,
  autoscale: false,
})

function init() {
  object = {
    animation: null,
    x: 0,
    y: 0,
  }

  start = vec(100)
  end = vec(W - 100, H - 100)

  duration = 1 // change this
}

function update(dt) {
  if (object.animation) return

  object.x = start.x
  object.animation = tween(
    object,
    "x",
    end.x,
    duration,
    easingFunction[easingCurrent]
  ).start(e)

  object.animation.onEnd(() => {
    object.animation = null
  })

  object.y = start.y
  tween(object, "y", end.y, duration, easingFunction[easingCurrent]).start(e)
}

function draw() {
  if (!object.animation) return

  cls(0)
  linewidth(4)

  // draw the start and the end
  circ(start.x, start.y, 30, 5)
  circ(end.x, end.y, 30, 5)

  // draw the animated object
  circfill(object.x, object.y, 20, 5)

  // draw a progress bar based on t
  rectfill(0, 0, W * object.animation.progress, 4, 5)

  // draw the name of current easing function
  text(0, 10, easingName[easingCurrent])
}

function tapped() {
  easingCurrent++
  if (easingCurrent === easingFunction.length) {
    easingCurrent = 0
  }
  if (object.animation) {
    object.animation.stop()
    object.animation = null
  }
}
