import {linear} from '../helpers/time-functions';
import {
  animateEasing,
  animationTick,
} from '../helpers/utils';

const airplane = (context) => new Promise((resolve) => {
  let translateY = 0;

  const translateYTick = (from, to) => (progress) => {
    translateY = animationTick(from, to, progress);
  };

  const draw = () => {
    context.save();
    context.translate(0, translateY);
    context.beginPath();
    context.arc(275, 275, 30, 0, 2 * Math.PI);
    context.fill();
    context.restore();
  };

  const animate = () => {
    animateEasing(translateYTick(0, 100), 3000, linear);
  };

  resolve({draw, animate});
});

export default airplane;
