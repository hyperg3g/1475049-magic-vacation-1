class Counter {
  constructor(counterNumber, counterBlock, options = {}) {
    this.counterNumber = counterNumber;
    this.startNumber = options.startNumber || 0;
    this.duration = options.duration || 1000;
    this.fpsInterval = options.fps ? (1000 / options.fps) : 83;
    this.step = Math.round(this.counterNumber / Math.round(this.duration / this.fpsInterval));
    this.now = Date.now();
    this.then = Date.now();
    this.requestId = null;
    this.counterBlock = counterBlock.children[0];

    this.init = this.init.bind(this);
    this.tick = this.tick.bind(this);
    this.updateCounter = this.updateCounter.bind(this);
  }

  updateCounter() {
    let nextNumber = this.startNumber + this.step;

    if (nextNumber <= this.counterNumber) {
      this.counterBlock.innerText = nextNumber;
      this.startNumber = nextNumber;
    } else {
      this.counterBlock.innerText = this.counterNumber;
      cancelAnimationFrame(this.requestId);
    }
  }

  tick() {
    this.now = Date.now();
    this.requestId = requestAnimationFrame(this.tick);

    let timePassed = this.now - this.then;

    if (timePassed >= this.fpsInterval) {
      this.then = this.now - (timePassed % this.fpsInterval);
      this.updateCounter();
    }
  }

  init() {
    this.requestId = requestAnimationFrame(this.tick);
  }
}

export default Counter;
