import {animateDuration} from '../helpers/utils';
import snowflakes from './snowflakes';
import walrus from './walrus';
import airplane from './airplane';

const TOTAL_ANIMATION_DURATION = 8000;

const snowflakeData = {
  img: document.querySelector(`#snowflake`),
  translateY: 0,
  alpha: 0,
  xShift: -250,
  yShift: -50,
  delay: 0,
};

const snowflakeData2 = {
  img: document.querySelector(`#snowflake2`),
  translateY: 0,
  alpha: 0,
  xShift: 230,
  yShift: 0,
  delay: 600,
};

const winPrimary = async () => {
  const canvas = document.querySelector(`#win-primary`);
  const ctx = canvas.getContext(`2d`);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const snowflakesAnimation = await snowflakes(ctx, snowflakeData);
  const snowflakesAnimation2 = await snowflakes(ctx, snowflakeData2);
  const walrusAnimation = await walrus(ctx);
  const airplaneAnimation = await airplane(ctx);

  const render = () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    walrusAnimation.draw();
    snowflakesAnimation.draw();
    snowflakesAnimation2.draw();
    airplaneAnimation.draw();
  };

  const animate = () => {
    walrusAnimation.animate();
    snowflakesAnimation.animate();
    snowflakesAnimation2.animate();
    airplaneAnimation.animate();
    animateDuration(render, TOTAL_ANIMATION_DURATION);
  };

  document.querySelector(`button[data-target="result"]`).addEventListener(`click`, animate);
};

export default winPrimary;
