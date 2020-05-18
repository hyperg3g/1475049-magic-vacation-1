import bgOverlay from './bg-overlay';
import {formatNode} from './animate-text';

export default () => {
  window.addEventListener(`load`, () => {
    const introTitle = document.querySelector(`.intro__title`);
    const introDate = document.querySelector(`.intro__date`);

    document.querySelector(`body`).classList.add(`loaded`);
    bgOverlay();

    setTimeout(() => {
      formatNode(introTitle);
    }, 200);

    setTimeout(() => {
      formatNode(introDate);
    }, 600);
  });
};
