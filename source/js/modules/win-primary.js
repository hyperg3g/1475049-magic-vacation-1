import {animateDuration} from '../helpers/utils';
import snowflakes from './snowflakes';
import walrus from './walrus';

const TOTAL_ANIMATION_DURATION = 3000;

const winPrimary = async () => {
  const canvas = document.querySelector(`#win-primary`);
  const ctx = canvas.getContext(`2d`);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const snowflakesAnimation = await snowflakes(ctx);
  const walrusAnimation = await walrus(ctx);

  const render = () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    walrusAnimation.draw();
    snowflakesAnimation.draw();
  };

  const animate = () => {
    // walrusAnimation.animate();
    // snowflakesAnimation.animate();
    animateDuration(render, TOTAL_ANIMATION_DURATION);
  };

  document.querySelector(`button[data-target="result"]`).addEventListener(`click`, animate);
};

export default winPrimary;
