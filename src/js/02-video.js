import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const throttle = require('lodash.throttle');
const player = new Vimeo(iframe);

player.on(
  'timeupdate',
  throttle(e => {
    player.getEnded().then(function (ended) {
      if (ended === true) {
        return localStorage.removeItem('pct');
      }
    });

    localStorage.setItem('pct', e.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.pct);
