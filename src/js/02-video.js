import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const throttle = require('lodash.throttle');
const player = new Vimeo(iframe);

player.getDuration();

player.on(
  'timeupdate',
  throttle(e => {
    player.getDuration().then(function (duration) {
      let dur = duration.toFixed(0);
      let curr = (time = e.seconds.toFixed(0));
      if (dur === curr) {
        return localStorage.removeItem('pct');
      }
    });

    // player.getEnded().then(function (ended) {
    //   if (ended === true) {
    //     return localStorage.removeItem('pct');
    //   }
    // });

    localStorage.setItem('pct', e.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.pct);
