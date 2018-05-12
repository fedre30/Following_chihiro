import volumeUp from '../assets/volume-up.svg';
import volumeOff from '../assets/volume-muted.svg';

const player = document.querySelector('#player');
const volume = document.querySelector('.volume');
const volumeImg = document.querySelector('.volume-img img');
volumeImg.src = volumeUp;

function setVolume(value) {
  setMuted(false);
  player.volume = Math.max(Math.min(value, 1), 0);

}


function setMuted(isMuted) {
  player.muted = isMuted;

  if (player.muted) {
    volume.value = 0;
    volumeImg.src = volumeOff;
  } else {
    volume.value = player.volume;
    volumeImg.src = volumeUp;
  }
}

volume.addEventListener('input', (ev) => setVolume(ev.target.value));

volumeImg.addEventListener('click', function () {
  setMuted(!player.muted);
});

