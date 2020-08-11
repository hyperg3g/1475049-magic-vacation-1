const animationTick = (from, to, progress) => {
  return from + progress * (to - from);
};

const animateDuration = (render, duration) => new Promise((resolve) => {
  let start = Date.now();

  (function loop() {
    let p = Date.now() - start;

    if (p > duration) {
      render(duration);
      resolve();
    } else {
      requestAnimationFrame(loop);
      render(p);
    }
  })();
});

const animateProgress = (render, duration) => new Promise((resolve) => {
  let start = Date.now();

  (function loop() {
    let p = (Date.now() - start) / duration;

    if (p > 1) {
      render(1);
      resolve();
    } else {
      requestAnimationFrame(loop);
      render(p);
    }
  }());
});

const animateEasing = (render, duration, easing) => new Promise((resolve) => {
  let start = Date.now();

  (function loop() {
    let p = (Date.now() - start) / duration;

    if (p > 1) {
      render(1);
      resolve();
    } else {
      requestAnimationFrame(loop);
      render(easing(p));
    }
  }());
});

const rotateCtx = (ctx, angle, cx, cy) => {
  ctx.translate(cx, cy);
  ctx.rotate((Math.PI / 180) * angle);
  ctx.translate(-cx, -cy);
};

const runSerialAnimations = async (animations) => {
  animations.forEach(async (animation) => await animation());
};

export {animateDuration, animateProgress, animateEasing, animationTick, rotateCtx, runSerialAnimations};

