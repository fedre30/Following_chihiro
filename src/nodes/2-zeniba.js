import background from '../assets/2-Zeniba.png';
import BackgroundManager from '../js/managers/background';
import song from '../../public/assets/music/zeniba.mp3';
import SoundManager from '../js/managers/sound';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/2-riddle';
import VideoManager from '../js/managers/video'
import video from '../assets/train_withoutnoface .mov';

const text1 = "{{name}} rend le sigille à Zeniba et passe un bon moment avec elle.";

const text2= " Oh je sens quelque chose dehors. Va regader, petite";

const text3 = "{{name}} sort et voit avec surprise que Haku est venu la chercher sous forme de dragon.";

function text1finish(){
  DialogManager.showDialog('Zeniba :', text2, text2finish,true)
}

function text2finish(){
  DialogManager.showDialog('', text3, ()=> {State.switchToState(nextNode)}, true)
}

function skip() {
  VideoManager.clearVideo();
  DialogManager.showDialog('', text1, text1finish,true);
}


export default function () {
  BackgroundManager.clearBackground();
  VideoManager.setVideo();
  VideoManager.showVideo(video);
  SoundManager.clearSound();
  SoundManager.activeSound(song);
  BackgroundManager.setBackground(background);
  DialogManager.showDialog('', '', skip,true);
}