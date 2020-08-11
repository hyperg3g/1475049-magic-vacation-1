import {animateDuration, animateProgress, animateEasing, animationTick, rotateCtx, runSerialAnimations} from '../helpers/utils';
import {bezierEasing} from '../helpers/bezier-easing';

const ANIMATION_DURATION = 3000;

const ww = window.innerWidth;
const wh = window.innerHeight;

const canvas = document.querySelector(`#win-primary`);
const ctx = canvas.getContext(`2d`);
canvas.width = ww;
canvas.height = wh;

const walrusImgDom = document.querySelector(`#walrus`);
const topEdge = (wh - walrusImgDom.height) / 2;
const leftEdge = (ww - walrusImgDom.width) / 2;

let translateY = wh / 2 + walrusImgDom.height / 2;

const translateYTick = (from, to) => (progress) => {
  translateY = animationTick(from, to, progress);
};

const draw = () => {
  ctx.save();
  ctx.clearRect(0, 0, ww, wh);
  ctx.translate(0, translateY);
  ctx.drawImage(walrusImgDom, leftEdge, topEdge);
  ctx.restore();
};

const animate = () => {
  animateProgress(translateYTick(wh / 2 + walrusImgDom.height / 2, 0), ANIMATION_DURATION);
  animateDuration(draw, ANIMATION_DURATION);
};

document.querySelector(`button[data-target="result"]`).onclick = () => {
  animate();
};

export default walrus;

