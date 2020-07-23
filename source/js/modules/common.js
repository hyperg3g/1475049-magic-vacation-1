import Counter from './counter';

const rulesButtonLoad = () => {
  const lastListItem = document.querySelector(`.rules__item:last-child`);
  const toGameScreenLink = document.querySelector(`.rules__link`);

  lastListItem.addEventListener(`animationend`, () => {
    toGameScreenLink.classList.add(`rules__link--active`);
  });
};

const setupAnimationsForPrizes = () => {
  const prizesScreen = document.querySelector(`#prizes`);

  const observerHanlder = (mutationsList) => {
    mutationsList.forEach((mutation) => {
      if (mutation.target.classList.contains(`active`)) {
        const counters = document.querySelectorAll(`.prizes__desc`);
        const counter1 = new Counter(7, counters[1]);
        const counter2 = new Counter(900, counters[2], {startNumber: 11, fps: 12, duration: 1000});

        counter1.init();
        counter2.init();
      }
    });
  };

  const config = {attributes: true};
  const observer = new MutationObserver(observerHanlder);

  observer.observe(prizesScreen, config);
};

export {rulesButtonLoad, setupAnimationsForPrizes};
