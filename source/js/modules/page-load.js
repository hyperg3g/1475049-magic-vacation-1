import bgOverlay from './bg-overlay';

export default () => {
  window.addEventListener(`load`, () => {
    document.querySelector(`body`).classList.add(`loaded`);
    bgOverlay();
  });
};
