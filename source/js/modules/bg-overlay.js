export default () => {
  const overlay = document.querySelector(`.bg-overlay`);
  const prizesScreen = document.querySelector(`#prizes`);
  const rulesScreen = document.querySelector(`#rules`);

  if (prizesScreen.classList.contains(`active`)) {
    overlay.classList.add(`bg-overlay--active`);
  }
  if (rulesScreen.classList.contains(`active`)) {
    overlay.classList.add(`bg-overlay--active`);
  }

  const observerHanlder = (mutationsList) => {
    mutationsList.forEach((mutation) => {
      if (mutation.target.classList.contains(`active`)) {
        overlay.classList.add(`bg-overlay--active`);
      } else {
        overlay.classList.remove(`bg-overlay--active`);
      }
    });
  };

  const config = {attributes: true};
  const observer = new MutationObserver(observerHanlder);

  observer.observe(prizesScreen, config);
  observer.observe(rulesScreen, config);
};
