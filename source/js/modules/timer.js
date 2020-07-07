class Timer {
  constructor(durationInMinutes) {
    this.timeInMilliseconds = durationInMinutes * 60 * 1000;
    this.interval = 1000;
    this.start = null;
    this.now = Date.now();
    this.then = Date.now();
    this.requestId = null;
    this.counterBlock = document.querySelector(`.game__counter`);

    this.init = this.init.bind(this);
    this.tick = this.tick.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
  }

  updateTimer() {
    const timeRemaining = new Date(this.timeInMilliseconds - (Date.now() - this.start));

    if (timeRemaining >= 0) {
      let minutes = `0${timeRemaining.getMinutes()}`.slice(-2);
      let seconds = `0${timeRemaining.getSeconds()}`.slice(-2);
      this.counterBlock.innerHTML = `<span>${minutes}</span>:<span>${seconds}</span>`;
    } else {
      cancelAnimationFrame(this.requestId);
    }
  }

  tick() {
    this.now = Date.now();
    this.requestId = requestAnimationFrame(this.tick);

    let timePassed = this.now - this.then;

    if (timePassed >= this.interval) {
      this.then = this.now - (timePassed % this.interval);
      this.updateTimer();
    }
  }

  init() {
    this.start = Date.now();
    this.requestId = requestAnimationFrame(this.tick);
  }
}

const timer = new Timer(5);

export default timer;
