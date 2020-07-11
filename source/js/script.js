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
import {rulesButtonLoad} from './modules/common';
import timer from './modules/timer';
import Counter from './modules/counter';

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

const counters = document.querySelectorAll(`.prizes__desc`);
const counter1 = new Counter(7, counters[1]);
const counter2 = new Counter(900, counters[2], {startNumber: 11, fps: 12, duration: 1000});

counter1.init();
counter2.init();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
timer.init();
