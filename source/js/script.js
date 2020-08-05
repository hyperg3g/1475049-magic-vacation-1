// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import pageLoad from './modules/page-load';
import {rulesButtonLoad, setupAnimationsForPrizes} from './modules/common';
import timer from './modules/timer';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
pageLoad();
rulesButtonLoad();
setupAnimationsForPrizes();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
timer.init();

const winPrimaryCanvas = document.querySelector(`#win-primary`);
const ww = window.innerWidth;
const wh = window.innerHeight;

let walrusTranslateY = 0;

// const testWW = 741;
// const testWH = 350;

// winPrimaryCanvas.width = testWW;
// winPrimaryCanvas.height = testWH;

winPrimaryCanvas.width = ww;
winPrimaryCanvas.height = wh;

const winPrimaryCtx = winPrimaryCanvas.getContext(`2d`);

const drawImages = (ctx) => {
  const airplane = document.querySelector(`#airplane`);
  const back = document.querySelector(`#back`);
  const walrus = document.querySelector(`#walrus`);
  const snowflake = document.querySelector(`#snowflake`);
  const snowflake2 = document.querySelector(`#snowflake2`);
  const tree = document.querySelector(`#tree`);
  const tree2 = document.querySelector(`#tree2`);

  ctx.drawImage(back, 85, 0);
  ctx.drawImage(tree, 416, 123);
  ctx.drawImage(tree2, 370, 61);
  ctx.drawImage(walrus, 103, 78);
  ctx.drawImage(snowflake, 0, 83);
  ctx.drawImage(airplane, 659, 39);
  ctx.drawImage(snowflake2, 490, 174);
};

const animationTick = (from, to, progress) => {
  return from + progress * Math.sign(to - from) * Math.abs(to - from);
}

const walrusTranslateYAnimationTick = (from, to, progress) => {
  walrusTranslateY = animationTick(from, to, progress);
};

const drawWalrus = (ctx) => {
  const walrus = document.querySelector(`#walrus`);

  ctx.drawImage(walrus, (ww - walrus.width) / 2, (wh - walrus.height) / 2);
};

window.addEventListener(`load`, () => {
  // drawImages(winPrimaryCtx);
  drawWalrus(winPrimaryCtx);
});
