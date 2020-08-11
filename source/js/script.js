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
import walrus from './modules/walrus';

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
