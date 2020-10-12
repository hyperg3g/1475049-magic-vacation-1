const linear = (timeFraction) => timeFraction;

const power = (n) => (timeFraction) => Math.pow(timeFraction, n);

const circle = (timeFraction) => {
  return 1 - Math.sin(Math.acos(timeFraction));
};

const makeEaseOut = (timing) => {
  return (timeFraction) => {
    return 1 - timing(1 - timeFraction);
  };
};

const elasticIn = (x) => (timeFraction) => {
  return Math.pow(Math.max(x * timeFraction, 2), 10 * (timeFraction - 1)) * Math.cos(10 * Math.PI * timeFraction);
};

const elasticOut = (x) => makeEaseOut(elasticIn(x));

export {elasticIn, elasticOut, linear, power, circle};
