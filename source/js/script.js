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

winPrimaryCanvas.width = ww;
winPrimaryCanvas.height = wh;

const winPrimaryCtx = winPrimaryCanvas.getContext(`2d`);

const drawOptions = (img) => {
  return [img, (ww - img.width) / 2, (wh - img.height) / 2];
};

const drawImages = (ctx) => {
  const airplane = document.querySelector(`#airplane`);
  const back = document.querySelector(`#back`);
  const ice = document.querySelector(`#ice`);
  const walrus = document.querySelector(`#walrus`);
  const snowflake = document.querySelector(`#snowflake`);
  const tree = document.querySelector(`#tree`);
  const tree2 = document.querySelector(`#tree2`);

  ctx.drawImage(...drawOptions(airplane));
  ctx.drawImage(...drawOptions(back));
  ctx.drawImage(...drawOptions(ice));
  ctx.drawImage(...drawOptions(walrus));
  ctx.drawImage(...drawOptions(snowflake));
  ctx.drawImage(...drawOptions(tree));
  ctx.drawImage(...drawOptions(tree2));
};


window.addEventListener(`load`, () => {
  drawImages(winPrimaryCtx);
});
