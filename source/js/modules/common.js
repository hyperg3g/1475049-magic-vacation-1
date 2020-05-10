const rulesButtonLoad = () => {
  const lastListItem = document.querySelector(`.rules__item:last-child`);
  const toGameScreenLink = document.querySelector(`.rules__link`);

  lastListItem.addEventListener(`animationend`, () => {
    toGameScreenLink.classList.add(`rules__link--active`);
  });
};

export {rulesButtonLoad};
