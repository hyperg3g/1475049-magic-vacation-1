import {bezierEasing} from '../helpers/bezier-easing';
import {linear} from '../helpers/time-functions';
import {
  animateEasing,
  animationTick,
  repeatAnimation,
} from '../helpers/utils';

const ww = window.innerWidth;
const wh = window.innerHeight;

const snowflakeImgDom = document.querySelector(`#snowflake`);
// const snowflakeImgDom2 = document.querySelector(`#snowflake2`);

const topEdge = (wh - snowflakeImgDom.height) / 2;
const leftEdge = (ww - snowflakeImgDom.width) / 2;
const snowflakeTranslateBezier = bezierEasing(0.5, 0.35, 0.47, 0.91);

let translateY = 0;
let opacity = 0;

const translateYTick = (from, to) => (progress) => {
  translateY = animationTick(from, to, progress);
};

const opacityTick = (from, to) => (progress) => {
  opacity = animationTick(from, to, progress);
};

const snowflakes = (context) => new Promise((resolve) => {
  const translateSeries = [
    () => animateEasing(translateYTick(0, 30), 1000, snowflakeTranslateBezier),
    () => animateEasing(translateYTick(30, 0), 1000, snowflakeTranslateBezier),
  ];

  const draw = () => {
    context.save();
    // context.translate(0, translateY);
    // context.globalAlpha = opacity;
    context.drawImage(snowflakeImgDom, leftEdge - 200, topEdge);
    context.restore();
  };

  const animate = () => {
    animateEasing(opacityTick(0, 1), 400, linear);
    repeatAnimation(translateSeries, 4);
  };

  resolve({animate, draw});
});

export default snowflakes;
