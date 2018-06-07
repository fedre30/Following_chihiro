import volumeUp from '../assets/volume-up.svg';
import volumeOff from '../assets/volume-muted.svg';

let player = {
    init: function () {
        this.player = document.querySelector('.player');
        this.volume = document.querySelector('.volume');
        this.volume.addEventListener('input', (ev) => {
            this.setVolume(ev.target.value)
        });

        this.volumeImg = document.querySelector('.volume-img img');
        this.volumeImg.src = volumeUp;
        this.volumeImg.addEventListener('click', () => {
            this.setMuted(!this.player.muted);
        });
    },
    setVolume: function(value) {
        console.log('unmute');
        this.setMuted(false);
        this.player.volume = Math.max(Math.min(value, 1), 0);
    },
    setMuted: function(isMuted) {
        console.log('mute');
        this.player.muted = isMuted;

        if (this.player.muted) {
            this.volume.value = 0;
            this.volumeImg.src = volumeOff;
        } else {
            this.volume.value = player.volume;
            this.volumeImg.src = volumeUp;
        }
    }
};

export default player;




