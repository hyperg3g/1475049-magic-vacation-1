import {bezierEasing} from '../helpers/bezier-easing';
import {linear} from '../helpers/time-functions';
import {
  animateEasing,
  animationTick,
  repeatAnimation,
} from '../helpers/utils';

const ww = window.innerWidth;
const wh = window.innerHeight;
const snowflakeTranslateBezier = bezierEasing(0.5, 0.35, 0.47, 0.91);

const snowflakes = (context, data) => new Promise((resolve) => {
  const topEdge = (wh - data.img.height) / 2;
  const leftEdge = (ww - data.img.width) / 2;

  const translateYTick = (from, to) => (progress) => {
    data.translateY = animationTick(from, to, progress);
  };

  const opacityTick = (from, to) => (progress) => {
    data.alpha = animationTick(from, to, progress);
  };

  const translateSeries = [
    () => animateEasing(translateYTick(0, 20), 1000, snowflakeTranslateBezier),
    () => animateEasing(translateYTick(20, 0), 1000, snowflakeTranslateBezier),
  ];

  const draw = () => {
    context.save();
    context.translate(0, data.translateY);
    context.globalAlpha = data.alpha;
    context.drawImage(data.img, leftEdge + data.xShift, topEdge + data.yShift);
    context.restore();
  };

  const animate = () => {
    setTimeout(() => {
      animateEasing(opacityTick(0, 1), 600, linear);
      repeatAnimation(translateSeries, 4);
    }, data.delay);
  };

  resolve({animate, draw});
});

export default snowflakes;
