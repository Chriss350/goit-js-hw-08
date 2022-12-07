import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const throttle = require('lodash.throttle');
const player = new Vimeo(iframe);

player.on(
  'timeupdate',
  throttle(e => {
    // console.log('timeupdate the video!', e.seconds);
    localStorage.setItem('pct', e.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.pct);
