import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const throttle = require('lodash.throttle');
const player = new Vimeo(iframe);

const LSKEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(e => {
    player.getEnded().then(function (ended) {
      if (ended === true) {
        return localStorage.removeItem(LSKEY);
      }
    });

    localStorage.setItem(LSKEY, e.seconds);
  }, 1000)
);

if (localStorage.getItem(LSKEY) !== null) {
  player.setCurrentTime(localStorage.getItem(LSKEY));
}
