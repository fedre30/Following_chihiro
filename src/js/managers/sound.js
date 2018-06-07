import volumeUp from '../../assets/volume-up.svg';
import volumeOff from '../../assets/volume-muted.svg';

class SoundManager{
    constructor(){
        this.content = document.querySelector('.song');
    }

    setSound() {
        const audio = document.createElement('audio');
        audio.classList.add('player');
        audio.setAttribute('autoPlay','true');
        this.content.appendChild(audio);

        this.audio = audio;
    }

    activeSound(videoEl){
        this.audio.setAttribute('src',videoEl);
    }

    clearSound(){
        this.audio.remove();

    }

    /* setVolume(value) {
         this.setMuted(false);
         this.content.volume = Math.max(Math.min(value, 1), 0);
     }

     setMuted(isMuted) {
         this.volume.addEventListener('input',(ev) =>{
             this.setVolume(ev.target.value);
         });

         this.volumeImg.addEventListener('click',()=>{
             this.content.muted = isMuted;

             if (this.content.muted) {
                 this.volume.value = 0;
                 this.volumeImg.src = volumeOff;
             } else {
                 this.volume.value = player.volume;
                 this.volumeImg.src = volumeUp;
             }
         });

     }*/


}



const instance = new SoundManager();

export default instance;