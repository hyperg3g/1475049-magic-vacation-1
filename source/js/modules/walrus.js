import {elasticOut} from '../helpers/time-functions';
import {
  animateProgress,
  animateEasing,
  animationTick,
  rotateCtx,
  runSerialAnimations,
} from '../helpers/utils';

const ANIMATION_DURATION = 3000;

const ww = window.innerWidth;
const wh = window.innerHeight;

const walrusImgDom = document.querySelector(`#walrus`);
const topEdge = (wh - walrusImgDom.height) / 2;
const leftEdge = (ww - walrusImgDom.width) / 2;
const rotationPoint = {
  x: leftEdge + walrusImgDom.width / 2 - 80,
  y: topEdge + walrusImgDom.height / 2,
};

let translateY = 0;
let angle = 0;

const translateYTick = (from, to) => (progress) => {
  translateY = animationTick(from, to, progress);
};

const rotationTick = (from, to) => (progress) => {
  angle = animationTick(from, to, progress);
};

const walrus = (ctx) => new Promise((resolve) => {
  const rotateSeries = [
    () => animateProgress(rotationTick(30, 30), 200),
    () => animateEasing(rotationTick(30, 0), ANIMATION_DURATION - 200, elasticOut(3))
  ];

  const draw = () => {
    ctx.save();
    ctx.translate(0, translateY);
    rotateCtx(ctx, angle, rotationPoint.x, rotationPoint.y);
    ctx.drawImage(walrusImgDom, leftEdge, topEdge);
    ctx.restore();
  };

  const animate = () => {
    runSerialAnimations(rotateSeries);
    animateEasing(translateYTick(wh / 2 + walrusImgDom.height / 2, 0), ANIMATION_DURATION, elasticOut(5));
  };

  resolve({animate, draw});
});

export default walrus;
